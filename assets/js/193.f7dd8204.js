(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{478:function(s,t,a){"use strict";a.r(t);var e=a(10),l=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-install-davinci-resolve-16-on-ubuntu-20-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-davinci-resolve-16-on-ubuntu-20-04"}},[s._v("#")]),s._v(" How to install Davinci Resolve 16 on Ubuntu 20.04")]),s._v(" "),t("h1",{attrs:{id:"安裝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝"}},[s._v("#")]),s._v(" 安裝")]),s._v(" "),t("p",[s._v("【參考文件】：  https://www.reallinuxuser.com/how-to-install-davinci-resolve-on-ubuntu-based-linux-distros/")]),s._v(" "),t("ol",{attrs:{start:"0"}},[t("li",[t("p",[s._v("完成下列兩個檔案的「下載」，並存放至目錄： ~/_Download 。")]),s._v(" "),t("ul",[t("li",[s._v("安裝用 .run 檔案：\n"),t("strong",[s._v("https://www.blackmagicdesign.com/products/davinciresolve/")])]),s._v(" "),t("li",[s._v("製作 .deb 檔案用之 .sh 檔：\n"),t("strong",[s._v("https://www.danieltufvesson.com/makeresolvedeb")])])])]),s._v(" "),t("li",[t("p",[s._v("備妥「製作 .deb 檔所需套件」")]),s._v(" "),t("p",[s._v("sudo apt install ocl-icd-opencl-dev fakeroot xorriso")])])]),s._v(" "),t("p",[s._v("如有必要，尚需安裝 libssl 套件，但版本： 1.0.0 的套件已退役，請改裝 libssl 1.1.x")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("sudo apt install libssl1.1\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("啟動指令，開始製作 .deb 安裝檔。")]),s._v(" "),t("p",[s._v("cd ~/_Downloads\nsudo sh ./makeresolvedeb_16.2.6-1.sh lite")])]),s._v(" "),t("li",[t("p",[s._v("執行「安裝指令」。")]),s._v(" "),t("p",[s._v("ll *.deb\nsudo dpkg -i davinci-resolve_16.2.6-1_amd64.deb")])])]),s._v(" "),t("h1",{attrs:{id:"御除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#御除"}},[s._v("#")]),s._v(" 御除")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("sudo rm -f -r /opt/resolve\nsudo rm /usr/share/applications/davinci-resolve.desktop\n")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);