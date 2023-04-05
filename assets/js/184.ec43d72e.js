(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{469:function(n,e,t){"use strict";t.r(e);var a=t(10),s=Object(a.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"azure-app-service-筆記"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#azure-app-service-筆記"}},[n._v("#")]),n._v(" Azure App Service 筆記")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://tonybaloney.github.io/posts/django-on-azure-beyond-hello-world.html",target:"_blank",rel:"noopener noreferrer"}},[n._v('Django on Azure - beyond "hello world"'),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://medium.com/@DawlysD/django-using-azure-blob-storage-to-handle-static-media-assets-from-scratch-90cbbc7d56be",target:"_blank",rel:"noopener noreferrer"}},[n._v("Django — Using Azure blob storage to handle static & media assets — from scratch"),e("OutboundLink")],1)])]),n._v(" "),e("h1",{attrs:{id:"deployment-by-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-by-cli"}},[n._v("#")]),n._v(" Deployment by CLI")]),n._v(" "),e("h2",{attrs:{id:"首次安裝-azure-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首次安裝-azure-cli"}},[n._v("#")]),n._v(" 首次安裝 Azure CLI")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("brew update && brew install azure-cli\n")])])]),e("h2",{attrs:{id:"更換-python-3-版本-3-8-2-3-7-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更換-python-3-版本-3-8-2-3-7-4"}},[n._v("#")]),n._v(" 更換 Python 3 版本（3.8.2 ==> 3.7.4）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(" ll /usr/local/Cellar/azure-cli/2.6.0/libexec/lib/\ntotal 0\ndrwxr-xr-x   3 alanjui  staff    96  5 18 10:54 ./\ndrwxr-xr-x   6 alanjui  staff   192  5 18 10:54 ../\ndrwxr-xr-x  58 alanjui  staff  1856  5 25 23:29 python3.8/\n\n\nbrew link --overwrite python3\n")])])]),e("h2",{attrs:{id:"_1-建立佈署專用的使用者帳號"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立佈署專用的使用者帳號"}},[n._v("#")]),n._v(" （1）建立佈署專用的使用者帳號")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az webapp deployment user set --user-name <username> --password <password>\n\n\naz webapp deployment user set --user-name alanjui --password VegLife99@\n{\n  "id": null,\n  "kind": null,\n  "name": "web",\n  "publishingPassword": null,\n  "publishingPasswordHash": null,\n  "publishingPasswordHashSalt": null,\n  "publishingUserName": "alanjui",\n  "scmUri": null,\n  "type": "Microsoft.Web/publishingUsers/web"\n}\n\n\n\naz configure --defaults group=<name>\naz configure --defaults group=myResourceGroup\n')])])]),e("h2",{attrs:{id:"_2-建立「測試」與「上線」環境用-app-service-方案-service-plan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-建立「測試」與「上線」環境用-app-service-方案-service-plan"}},[n._v("#")]),n._v(" （2）建立「測試」與「上線」環境用 App Service 方案（Service Plan）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az appservice plan create --name staging --resource-group yourResourceGroup --sku P1V2 --is-linux\naz appservice plan create --name production --resource-group yourResourceGroup --sku P2V2 --is-linux\n\n\naz appservice plan create --name staging --resource-group myResourceGroup --sku F1 --is-linux\n{- Finished ..\n  "freeOfferExpirationTime": null,\n  "geoRegion": "West US",\n  "hostingEnvironmentProfile": null,\n  "hyperV": false,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/staging",\n  "isSpot": false,\n  "isXenon": false,\n  "kind": "linux",\n  "location": "West US",\n  "maximumElasticWorkerCount": 1,\n  "maximumNumberOfWorkers": 1,\n  "name": "staging",\n  "numberOfSites": 0,\n  "perSiteScaling": false,\n  "provisioningState": "Succeeded",\n  "reserved": true,\n  "resourceGroup": "myResourceGroup",\n  "sku": {\n    "capabilities": null,\n    "capacity": 1,\n    "family": "F",\n    "locations": null,\n    "name": "F1",\n    "size": "F1",\n    "skuCapacity": null,\n    "tier": "Free"\n  },\n  "spotExpirationTime": null,\n  "status": "Ready",\n  "subscription": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",\n  "tags": null,\n  "targetWorkerCount": 0,\n  "targetWorkerSizeId": 0,\n  "type": "Microsoft.Web/serverfarms",\n  "workerTierName": null\n}\n\n\n\naz appservice plan create --name production --resource-group myResourceGroup --sku P1V2 --is-linux\naz appservice plan create --name production --resource-group myResourceGroup --sku P1V2 --is-linux\n{- Finished ..\n  "freeOfferExpirationTime": null,\n  "geoRegion": "West US",\n  "hostingEnvironmentProfile": null,\n  "hyperV": false,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/production",\n  "isSpot": false,\n  "isXenon": false,\n  "kind": "linux",\n  "location": "West US",\n  "maximumElasticWorkerCount": 1,\n  "maximumNumberOfWorkers": 30,\n  "name": "production",\n  "numberOfSites": 0,\n  "perSiteScaling": false,\n  "provisioningState": "Succeeded",\n  "reserved": true,\n  "resourceGroup": "myResourceGroup",\n  "sku": {\n    "capabilities": null,\n    "capacity": 1,\n    "family": "Pv2",\n    "locations": null,\n    "name": "P1v2",\n    "size": "P1v2",\n    "skuCapacity": null,\n    "tier": "PremiumV2"\n  },\n  "spotExpirationTime": null,\n  "status": "Ready",\n  "subscription": "bdbe86f1-40d5-4305-99ce-bb6ea7c085c7",\n  "tags": null,\n  "targetWorkerCount": 0,\n  "targetWorkerSizeId": 0,\n  "type": "Microsoft.Web/serverfarms",\n  "workerTierName": null\n}\n')])])]),e("h2",{attrs:{id:"_3-建立「測試」與「上線」環境用-web-app-app-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-建立「測試」與「上線」環境用-web-app-app-service"}},[n._v("#")]),n._v(" （3）建立「測試」與「上線」環境用 Web App (App Service)")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az webapp create --resource-group yourResourceGroup --plan staging --name app-staging --runtime "PYTHON|3.7" --deployment-local-git \naz webapp create --resource-group yourResourceGroup --plan production --name app-production --runtime "PYTHON|3.7" --deployment-local-git\n\n\naz webapp create --resource-group myResourceGroup --plan staging --name app-stage --runtime "PYTHON|3.7" --deployment-local-git\n\nLocal git is configured with url of \'https://alanjui@app-stage.scm.azurewebsites.net/app-stage.git\'\n{\n  "availabilityState": "Normal",\n  "clientAffinityEnabled": true,\n  "clientCertEnabled": false,\n  "clientCertExclusionPaths": null,\n  "cloningInfo": null,\n  "containerSize": 0,\n  "dailyMemoryTimeQuota": 0,\n  "defaultHostName": "app-stage.azurewebsites.net",\n  "deploymentLocalGitUrl": "https://alanjui@app-stage.scm.azurewebsites.net/app-stage.git",\n  "enabled": true,\n  "enabledHostNames": [\n    "app-stage.azurewebsites.net",\n    "app-stage.scm.azurewebsites.net"\n  ],\n  "ftpPublishingUrl": "ftp://waws-prod-bay-139.ftp.azurewebsites.windows.net/site/wwwroot",\n  "hostNameSslStates": [\n    {\n      "hostType": "Standard",\n      "ipBasedSslResult": null,\n      "ipBasedSslState": "NotConfigured",\n      "name": "app-stage.azurewebsites.net",\n      "sslState": "Disabled",\n      "thumbprint": null,\n      "toUpdate": null,\n      "toUpdateIpBasedSsl": null,\n      "virtualIp": null\n    },\n    {\n      "hostType": "Repository",\n      "ipBasedSslResult": null,\n      "ipBasedSslState": "NotConfigured",\n      "name": "app-stage.scm.azurewebsites.net",\n      "sslState": "Disabled",\n      "thumbprint": null,\n      "toUpdate": null,\n      "toUpdateIpBasedSsl": null,\n      "virtualIp": null\n    }\n  ],\n  "hostNames": [\n    "app-stage.azurewebsites.net"\n  ],\n  "hostNamesDisabled": false,\n  "hostingEnvironmentProfile": null,\n  "httpsOnly": false,\n  "hyperV": false,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/app-stage",\n  "identity": null,\n  "inProgressOperationId": null,\n  "isDefaultContainer": null,\n  "isXenon": false,\n  "kind": "app,linux",\n  "lastModifiedTimeUtc": "2020-05-22T04:05:25.936666",\n  "location": "West US",\n  "maxNumberOfWorkers": null,\n  "name": "app-stage",\n  "outboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150",\n  "possibleOutboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150,13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",\n  "redundancyMode": "None",\n  "repositorySiteName": "app-stage",\n  "reserved": true,\n  "resourceGroup": "myResourceGroup",\n  "scmSiteAlsoStopped": false,\n  "serverFarmId": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/staging",\n  "siteConfig": {\n    "acrUseManagedIdentityCreds": false,\n    "acrUserManagedIdentityID": null,\n    "alwaysOn": null,\n    "apiDefinition": null,\n    "apiManagementConfig": null,\n    "appCommandLine": null,\n    "appSettings": null,\n    "autoHealEnabled": null,\n    "autoHealRules": null,\n    "autoSwapSlotName": null,\n    "azureMonitorLogCategories": null,\n    "connectionStrings": null,\n    "cors": null,\n    "customAppPoolIdentityAdminState": null,\n    "customAppPoolIdentityTenantState": null,\n    "defaultDocuments": null,\n    "detailedErrorLoggingEnabled": null,\n    "documentRoot": null,\n    "experiments": null,\n    "fileChangeAuditEnabled": null,\n    "ftpsState": null,\n    "functionsRuntimeScaleMonitoringEnabled": null,\n    "handlerMappings": null,\n    "healthCheckPath": null,\n    "http20Enabled": null,\n    "httpLoggingEnabled": null,\n    "ipSecurityRestrictions": [\n      {\n        "action": "Allow",\n        "description": "Allow all access",\n        "ipAddress": "Any",\n        "name": "Allow all",\n        "priority": 1,\n        "subnetMask": null,\n        "subnetTrafficTag": null,\n        "tag": null,\n        "vnetSubnetResourceId": null,\n        "vnetTrafficTag": null\n      }\n    ],\n    "javaContainer": null,\n    "javaContainerVersion": null,\n    "javaVersion": null,\n    "limits": null,\n    "linuxFxVersion": null,\n    "loadBalancing": null,\n    "localMySqlEnabled": null,\n    "logsDirectorySizeLimit": null,\n    "machineKey": null,\n    "managedPipelineMode": null,\n    "managedServiceIdentityId": null,\n    "metadata": null,\n    "minTlsVersion": null,\n    "netFrameworkVersion": null,\n    "nodeVersion": null,\n    "numberOfWorkers": null,\n    "phpVersion": null,\n    "powerShellVersion": null,\n    "preWarmedInstanceCount": null,\n    "publishingPassword": null,\n    "publishingUsername": null,\n    "push": null,\n    "pythonVersion": null,\n    "remoteDebuggingEnabled": null,\n    "remoteDebuggingVersion": null,\n    "requestTracingEnabled": null,\n    "requestTracingExpirationTime": null,\n    "routingRules": null,\n    "runtimeADUser": null,\n    "runtimeADUserPassword": null,\n    "scmIpSecurityRestrictions": [\n      {\n        "action": "Allow",\n        "description": "Allow all access",\n        "ipAddress": "Any",\n        "name": "Allow all",\n        "priority": 1,\n        "subnetMask": null,\n        "subnetTrafficTag": null,\n        "tag": null,\n        "vnetSubnetResourceId": null,\n        "vnetTrafficTag": null\n      }\n    ],\n    "scmIpSecurityRestrictionsUseMain": null,\n    "scmType": null,\n    "tracingOptions": null,\n    "use32BitWorkerProcess": null,\n    "virtualApplications": null,\n    "vnetName": null,\n    "webSocketsEnabled": null,\n    "websiteTimeZone": null,\n    "winAuthAdminState": null,\n    "winAuthTenantState": null,\n    "windowsFxVersion": null,\n    "xManagedServiceIdentityId": null\n  },\n  "slotSwapStatus": null,\n  "state": "Running",\n  "suspendedTill": null,\n  "tags": null,\n  "targetSwapSlot": null,\n  "trafficManagerHostNames": null,\n  "type": "Microsoft.Web/sites",\n  "usageState": "Normal"\n}\n\n\n\naz webapp create --resource-group myResourceGroup --plan production --name app-production --runtime "PYTHON|3.7" --deployment-local-git\n\nLocal git is configured with url of \'https://alanjui@app-production.scm.azurewebsites.net/app-production.git\'\n{\n  "availabilityState": "Normal",\n  "clientAffinityEnabled": true,\n  "clientCertEnabled": false,\n  "clientCertExclusionPaths": null,\n  "cloningInfo": null,\n  "containerSize": 0,\n  "dailyMemoryTimeQuota": 0,\n  "defaultHostName": "app-production.azurewebsites.net",\n  "deploymentLocalGitUrl": "https://alanjui@app-production.scm.azurewebsites.net/app-production.git",\n  "enabled": true,\n  "enabledHostNames": [\n    "app-production.azurewebsites.net",\n    "app-production.scm.azurewebsites.net"\n  ],\n  "ftpPublishingUrl": "ftp://waws-prod-bay-139.ftp.azurewebsites.windows.net/site/wwwroot",\n  "hostNameSslStates": [\n    {\n      "hostType": "Standard",\n      "ipBasedSslResult": null,\n      "ipBasedSslState": "NotConfigured",\n      "name": "app-production.azurewebsites.net",\n      "sslState": "Disabled",\n      "thumbprint": null,\n      "toUpdate": null,\n      "toUpdateIpBasedSsl": null,\n      "virtualIp": null\n    },\n    {\n      "hostType": "Repository",\n      "ipBasedSslResult": null,\n      "ipBasedSslState": "NotConfigured",\n      "name": "app-production.scm.azurewebsites.net",\n      "sslState": "Disabled",\n      "thumbprint": null,\n      "toUpdate": null,\n      "toUpdateIpBasedSsl": null,\n      "virtualIp": null\n    }\n  ],\n  "hostNames": [\n    "app-production.azurewebsites.net"\n  ],\n  "hostNamesDisabled": false,\n  "hostingEnvironmentProfile": null,\n  "httpsOnly": false,\n  "hyperV": false,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/sites/app-production",\n  "identity": null,\n  "inProgressOperationId": null,\n  "isDefaultContainer": null,\n  "isXenon": false,\n  "kind": "app,linux",\n  "lastModifiedTimeUtc": "2020-05-22T03:54:22.200000",\n  "location": "West US",\n  "maxNumberOfWorkers": null,\n  "name": "app-production",\n  "outboundIpAddresses": "13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",\n  "possibleOutboundIpAddresses": "40.112.243.7,40.118.229.231,13.64.89.216,40.78.16.175,52.160.111.150,13.64.91.216,13.64.94.144,13.91.124.136,13.91.125.204,40.118.239.192",\n  "redundancyMode": "None",\n  "repositorySiteName": "app-production",\n  "reserved": true,\n  "resourceGroup": "myResourceGroup",\n  "scmSiteAlsoStopped": false,\n  "serverFarmId": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Web/serverfarms/production",\n  "siteConfig": {\n    "acrUseManagedIdentityCreds": false,\n    "acrUserManagedIdentityID": null,\n    "alwaysOn": null,\n    "apiDefinition": null,\n    "apiManagementConfig": null,\n    "appCommandLine": null,\n    "appSettings": null,\n    "autoHealEnabled": null,\n    "autoHealRules": null,\n    "autoSwapSlotName": null,\n    "azureMonitorLogCategories": null,\n    "connectionStrings": null,\n    "cors": null,\n    "customAppPoolIdentityAdminState": null,\n    "customAppPoolIdentityTenantState": null,\n    "defaultDocuments": null,\n    "detailedErrorLoggingEnabled": null,\n    "documentRoot": null,\n    "experiments": null,\n    "fileChangeAuditEnabled": null,\n    "ftpsState": null,\n    "functionsRuntimeScaleMonitoringEnabled": null,\n    "handlerMappings": null,\n    "healthCheckPath": null,\n    "http20Enabled": null,\n    "httpLoggingEnabled": null,\n    "ipSecurityRestrictions": [\n      {\n        "action": "Allow",\n        "description": "Allow all access",\n        "ipAddress": "Any",\n        "name": "Allow all",\n        "priority": 1,\n        "subnetMask": null,\n        "subnetTrafficTag": null,\n        "tag": null,\n        "vnetSubnetResourceId": null,\n        "vnetTrafficTag": null\n      }\n    ],\n    "javaContainer": null,\n    "javaContainerVersion": null,\n    "javaVersion": null,\n    "limits": null,\n    "linuxFxVersion": null,\n    "loadBalancing": null,\n    "localMySqlEnabled": null,\n    "logsDirectorySizeLimit": null,\n    "machineKey": null,\n    "managedPipelineMode": null,\n    "managedServiceIdentityId": null,\n    "metadata": null,\n    "minTlsVersion": null,\n    "netFrameworkVersion": null,\n    "nodeVersion": null,\n    "numberOfWorkers": null,\n    "phpVersion": null,\n    "powerShellVersion": null,\n    "preWarmedInstanceCount": null,\n    "publishingPassword": null,\n    "publishingUsername": null,\n    "push": null,\n    "pythonVersion": null,\n    "remoteDebuggingEnabled": null,\n    "remoteDebuggingVersion": null,\n    "requestTracingEnabled": null,\n    "requestTracingExpirationTime": null,\n    "routingRules": null,\n    "runtimeADUser": null,\n    "runtimeADUserPassword": null,\n    "scmIpSecurityRestrictions": [\n      {\n        "action": "Allow",\n        "description": "Allow all access",\n        "ipAddress": "Any",\n        "name": "Allow all",\n        "priority": 1,\n        "subnetMask": null,\n        "subnetTrafficTag": null,\n        "tag": null,\n        "vnetSubnetResourceId": null,\n        "vnetTrafficTag": null\n      }\n    ],\n    "scmIpSecurityRestrictionsUseMain": null,\n    "scmType": null,\n    "tracingOptions": null,\n    "use32BitWorkerProcess": null,\n    "virtualApplications": null,\n    "vnetName": null,\n    "webSocketsEnabled": null,\n    "websiteTimeZone": null,\n    "winAuthAdminState": null,\n    "winAuthTenantState": null,\n    "windowsFxVersion": null,\n    "xManagedServiceIdentityId": null\n  },\n  "slotSwapStatus": null,\n  "state": "Running",\n  "suspendedTill": null,\n  "tags": null,\n  "targetSwapSlot": null,\n  "trafficManagerHostNames": null,\n  "type": "Microsoft.Web/sites",\n  "usageState": "Normal"\n}\n')])])]),e("h2",{attrs:{id:"_4-設定-web-app-作業環境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-設定-web-app-作業環境"}},[n._v("#")]),n._v(" （4）設定 Web App 作業環境")]),n._v(" "),e("table",[e("thead",[e("tr",[e("th",[n._v("Configuration Area")]),n._v(" "),e("th",[n._v("Setting")]),n._v(" "),e("th",[n._v("Recommended Value")]),n._v(" "),e("th",[n._v("Purpose")])])]),n._v(" "),e("tbody",[e("tr",[e("td",[n._v("Settings -> Configuration -> General Settings")]),n._v(" "),e("td",[n._v("FTP State")]),n._v(" "),e("td",[n._v("Disabled")]),n._v(" "),e("td",[n._v("Disables FTP and FTPS deployments")])]),n._v(" "),e("tr",[e("td",[n._v("Settings -> Configuration -> General Settings")]),n._v(" "),e("td",[n._v("Remote Debugging")]),n._v(" "),e("td",[n._v("Disabled")]),n._v(" "),e("td",[n._v("Stops remote application access for debuggers")])]),n._v(" "),e("tr",[e("td",[n._v("Settings -> TLS/SSL Settings")]),n._v(" "),e("td",[n._v("HTTPS only")]),n._v(" "),e("td",[n._v("On")]),n._v(" "),e("td",[n._v("Requires HTTPS connections")])]),n._v(" "),e("tr",[e("td",[n._v("Settings -> TLS/SSL Settings")]),n._v(" "),e("td",[n._v("Minimum TLS Version")]),n._v(" "),e("td",[n._v("1.2")]),n._v(" "),e("td",[n._v("Requires minimum TLS 1.2")])])])]),n._v(" "),e("h1",{attrs:{id:"資料庫建置作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#資料庫建置作業"}},[n._v("#")]),n._v(" 資料庫建置作業")]),n._v(" "),e("p",[n._v("使用 Azure Postgres Service 用於納管資料庫。")]),n._v(" "),e("h2",{attrs:{id:"建立資料庫伺服器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫伺服器"}},[n._v("#")]),n._v(" 建立資料庫伺服器")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az deployment group create \\\n  --resource-group your_resource_group \\\n  --template-file .arm-templates/db/template.json \\\n  --parameters server_name='mydatabase' region_code='southeastasia'\n\n\n\naz deployment group create \\\n  --resource-group myResourceGroup \\\n  --parameters server_name='ccc99-tw' region_code='southeastasia'\n")])])]),e("h2",{attrs:{id:"建立資料庫與管理者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫與管理者"}},[n._v("#")]),n._v(" 建立資料庫與管理者")]),n._v(" "),e("p",[n._v("於伺服器"),e("strong",[n._v("建立資料庫，並設定該資料庫擁有者之帳號及密碼")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("psql -v sslmode=true --host=ccc99-tw.postgres.database.azure.com --username=alanjui@ccc99-tw --dbname=postgres\n\nCREATE DATABASE django_on_docker_db;\nCREATE USER django_on_docker_user@ccc99-tw WITH ENCRYPTED PASSWORD 'Passw0rd';\nGRANT ALL PRIVILEGES ON DATABASE django_on_docker_db TO django_on_docker_user;\n")])])]),e("h1",{attrs:{id:"靜態檔容器建置作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#靜態檔容器建置作業"}},[n._v("#")]),n._v(" 靜態檔容器建置作業")]),n._v(" "),e("p",[n._v("使用 Azure Storage 容器，用於存放如； static 與 media 等靜態檔案。")]),n._v(" "),e("h2",{attrs:{id:"建立-storage-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-storage-account"}},[n._v("#")]),n._v(" 建立 Storage Account")]),n._v(" "),e("p",[n._v("在 myResourceGroup 的 Resource Group 中，建立名稱為： ccc99twstorage 的 Storage Account 。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az storage account create -n ccc99twstorage -g myResourceGroup -l westus --sku Standard_LRS --https-only true \n{- Finished ..\n  "accessTier": "Hot",\n  "azureFilesIdentityBasedAuthentication": null,\n  "blobRestoreStatus": null,\n  "creationTime": "2020-05-25T13:01:52.724547+00:00",\n  "customDomain": null,\n  "enableHttpsTrafficOnly": true,\n  "encryption": {\n    "keySource": "Microsoft.Storage",\n    "keyVaultProperties": null,\n    "services": {\n      "blob": {\n        "enabled": true,\n        "keyType": "Account",\n        "lastEnabledTime": "2020-05-25T13:01:52.787032+00:00"\n      },\n      "file": {\n        "enabled": true,\n        "keyType": "Account",\n        "lastEnabledTime": "2020-05-25T13:01:52.787032+00:00"\n      },\n      "queue": null,\n      "table": null\n    }\n  },\n  "failoverInProgress": null,\n  "geoReplicationStats": null,\n  "id": "/subscriptions/bdbe86f1-40d5-4305-99ce-bb6ea7c085c7/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/ccc99twstorage",\n  "identity": null,\n  "isHnsEnabled": null,\n  "kind": "StorageV2",\n  "largeFileSharesState": null,\n  "lastGeoFailoverTime": null,\n  "location": "westus",\n  "name": "ccc99twstorage",\n  "networkRuleSet": {\n    "bypass": "AzureServices",\n    "defaultAction": "Allow",\n    "ipRules": [],\n    "virtualNetworkRules": []\n  },\n  "primaryEndpoints": {\n    "blob": "https://ccc99twstorage.blob.core.windows.net/",\n    "dfs": "https://ccc99twstorage.dfs.core.windows.net/",\n    "file": "https://ccc99twstorage.file.core.windows.net/",\n    "internetEndpoints": null,\n    "microsoftEndpoints": null,\n    "queue": "https://ccc99twstorage.queue.core.windows.net/",\n    "table": "https://ccc99twstorage.table.core.windows.net/",\n    "web": "https://ccc99twstorage.z22.web.core.windows.net/"\n  },\n  "primaryLocation": "westus",\n  "privateEndpointConnections": [],\n  "provisioningState": "Succeeded",\n  "resourceGroup": "myResourceGroup",\n  "routingPreference": null,\n  "secondaryEndpoints": null,\n  "secondaryLocation": null,\n  "sku": {\n    "name": "Standard_LRS",\n    "tier": "Standard"\n  },\n  "statusOfPrimary": "available",\n  "statusOfSecondary": null,\n  "tags": {},\n  "type": "Microsoft.Storage/storageAccounts"\n}\n')])])]),e("h2",{attrs:{id:"建立-static-與-media-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-static-與-media-容器"}},[n._v("#")]),n._v(" 建立 static 與 media 容器")]),n._v(" "),e("p",[e("strong",[n._v("建立 static container")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az storage container create -n static --account-name ccc99twstorage --public-access blob\n")])])]),e("p",[e("strong",[n._v("建立 static container")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az storage container create -n media --account-name ccc99twstorage --public-access blob\n")])])]),e("h2",{attrs:{id:"取得-storage-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取得-storage-key"}},[n._v("#")]),n._v(" 取得 Storage Key")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('$ az storage account keys list -n ccc99twstorage -g myResourceGroup\n[\n  {\n    "keyName": "key1",\n    "permissions": "Full",\n    "value": "g0XVx47utOAnOw4hKxCr/tfPj+MNKGbFF3138K970aHF5vSw8Y2TeZZiUpKaIt2qlo3t7BkFg3GVEs3YCo3Dmg=="\n  },\n  {\n    "keyName": "key2",\n    "permissions": "Full",\n    "value": "AX+3JjcXrsQytICw83M2UkxPOGGaVt/DhV+ahEnGdQRuoI6UrHJs7y+GR0Cgcw5dWRQGblddGvy0KCk6RUq/Qg=="\n  }\n]\n')])])]),e("h1",{attrs:{id:"佈署作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#佈署作業"}},[n._v("#")]),n._v(" 佈署作業")]),n._v(" "),e("h2",{attrs:{id:"備妥啟動指令檔-startup-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#備妥啟動指令檔-startup-script"}},[n._v("#")]),n._v(" 備妥啟動指令檔（startup script）")]),n._v(" "),e("p",[n._v("For Django 3, on the P2V2 Service Plan, use ASGI (async WSGI) instead of WSGI.")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("gunicorn --workers 8 --threads 4 --timeout 60 --access-logfile \\\n    '-' --error-logfile '-' --bind=0.0.0.0:8000  -k uvicorn.workers.UvicornWorker \\\n     --chdir=/home/site/wwwroot django_on_azure.asgi\n")])])]),e("p",[n._v("Make sure you add "),e("code",[n._v("uvicorn")]),n._v(" to the "),e("code",[n._v("requirements.txt")]),n._v(" file.")]),n._v(" "),e("p",[n._v("For Django 2, use the WSGI entry point with Gunicorn")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("gunicorn --workers 8 --threads 4 --timeout 60 --access-logfile \\\n    '-' --error-logfile '-' --bind=0.0.0.0:8000 \\\n     --chdir=/home/site/wwwroot django_on_azure.wsgi\n")])])]),e("p",[n._v("將 startup.sh 設定成 startup command")]),n._v(" "),e("p",[n._v("Settings -> Configuration -> General Settings -> Startup command")]),n._v(" "),e("h2",{attrs:{id:"設定-azure-web-app-環境變數"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定-azure-web-app-環境變數"}},[n._v("#")]),n._v(" 設定 Azure Web App 環境變數")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az webapp config appsettings set --name <app-name> --resource-group <resourcegroup-name> --settings ...\n\n\naz webapp config appsettings set --name app-production --resource-group myResourceGroup --settings @env_prod.json\n[\n  {\n    "name": "DEBUG",\n    "slotSetting": false,\n    "value": "0"\n  },\n  {\n    "name": "SECRET_KEY",\n    "slotSetting": false,\n    "value": "ChangeToVeganWorldToSaveLife"\n  },\n  {\n    "name": "DJANGO_ALLOWED_HOSTS",\n    "slotSetting": false,\n    "value": "localhost 127.0.0.1 django-on-docker.azurewebsites.net"\n  },\n  {\n    "name": "DB_ENGINE",\n    "slotSetting": false,\n    "value": "django.db.backends.postgresql"\n  },\n  {\n    "name": "DB_HOST",\n    "slotSetting": false,\n    "value": "ccc99-tw.postgres.database.azure.com"\n  },\n  {\n    "name": "DB_PORT",\n    "slotSetting": false,\n    "value": "5432"\n  },\n  {\n    "name": "DB_DATABASE",\n    "slotSetting": false,\n    "value": "django_on_docker_db"\n  },\n  {\n    "name": "DB_USER",\n    "slotSetting": false,\n    "value": "django_on_docker_user"\n  },\n  {\n    "name": "DB_PASSWORD",\n    "slotSetting": false,\n    "value": "Passw0rd"\n  },\n  {\n    "name": "DATABASE",\n    "slotSetting": false,\n    "value": "postgres"\n  }\n]\n')])])]),e("h2",{attrs:{id:"自開發機佈署-azure-web-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自開發機佈署-azure-web-app"}},[n._v("#")]),n._v(" 自開發機佈署 Azure Web App")]),n._v(" "),e("p",[n._v("Azure Web App 預設的佈署作業程序：")]),n._v(" "),e("ol",[e("li",[n._v("依據 requirements.txt 檔案，安裝 Python 套件；")]),n._v(" "),e("li",[n._v("執行 Django 指令： python manage.py collectstatic")])]),n._v(" "),e("p",[e("strong",[n._v("（1）設定 Git 容器")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("git remote add staging <staging-git-url>\ngit remote add production <production-git-url>\n\n\n\ngit remote add production https://app-production.scm.azurewebsites.net:443/app-production.git\n")])])]),e("p",[e("strong",[n._v("（2）將原始碼置入 Git 容器")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("git push staging master\ngit push production master\n")])])]),e("p",[n._v("Web App 終端機")]),n._v(" "),e("p",[n._v("（1）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("cd ~/homt/site/wwwroot\nsource /antenv/bin/activate\n")])])]),e("p",[n._v("（2）")]),n._v(" "),e("h1",{attrs:{id:"azure-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli"}},[n._v("#")]),n._v(" Azure CLI")]),n._v(" "),e("p",[n._v("https://docs.microsoft.com/zh-tw/cli/azure/?view=azure-cli-latest")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('# Get the blob service account url for the storage account\naz storage account show -n ccc99twstorage -g myResourceGroup --query "primaryEndpoints.blob"\n"https://ccc99twstorage.blob.core.windows.net/"\n')])])]),e("p",[e("strong",[n._v("建置 Resource Group")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az group create -l centralus -n PythonSDKExample-WebApp-rg\n\n\naz group create -l westus -n myResourceGroup\n")])])]),e("p",[e("strong",[n._v("建置 App Service Plan")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az appservice plan create -n PythonSDKExample-WebApp-plan --is-linux --sku B1\n")])])]),e("p",[n._v("建置 Web App")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az webapp create -g PythonSDKExample-WebApp-rg \\\n    -n PythonSDKExample-WebApp-ccc99tw \\\n    --plan PythonSDKExample-WebApp-plan --runtime "python|3.8"\n\n\naz webapp create -g myResourceGroup \\\n    -n PythonSDKExample-WebApp-ccc99tw \\\n    --plan PythonSDKExample-WebApp-plan --runtime "python|3.8"\n\n\n\naz webapp create -g myResourceGroup \\\n    -n provision-deploy-webapp \\\n    --plan PythonSDKExample-WebApp-plan --runtime "python|3.8"\n')])])]),e("p",[e("strong",[n._v("建置 Web App (2)：指定 Git Repo URL")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az webapp create -n PythonSDKExample-WebApp-ccc99tw \\\n  --plan PythonSDKExample-WebApp-plan \\\n  --deployment-source-url https://github.com/AlanJui/python-docs-hello-world \\\n  --runtime "python|3.8"\n')])])]),e("h2",{attrs:{id:"實作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#實作流程"}},[n._v("#")]),n._v(" 實作流程")]),n._v(" "),e("p",[e("strong",[n._v("建置 Resource Group")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az group create -l westus -n myResourceGroup\n")])])]),e("p",[e("strong",[n._v("建置 App Service Plan")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("az appservice plan create -n PythonSDKExample-WebApp-plan --is-linux --sku B1\n")])])]),e("p",[n._v("建置 Web App")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('az webapp create -g myResourceGroup \\\n    -n provision-deploy-webapp \\\n    --plan PythonSDKExample-WebApp-plan \\\n    --runtime "python|3.8"\n')])])]),e("p",[n._v("透過指定的 "),e("strong",[n._v("Git Repo URL 佈署")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("REPO_URL = \"https://github.com/AlanJui/python-docs-hello-world.git\"\n\npoller = app_service_client.web_apps.create_or_update_source_control(\n    RESOURCE_GROUP_NAME,\n    WEB_APP_NAME,\n    {\n      'localtion': 'GitHub',\n      'repo_url': REPO_URL,\n      'branch': 'master'\n    }\n)\n\nsc_result = poller.result()\n")])])]),e("p",[e("strong",[n._v("（1）設定 WEB APP 相關環境變數")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("source ~/.zshrc\n")])])]),e("p",[n._v("~/.profile")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('...\nexport AZURE_SUBSCRIPTION_ID="bdbe86f1-40d5-4305-99ce-bb6ea7c085c7"\nexport AZURE_TENANT_ID="ff3e1c6b-0fd2-4651-8898-fa9429981c8b"\nexport AZURE_CLIENT_ID="be6223fe-527e-4af8-9d81-97657212b9ea"\nexport AZURE_CLIENT_SECRET="[$FJU41C/7>Byt6<%!]+w0\\\\&*yt\\\\E5J{"\nexport WEB_APP_NAME="provision-deploy-webapp"\nexport REPO_URL="https://github.com/AlanJui/python-docs-hello-world"\n')])])]),e("p",[e("strong",[n._v("（2）啟動專案虛擬環境及安裝專案所需 Python 套件")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("source .venv/bin/activate\npip install -r requirements.txt\n")])])]),e("p",[e("strong",[n._v("（3）執行 WEB APP 佈署程式")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("$ python provision_deploy_webapp.py\nProvisioned resource group myResourceGroup\nProvisioned App Service plan PythonSDKExample-WebApp-plan\nSet source control on web app to master branch of https://github.com/AlanJui/python-docs-hello-world\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);