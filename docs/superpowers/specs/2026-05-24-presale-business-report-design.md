# Presale Business Report Design

## Goal

Turn the validated one-off flexible-supply report workflow into a formal `bmall-cli` read command that produces a reusable JSON result and a business-ready Excel workbook for either flexible-supply presale (`supply`) or middle/short-term presale (`mid`).

## Command

```bash
bmall report presale-business \
  --source supply|mid \
  --start-date 2026-01-01 \
  --end-date 2026-05-24 \
  --output outputs/presale-business.xlsx \
  --json
```

Optional filters are `--activity-query`, `--page-size`, `--export-timeout-ms`, and `--export-poll-interval-ms`.

## Data Flow

The command is API-first and reads existing business facades only.

| Dimension | Flexible supply | Middle/short term |
| --- | --- | --- |
| Activities | `activity/supply/presale/activity/page` | `activity/presaleActivities/findActivity` |
| Orders | `activity/supply/presale/order/page` | `activity/presaleOrder/page` |
| Order totals | `activity/supply/presale/order/pageGather` | `activity/presaleOrder/orderStatistics` |
| Pickup activity | `activity/supplyPresale/pickup/manage/activityView/page` and `pageGather` | `activity/presale/pickup/manage/activityView/page` and `pageGather` |
| Pickup customer | `activity/supplyPresale/pickup/manage/companyView/dealerPage` and `pageGather` | `activity/presale/pickup/manage/companyView/dealerPage` and `pageGather` |

Activity records are filtered locally to the inclusive date window after reading the activity API. Orders and pickup views then receive only the selected activity identifiers or activity numbers.

## Amount Basis

- `mid`: sum `goodsTotalPrice` returned on the order rows. The backend response model identifies this as ordered merchandise market value.
- `supply`: the order page does not return market value, so the command invokes the existing asynchronous `file/supply/presale/order/export` flow with `exportType=allActAllOrder`, downloads the finished workbook, and sums its `市值总额/totalPrice` column.
- If a required supply export cannot complete or its amount column cannot be identified, the command fails explicitly instead of emitting an incomplete amount.

## Output Contract

The JSON result contains the selected activities, order rows and totals, pickup activity rows and totals, customer pickup rows and totals, normalized summary metrics, amount basis, and output workbook path.

The workbook contains:

1. `总结`: date window, amount basis, participation, orders, ordered quantity, market value, allocation and pickup indicators.
2. `活动明细`: activity-level pickup and fulfillment view.
3. `客户提货`: flattened customer-level pickup detail.
4. `订单明细`: source order rows.
5. `口径说明`: source type, endpoints, filters, and amount calculation basis.

Participation is calculated from distinct customer/store codes in the source order rows, falling back to customer pickup rows only when order rows are unavailable. Pickup metrics expose both `pickupScopeRate` (`pickedQty / orderQtySum`, meaning the pickup-scope completion rate) and backend-aligned `pickupRate` from `pickingRateSum` (`pickedQty / (allocatedQty + preAllocatedQty)`).

## Existing Customer + SKC Capability

`report pickup-customer-skc --source supply|mid|all` already covers customer + SKC pickup analysis. This feature keeps that implementation and adds it to generated formal command documentation rather than creating a duplicate command.

## Safety And Verification

The feature is read-only except for triggering the system's existing report export task for supply amount retrieval; it performs no business write. Tests cover both source mappings, date-window selection, summary normalization, Excel output creation, manifest alignment, and command surface smoke execution.
