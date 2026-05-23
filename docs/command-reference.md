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
- Args: --company-id (required), --address-id (required), --region-name, --region-code, --dry-run, --confirm, --reason
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
- Args: --file
- Columns: blockingIssues

### ops.order.split-check

Run local split readiness checks for pickup/grouped orders without executing split

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --pickup-order-id
- Columns: ok, blockingIssues

### ops.order.sync-check

Run local sync status interpretation before requesting manual SAP or async sync handling

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --presale-order-id
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
- Args: --item-code, --sku-code
- Columns: itemCode, skuCode, stockQty

### ops.stock.sync-status

Query stock sell-out sync scope through product/item/page/syncStockSellOut

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --item-code
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

### ops.retailer.get

Query retailer/distributor role page through hr/sysCompany/queryDistributorRole/middleGround

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --distributor-id, --sword
- Columns: distributorId, companyName

### ops.iam.user

Query IAM users through hr/iamUser/userPage or detailById

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --user, --id
- Columns: id, mobile, userName

### ops.iam.role

Query IAM roles through hr/iamRole/rolePage or detailById

- Audience: ops
- Access: read
- Auth: api-token
- Browser: false
- Args: --role-code, --id
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
- Args: --type
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
