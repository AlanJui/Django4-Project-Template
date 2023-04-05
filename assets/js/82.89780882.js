(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{365:function(e,n,r){"use strict";r.r(n);var a=r(10),t=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"usb-藍牙-wi-fi-二合一無線網路卡安裝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usb-藍牙-wi-fi-二合一無線網路卡安裝"}},[e._v("#")]),e._v(" USB 藍牙+Wi-Fi 二合一無線網路卡安裝")]),e._v(" "),n("p",[e._v("本文件之目的用於說明：如何在 Ubuntu 20.04 作業系統，安裝「TOTO LINK A600UB AC600 USB 藍牙+WiFi 二合一無線網路卡」。以下，對於「USB 藍牙＋Wi-Fi 二合一無線網路卡」將簡稱為：「USB 二合一網路卡」。")]),e._v(" "),n("p",[e._v("安裝「USB 二合一網路卡」使用的電腦，其硬體配備、軟體環境，摘要如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("- CPU： 第三代 Intel Core i7-3770\n- 主機板使用之晶片組： Intel Q77 (主機板：GA-Q77M-D2H rev. 1.0 ) \n- 作業系統名稱及版本： Ubuntu 20.04.1\n- 核心（Kernel）版本： 5.4.0-52-generic\n")])])]),n("p",[e._v("以下之安裝作業，參考如下連結之文件，略加修飾及編輯而成。")]),e._v(" "),n("p",[e._v("https://github.com/brektrou/rtl8821CU")]),e._v(" "),n("h1",{attrs:{id:"環境確認作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#環境確認作業"}},[e._v("#")]),e._v(" 環境確認作業")]),e._v(" "),n("h2",{attrs:{id:"作業系統版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作業系統版本"}},[e._v("#")]),e._v(" 作業系統版本")]),e._v(" "),n("p",[e._v("透過「終端機」輸入以下指令，確認「作業系統版本」為：Ubuntu 20.04.1 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ lsb_release -a\nNo LSB modules are available.\nDistributor ID:        Ubuntu\nDescription:        Ubuntu 20.04.1 LTS\nRelease:        20.04\nCodename:        focal\n")])])]),n("h2",{attrs:{id:"核心版本-kernel-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心版本-kernel-version"}},[e._v("#")]),e._v(" 核心版本（Kernel Version）")]),e._v(" "),n("p",[e._v("透過「終端機」輸入以下指令，確認「核心版本」為：5.4.0-52-generic 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ uname -r\n5.4.0-52-generic\n")])])]),n("h2",{attrs:{id:"usb-裝置代碼-usb-id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usb-裝置代碼-usb-id"}},[e._v("#")]),e._v(" USB 裝置代碼（USB ID）")]),e._v(" "),n("p",[e._v("透過「終端機」輸入以下指令，確認作業系統已能偵測到，您插入的「USB 二合一網路卡」。")]),e._v(" "),n("p",[e._v("「USB 二合一網路卡」的 「USB 裝置代碼」為：0dba:1a2b。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ lsusb\nBus 002 Device 003: ID 0bda:0161 Realtek Semiconductor Corp. Mass Storage Device\nBus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub\nBus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 001 Device 004: ID 040b:0a67 Weltrend Semiconductor \nBus 001 Device 003: ID 248a:8366 Maxxter Wireless Optical Mouse ACT-MUSW-002\nBus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 004 Device 004: ID 05e3:0620 Genesys Logic, Inc. BUP Portable\nBus 004 Device 003: ID 05e3:0620 Genesys Logic, Inc. USB3.1 Hub\nBus 004 Device 002: ID 0bc2:ac26 Seagate RSS LLC BUP Portable\nBus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 003 Device 005: ID 0bda:1a2b Realtek Semiconductor Corp. \nBus 003 Device 006: ID 534d:2109  \nBus 003 Device 004: ID 05e3:0610 Genesys Logic, Inc. 4-port hub\nBus 003 Device 003: ID 05e3:0610 Genesys Logic, Inc. 4-port hub\nBus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\n")])])]),n("p",[e._v("USB 二合一網路卡（裝置代碼：0dba:1a2b），所使用的晶片為： RTL8818CU 。")]),e._v(" "),n("p",[e._v("以下網址，可用 USB 裝置代碼（USB ID），查詢該裝置所使用的「晶片代碼」。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("https://the-sz.com/products/usbid/index.php\n")])])]),n("h1",{attrs:{id:"wifi-無線網路卡安裝作業"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wifi-無線網路卡安裝作業"}},[e._v("#")]),e._v(" WiFi 無線網路卡安裝作業")]),e._v(" "),n("h2",{attrs:{id:"安裝工具程式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝工具程式"}},[e._v("#")]),e._v(" 安裝工具程式")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo apt install git gcc dkms  \n$ sudo apt install linux-headers-$(uname -r)\n$ sudo apt install net-tools\n")])])]),n("h2",{attrs:{id:"安裝驅動程式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安裝驅動程式"}},[e._v("#")]),e._v(" 安裝驅動程式")]),e._v(" "),n("p",[n("strong",[e._v("(1) 建立驅動程式安裝目錄。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~ $ cd\n~ $ mkdir build && cd $_\n~/build $\n")])])]),n("p",[n("strong",[e._v("(2) 下載驅動程式原始碼。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~/build $ git clone https://github.com/brektrou/rtl8821CU\n")])])]),n("p",[n("strong",[e._v("(3) 編譯驅動程式原始碼 (Compile the Driver)。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~/build $ cd rtl8821CU\n~/build/rtl8821CU $ sudo ./dkms-install.sh\nAbout to run dkms install steps...\n\nCreating symlink /var/lib/dkms/rtl8821CU/5.4.1/source ->\n                 /usr/src/rtl8821CU-5.4.1\n\nDKMS: add completed.\n\nKernel preparation unnecessary for this kernel.  Skipping...\n\nBuilding module:\ncleaning build area...\n'make' KVER=5.4.0-52-generic..........................................\ncleaning build area...\n\nDKMS: build completed.\n\n8821cu.ko:\nRunning module version sanity check.\n - Original module\n   - No original module exists within this kernel\n - Installation\n   - Installing to /lib/modules/5.4.0-52-generic/updates/dkms/\n\ndepmod...\n\nDKMS: install completed.\nFinished running dkms install steps.\n")])])]),n("p",[e._v("驗證「驅動程式檔案：8821cu.ko」已被置入應存放之目錄中。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ ll /lib/modules/5.4.0-52-generic/updates/dkms \n總計 33628\ndrwxr-xr-x 2 root root     4096 10月 27 22:21 ./\ndrwxr-xr-x 3 root root     4096 10月 21 09:03 ../\n-rw-r--r-- 1 root root  3749784 10月 27 22:21 8821cu.ko\n-rw-r--r-- 1 root root    76960 10月 21 09:03 nvidia-drm.ko\n-rw-r--r-- 1 root root 27353104 10月 21 09:03 nvidia.ko\n-rw-r--r-- 1 root root  1553616 10月 21 09:03 nvidia-modeset.ko\n-rw-r--r-- 1 root root  1617184 10月 21 09:03 nvidia-uvm.ko\n-rw-r--r-- 1 root root    62264 10月 21 09:03 v4l2loopback.ko\n")])])]),n("p",[e._v("驗證「驅動程式模組：rtl8821CU」，已被安裝到 dkms 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo dkms status\nnvidia, 450.80.02, 5.4.0-51-generic, x86_64: installed\nnvidia, 450.80.02, 5.4.0-52-generic, x86_64: installed\nrtl8821CU, 5.4.1, 5.4.0-52-generic, x86_64: installed\nv4l2loopback, 0.12.3, 5.4.0-51-generic, x86_64: installed\nv4l2loopback, 0.12.3, 5.4.0-52-generic, x86_64: installed\n")])])]),n("p",[e._v("【參考用資訊】： 有些文件說 make 執行過後，會將「驅動程式檔案」：8821CU.ko ，置入目錄路徑中：/lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/。但我執行的實際結果，並非如此。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ ll /lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless \n總計 436\ndrwxr-xr-x 18 root root   4096 10月 26 08:19 ./\ndrwxr-xr-x 27 root root   4096 10月 21 09:03 ../\ndrwxr-xr-x  2 root root   4096 10月 21 09:03 admtek/\ndrwxr-xr-x 10 root root   4096 10月 21 09:03 ath/\ndrwxr-xr-x  2 root root   4096 10月 21 09:03 atmel/\ndrwxr-xr-x  5 root root   4096 10月 21 09:03 broadcom/\ndrwxr-xr-x  2 root root   4096 10月 21 09:03 cisco/\ndrwxr-xr-x  5 root root   4096 10月 21 09:03 intel/\ndrwxr-xr-x  5 root root   4096 10月 21 09:03 intersil/\n-rw-r--r--  1 root root 100617 10月 15 18:28 mac80211_hwsim.ko\ndrwxr-xr-x  5 root root   4096 10月 21 09:03 marvell/\ndrwxr-xr-x  4 root root   4096 10月 21 09:03 mediatek/\ndrwxr-xr-x  3 root root   4096 10月 21 09:03 quantenna/\ndrwxr-xr-x  3 root root   4096 10月 21 09:03 ralink/\n-rw-r--r--  1 root root 104817 10月 15 18:28 ray_cs.ko\ndrwxr-xr-x  6 root root   4096 10月 21 09:03 realtek/\n-rw-r--r--  1 root root  96321 10月 15 18:28 rndis_wlan.ko\ndrwxr-xr-x  2 root root   4096 10月 21 09:03 rsi/\ndrwxr-xr-x  3 root root   4096 10月 21 09:03 st/\ndrwxr-xr-x  6 root root   4096 10月 21 09:03 ti/\n-rw-r--r--  1 root root  20473 10月 15 18:28 virt_wifi.ko\n-rw-r--r--  1 root root  41481 10月 15 18:28 wl3501_cs.ko\ndrwxr-xr-x  3 root root   4096 10月 21 09:03 zydas/\n")])])]),n("p",[e._v("【參考用資訊】： 有些文件說 make 執行過後，會將「驅動程式模組」檔案：8821CU.ko ，置入目錄路徑中：/lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/realtek/。但我執行的實際結果，並非如此。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ ll /lib/modules/5.4.0-52-generic/kernel/drivers/net/wireless/realtek \n總計 24\ndrwxr-xr-x  6 root root 4096 10月 21 09:03 ./\ndrwxr-xr-x 18 root root 4096 10月 26 08:19 ../\ndrwxr-xr-x  4 root root 4096 10月 21 09:03 rtl818x/\ndrwxr-xr-x  2 root root 4096 10月 21 09:03 rtl8xxxu/\ndrwxr-xr-x 14 root root 4096 10月 21 09:03 rtlwifi/\ndrwxr-xr-x  2 root root 4096 10月 21 09:03 rtw88/\n")])])]),n("p",[n("strong",[e._v("(4) 啟動驅動程式（Load the Driver）。")])]),e._v(" "),n("p",[e._v("完成上述工作後，無論是透過「設定值」的操作；或是使用 iwconfig 指令進行查詢，都會發覺「USB 二合一網路卡」仍未能正常運作。")]),e._v(" "),n("p",[e._v("使用 iwconfig 指令驗證，發現 Wi-Fi 無線網路功能尚未能正常啟動。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ iwconfig\neno1      no wireless extensions.\n\nlo        no wireless extensions.\n")])])]),n("p",[e._v("進入「設定值」的操作介面，發現「網路」項目上，仍未顯現「Wi-Fi」項目；也就是Wi-Fi 無線網路功能尚未能正常啟動。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603807608840_gnome-shell-screenshot-N8U6S0.png",alt:""}})]),e._v(" "),n("p",[e._v("再次使用 lsusb 指令查詢，可知「USB 裝置」：0dba:1a2b ，使用 Bus: 001 、Device: 005 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ lsusb\nBus 002 Device 003: ID 0bda:0161 Realtek Semiconductor Corp. Mass Storage Device\nBus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub\nBus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 001 Device 004: ID 040b:0a67 Weltrend Semiconductor \nBus 001 Device 003: ID 248a:8366 Maxxter Wireless Optical Mouse ACT-MUSW-002\nBus 001 Device 005: ID 0bda:1a2b Realtek Semiconductor Corp. \nBus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 004 Device 002: ID 0bc2:ac26 Seagate RSS LLC BUP Portable\nBus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 003 Device 004: ID 534d:2109  \nBus 003 Device 003: ID 05e3:0610 Genesys Logic, Inc. 4-port hub\nBus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. 4-port hub\nBus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\n")])])]),n("p",[e._v("使用 usb_modeswitch 指令，要求 USB 裝置，將其 USB 模式切換成 Wi-Fi 模式。\n"),n("strong",[e._v("（許多的網友就因為缺漏這個步驟，以致功虧一簣，終究沒能完成安裝。 ）")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo usb_modeswitch -KW -v 0bda -p 1a2b\nTake all parameters from the command line\n\n\n * usb_modeswitch: handle USB devices with multiple modes\n * Version 2.5.2 (C) Josua Dietze 2017\n * Based on libusb1/libusbx\n\n ! PLEASE REPORT NEW CONFIGURATIONS !\n\nDefaultVendor=  0x0bda\nDefaultProduct= 0x1a2b\n\nStandardEject=1\n\nLook for default devices ...\n  found USB ID 0bda:0161\n   vendor ID matched\n  found USB ID 8087:0024\n  found USB ID 1d6b:0002\n  found USB ID 040b:0a67\n  found USB ID 248a:8366\n  found USB ID 0bda:1a2b\n   vendor ID matched\n   product ID matched\n  found USB ID 8087:0024\n  found USB ID 1d6b:0002\n  found USB ID 0bc2:ac26\n  found USB ID 1d6b:0003\n  found USB ID 534d:2109\n  found USB ID 05e3:0610\n  found USB ID 05e3:0610\n  found USB ID 1d6b:0002\n Found devices in default mode (1)\nAccess device 005 on bus 001\nGet the current device configuration ...\nCurrent configuration number is 1\nUse interface number 0\n with class 8\nUse endpoints 0x0b (out) and 0x8a (in)\n\nUSB description data (for identification)\n-------------------------\nManufacturer: Realtek\n     Product: DISK\n  Serial No.: not provided\n-------------------------\nSending standard EJECT sequence\nLooking for active drivers ...\n OK, driver detached\nSet up interface 0\nUse endpoint 0x0b for message sending ...\nTrying to send message 1 to endpoint 0x0b ...\n OK, message successfully sent\nRead the response to message 1 (CSW) ...\n Response successfully read (13 bytes), status 0\nTrying to send message 2 to endpoint 0x0b ...\n OK, message successfully sent\nRead the response to message 2 (CSW) ...\n Response successfully read (13 bytes), status 0\nTrying to send message 3 to endpoint 0x0b ...\n Sending the message returned error -1. Try to continue\nRead the response to message 3 (CSW) ...\n Response reading failed (error -1)\n Device is gone, skip any further commands\n-> Run lsusb to note any changes. Bye!\n")])])]),n("p",[e._v("再次使用 lsusb 指令查詢，將發覺「USB 裝置」：0dba:1a2b 不見了；卻產生了新的：0dba:c820（使用 Bus: 001 、Device: 006） 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ lsusb\nBus 002 Device 003: ID 0bda:0161 Realtek Semiconductor Corp. Mass Storage Device\nBus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub\nBus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 001 Device 004: ID 040b:0a67 Weltrend Semiconductor \nBus 001 Device 003: ID 248a:8366 Maxxter Wireless Optical Mouse ACT-MUSW-002\nBus 001 Device 006: ID 0bda:c820 Realtek Semiconductor Corp. \nBus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\nBus 004 Device 002: ID 0bc2:ac26 Seagate RSS LLC BUP Portable\nBus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub\nBus 003 Device 004: ID 534d:2109  \nBus 003 Device 003: ID 05e3:0610 Genesys Logic, Inc. 4-port hub\nBus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. 4-port hub\nBus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub\n")])])]),n("p",[e._v("再次進入「設定值」的操作介面，將發現「網路」項目上，已顯現「Wi-Fi」項目；也就是Wi-Fi 無線網路功能已正常啟動。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603809538984_image.png",alt:""}})]),e._v(" "),n("p",[e._v("再次進入「設定值」的操作介面，點擊「藍牙」項目，將可自右邊的畫面，驗證藍牙功能已正常啟動。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603809496565_image.png",alt:""}})]),e._v(" "),n("p",[e._v("此時，再次執行 iwconfig 指令，可發現「無線網路卡」已能正常運作（尚未連上無線網路時）：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ iwconfig\nenx7a6c1ccb0f60  no wireless extensions.\n\nlo        no wireless extensions.\n\nwlxd0c0bf50e619  unassociated  Nickname:"<WIFI@REALTEK>"\n          Mode:Managed  Frequency=5.785 GHz  Access Point: Not-Associated   \n          Sensitivity:0/0  \n          Retry:off   RTS thr:off   Fragment thr:off\n          Power Management:off\n          Link Quality=0/100  Signal level=0 dBm  Noise level=0 dBm\n          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0\n          Tx excessive retries:0  Invalid misc:0   Missed beacon:0\n\neno1      no wireless extensions.\n')])])]),n("p",[e._v("已連上無線網路時，執行 iwconfig 指令後的結果（參考）：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ iwconfig\nenx7a6c1ccb0f60  no wireless extensions.\n\nlo        no wireless extensions.\n\nwlxd0c0bf50e619  IEEE 802.11AC  ESSID:"CCC Dlink-6AD2-5GHz"  Nickname:"<WIFI@REALTEK>"\n          Mode:Managed  Frequency:5.785 GHz  Access Point: 74:DA:DA:03:6A:D4   \n          Bit Rate:434 Mb/s   Sensitivity:0/0  \n          Retry:off   RTS thr:off   Fragment thr:off\n          Power Management:off\n          Link Quality=78/100  Signal level=-51 dBm  Noise level=0 dBm\n          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0\n          Tx excessive retries:0  Invalid misc:0   Missed beacon:0\n\neno1      no wireless extensions.\n')])])]),n("p",[n("strong",[e._v("(4) 驗證驅動程式已成功啟動，被載入作業系統。")])]),e._v(" "),n("p",[e._v("設定作業系統：「自動啟動藍芽服務 Bluetooh Service」。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo systemctl start bluetooth\n")])])]),n("p",[e._v("驗證作業系統已啟動藍芽服務。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ sudo service bluetooth status\n● bluetooth.service - Bluetooth service\n     Loaded: loaded (/lib/systemd/system/bluetooth.service; enabled; vendor preset: enabled)\n     Active: active (running) since Tue 2020-10-27 22:32:07 CST; 7min ago\n       Docs: man:bluetoothd(8)\n   Main PID: 24328 (bluetoothd)\n     Status: "Running"\n      Tasks: 1 (limit: 19087)\n     Memory: 3.0M\n     CGroup: /system.slice/bluetooth.service\n             └─24328 /usr/lib/bluetooth/bluetoothd\n\n10月 27 22:32:07 SRV-2020 systemd[1]: Starting Bluetooth service...\n10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Bluetooth daemon 5.53\n10月 27 22:32:07 SRV-2020 systemd[1]: Started Bluetooth service.\n10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Starting SDP server\n10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Bluetooth management interface 1.14 initialized\n10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Endpoint registered: sender=:1.71 path=/MediaEndpoint/A2DPSink/sbc\n10月 27 22:32:07 SRV-2020 bluetoothd[24328]: Endpoint registered: sender=:1.71 path=/MediaEndpoint/A2DPSource/sbc\n')])])]),n("p",[e._v("驗證「驅動程式」也就「8821cu模組」，已被作業系統載入。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo lsmod | grep 8821cu\n8821cu               2211840  0\ncfg80211              704512  1 8821cu\n")])])]),n("p",[e._v("驗證「無線網卡裝置」已可被作業系統偵測到。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ iwconfig\neno1      no wireless extensions.\n\nlo        no wireless extensions.\n\nwlxd0c0bf50e619  IEEE 802.11AC  ESSID:"CCC Dlink-6AD2-5GHz"  Nickname:"<WIFI@REALTEK>"\n          Mode:Managed  Frequency:5.785 GHz  Access Point: 74:DA:DA:03:6A:D4   \n          Bit Rate:434 Mb/s   Sensitivity:0/0  \n          Retry:off   RTS thr:off   Fragment thr:off\n          Power Management:off\n          Link Quality=62/100  Signal level=-60 dBm  Noise level=0 dBm\n          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0\n          Tx excessive retries:0  Invalid misc:0   Missed beacon:0\n')])])]),n("p",[n("strong",[e._v("(5) 設定作業系統於啟動後，自動將 USB 裝置切換到 Wi-Fi 模式。")])]),e._v(" "),n("p",[e._v("透過 usb_modeswitch 指令，切換的 USB 模式，會因重開機而失效。所以，需執行以下設定，使 usb_modeswitch 指令，能於作業系統開機時自動執行。")]),e._v(" "),n("p",[e._v("啟動編輯器，並打開檔案： 40-usb_modeswitch.rules 。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo nvim /lib/udev/rules.d/40-usb_modeswitch.rules\n")])])]),n("p",[e._v("在「"),n("code",[e._v('**LABEL="modeswitch_rules_end"**')]),e._v("」這行之前，加入以下設定指令。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('# Realtek 8211CU Wifi AC USB\nATTR{idVendor}=="0bda", ATTR{idProduct}=="1a2b", RUN+="/usr/sbin/usb_modeswitch -K -v 0bda -p 1a2b"\n\nLABEL="modeswitch_rules_end"\n')])])]),n("p",[n("strong",[e._v("(6) 重新啟動作業系統。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~/build/rtl8821CU $ sudo reboot\n")])])]),n("h1",{attrs:{id:"問題診斷與修復"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#問題診斷與修復"}},[e._v("#")]),e._v(" 問題診斷與修復")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"修正-make-無法正常運作的問題"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修正-make-無法正常運作的問題"}},[e._v("#")]),e._v(" 修正 make 無法正常運作的問題")]),e._v(" "),n("p",[e._v("驅動程式原始碼在編譯時，若無法正常執行，且「錯誤訊息」指出：Linux Header 目錄中找不到 build 目錄的連結。")]),e._v(" "),n("p",[n("strong",[e._v("正常狀態，在「Linux Headers」目錄中，應有「build」的軟連結，對映到 /usr/src/linux-headers-5.4.0-52-generic/ 。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ ll /lib/modules/5.4.0-52-generic/\n總計 5836\ndrwxr-xr-x  6 root root    4096 10月 26 10:36 ./\ndrwxr-xr-x  7 root root    4096 10月 21 09:03 ../\nlrwxrwxrwx  1 root root      39 10月 15 18:28 build -> /usr/src/linux-headers-5.4.0-52-generic/\ndrwxr-xr-x  2 root root    4096 10月 15 18:28 initrd/\ndrwxr-xr-x 17 root root    4096 10月 21 09:03 kernel/\n-rw-r--r--  1 root root 1392413 10月 26 10:36 modules.alias\n-rw-r--r--  1 root root 1368666 10月 26 10:36 modules.alias.bin\n-rw-r--r--  1 root root    8105 10月 15 18:28 modules.builtin\n-rw-r--r--  1 root root   24985 10月 26 10:36 modules.builtin.alias.bin\n-rw-r--r--  1 root root   10257 10月 26 10:36 modules.builtin.bin\n-rw-r--r--  1 root root   63335 10月 15 18:28 modules.builtin.modinfo\n-rw-r--r--  1 root root  610732 10月 26 10:36 modules.dep\n-rw-r--r--  1 root root  853697 10月 26 10:36 modules.dep.bin\n-rw-r--r--  1 root root     330 10月 26 10:36 modules.devname\n-rw-r--r--  1 root root  220055 10月 15 18:28 modules.order\n-rw-r--r--  1 root root     828 10月 26 10:36 modules.softdep\n-rw-r--r--  1 root root  617900 10月 26 10:36 modules.symbols\n-rw-r--r--  1 root root  751222 10月 26 10:36 modules.symbols.bin\ndrwxr-xr-x  3 root root    4096 10月 21 09:03 updates/\ndrwxr-xr-x  3 root root    4096 10月 21 09:03 vdso/\n")])])]),n("p",[e._v("若是找不到 build 連結，可透過如下指令重建。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo apt install linux-headers-$(uname -r)\n")])])]),n("hr"),e._v(" "),n("h2",{attrs:{id:"清理-make-執行過後的暫存檔案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清理-make-執行過後的暫存檔案"}},[e._v("#")]),e._v(" 清理 make 執行過後的暫存檔案")]),e._v(" "),n("p",[e._v("如下圖所示，make 指令執行後，會產生目的檔及暫存檔。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ cd ~/build/rtl8821CU\n$ ll\n總計 7652\ndrwxrwxr-x 8 alanjui alanjui    4096 10月 26 12:51 ./\ndrwxrwxr-x 4 alanjui alanjui    4096 10月 26 12:48 ../\n-rw-rw-r-- 1 alanjui alanjui 3755568 10月 26 12:51 8821cu.ko\n-rw-rw-r-- 1 alanjui alanjui     270 10月 26 12:51 .8821cu.ko.cmd\n-rw-rw-r-- 1 alanjui alanjui    8744 10月 26 12:51 8821cu.mod\n-rw-rw-r-- 1 alanjui alanjui    1165 10月 26 12:51 8821cu.mod.c\n-rw-rw-r-- 1 alanjui alanjui    8851 10月 26 12:51 .8821cu.mod.cmd\n-rw-rw-r-- 1 alanjui alanjui    3752 10月 26 12:51 8821cu.mod.o\n-rw-rw-r-- 1 alanjui alanjui   31124 10月 26 12:51 .8821cu.mod.o.cmd\n-rw-rw-r-- 1 alanjui alanjui 3761208 10月 26 12:51 8821cu.o\n-rw-rw-r-- 1 alanjui alanjui    8895 10月 26 12:51 .8821cu.o.cmd\n-rw-rw-r-- 1 alanjui alanjui   57288 10月 26 12:48 changelog.pdf\n-rwxrwxr-x 1 alanjui alanjui      64 10月 26 12:48 clean*\ndrwxrwxr-x 4 alanjui alanjui    4096 10月 26 12:51 core/\n-rw-rw-r-- 1 alanjui alanjui     234 10月 26 12:48 dkms.conf\n-rwxrwxr-x 1 alanjui alanjui     813 10月 26 12:48 dkms-install.sh*\n-rwxrwxr-x 1 alanjui alanjui     503 10月 26 12:48 dkms-remove.sh*\ndrwxrwxr-x 8 alanjui alanjui    4096 10月 26 12:48 .git/\ndrwxrwxr-x 9 alanjui alanjui    4096 10月 26 12:50 hal/\n-rwxrwxr-x 1 alanjui alanjui      54 10月 26 12:48 ifcfg-wlan0*\ndrwxrwxr-x 5 alanjui alanjui   12288 10月 26 12:48 include/\n-rwxrwxr-x 1 alanjui alanjui     110 10月 26 12:48 Kconfig*\n-rw-rw-r-- 1 alanjui alanjui   18092 10月 26 12:48 LICENSE\n-rwxrwxr-x 1 alanjui alanjui   67981 10月 26 12:48 Makefile*\n-rw-rw-r-- 1 alanjui alanjui      40 10月 26 12:51 modules.order\n-rw-rw-r-- 1 alanjui alanjui       0 10月 26 12:51 Module.symvers\ndrwxrwxr-x 3 alanjui alanjui    4096 10月 26 12:49 os_dep/\ndrwxrwxr-x 2 alanjui alanjui    4096 10月 26 12:51 platform/\n-rw-rw-r-- 1 alanjui alanjui    3253 10月 26 12:48 README.md\n-rwxrwxr-x 1 alanjui alanjui    2569 10月 26 12:48 rtl8821c.mk*\n-rwxrwxr-x 1 alanjui alanjui     423 10月 26 12:48 runwpa*\n-rwxrwxr-x 1 alanjui alanjui     294 10月 26 12:48 wlan0dhcp*\n")])])]),n("p",[e._v("上述經 make 產生之檔案，可透過 make clean 指令，將之自動清除。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~/build/rtl8821CU $ make clean\n#make -C /lib/modules/5.4.0-52-generic/build M=/home/alanjui/build/rtl8821CU clean\ncd hal ; rm -fr */*/*/*.mod.c */*/*/*.mod */*/*/*.o */*/*/.*.cmd */*/*/*.ko\ncd hal ; rm -fr */*/*.mod.c */*/*.mod */*/*.o */*/.*.cmd */*/*.ko\ncd hal ; rm -fr */*.mod.c */*.mod */*.o */.*.cmd */*.ko\ncd hal ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko\ncd core ; rm -fr */*.mod.c */*.mod */*.o */.*.cmd */*.ko\ncd core ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko\ncd os_dep/linux ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko\ncd os_dep ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko\ncd platform ; rm -fr *.mod.c *.mod *.o .*.cmd *.ko\nrm -fr Module.symvers ; rm -fr Module.markers ; rm -fr modules.order\nrm -fr *.mod.c *.mod *.o .*.cmd *.ko *~\nrm -fr .tmp_versions\n")])])]),n("p",[e._v("使用 ll (或 ls -al) 指令再次確認。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~/build/rtl8821CU $ ll\n總計 224\ndrwxrwxr-x 8 alanjui alanjui  4096 10月 27 23:05 ./\ndrwxrwxr-x 4 alanjui alanjui  4096 10月 26 12:48 ../\n-rw-rw-r-- 1 alanjui alanjui 57288 10月 26 12:48 changelog.pdf\n-rwxrwxr-x 1 alanjui alanjui    64 10月 26 12:48 clean*\ndrwxrwxr-x 4 alanjui alanjui  4096 10月 27 23:05 core/\n-rw-rw-r-- 1 alanjui alanjui   234 10月 26 12:48 dkms.conf\n-rwxrwxr-x 1 alanjui alanjui   813 10月 26 12:48 dkms-install.sh*\n-rwxrwxr-x 1 alanjui alanjui   503 10月 26 12:48 dkms-remove.sh*\ndrwxrwxr-x 8 alanjui alanjui  4096 10月 26 12:48 .git/\ndrwxrwxr-x 9 alanjui alanjui  4096 10月 27 23:05 hal/\n-rwxrwxr-x 1 alanjui alanjui    54 10月 26 12:48 ifcfg-wlan0*\ndrwxrwxr-x 5 alanjui alanjui 12288 10月 26 12:48 include/\n-rwxrwxr-x 1 alanjui alanjui   110 10月 26 12:48 Kconfig*\n-rw-rw-r-- 1 alanjui alanjui 18092 10月 26 12:48 LICENSE\n-rwxrwxr-x 1 alanjui alanjui 67981 10月 26 12:48 Makefile*\ndrwxrwxr-x 3 alanjui alanjui  4096 10月 27 23:05 os_dep/\ndrwxrwxr-x 2 alanjui alanjui  4096 10月 27 23:05 platform/\n-rw-rw-r-- 1 alanjui alanjui  3253 10月 26 12:48 README.md\n-rwxrwxr-x 1 alanjui alanjui  2569 10月 26 12:48 rtl8821c.mk*\n-rwxrwxr-x 1 alanjui alanjui   423 10月 26 12:48 runwpa*\n-rwxrwxr-x 1 alanjui alanjui   294 10月 26 12:48 wlan0dhcp*\n")])])]),n("hr"),e._v(" "),n("h2",{attrs:{id:"usb-id-查詢工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usb-id-查詢工具"}},[e._v("#")]),e._v(" USB ID 查詢工具")]),e._v(" "),n("p",[e._v("每個 USB 裝置，都有「USB 裝置代碼（USB ID）」，例如：0dba:1a2b 。")]),e._v(" "),n("p",[e._v("「冒號」前的代碼：0dba，代表：Vendor ID；「冒號」後的代碼：1a2b，代表：Product ID。")]),e._v(" "),n("p",[e._v("取得 USB 裝置的「USB ID」後，便可透過如下網址，查詢該裝置所使用的「晶片代碼」。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("https://the-sz.com/products/usbid/index.php\n")])])]),n("p",[e._v("以下畫面，在「Vendor ID」、「Product ID」欄位輸入資料，然後按「Search」鈕。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("- Vendor ID: 0x0dba\n- Product ID: 0x1a2b\n")])])]),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603857637029_image.png",alt:""}})]),e._v(" "),n("p",[e._v("查詢之結果，如下畫面所示。可知晶片代碼為：RTL8188CU。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://paper-attachments.dropbox.com/s_010D076FC054E694629575437D9304AF30F543BC8559D33273E6CECB48D4C666_1603857942593_image.png",alt:""}})]),e._v(" "),n("p",[n("strong",[e._v("Search Results:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("https://the-sz.com/products/usbid/index.php?v=0x0bda&p=0x1a2b&n=\n")])])]),n("p",[e._v("Vendor ID (VID): 0x0bda\nProduct ID (PID): 0x1a2b\n"),n("strong",[e._v("RTL8188GU 802.11n WLAN Adapter (Driver CDROM Mode)")])]),e._v(" "),n("p",[n("img",{attrs:{src:"http://upload.wikimedia.org/wikipedia/en/thumb/7/70/Realtek_logo_vector.svg/256px-Realtek_logo_vector.svg.png",alt:""}})]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"將-usb-二合一網路卡的usb模式切換為-wi-fi-模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#將-usb-二合一網路卡的usb模式切換為-wi-fi-模式"}},[e._v("#")]),e._v(" 將 USB 二合一網路卡的USB模式切換為 Wi-Fi 模式")]),e._v(" "),n("p",[e._v("透過以下指令，可將 USB 二合一網路卡的「USB 模式」，切換成 Wi-Fi 模式。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ sudo usb_modeswitch -KW -v 0dba -p 1a2b\n")])])]),n("hr"),e._v(" "),n("h2",{attrs:{id:"確認作業系統是否已能辨識「無線網路卡」"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#確認作業系統是否已能辨識「無線網路卡」"}},[e._v("#")]),e._v(" 確認作業系統是否已能辨識「無線網路卡」")]),e._v(" "),n("p",[e._v("無線網路卡要能正常運作，首要條件當然是：能被作業系統偵測到、並能辨識。所以，指令：iwconfig 亦能充當成「診斷工具」，用於判斷「無線網路卡」是否已能被作業系統所認可；若診斷結果為「否」，除非是網卡本身故障；否則應是「驅動程式」未正確安裝。")]),e._v(" "),n("p",[e._v("當「無線網路卡」還無法正常運作時，iwconfig 指令的執行結果如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ iwconfig\nlo        no wireless extensions.\n\neno1      no wireless extensions.\n")])])]),n("p",[e._v("當「無線網路卡」已能正常運作時，iwconfig 指令的執行結果如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('$ iwconfig\neno1      no wireless extensions.\n\nlo        no wireless extensions.\n\nwlxd0c0bf50e619  IEEE 802.11AC  ESSID:"CCC Dlink-6AD2-5GHz"  Nickname:"<WIFI@REALTEK>"\n          Mode:Managed  Frequency:5.785 GHz  Access Point: 74:DA:DA:03:6A:D4   \n          Bit Rate:434 Mb/s   Sensitivity:0/0  \n          Retry:off   RTS thr:off   Fragment thr:off\n          Power Management:off\n          Link Quality=66/100  Signal level=-55 dBm  Noise level=0 dBm\n          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0\n          Tx excessive retries:0  Invalid misc:0   Missed beacon:0\n')])])]),n("hr"),e._v(" "),n("h2",{attrs:{id:"診斷驅動程式已能正常運作的問題"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#診斷驅動程式已能正常運作的問題"}},[e._v("#")]),e._v(" 診斷驅動程式已能正常運作的問題")]),e._v(" "),n("p",[e._v("當驅動程式完成應有的安裝與設定作業後，應重新開機。在開機過程中，作業系統的核心（Kernel），應能透過驅動程式與硬體溝通，偵測到系統已安裝的硬體。若開機完成後，硬體仍未能正常運作，則有可能是「驅動程式」本身仍有問題。")]),e._v(" "),n("p",[e._v("由於「dmesg」指令，可查詢「開機過程中，作業系統所偵測到的各種硬體狀態訊息」。故而，可據此輸出診斷：「驅動程式是否已能正常運作，可令"),n("strong",[e._v("作業系統")]),e._v("與"),n("strong",[e._v("硬體")]),e._v("溝通」，找出問題導因。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("~ $ dmesg\n")])])]),n("p",[n("strong",[e._v("診斷：開機時，作業系統能偵測到的 Realtek 晶片有那些？")])]),e._v(" "),n("p",[e._v("因為 Realtek 的 Vendor ID 為 0dba，故可使用以下指令進行診斷。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dmesg | grep idVendor=0bda                      \n[    2.082072] usb 2-1.5: New USB device found, idVendor=0bda, idProduct=0161, bcdDevice=61.23\n[    2.565297] usb 3-3.4: New USB device found, idVendor=0bda, idProduct=1a2b, bcdDevice= 2.00\n[ 3730.159308] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=1a2b, bcdDevice= 2.00\n[ 3730.707456] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00\n[ 4158.529202] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00\n")])])]),n("p",[n("strong",[e._v("診斷：開機時，作業系統是否能偵測到『TOTO LINK A600UB AC600 USB 藍牙+WiFi 二合一無線網路卡』？")])]),e._v(" "),n("p",[e._v("因為 TOTO LINK A600UB 這個 USB 無線網路卡，使用的晶片為 Realtek 的 RTL8821CU 晶片；經查詢後得知 Vendor ID 為 0dba；Product ID 為 c820。故可使用以下指令診斷：開機過程中，作業系統是否有偵測到這個USB 無線網路卡。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("$ dmesg | grep idVendor=0bda | grep idProduct=c820\n[ 3730.707456] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00\n[ 4158.529202] usb 3-3.1.1: New USB device found, idVendor=0bda, idProduct=c820, bcdDevice= 2.00\n")])])]),n("h1",{attrs:{id:"參考文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#參考文件"}},[e._v("#")]),e._v(" 參考文件")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://forum.ubuntu.org.cn/viewtopic.php?t=489451",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu18.04 按网上教程安装USB网卡驱动后还是用不了"),n("OutboundLink")],1),e._v("\nhttps://forum.ubuntu.org.cn/viewtopic.php?t=489451")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://static.tp-link.com/2018/201805/20180508/Installation%20Guide%20for%20Linux.pdf",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("Installation Guide for Linux")]),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://static.tp-link.com/2018/201805/20180508/Installation%20Guide%20for%20Linux.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://static.tp-link.com/2018/201805/20180508/Installation%20Guide%20for%20Linux.pdf"),n("OutboundLink")],1)])])]),e._v(" "),n("p",[n("strong",[e._v("分隔線以下，均為曾試過，卻都無法成功的參考文件。")])]),e._v(" "),n("hr"),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://www.itdaan.com/tw/18e383751ef23d19f4c5d9fe8ec3cef1",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("TL-WDN5200H無線usb網卡在Linux上的使用")]),n("OutboundLink")],1),e._v(" ****https://www.itdaan.com/tw/18e383751ef23d19f4c5d9fe8ec3cef1")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://www.wyr.me/post/623",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("Linux安装无线网卡驱动通用方法")]),n("OutboundLink")],1),e._v("\nhttps://www.wyr.me/post/623")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://aaronlelevier.github.io/install-usb-wifi-dongle-on-ubuntu-18.04/",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("Install USB Wifi dongle on Ubuntu 18.04")]),n("OutboundLink")],1),e._v("\nhttps://aaronlelevier.github.io/install-usb-wifi-dongle-on-ubuntu-18.04/")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://ubuntuforums.org/showthread.php?t=2375603",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("No Wi-Fi adapter Found(rtl8811au)")]),n("OutboundLink")],1),e._v("\nhttps://ubuntuforums.org/showthread.php?t=2375603")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://askubuntu.com/questions/1045765/usb-antenna-not-working-on-dell-optiplex-760-desktop/1045927#1045927",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("USB Antenna Not Working on Dell Optiplex 760 Desktop?")]),n("OutboundLink")],1),e._v("\nhttps://askubuntu.com/questions/1045765/usb-antenna-not-working-on-dell-optiplex-760-desktop/1045927#1045927")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/aircrack-ng/rtl8812au",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[e._v("aircrack-ng/rtl8812au")]),n("OutboundLink")],1),e._v("\nhttps://github.com/aircrack-ng/rtl8812au")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);