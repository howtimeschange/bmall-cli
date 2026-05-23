## Operations Commands

### ops.address.list

List store receiving addresses through hr/mb2bcrd3/list

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --company-id (required)
- Columns: fid, provinceName, cityName, regionName

### ops.address.get

Read one receiving address through hr/mb2bcrd3/getById

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --address-id (required)
- Columns: fid, provinceName, cityName, regionName

### ops.address.check

Check store receiving address completeness for order approval failures

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --company-id (required)
- Columns: complete, blockingIssues, nextActions

### ops.address.patch

Patch a manual receiving address by preserving the full address list and calling hr/mb2bcrd3/saveOrUpdate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --company-id (required), --address-id (required), --province-name, --city-name, --region-name, --con-address, --province-code, --city-code, --region-code, --consignee, --consi-phone, --file, --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.address.create

Create a manual store receiving address through hr/mb2bcrd3/saveOrUpdate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --company-id (required), --province-name (required), --city-name (required), --region-name (required), --con-address (required), --consignee (required), --consi-phone (required), --province-code, --city-code, --region-code, --default, --file, --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.address.update

Edit a manual store receiving address through hr/mb2bcrd3/saveOrUpdate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --company-id (required), --address-id (required), --province-name, --city-name, --region-name, --con-address, --province-code, --city-code, --region-code, --consignee, --consi-phone, --default, --file, --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.address.set-default

Set the default store receiving address while preserving other addresses

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --company-id (required), --address-id (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.address.delete

Delete a manual store receiving address by saving the remaining address list

- Audience: ops
- Access: destructive
- Auth: api-token
- Browser: false
- Args: --company-id (required), --address-id (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.order.diagnose

Diagnose an order using existing order detail APIs and local rule extraction

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --order-no, --order-id, --type
- Columns: orderType, status, blockingIssues, warnings, nextActions

### ops.order.diagnose-pending

Diagnose a pending-review order and surface address completeness failures

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --order-id (required)
- Columns: orderType, status, blockingIssues, warnings, nextActions

### ops.order.timeline

Read pending-review detail as a timeline anchor; full timeline facade is not present

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --order-id (required)
- Columns: timeline

### ops.order.relations

Read normal order detail by order number for relation diagnosis

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --order-no (required)
- Columns: relation

### ops.order.blocking-reasons

Inspect local draft blocking reasons without submitting

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --type, --file
- Columns: blockingIssues

### ops.order.split-check

Run local split readiness checks for pickup/grouped orders without executing split

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --type, --pickup-order-id
- Columns: ok, blockingIssues

### ops.order.sync-check

Run local sync status interpretation before requesting manual SAP or async sync handling

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --type, --presale-order-id
- Columns: ok, warnings

### ops.order.export

Start order export through file/order/exportOrder and normalize async export response

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --order-no (required)
- Columns: mode, taskId, downloadUrl

### ops.product.master.search

Search product master data through product/itemSearch/search

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code, --keyword
- Columns: itemCode, itemName

### ops.product.master.get

Read product master detail through product/item/spec/getSpuDetailByItemId

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code (required)
- Columns: itemCode, skcCode, skuCode

### ops.product.master.import

Import product master data through file/import/product/mitem/excelAdd with write gate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --input (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.product.apply.list

List product application records through product/mitemcomp/list

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code
- Columns: itemCode, companyId

### ops.product.apply.update

Update product application through product/mitemcomp/opt with write gate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --input (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.product.apply.add

Add one product to a store product application through product/mitemcomp/opt with write gate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --item-code (required), --company-id, --default-store, --dry-run, --confirm, --reason
- Columns: mode, affected, item, company, apiCalls

### ops.product.group.list

List product groups through product/item/group/list

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code
- Columns: groupId, itemCode

### ops.product.package.list

List product package company applications through product/pag/comp/list

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code
- Columns: packageId, companyId

### ops.product.tag.list

List product activity labels through product/activitylabel/getActivityLabelOfConditions

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code
- Columns: labelCode, labelName

### ops.product.price.check

Check B2B price list types through product/pricelist/b2b/types

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code (required)
- Columns: priceType, price

### ops.product.launch-check

Diagnose product launch readiness across master data, image, package item config, and store package application

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code (required), --company-id, --company-code, --company-name
- Columns: overallStatus, checks, blockingIssues, warnings, nextActions

### ops.product.launch-setup

Run the full batch product launch setup chain: MDM sync, image sync, package item config, and store package application

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --item-codes (required), --package-names (required), --company-codes (required), --merchant-ids, --sync-stock-logistics-pic, --dry-run, --confirm, --reason
- Columns: mode, affected, itemCodes, packageNames, companyCodes, imageSyncTarget, apiCalls

### ops.product.image-sync

Trigger product image sync through product/itemPicAsyncByItemCode with write gate

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --item-code (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.stock.query

Query product stock statistics through product/itemStock/statistics/page

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code, --sku-code, --page-index, --page-size
- Columns: itemCode, skuCode, stockQty

### ops.stock.sync-status

Query stock sell-out sync scope through product/item/page/syncStockSellOut

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code, --page-index, --page-size
- Columns: itemCode, sellOut

### ops.customer.get

Read company/customer info by companyId or companyCode through hr/sysCompany query APIs

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --company-id, --company-code
- Columns: companyId, companyCode, companyName

### ops.store.get

Read one store/company by companyId through hr/sysCompany/queryCompanyInfoById

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --company-id (required)
- Columns: companyId, companyName

### ops.store.mdm.sync-by-codes

Pull store master data from MDM into the store staging table by store codes

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --company-codes (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.store.mdm.sync-by-time

Pull store master data from MDM into the store staging table by update time range

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --from (required), --to (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.store.mdm.page

List store MDM staging records through hr/mdmStore/page

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --store-code, --store-name, --sync-status, --page-index, --page-size
- Columns: storeCode, storeName, syncStatus

### ops.store.mdm.diff

Compare one store code between current store profile and MDM staging data

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --company-code (required)
- Columns: currentCompanyInfo, mdmCompanyInfo

### ops.store.mdm.confirm

Confirm selected or all store MDM staging records into store profiles

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --company-codes, --sync-all, --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.retailer.get

Query retailer/distributor role page through hr/sysCompany/queryDistributorRole/middleGround

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --distributor-id, --sword, --page-index, --page-size
- Columns: distributorId, companyName

### ops.retailer.mdm.sync-by-codes

Pull retailer master data from MDM into the retailer staging table by retailer codes

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --distributor-codes (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.retailer.mdm.sync-by-time

Pull retailer master data from MDM into the retailer staging table by update time range

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --from (required), --to (required), --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.retailer.mdm.page

List retailer MDM staging records through hr/mdmRetailer/page

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --retailer-code, --retailer-name, --sync-status, --page-index, --page-size
- Columns: retailerCode, retailerName, syncStatus

### ops.retailer.mdm.diff

Compare one retailer code between current retailer profile and MDM staging data

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --distributor-code (required)
- Columns: currentDistributorInfo, mdmDistributorInfo

### ops.retailer.mdm.confirm

Confirm selected or all retailer MDM staging records into retailer profiles

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --distributor-codes, --sync-all, --dry-run, --confirm, --reason
- Columns: mode, apiCalls

### ops.iam.user

Query IAM users through hr/iamUser/userPage or detailById

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --user, --id, --page-index, --page-size
- Columns: id, mobile, userName

### ops.iam.role

Query IAM roles through hr/iamRole/rolePage or detailById

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --role-code, --id, --page-index, --page-size
- Columns: id, roleCode, roleName

### ops.config.get

Explicitly unsupported until a safe backend configuration facade is provided

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --key (required)
- Columns: error

### ops.config.set

Dry-run only placeholder; actual config writes require a safe backend facade

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --key (required), --value (required), --dry-run, --confirm, --reason
- Columns: blocked, message

### ops.log.api

Explicitly unsupported until an API log query facade is mapped for CLI

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --request-id, --order-no
- Columns: error

### ops.log.sync-warning

Explicitly unsupported until a sync warning log facade is mapped for CLI

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --order-no, --item-code
- Columns: error

### ops.export.task.list

List async export tasks through file/asyn/export/b2b/page

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --type, --page-index, --page-size
- Columns: taskId, status, taskUrl

### ops.export.task.get

Get one async export task by polling file/asyn/export/b2b/page

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --task-id (required)
- Columns: taskId, status, downloadUrl

### ops.export.task.wait

Poll one async export task until success, failure, or timeout

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --task-id (required), --timeout
- Columns: taskId, status, downloadUrl

### ops.export.task.download

Resolve export download URL through file/export/task/downloadTaskFile and write the file locally

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --task-id (required), --output (required)
- Columns: output, bytes

### ops.job.list

List allowlisted operations jobs

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --module
- Columns: jobId, module, status

### ops.job.run

Dry-run allowlisted jobs; actual run requires a backend facade and explicit confirmation

- Audience: ops
- Access: write
- Auth: api-token
- Browser: false
- Args: --job-id (required), --dry-run, --confirm, --reason
- Columns: mode, jobId
