(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{347:function(a,s,n){"use strict";n.r(s);var l=n(10),e=Object(l.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"lua-作業環境安裝指引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lua-作業環境安裝指引"}},[a._v("#")]),a._v(" Lua 作業環境安裝指引")]),a._v(" "),s("h2",{attrs:{id:"透過套件安裝作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#透過套件安裝作業"}},[a._v("#")]),a._v(" 透過套件安裝作業")]),a._v(" "),s("h3",{attrs:{id:"執行安裝指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#執行安裝指令"}},[a._v("#")]),a._v(" 執行安裝指令")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo pacman -S lua luarocks\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"驗證安裝結果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驗證安裝結果"}},[a._v("#")]),a._v(" 驗證安裝結果")]),a._v(" "),s("ol",[s("li",[a._v("驗證 Lua 直譯器已能正常運作。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[alanjui@VB2101-Manjaro-KDE-202 .vim]$ which lua\n/usr/bin/lua\n[alanjui@VB2101-Manjaro-KDE-202 .vim]$ which luarocks\n/usr/bin/luarocks\n\n\n$ lua\nLua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio\n> ^D\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("驗證 Lua 套件管理器，亦能正常運作：使用 luarocks 套件管理器，安裝 luasocket 。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ sudo luarocks install luasocket\n$ lua\nLua 5.4.2  Copyright (C) 1994-2020 Lua.org, PUC-Rio\n> require "socket"\ntable: 0x7ff0ef004f50   /usr/share/lua/5.4/socket.lua\n> ^D\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"透過原始碼安裝作業"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#透過原始碼安裝作業"}},[a._v("#")]),a._v(" 透過原始碼安裝作業")]),a._v(" "),s("p",[a._v("以下作業程序，系參考 Lua 官方文件： "),s("a",{attrs:{href:"https://www.lua.org/manual/5.4/readme.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Welcome to Lua 5.4"),s("OutboundLink")],1),a._v(" 完成。")]),a._v(" "),s("h3",{attrs:{id:"安裝「原始碼編譯工具」"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝「原始碼編譯工具」"}},[a._v("#")]),a._v(" 安裝「原始碼編譯工具」")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo pacman -Sy base-devel\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"下載「原始碼」"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下載「原始碼」"}},[a._v("#")]),a._v(" 下載「原始碼」")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ cd ~/build\n$ wget https://luarocks.org/releases/luarocks-X.Y.Z.tar.gz\n$ tar zxpf luarocks-X.Y.Z.tar.gz\n$ la lua-X.Y.Z\n總計 24\ndrwxr-xr-x 4 alanjui alanjui 4096 11月 13 23:42 .\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:44 ..\ndrwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:35 doc\n-rw-r--r-- 1 alanjui alanjui 3146 11月 11 04:54 Makefile\n-rw-r--r-- 1 alanjui alanjui  151 11月 13 23:42 README\ndrwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:33 src\n$ cd luarocks-X.Y.Z\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("【下載 Lua 5.4.2】：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd ~/build\ncurl -R -O http://www.lua.org/ftp/lua-5.4.2.tar.gz\ntar zxf lua-5.4.2.tar.gz\ncd lua-5.4.2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"編譯-lua-套件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#編譯-lua-套件"}},[a._v("#")]),a._v(" 編譯 Lua 套件")]),a._v(" "),s("ol",[s("li",[a._v("確認 Lua 是否支援自己所用的「作業系統」。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make help\n\nThe platforms currently supported are:\n\n- guess\n- aix\n- bsd\n- c89\n- freebsd\n- generic\n- linux\n- linux-readline\n- macosx\n- mingw\n- posix\n- solaris\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("執行編譯")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make linux-readline\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("檢驗編譯結果")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make test\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"驗證-lua-已能正常運作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驗證-lua-已能正常運作"}},[a._v("#")]),a._v(" 驗證 Lua 已能正常運作")]),a._v(" "),s("p",[a._v("完成安裝後，Lua 所需使用之執行檔及相關檔案，所在路徑如下：")]),a._v(" "),s("ul",[s("li",[a._v("lua: /usr/local/bin/lua")]),a._v(" "),s("li",[a._v("luac: /usr/local/bin/luac")]),a._v(" "),s("li",[a._v("lua.h luaconf.h lualib.h lauxlib.h lua.php: /usr/local/include")]),a._v(" "),s("li",[a._v("liblua.a: /usr/local/lib")]),a._v(" "),s("li",[a._v("lua.1 luac.1 /usr/local/man/man1")])]),a._v(" "),s("p",[a._v("驗證安裝結果的方法：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ which lua\n/usr/local/bin/lua\n\n$ which lua\n/usr/local/bin/luac\n\n$ ll /usr/local/include/lua*\n-rw-r--r--  1 root     admin    15K 11 13 23:32 /usr/local/include/lua.h\n-rw-r--r--  1 root     admin   191B 12 23  2004 /usr/local/include/lua.hpp\n-rw-r--r--  1 root     admin    20K 11 13 23:32 /usr/local/include/luaconf.h\nlrwxr-xr-x  1 alanjui  admin    41B  1 22 13:11 /usr/local/include/luajit-2.0 -> ../Cellar/luajit/2.0.5/include/luajit-2.0\n-rw-r--r--  1 root     admin   1.2K 11 13 23:32 /usr/local/include/lualib.h\n\n$ ll /usr/local/lib/lua\ntotal 0\ndrwxr-xr-x  2 root  admin    64B  1 18 13:36 5.2\ndrwxr-xr-x  3 root  admin    96B  1 20 11:27 5.3\ndrwxr-xr-x  2 root  admin    64B  1 24 10:33 5.4\n\n$ ll /usr/local/man/man1\ntotal 16\n-rw-r--r--  1 root  wheel   3.0K  5 22  2020 lua.1\n-rw-r--r--  1 root  wheel   3.0K 11 17  2011 luac.1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("h3",{attrs:{id:"安裝-lua-套件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-lua-套件"}},[a._v("#")]),a._v(" 安裝 Lua 套件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo make linux-readline install\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"設定-vim-neovim-對-lua-的支援"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定-vim-neovim-對-lua-的支援"}},[a._v("#")]),a._v(" 設定 Vim/Neovim 對 Lua 的支援")]),a._v(" "),s("h3",{attrs:{id:"安裝-lua-language-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-lua-language-server"}},[a._v("#")]),a._v(" 安裝 Lua Language Server")]),a._v(" "),s("p",[a._v("Ref: https://emacs-lsp.github.io/lsp-mode/page/lsp-lua-language-server/")]),a._v(" "),s("ol",[s("li",[a._v("安裝 ninja。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo pacman -S ninja\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[a._v("確認已安裝 C++17 編譯器。")])]),a._v(" "),s("li",[s("p",[a._v("下載原始碼。")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd ~/build\ngit clone https://github.com/sumneko/lua-language-server\ncd lua-language-server\ngit submodule update --init --recursive\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("執行編譯。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd 3rd/luamake\nninja -f ninja/linux.ninja\ncd ../..\n./3rd/luamake/luamake rebuild\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("執行 Lua Language Server 。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./bin/Linux/lua-language-server -E ./main.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("執行「安裝」。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv ~/build/lua-language-server ~/.local/share/\ncd ~/.local/share/lua-language-server/bin/Linux\ncp * ../\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"設定-coc-nvim-使之支援-lua-lsp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定-coc-nvim-使之支援-lua-lsp"}},[a._v("#")]),a._v(" 設定 coc-nvim 使之支援 Lua LSP")]),a._v(" "),s("p",[a._v("設定 coc-nvim ，使之支援 Lua Language Server。")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("啟動 Vim 8 / Neovim 0.5")])]),a._v(" "),s("li",[s("p",[a._v("透過 Command Line ，執行 coc-nvim 安裝指令：")])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(":CocInstall coc-lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("設定 Lua Language Server Path")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(":CocConfig\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("【註】：等同 "),s("code",[a._v("nvim ~/.config/nvim/coc-settings.json")]),a._v(" 或\n"),s("code",[a._v("vim ~/.vim/coc-settings.json")]),a._v(" 。")]),a._v(" "),s("p",[a._v("coc-settings.json：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n    ....\n    "languageserver": {\n        "bash": {\n            ....\n        },\n        "lua": {\n            "command": "~/.local/share/lua-language-server/bin/lua-language-server",\n            "args": [\n              "-E",\n              "-e",\n              "LANG=en",\n              "~/.local/share/lua-language-server/main.lua"\n            ],\n            "filetypes": ["lua"],\n            "trace.server": "verbose"\n        }\n    },\n    ....\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("h3",{attrs:{id:"驗證設定正確完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驗證設定正確完成"}},[a._v("#")]),a._v(" 驗證設定正確完成")]),a._v(" "),s("ol",[s("li",[a._v("啟動 Vim/Neovim 編輯器，編輯 Lua 原始碼。")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cd ~/.vim/lua\nvim testLua.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("編譯及執行 Lua 原始碼。")])]),a._v(" "),s("p",[a._v("Presss key: [Space][a][t] to open a floating window for terminal.")]),a._v(" "),s("p",[a._v("Entering commad below:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lua testLua.lua\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Entering "),s("code",[a._v("exit")]),a._v(" command to close terminal window and return to vim editor.")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("exit\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"參考資料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[a._v("#")]),a._v(" 參考資料")]),a._v(" "),s("h3",{attrs:{id:"install-lua-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-locally"}},[a._v("#")]),a._v(" Install Lua locally")]),a._v(" "),s("p",[a._v('To install Lua locally after building it, do "make local". This will create\na directory install with subdirectories bin, include, lib, man, share, and\ninstall Lua as listed below.')]),a._v(" "),s("ul",[s("li",[a._v("bin:\n"),s("ul",[s("li",[a._v("lua")]),a._v(" "),s("li",[a._v("luac")])])]),a._v(" "),s("li",[a._v("include:\n"),s("ul",[s("li",[a._v("lua.h")]),a._v(" "),s("li",[a._v("luaconf.h")]),a._v(" "),s("li",[a._v("lualib.h")]),a._v(" "),s("li",[a._v("lauxlib.h")]),a._v(" "),s("li",[a._v("lua.hpp")])])]),a._v(" "),s("li",[a._v("lib:\n"),s("ul",[s("li",[a._v("liblua.a")])])]),a._v(" "),s("li",[a._v("man/man1:\n"),s("ul",[s("li",[a._v("lua.1")]),a._v(" "),s("li",[a._v("luac.1")])])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("make linux-readline local\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB01-Debian-10:~/build/lua-5.4.2$ make linux-readline local\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake all SYSCFLAGS=\"-DLUA_USE_LINUX -DLUA_USE_READLINE\" SYSLIBS=\"-Wl,-E -ldl -lreadline\"\nmake[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake[2]: Nothing to be done for 'all'.\nmake[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake install INSTALL_TOP=../install\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2'\ncd src && mkdir -p ../install/bin ../install/include ../install/lib ../install/man/man1 ../install/share/lua/5.4 ../install/lib/lua/5.4\ncd src && install -p -m 0755 lua luac ../install/bin\ncd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp ../install/include\ncd src && install -p -m 0644 liblua.a ../install/lib\ncd doc && install -p -m 0644 lua.1 luac.1 ../install/man/man1\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2'\n\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$ la\n總計 28\ndrwxr-xr-x 5 alanjui alanjui 4096  2月 19 21:28 .\ndrwxr-xr-x 6 alanjui alanjui 4096  2月 18 19:40 ..\ndrwxr-xr-x 2 alanjui alanjui 4096 11月 13 23:35 doc\ndrwxr-xr-x 7 alanjui alanjui 4096  2月 19 21:28 install\n-rw-r--r-- 1 alanjui alanjui 3146 11月 11 04:54 Makefile\n-rw-r--r-- 1 alanjui alanjui  151 11月 13 23:42 README\ndrwxr-xr-x 2 alanjui alanjui 4096  2月 18 19:40 src\n\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$ la install\n總計 28\ndrwxr-xr-x 7 alanjui alanjui 4096  2月 19 21:28 .\ndrwxr-xr-x 5 alanjui alanjui 4096  2月 19 21:28 ..\ndrwxr-xr-x 2 alanjui alanjui 4096  2月 19 21:28 bin\ndrwxr-xr-x 2 alanjui alanjui 4096  2月 19 21:28 include\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 lib\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 man\ndrwxr-xr-x 3 alanjui alanjui 4096  2月 19 21:28 share\n\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$ tree install\ninstall\n├── bin\n│   ├── lua\n│   └── luac\n├── include\n│   ├── lauxlib.h\n│   ├── luaconf.h\n│   ├── lua.h\n│   ├── lua.hpp\n│   └── lualib.h\n├── lib\n│   ├── liblua.a\n│   └── lua\n│       └── 5.4\n├── man\n│   └── man1\n│       ├── lua.1\n│       └── luac.1\n└── share\n    └── lua\n        └── 5.4\n\n10 directories, 10 files\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br"),s("span",{staticClass:"line-number"},[a._v("52")]),s("br"),s("span",{staticClass:"line-number"},[a._v("53")]),s("br"),s("span",{staticClass:"line-number"},[a._v("54")]),s("br"),s("span",{staticClass:"line-number"},[a._v("55")]),s("br"),s("span",{staticClass:"line-number"},[a._v("56")]),s("br"),s("span",{staticClass:"line-number"},[a._v("57")]),s("br"),s("span",{staticClass:"line-number"},[a._v("58")]),s("br"),s("span",{staticClass:"line-number"},[a._v("59")]),s("br"),s("span",{staticClass:"line-number"},[a._v("60")]),s("br")])]),s("p",[a._v('To install Lua locally, but in some other directory,\ndo "make install INSTALL_TOP=xxx", where xxx is your chosen directory.\nThe installation starts in the src and doc directories, so take care\nif INSTALL_TOP is not an absolute path.')]),a._v(" "),s("h3",{attrs:{id:"install-lua-golbally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-lua-golbally"}},[a._v("#")]),a._v(" Install Lua golbally")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo make linux-readline install INSTALL_TOP=/usr\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("alanjui@VB01-Debian-10:~/build/lua-5.4.2$ sudo make linux-readline install INSTALL_TOP=/usr\nmake[1]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake all SYSCFLAGS=\"-DLUA_USE_LINUX -DLUA_USE_READLINE\" SYSLIBS=\"-Wl,-E -ldl -lreadline\"\nmake[2]: Entering directory '/home/alanjui/build/lua-5.4.2/src'\nmake[2]: Nothing to be done for 'all'.\nmake[2]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\nmake[1]: Leaving directory '/home/alanjui/build/lua-5.4.2/src'\ncd src && mkdir -p /usr/bin /usr/include /usr/lib /usr/man/man1 /usr/share/lua/5.4 /usr/lib/lua/5.4\ncd src && install -p -m 0755 lua luac /usr/bin\ncd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/include\ncd src && install -p -m 0644 liblua.a /usr/lib\ncd doc && install -p -m 0644 lua.1 luac.1 /usr/man/man1\nalanjui@VB01-Debian-10:~/build/lua-5.4.2$\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("p",[a._v("These are the only directories you need for development. If you only want\nto run Lua programs, you only need the files in bin and man. The files in\ninclude and lib are needed for embedding Lua in C or C++ programs.")])])}),[],!1,null,null,null);s.default=e.exports}}]);