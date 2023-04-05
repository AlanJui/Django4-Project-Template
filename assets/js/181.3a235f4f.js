(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{466:function(n,a,e){"use strict";e.r(a);var o=e(10),r=Object(o.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"在-mac-安裝-jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-mac-安裝-jdk"}},[n._v("#")]),n._v(" 在 Mac 安裝 JDK")]),n._v(" "),a("p",[n._v("http://blog.tonycube.com/2018/11/java-openjdk.html")]),n._v(" "),a("p",[n._v("（1）安裝 Adopt OpenJDK 前")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('$ java -version\njava version "1.8.0_192"\nJava(TM) SE Runtime Environment (build 1.8.0_192-b12)\nJava HotSpot(TM) 64-Bit Server VM (build 25.192-b12, mixed mode)\n\n$ javac -version\njavac 1.8.0_192\n')])])]),a("p",[n._v("（2）透過 Homebrew 安裝 Adopt OpenJDK")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("brew tap adoptopenjdk/openjdk\n\n# 如果你想安裝最新版本，目前是 14\nbrew cask install adoptopenjdk\n\n# 或是安裝版本 LTS 版本：11\nbrew cask install adoptopenjdk11\n\n# 安裝後目錄\n/Library/Java/JavaVirtualMachines\n\n\n\nbrew cask install adoptopenjdk11\nUpdating Homebrew...\n==> Downloading https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.7%2B10/OpenJDK11U-jdk_x64_mac_hotspot_11.0.7_10.pkg\n==> Downloading from https://github-production-release-asset-2e65be.s3.amazonaws.com/140419044/9ef56580-7f38-11ea-9145-7f63713950c7?X-Amz-Algorithm=AW\n######################################################################## 100.0%\n==> Verifying SHA-256 checksum for Cask 'adoptopenjdk11'.\n==> Installing Cask adoptopenjdk11\n==> Running installer for adoptopenjdk11; your password may be necessary.\n==> Package installers may write to any location; options such as --appdir are ignored.\nPassword:\ninstaller: Package name is AdoptOpenJDK\ninstaller: Installing at base path /\ninstaller: The install was successful.\npackage-id: net.adoptopenjdk.11.jdk\nversion: 11.0.7+10\nvolume: /\nlocation: Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk\ninstall-time: 1589337173\n🍺  adoptopenjdk11 was successfully installed!\n\n$ ll /Library/Java/JavaVirtualMachines\ntotal 0\ndrwxr-xr-x  3 root  wheel    96B  5 13 10:32 adoptopenjdk-11.jdk\ndrwxr-xr-x  3 root  wheel    96B 11 19  2018 jdk1.8.0_192.jdk\n\n$ ll /Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home\ntotal 8\ndrwxr-xr-x  35 root  wheel   1.1K  4 15 18:25 bin\ndrwxr-xr-x   3 root  wheel    96B  4 15 20:15 bundle\ndrwxr-xr-x   7 root  wheel   224B  4 15 18:25 conf\ndrwxr-xr-x   9 root  wheel   288B  4 15 18:25 include\ndrwxr-xr-x  72 root  wheel   2.3K  4 15 18:25 jmods\ndrwxr-xr-x  72 root  wheel   2.3K  4 15 18:26 legal\ndrwxr-xr-x  57 root  wheel   1.8K  4 15 18:26 lib\ndrwxr-xr-x   5 root  wheel   160B  5 13 10:32 man\n-rw-r--r--   1 root  wheel   1.2K  4 15 18:26 release\n\n$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home\n")])])]),a("p",[n._v("（3）設定 Java PATH")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("export JAVA_HOME=$(/usr/libexec/java_home)\nexport PATH=$JAVA_HOME/bin:$PATH\n")])])]),a("p",[n._v("（4）驗證安裝後已能正常運作")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v('$ java -version\nopenjdk version "11.0.7" 2020-04-14\nOpenJDK Runtime Environment AdoptOpenJDK (build 11.0.7+10)\nOpenJDK 64-Bit Server VM AdoptOpenJDK (build 11.0.7+10, mixed mode)\n\n$ javac -version\njavac 11.0.7\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);