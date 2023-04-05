(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{368:function(s,a,e){"use strict";e.r(a);var t=e(10),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-postgres-db-server-安裝指引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-postgres-db-server-安裝指引"}},[s._v("#")]),s._v(" Ubuntu： Postgres DB Server 安裝指引")]),s._v(" "),a("h2",{attrs:{id:"安裝作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝作業"}},[s._v("#")]),s._v(" 安裝作業")]),s._v(" "),a("h3",{attrs:{id:"安裝-postgres-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-postgres-server"}},[s._v("#")]),s._v(" 安裝 Postgres Server")]),s._v(" "),a("ol",[a("li",[s._v("執行 Postgres 套件安裝指令：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo apt install postgresql postgresql-contrib\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("【Postgres 操作摘要】：")]),s._v(" "),a("ul",[a("li",[s._v("程式： /var/lib/postgresql/11/main/")]),s._v(" "),a("li",[s._v("重新啟動 Postgres Server： /usr/lib/postgresql/11/bin/pg_ctl -D /var/lib/postgresql/11/main -l logfile start")])]),s._v(" "),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ /usr/lib/postgresql/11/bin/pg_ctl -D /var/lib/postgresql/11/main -l logfile start\n\nVer Cluster Port Status Owner Data directory Log file\n11 main 5432 down postgres /var/lib/postgresql/11/main /var/log/postgresql/postgresql-11-main.log\nupdate-alternatives: using /usr/share/postgresql/11/man/man1/postmaster.1.gz to provide /usr/share/man/man1/postmaster.1.gz (postmaster.1.gz) in auto mode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("驗證安裝結果")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ sudo -u postgres psql -c "SELECT version();"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"資料庫管理工具操作法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#資料庫管理工具操作法"}},[s._v("#")]),s._v(" 資料庫管理工具操作法")]),s._v(" "),a("p",[s._v("使用 psql 作為「Postgres 資料庫資料」管理工具。")]),s._v(" "),a("h3",{attrs:{id:"方法一-以-postgres-帳號操作-psql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-以-postgres-帳號操作-psql"}},[s._v("#")]),s._v(" 方法一：以 postgres 帳號操作 psql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo su - postgres\n\npsql\n# [Command]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alanjui@SRV-2020:~$ sudo su - postgres\npostgres@SRV-2020:~$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres@SRV-2020:~$ pwd\n/var/lib/postgresql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('postgres@SRV-2020:~$ psql\npsql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=# \\q\npostgres@SRV-2020:~$\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres@SRV-2020:~$ exit\n登出\nalanjui@SRV-2020:~$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"方法二-以一般使用者帳號操作-psql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-以一般使用者帳號操作-psql"}},[s._v("#")]),s._v(" 方法二：以一般使用者帳號操作 psql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo -u postgres psql\n\npostgres# [Postgres_Commands]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('alanjui@SRV-2020:~$ sudo -u postgres psql\npsql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))\nType "help" for help.\n\npostgres=# \\q\nalanjui@SRV-2020:~$\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"方法三-以一般使用者帳號操作指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法三-以一般使用者帳號操作指令"}},[s._v("#")]),s._v(" 方法三：以一般使用者帳號操作指令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('sudo su - postgres -c "[Command]"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ sudo su - postgres -c "createuser django2_helloworld"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"建立資料庫容器及設定管理者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫容器及設定管理者"}},[s._v("#")]),s._v(" 建立資料庫容器及設定管理者")]),s._v(" "),a("p",[s._v("透過 Postgres 資料庫管理系統，建立「資料庫容器」及「管理者」。並透過 Role 操作，\n設定管理者帳號之「密碼」。")]),s._v(" "),a("h3",{attrs:{id:"切換成資料庫服務管理者帳號"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切換成資料庫服務管理者帳號"}},[s._v("#")]),s._v(" 切換成資料庫服務管理者帳號")]),s._v(" "),a("p",[s._v("對於「資料庫」之管理作業，應於操作之前，先將使用者帳號，切換成：\n「Postgres Service 管理者帳號」：postgres。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo su - postgres\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"建立資料庫使用者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫使用者"}},[s._v("#")]),s._v(" 建立資料庫使用者")]),s._v(" "),a("p",[s._v("執行下列指令，建立「資料庫系統」之「使用者帳號」。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("createuser [DB_User_Name]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres@SRV-2020:~$ createuser django2_helloworld\npostgres@SRV-2020:~$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ sudo su - postgres -c "createuser django2_helloworld"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"建立資料庫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立資料庫"}},[s._v("#")]),s._v(" 建立資料庫")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("createdb [DB_Repo_Name]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres@SRV-2020:~$ createdb django2_helloworld_db\npostgres@SRV-2020:~$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ sudo su - postgres -c "createdb django2_helloworld_db"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"指派資料庫管理者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指派資料庫管理者"}},[s._v("#")]),s._v(" 指派資料庫管理者")]),s._v(" "),a("p",[s._v("透過「角色指派」指令，指派某「資料庫使用者」，為某「資料庫容器」之「擁有者」。\n以此方式，將「資料庫使用者」設定成「資料庫容器管理者」。")]),s._v(" "),a("ol",[a("li",[s._v("啟用 psql 資料庫管理工具。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("psql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("執行指令，指派「資料庫使用者」，對「資料庫容器」擁有全部的「操作使用權限」；\n令此「資料庫使用者」成為「資料庫容器管理者」。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("grant all privileges on database [DB_Repo_Name] to [DB_User_Name];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("對「資料庫容器管理者」設定「密碼」。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alter role [DB_User_Name] with password '[Password]';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("📺")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("postgres@SRV-2020:~$ psql\npsql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))\nType \"help\" for help.\n\npostgres=# grant all privileges on database django2_helloworld_db to django2_helloworld;\nGRANT\npostgres=# alter role django2_helloworld with password 'Passw0rd';\nALTER ROLE\npostgres=# \\q\npostgres@SRV-2020:~$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo -u postgres psql\npsql (11.2 (Ubuntu 11.2-1.pgdg18.04+1))\nType \"help\" for help.\n\npostgres=# grant all privileges on database django2_helloworld_db to django2_helloworld;\nGRANT\npostgres=# alter role django2_helloworld with password 'Passw0rd';\nALTER ROLE\npostgres=# \\q\n$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"常用管理作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用管理作業"}},[s._v("#")]),s._v(" 常用管理作業")]),s._v(" "),a("h3",{attrs:{id:"刪除資料庫使用者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刪除資料庫使用者"}},[s._v("#")]),s._v(" 刪除資料庫使用者")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ sudo su - postgres -c "dropuser django2_helloworld"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);