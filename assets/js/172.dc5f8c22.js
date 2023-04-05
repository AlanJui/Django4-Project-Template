(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{457:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"start-qemu-on-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-qemu-on-macos"}},[t._v("#")]),t._v(" Start QEMU on macOS")]),t._v(" "),s("p",[t._v("https://graspingtech.com/ubuntu-desktop-18.04-virtual-machine-macos-qemu/")]),t._v(" "),s("p",[t._v("https://opensource.com/article/20/9/try-linux-mac")]),t._v(" "),s("p",[t._v("https://rambling-ideas.salessandri.name/setup-nat-network-for-qemu-in-mac-osx/")]),t._v(" "),s("p",[t._v("https://forums.virtualbox.org/viewtopic.php?p=66322")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("brew install tuntap\n\n\n\n$ brew tap homebrew/cask\n$ brew cask install tuntap\n\n\n\n$ sudo bash\nroot@MBP2018:~/workspace/qemu/test-002# exec 4<>/dev/tap0\nroot@MBP2018:~/workspace/qemu/test-002# ll /dev/tap0\ncrw-rw----  1 root  wheel   37,   0 12 16 21:31 /dev/tap0\n\n\n\nroot@MBP2018:~/workspace/qemu/test-002# exec 4>&-\nroot@MBP2018:~/workspace/qemu/test-002# exit\n$\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"install-qemu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-qemu"}},[t._v("#")]),t._v(" Install QEMU")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("brew install qemu\n\n\n\nqemu-system-x86_64 --version\n")])])]),s("h2",{attrs:{id:"create-a-disk-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-disk-image"}},[t._v("#")]),t._v(" Create a Disk Image")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("qemu-img create -f qcow2 vdisk.qcow2 20G\n")])])]),s("h2",{attrs:{id:"install-os-with-iso"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-os-with-iso"}},[t._v("#")]),t._v(" Install OS with ISO")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("touch start.sh\nsudo chmod +x start.sh\nvim start.sh\n")])])]),s("p",[s("strong",[t._v("start.sh")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("#!/bin/sh\nqemu-system-x86_64 \\\n  -machine type=q35,accel=hvf \\\n  -cpu host \\\n  -smp cpus=6 \\\n  -m 4G \\\n  -vga virtio \\\n  -display default,show-cursor=on \\\n  -device usb-tablet \\\n  -usb \\\n  -cdrom $HOME/ISO/debian-10.7.0-amd64-netinst.iso \\\n  -drive file=vdisk.qcow2,if=virtio \\\n  -boot d\n\n\n\n./start.sh\n")])])]),s("h2",{attrs:{id:"launch-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#launch-os"}},[t._v("#")]),t._v(" Launch OS")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("vim start.sh\n\n\nstart.sh\n#!/bin/sh\nqemu-system-x86_64 \\\n  ......\n  -boot c\n\n\n\n./start.shlll\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);