(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{390:function(t,a,e){"use strict";e.r(a);var s=e(10),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-18-04-更新顯示卡驅動程式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-更新顯示卡驅動程式"}},[t._v("#")]),t._v(" Ubuntu 18.04 更新顯示卡驅動程式")]),t._v(" "),a("h1",{attrs:{id:"nvidia-geforce-驅動程式下載處"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvidia-geforce-驅動程式下載處"}},[t._v("#")]),t._v(" Nvidia GeForce 驅動程式下載處")]),t._v(" "),a("p",[t._v("https://www.geforce.com.tw/drivers")]),t._v(" "),a("h1",{attrs:{id:"安裝驅動程式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝驅動程式"}},[t._v("#")]),t._v(" 安裝驅動程式")]),t._v(" "),a("h2",{attrs:{id:"自-intel-gpu-切換到-nvidia-gpu-外顯卡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自-intel-gpu-切換到-nvidia-gpu-外顯卡"}},[t._v("#")]),t._v(" 自 Intel GPU 切換到 Nvidia GPU (外顯卡)")]),t._v(" "),a("p",[t._v("https://www.linuxbabe.com/desktop-linux/switch-intel-nvidia-graphics-card-ubuntu")]),t._v(" "),a("h2",{attrs:{id:"使用gui介面操作-指令輸入的驅動程式安裝法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用gui介面操作-指令輸入的驅動程式安裝法"}},[t._v("#")]),t._v(" 使用GUI介面操作／指令輸入的驅動程式安裝法")]),t._v(" "),a("p",[t._v("https://www.linuxbabe.com/ubuntu/install-nvidia-driver-ubuntu-18-04")]),t._v(" "),a("h2",{attrs:{id:"使用官方下載的驅動程式-run檔-安裝法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用官方下載的驅動程式-run檔-安裝法"}},[t._v("#")]),t._v(" 使用官方下載的驅動程式（.RUN檔）安裝法")]),t._v(" "),a("p",[t._v("https://medium.com/@antonioszeto/how-to-install-nvidia-driver-on-ubuntu-18-04-7b464bab43e6")]),t._v(" "),a("h1",{attrs:{id:"其它參考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它參考"}},[t._v("#")]),t._v(" 其它參考")]),t._v(" "),a("h2",{attrs:{id:"無法安裝官方驅動程式-unload-kernel-module-nvidia-drm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#無法安裝官方驅動程式-unload-kernel-module-nvidia-drm"}},[t._v("#")]),t._v(" 無法安裝官方驅動程式： Unload kernel module ‘nvidia-drm’")]),t._v(" "),a("p",[t._v("http://chiustin.blogspot.com/2019/01/ubuntunvidia.html")]),t._v(" "),a("p",[t._v("https://unix.stackexchange.com/questions/440840/how-to-unload-kernel-module-nvidia-drm")]),t._v(" "),a("h2",{attrs:{id:"無法安裝官方驅動程式-please-exit-x-server-before-installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#無法安裝官方驅動程式-please-exit-x-server-before-installing"}},[t._v("#")]),t._v(" 無法安裝官方驅動程式：please exit X server before installing")]),t._v(" "),a("p",[t._v("https://askubuntu.com/questions/149206/how-to-install-nvidia-run")]),t._v(" "),a("h2",{attrs:{id:"在-terminal-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-terminal-更新"}},[t._v("#")]),t._v(" 在 Terminal 更新")]),t._v(" "),a("p",[t._v("http://chiustin.blogspot.com/2019/01/ubuntunvidia.html")]),t._v(" "),a("h2",{attrs:{id:"使用下載的-run-檔更新驅動程式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用下載的-run-檔更新驅動程式"}},[t._v("#")]),t._v(" 使用下載的 .RUN 檔更新驅動程式")]),t._v(" "),a("p",[t._v("https://medium.com/@rosdyanakusuma/how-to-install-nvidia-driver-in-ubuntu-18-04-307c25f73259")]),t._v(" "),a("p",[a("strong",[t._v("Step 1")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Check the model of your NVIDIA GPU")]),t._v(" "),a("p",[t._v("$ ubuntu-drivers devices")])]),t._v(" "),a("li",[a("p",[t._v("Download NVIDIA Driver from URL:  https://www.nvidia.com/Download/index.aspx to Home DIR")])]),t._v(" "),a("li",[a("p",[t._v("Ensure the driver (.RUN file) to be runnable")]),t._v(" "),a("p",[t._v("$ chmod +x NVIDIA-Linux-"),a("xxx",[t._v(".run")])],1)])]),t._v(" "),a("p",[a("strong",[t._v("Step 2")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('sudo apt list --installed | grep "nvidia*"\n\n\nsudo apt purge "nvidia*"\n')])])]),a("p",[a("strong",[t._v("Step 3")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("sudo apt install build-essential gcc-multilib dkms \n")])])]),a("p",[a("strong",[t._v("Step 4")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("sudo vim /etc/modprobe.d/blacklist-nvidia-nouveau.conf\n")])])]),a("p",[a("strong",[t._v("blacklist-nvidia-nouveau.conf")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("blacklist nouveau\noptions nouveau modeset=0\n")])])]),a("p",[a("strong",[t._v("Step 5")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("sudo update-initramfs -u\nsudo reboot\n")])])]),a("p",[a("strong",[t._v("Step 6: Stop “Display Manager Service” (gdm)")]),t._v("\nAfter reboot/restart, open console from login page (ctrl+alt+f2).")]),t._v(" "),a("Ctrl",[t._v(" + "),a("Alt",[t._v(" + "),a("F2",[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ sudo service gdm stop\n")])])]),a("p",[a("strong",[t._v("Step 7: Install .run driver")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("sudo ./NVIDIA-Linux-x86_64-418.56.run\n")])])]),a("p",[t._v("若遇到錯誤訊息： pre-install script failed —》 不用理它，繼續執行下去\nhttps://blog.csdn.net/u014561933/article/details/79958130")]),t._v(" "),a("ul",[a("li",[t._v("DKMS: y")]),t._v(" "),a("li",[t._v("Lib 32: y")]),t._v(" "),a("li",[t._v("Configure X Server: y")])]),t._v(" "),a("p",[a("strong",[t._v("Step 8:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ nvidia-smi\n$ sudo reboot\n")])])]),a("hr"),t._v(" "),a("h1",{attrs:{id:"obs-support-nvenc-h264"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obs-support-nvenc-h264"}},[t._v("#")]),t._v(" OBS Support NVENC H264")]),t._v(" "),a("p",[a("strong",[t._v("NVENC Support Matrix")]),t._v("\nhttps://developer.nvidia.com/video-encode-decode-gpu-support-matrix")]),t._v(" "),a("p",[t._v("https://arstech.net/compile-ffmpeg-with-nvenc-h264/")]),t._v(" "),a("p",[t._v("https://arstech.net/how-to-disable-nouveau-nvidia-driver-on-ubuntu-18-04/")]),t._v(" "),a("h2",{attrs:{id:"uninstall-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-driver"}},[t._v("#")]),t._v(" Uninstall Driver")]),t._v(" "),a("p",[t._v("https://linuxconfig.org/how-to-uninstall-the-nvidia-drivers-on-ubuntu-20-04-focal-fossa-linux")]),t._v(" "),a("p",[t._v("/etc/modprobe.d/nvidia-installer-disable-nouveau.conf"),a("br"),t._v("\n/var/log/nvidia-installer.log")])])],1)],1)],1)}),[],!1,null,null,null);a.default=i.exports}}]);