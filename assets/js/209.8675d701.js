(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{494:function(t,e,o){"use strict";o.r(e);var n=o(10),r=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vs-code-debug-with-chrome"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vs-code-debug-with-chrome"}},[t._v("#")]),t._v(" VS Code Debug with Chrome")]),t._v(" "),e("ol",[e("li",[t._v("啟動 VS Code App，設定 Debug 環境。")])]),t._v(" "),e("p",[t._v("透過編輯「設定檔」（檔案路徑:  /.vscode/launch.json），完成如下內容之設定:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('{\n  // 使用 Chrome Extension to Debug 之前，務必先將所有的 Chrome App 通通結束\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Launch Chrome against localhost, with sourcemaps",\n      "type": "chrome",\n      "runtimeExecutable": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",\n      "request": "launch",\n      "url": "http://localhost:3000",\n      "port": 9222,\n      "sourceMaps": true,\n      "webRoot": "${workspaceRoot}",\n      "userDataDir": "${workspaceRoot}/.vscode/chrome",\n      "diagnosticLogging": false\n    },\n    {\n      "name": "Launch URL with sourcemaps",\n      "type": "chrome",\n      "request": "launch",\n      "url": "http://127.0.0.1:3000/index.html",\n      "webRoot": "${workspaceRoot}",\n      "port": 9222,\n      "sourceMaps": true\n    },\n    {\n      // 從未試成功\n      "name": "Attach to Chrome, with sourcemaps",\n      "type": "chrome",\n      "request": "attach",\n      "url": "http://127.0.0.1:3000/index.html",\n      "webRoot": "${workspaceRoot}",\n      "port": 9222,\n      "sourceMaps": true\n    }\n  ]\n}\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("執行 http-server (NPM 模組)")]),t._v(" "),e("p",[t._v("AlanJui at MacBook-Pro.local in [~/workspace/TypeScripts/ts-10]\n14:06:27 $ http-server\nStarting up http-server, serving ./\nAvailable on:\nhttp://127.0.0.1:8080\nhttp://192.168.66.110:8080\nhttp://192.168.66.72:8080\nHit CTRL-C to stop the server")])]),t._v(" "),e("li",[e("p",[t._v("回到「VS Code App」。找到欲偵錯的原始檔案 ${workspaceRoot}/src/${toDebugFile}.ts  ，設定「偵錯岔斷點（Break Point）」。")])]),t._v(" "),e("li",[e("p",[t._v("進入「偵錯」檢視，挑選設定選項:「Launch Chrome against localhost, with sourcemaps」，按下「偵錯」鈕以啟動偵錯功能。")]),t._v(" "),e("p",[t._v("【註】: 若是「設定選項」挑:「Launch URL with sourcemaps」，則務必先將所有已啟用的「Google Chrome 瀏覽器」通通結束。")])]),t._v(" "),e("li",[e("p",[t._v("Google Chrome 瀏覽器自動開啟，欲偵錯的網頁顯現。（「偵錯岔斷點（Break Point）」此時無作用）")])]),t._v(" "),e("li",[e("p",[t._v("在「Google Chrome 瀏覽器」，按下「重新載入此頁」，此時的「偵錯岔斷點（Break Point）」，開始能正常運作。")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);