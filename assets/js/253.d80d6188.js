(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{539:function(t,e,n){"use strict";n.r(e);var a=n(10),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-22-04"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-22-04"}},[t._v("#")]),t._v(" Ubuntu 22.04")]),t._v(" "),e("h1",{attrs:{id:"network-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration"}},[t._v("#")]),t._v(" Network Configuration")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.devcloud.com.tw/ubuntu-22-04-wang-lu-she-ding-jing-tai-ip/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.devcloud.com.tw/ubuntu-22-04-wang-lu-she-ding-jing-tai-ip/"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("network:\n  version: 2\n  ethernets:\n    eno1:\n      dhcp4: no\n      dhcp6: no\n      addresses: [192.168.66.10/24]\n      gateway4: 192.168.66.1\n      nameservers:\n        addresses: [8.8.8.8]\n")])])]),e("h2",{attrs:{id:"network-configuration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#network-configuration-2"}},[t._v("#")]),t._v(" Network Configuration")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://linuxconfig.org/ubuntu-22-04-network-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://linuxconfig.org/ubuntu-22-04-network-configuration"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"how-to-add-static-route-with-netplan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-static-route-with-netplan"}},[t._v("#")]),t._v(" How to add static route with NetPlan")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://linuxconfig.org/how-to-add-static-route-with-netplan-on-ubuntu-22-04-jammy-jellyfish-linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://linuxconfig.org/how-to-add-static-route-with-netplan-on-ubuntu-22-04-jammy-jellyfish-linux"),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"kvm-qemu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kvm-qemu"}},[t._v("#")]),t._v(" KVM/QEMU")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.linuxtechi.com/how-to-install-kvm-on-ubuntu-22-04/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.linuxtechi.com/how-to-install-kvm-on-ubuntu-22-04/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("/etc/netplan/01-netcfg.yaml")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("network:\n  version: 2\n  ethernets:\n    eno1:\n      dhcp4: false\n      dhcp6: false\n  # add configuration for bridge interface\n  bridges:\n    br0:\n      interfaces: [eno1]\n      dhcp4: false\n      addresses: [192.168.66.10/24]\n      routes:\n        - to: default\n          via: 192.168.66.1\n          metric: 100\n      nameservers:\n        addresses: [8.8.8.8, 4.2.2.2]\n      parameters:\n        stp: false\n      dhcp6: false\n")])])]),e("h1",{attrs:{id:"install-basic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-basic"}},[t._v("#")]),t._v(" Install Basic")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("sudo apt install git curl\n\n\nsudo apt install build-essential manpages-dev\n")])])]),e("h1",{attrs:{id:"neovim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#neovim"}},[t._v("#")]),t._v(" Neovim")]),t._v(" "),e("h2",{attrs:{id:"安裝作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[t._v("#")]),t._v(" 安裝作業")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("sudo apt-get install software-properties-common\n\n\nsudo add-apt-repository ppa:neovim-ppa/stable\nsudo apt update\nsudo apt install neovim\n\n\nsudo apt-get install python-dev python-pip python3-dev python3-pip\n")])])]),e("h2",{attrs:{id:"異常排除作業"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#異常排除作業"}},[t._v("#")]),t._v(" 異常排除作業")]),t._v(" "),e("p",[t._v("使用 sudo 操作 nvim ，致「使用者帳戶」自動切換成 root ，因而\n「登入」時，原設定檔： %HOME/.config/nvim/init.lua 無法再被\n讀取及使用。")]),t._v(" "),e("p",[t._v("【解法一】：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("sudo -E -s nvim /<DirPath>/<FileName>\n")])])]),e("p",[t._v("【解法二】：使用 sudoedit 指令亦可。但 SHELL 設定檔，需有「\n環境變數」：EDITOR 的設定 ，如： ~/.zshrc")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('...\nexport EDITOR="nvim"\n...\n')])])]),e("h1",{attrs:{id:"vnc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vnc"}},[t._v("#")]),t._v(" VNC")]),t._v(" "),e("p",[t._v('VNC Clinet 欲連接 Ubuntu Desktop 內建的 VNC Server，結果卻出\n現如下之錯誤訊息： "The connection was refused by the host\ncomputer” ⋯⋯')]),t._v(" "),e("p",[t._v("【Ref】:\n"),e("a",{attrs:{href:"https://help.realvnc.com/hc/en-us/articles/360002254738-VNC-Connect-Error-Messages#connectivity-error-messages-0-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://help.realvnc.com/hc/en-us/articles/360002254738-VNC-Connect-Error-Messages#connectivity-error-messages-0-0"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("| The connection was refused by the host computer | VNC\nServer is either not running, or not running on the\nspecified port. | Ensure VNC Server is running. If you are\nestablishing a direct connection and have specified a port\nother than the default for VNC (5900), ensure VNC Server is\nconfigured to use that port. |")]),t._v(" "),e("h2",{attrs:{id:"vnc-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vnc-host"}},[t._v("#")]),t._v(" VNC Host")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安裝 Ubuntu 預設的 VNC Server")]),t._v(" "),e("p",[t._v("sudo apt install vino")])]),t._v(" "),e("li",[e("p",[t._v("要求 Vino（VNC Server），可接受 Client 端，以「不加密」方\n式連線。")]),t._v(" "),e("p",[t._v("gsettings set org.gnome.Vino require-encryption false")])]),t._v(" "),e("li",[e("p",[t._v("驗證設定。")]),t._v(" "),e("p",[t._v("gsettings get org.gnome.Vino require-encryption false")])])]),t._v(" "),e("p",[t._v("【註】：查詢/變更 Gnome 的設定（即：Current user’s GSettings\ndatabase），可使用工具： dconf-editor 。")]),t._v(" "),e("h1",{attrs:{id:"參考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[t._v("#")]),t._v(" 參考")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"upgrade-from-ubuntu-20-04-to-22-04"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-ubuntu-20-04-to-22-04"}},[t._v("#")]),t._v(" Upgrade from Ubuntu 20.04 to 22.04")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://websetnet.net/zh-TW/how-to-upgrade-from-ubuntu-20-04-to-ubuntu-22-04-lts-step-by-step-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://websetnet.net/zh-TW/how-to-upgrade-from-ubuntu-20-04-to-ubuntu-22-04-lts-step-by-step-guide/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"networking-on-ubuntu-22-04"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#networking-on-ubuntu-22-04"}},[t._v("#")]),t._v(" Networking on Ubuntu 22.04")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/set-a-static-ip-address-on-ubuntu-22-04.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/set-a-static-ip-address-on-ubuntu-22-04.html"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);