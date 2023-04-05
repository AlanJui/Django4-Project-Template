(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{554:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"建置-node-js-作業環境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建置-node-js-作業環境"}},[s._v("#")]),s._v(" 建置 Node.js 作業環境")]),s._v(" "),a("h2",{attrs:{id:"摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[s._v("#")]),s._v(" 摘要")]),s._v(" "),a("p",[s._v("建置 Node.js 應用系統開發，所需之作業環境。")]),s._v(" "),a("h2",{attrs:{id:"作業程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作業程序"}},[s._v("#")]),s._v(" 作業程序")]),s._v(" "),a("h3",{attrs:{id:"_1-安裝-node-js-版本管理工具-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安裝-node-js-版本管理工具-n"}},[s._v("#")]),s._v(" (1) 安裝 Node.js 版本管理工具： n")]),s._v(" "),a("p",[s._v("執行 n-install 。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl -L https://bit.ly/n-install | bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-安裝-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安裝-node-js"}},[s._v("#")]),s._v(" (2) 安裝 Node.js")]),s._v(" "),a("ol",[a("li",[s._v("安裝 Node.js 直譯器與 Node.js 套件管理工具：npm。")])]),s._v(" "),a("p",[s._v("安裝最近的 Long Term Support 版。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("n lts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安裝最新版。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("n latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-設定所需使用的-path-環境變數"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-設定所需使用的-path-環境變數"}},[s._v("#")]),s._v(" (3) 設定所需使用的 PATH 環境變數")]),s._v(" "),a("p",[s._v("變更 Shell 設定檔，在 PATH 加入 node.js 及 npm 所在位置")]),s._v(" "),a("ol",[a("li",[s._v("編輯 ~/.zshrc")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nvim ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("~/.zshrc:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('export N_PREFIX="$HOME/n"\nexport PATH="$N_PREFIX/bin:$PATH"\nexport PATH="$HOME/.yarn/bin:$PATH"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("重啟 SHELL 環境")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("source ~/.zshrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-安裝-node-js-套件管理器-yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安裝-node-js-套件管理器-yarn"}},[s._v("#")]),s._v(" (4) 安裝 Node.js 套件管理器：yarn")]),s._v(" "),a("p",[s._v("yarn 等同 npm ，均為 Node.js 之「套件管理工具」。")]),s._v(" "),a("ol",[a("li",[s._v("執行安裝指令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo npm i -g yarn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("驗證")])]),s._v(" "),a("p",[s._v("驗證 yarn 已完成安裝，yarn 執行檔位於目錄路徑：\n$HOME/n/bin/yarn")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ which yarn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alanjui@VB02-Ubuntu-2004:~$ which yarn\n/home/alanjui/n/bin/yarn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"參考資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tj/n",target:"_blank",rel:"noopener noreferrer"}},[s._v("tj/n GitHub Repo"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);