(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{330:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"arch-linux-virtualbox-guest-additions-安裝指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-virtualbox-guest-additions-安裝指引"}},[s._v("#")]),s._v(" Arch Linux: VirtualBox Guest Additions 安裝指引")]),s._v(" "),t("h2",{attrs:{id:"文件摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件摘要"}},[s._v("#")]),s._v(" 文件摘要")]),s._v(" "),t("p",[s._v("提供「作業程序」，說明如何在 Arch Linux 作業系統，安裝 VirtualBox Guest Additions 軟體。")]),s._v(" "),t("p",[s._v("不能只是「挿入 VirtualBox Guest Addition 光碟」，直接執行安裝；須先完成 Kernel headers 的安裝，否則「安裝程式」會發出如下之錯誤警示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610593540886_VirtualBox_VB02-ArchLinux_14_01_2021_11_04_05.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"安裝作業指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業指引"}},[s._v("#")]),s._v(" 安裝作業指引")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("更新套件到最新版")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo pacman -Suy\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("安裝 Linux Kernel Headers")])])]),s._v(" "),t("ul",[t("li",[s._v("查詢 Linux Kernel Version")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[alanjui@VB02-ArchLinux ~]$ uname -r\n5.10.4-arch2-1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("安裝 Linux Headers 檔案")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo pacman -S linux-headers\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610674524541_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("安裝 VirtualBox Guest 套件")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo pacman -S virtualbox-guest-utils\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610674624639_image.png",alt:""}})]),s._v(" "),t("p",[s._v("含軟件：")]),s._v(" "),t("ul",[t("li",[s._v("xf86-video-vmware-13.3.0-2")]),s._v(" "),t("li",[s._v("virtualbox-guest-utils-6.1.16-4")])]),s._v(" "),t("p",[s._v("完成安裝後，產生之執行檔：")]),s._v(" "),t("ul",[t("li",[s._v("/etc/xdg/autostart/vboxclient.desktop")]),s._v(" "),t("li",[s._v("/usr/bin/VBoxClient")]),s._v(" "),t("li",[s._v("/usr/bin/VBoxClient-all")]),s._v(" "),t("li",[s._v("/usr/bin/VBoxControl")]),s._v(" "),t("li",[s._v("/usr/bin/VBoxDRMClient")]),s._v(" "),t("li",[s._v("/usr/bin/VBoxService")])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo /sbin/rcvboxadd setup\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("【註】：")]),s._v(" "),t("ul",[t("li",[s._v("無需安裝 VirtualBox Guest Addition 光碟\n對於 Ubuntu / Debian 這些版本的 Linux ，需要安裝 VirtualBox Guest Additions 光碟的公共軟體，但在 Arch Linux 版本，則無此必要。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610598211382_image.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("安裝錯誤紀錄：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("less /var/log/vboxadd-setup.log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[t("strong",[s._v("啟用 VirtualBox Service (VirtualBox Keernel Modules)")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl enable vboxservice\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610674836750_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("將「使用者帳號」加入「vboxsf」群組；並驗證設定無誤。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" [alanjui@VB02-ArchLinux ~]$ sudo usermod -aG vboxsf alanjui\n\n [alanjui@VB02-ArchLinux ~]$ grep vboxsf /etc/group\n vboxsf:x:109:alanjui\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("【註】： virtualbox-guest-utils 軟件在安裝過程，會建立作業系統的「群組」：vboxsf")]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("strong",[s._v("啟動 VirtualBox Service")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo systemctl start vboxservice\nsudo systemctl status vboxservice\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610675084205_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"8"}},[t("li",[s._v("重新開機與確認作業系統於開機後，自動啟用 VirtualBox Service")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo reboot\nsystemctl status vboxservice\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610845755065_image.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"設定共享資料夾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#設定共享資料夾"}},[s._v("#")]),s._v(" 設定共享資料夾")]),s._v(" "),t("p",[s._v("與 Host 共享資料夾。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_884ACC3F903C20183D095E3A6ABED35AD045655815A8292752602F404CA371B6_1610676102169_image.png",alt:""}})]),s._v(" "),t("ol",[t("li",[s._v("在 Guest 建立共享資料夾")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd\nmkdir host\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("在 Host 建立 VirtualBox Shared Folders：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610845369426_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("進入 Guest 後，使用「終端機」查詢「擁有者及操作權限」：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd\nls -l\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610846211171_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("檢驗使用者是否屬於 vboxsf 群組：**")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847103546_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("檢驗作業系統的確已將 VirtualBox Shared Folders 掛載於 /media 目錄之下：**\n上述 Host 與 Guest 共享的資料夾經設定後，其掛載路徑為： /media/sf_<Shared_Folder>/")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ls -al /media\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847448792_image.png",alt:""}})]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("使用「檔案管理員」，觀察「VirtualBox Shared Folders」：**")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("~/host (/home/alanjui/host)\n"),t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847568017_image.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("/media/sf_vbox-host-alanjui\n"),t("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_038FDA293062D2977EE7D2788BEF5061F31D0CA01950EA5CCB081C738472B3D2_1610847607382_image.png",alt:""}})])])]),s._v(" "),t("h2",{attrs:{id:"驗證作業指引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#驗證作業指引"}},[s._v("#")]),s._v(" 驗證作業指引")]),s._v(" "),t("h3",{attrs:{id:"驗證-vm-guest-可與-host-共用「剪貼簿」"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#驗證-vm-guest-可與-host-共用「剪貼簿」"}},[s._v("#")]),s._v(" 驗證 VM Guest 可與 Host 共用「剪貼簿」")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("打開「終端機」。")])]),s._v(" "),t("li",[t("p",[s._v("在 Mac Host 用 [Cmd] + [C] 複製「指令」")])]),s._v(" "),t("li",[t("p",[s._v("在 Arch Linux Guest 用 [Ctrl] + [Shift] + [V] 貼上己複製之指令")])])]),s._v(" "),t("h2",{attrs:{id:"參考資料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[s._v("#")]),s._v(" 參考資料")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/VirtualBox/Install_Arch_Linux_as_a_guest",target:"_blank",rel:"noopener noreferrer"}},[s._v("VirtualBox/Install Arch Linux as a guest"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://averagelinuxuser.com/virtualbox-shared-folder/",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to enable a Virtualbox shared folder for linux guest systems"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);