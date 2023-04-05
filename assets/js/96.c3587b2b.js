(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{379:function(e,s,a){"use strict";a.r(s);var n=a(10),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-16-04-安裝-django-platform-uwsgi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-安裝-django-platform-uwsgi"}},[e._v("#")]),e._v(" Ubuntu 16.04 安裝 Django Platform(uWSGI)")]),e._v(" "),s("p",[s("strong",[e._v("作業程序：")]),e._v("\n（1）安裝 Python 執行環境\n（2）安裝 DB Server: PostgreSQL\n（3）安裝 App Server: uWSGI\n（4）安裝 Web Server: Nginx\n（5）設定 App Server 能於開機自動啟動（systemd）")]),e._v(" "),s("p",[e._v("在 Ubuntu 16.04 的伺服器，安裝以 Django + PostgreSQL 為平台所開發之「應用系統」。")]),e._v(" "),s("p",[e._v("應用系統為考量執行效能（Performance），故而將 Web Server 與 Application Server 分離，令 ：")]),e._v(" "),s("ul",[s("li",[e._v("Web Server ：專司服務靜態的 Web Client Request（如：.HTML 網頁、.CSS 樣式、.JPG / .PNG / …. 圖檔）；")]),e._v(" "),s("li",[e._v("Application Server：專司服務動態的 Web Client Request")])]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"安裝-python-執行環境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-python-執行環境"}},[e._v("#")]),e._v(" 安裝 Python 執行環境")]),e._v(" "),s("p",[s("strong",[e._v("（1）安裝 Python3")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo apt-get update\n$ sudo apt-get install python3-pip\n$ sudo -H pip3 install --upgrade pip\n")])])]),s("p",[s("strong",[e._v("（2）安裝虛擬環境（VirtualEnv）管理工具")])]),e._v(" "),s("p",[s("strong",[e._v("1.  安裝「虛擬環境（VirtualEnv）管理工具」：VirtualEnvWrapper")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo -H pip3 install virtualenv virtualenvwrapper\n")])])]),s("p",[s("strong",[e._v("2. 設定 VirtualEnvWrapper 所需之環境變數")]),e._v("\n在 ~/.bashrc 檔案中加入以下內容")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("export WORKON_HOME=~/Envs\nexport VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3\nsource /usr/local/bin/virtualenvwrapper.sh\n")])])]),s("p",[s("strong",[e._v("3. 啟用 VirtualEnvWrapper 工具：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ source ~/.bashrc \n")])])]),s("p",[e._v("參考資料：")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("建立 VirtualEnv")]),e._v(" "),s("p",[e._v("$ mkvirtualenv django2_helloworld")])]),e._v(" "),s("li",[s("p",[e._v("查詢 VirtualEnv")]),e._v(" "),s("p",[e._v("$ workon")])]),e._v(" "),s("li",[s("p",[e._v("啟用某 VirtualEnv")]),e._v(" "),s("p",[e._v("$ workon "),s("VirtualEnvName")],1)]),e._v(" "),s("li",[s("p",[e._v("停用 VirtualEnv")]),e._v(" "),s("p",[e._v("$ deactivate")])])]),e._v(" "),s("hr"),e._v(" "),s("h1",{attrs:{id:"安裝-app-server-uwsgi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-app-server-uwsgi"}},[e._v("#")]),e._v(" 安裝 App Server: uWSGI")]),e._v(" "),s("p",[s("strong",[e._v("（1）執行 App Server： uWSGI 安裝指令。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ deactivate\n$ sudo apt-get install python3-dev\n$ sudo -H pip3 install uwsgi\n\n$ sudo mkdir -p /etc/uwsgi/sites\n")])])]),s("p",[s("strong",[e._v("（2）驗證安裝已完成。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo service uwsgi status\n")])])]),s("p",[e._v("參考資料：\nuwsgi  進階用法參考。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[uwsgi]\nfor-readline = yourfile\n  env = %(_)\nendfor = \n")])])]),s("p",[e._v("使用「設定檔」：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[uwsgi]\nenv = DJANGO_SETTINGS_MODULE=$(project).settings.staging\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"安裝-web-server-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安裝-web-server-nginx"}},[e._v("#")]),e._v(" 安裝 Web Server: Nginx")]),e._v(" "),s("p",[e._v("安裝及設定 Web Server（Nginx）。")]),e._v(" "),s("p",[s("strong",[e._v("（1）執行 Web Server: Nginx 安裝指令。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo apt-get install nginx\n")])])]),s("p",[s("strong",[e._v("（2）驗證安裝已完成。")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo service nginx status\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"設定-app-server-能於開機自動啟動"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#設定-app-server-能於開機自動啟動"}},[e._v("#")]),e._v(" 設定 App Server 能於開機自動啟動")]),e._v(" "),s("p",[e._v("create a system Unit File for uWSGI")]),e._v(" "),s("p",[s("strong",[e._v("Create a service configuration file")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo subl /etc/systemd/system/uwsgi.service\n")])])]),s("p",[e._v("uwsgi.service:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[Unit]\nDescription=uWSGI Emperor service\n\n[Service]\nExecStartPre=/bin/bash -c 'mkdir -p /run/uwsgi; chown alanjui:www-data /run/uwsgi'\nExecStart=/usr/local/bin/uwsgi --emperor /etc/uwsgi/sites\nRestart=always\nKillSignal=SIGQUIT\nType=notify\nNotifyAccess=all\n\n[Install]\nWantedBy=multi-user.target\n")])])]),s("p",[s("strong",[e._v("Restart Daemon-reload (uwsgi.service chaged)")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo systemctl daemon-reload\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo service uwsgi restart\n$ sudo service uwsgi status\n")])])]),s("p",[s("strong",[e._v("設定開機需自動啟動的  Daemon (Service)")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo systemctl enable nginx\n$ sudo systemctl enable uwsgi\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"site-安裝及設定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-安裝及設定"}},[e._v("#")]),e._v(" Site 安裝及設定")]),e._v(" "),s("p",[s("strong",[e._v("（1）安裝 Site ：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ cd /app\n$ git clone <url>\n$ cd django2_helloworld\n$ mkvirtualenv django2_helloworldu\n$ (workon django2_helloworld)\n$ pip install -r requirements.txt\n\n\n$ cd /app\n$ git clone <url>\n$ cd django2_helloworld\n$ mkvirtualenv -r requirements.txt --python=python3.6 django2_helloworld\n")])])]),s("p",[s("strong",[e._v("（2）驗證已能正常執行：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ ./manage.py makemigrations\n$ ./manage.py migrate\n$ ./manage.py createsuperuser\n$ ./manage.py collectstatic\n$ ./manage.py runserver 0.0.0.0:8080\n")])])]),s("p",[s("strong",[e._v("（3）建立 App Server 設定檔：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo subl /etc/uwsgi/sites/django2_helloworld.ini\n")])])]),s("p",[e._v("django2_helloworld.ini 檔案內容：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[uwsgi]\n\nuid             = alanjui\nbase            = /app\nproject         = django2_helloworld\nsite            = helloworld_project\n\n# =======================\n# Django-related settings\n# =======================\n\n# the project base directory (full path) : /app/django2_helloworld\nchdir           = %(base)/%(project)\n# Django's wsgi file : helloworld_project.wsgi:application\nmodule          = %(site).wsgi:application\n# the virtualenv (full path) : /home/alanjui/anaconda3/envs/DJANGO2\nhome            = /home/%(uid)/Envs/%(project)\n\n# ========================\n# process-related settings\n# ========================\n\n# master\nmaster          = true\n# maximum number of worker processes\nprocesses       = 4\nthreads         = 2\n# the socket (use the full path to be safe)\nsocket          = /run/uwsgi/%(project).sock\n# ... with appropriate permissions - may be needed\nchown-socket    = %(uid):www-data\nchmod-socket    = 660\n# clear environment on exit\nvacuum          = true\n")])])]),s("p",[e._v("驗證 App Server 設定檔是否正確設定：")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("自終端機下指令：")]),e._v(" "),s("p",[e._v("uwsgi --http :8001 --home /home/alanjui/Envs/django2_helloworld --chdir /app/django2_helloworld -w helloworld_project.wsgi")])]),e._v(" "),s("li",[s("p",[e._v("自瀏覽器確認可以看到內容：")]),e._v(" "),s("p",[e._v("http://192.168.66.10:8001/")])]),e._v(" "),s("li",[s("p",[e._v("在終端機按 "),s("Ctrl",[e._v("+"),s("C",[e._v("  ，終結剛才已下的指令。")])],1)],1)])]),e._v(" "),s("p",[s("strong",[e._v("（4）建立 Web Server 設定檔：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo subl /etc/nginx/sites-available/django2_helloworld.conf \n")])])]),s("p",[e._v("Web Server 設定檔內容 -- django2_helloworld.conf：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("# configuration of the server\nserver {\n    # the port your site will be served on\n    listen          80;\n    # the domain name it will serve for\n    #server_name     .example.com; # substitute your machine's Ip address or FQDN\n    server_name     192.168.66.10;\n    charset         utf8-8;\n\n    # max upload size\n    client_max_body_size 75M;  # adjust to taste\n\n    location = /favicon.ico {\n        access_log      off;\n        log_not_found   off;\n    }\n\n    # Django media\n    location /media {\n        root    /app/django2_helloworld;\n        #alias   /app/django2_helloworld/media;  # your Django project's media files - amend as required\n    }\n\n    # settings.py: STATIC_ROOT = os.path.join(BASE_DIR, 'static/')\n    # ./manage.py collectstatic\n    location /static {\n        root    /app/django2_helloworld;\n        #alias   /app/django2_helloworld/static; # your Django project's static files - amend as required\n    }\n\n    # Finally, send all non-media requests to the Django server\n    location / {\n        include         uwsgi_params; # should be located in /etc/nginx/\n        uwsgi_pass      unix:///run/uwsgi/django2_helloworld.sock;\n    }\n}\n")])])]),s("p",[s("strong",[e._v("（5）啟用 Web Server: Nginx 設定檔")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo ln -s /etc/nginx/sites-available/django2_helloworld.conf /etc/nginx/sites-enable/\n")])])]),s("p",[s("strong",[e._v("（6）驗證 Nginx 設定檔的設定正確")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo nginx -t\n")])])]),s("p",[s("strong",[e._v("（7）重新啟動 Web Server: Nginx")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo service nginx restart\n$ sudo service nginx status\n")])])]),s("p",[s("strong",[e._v("（8）重新啟動 App Server: uWSGI")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo service uwsgi restart\n$ sudo service uwsgi status\n")])])]),s("hr"),e._v(" "),s("h1",{attrs:{id:"其它site-安裝及設定參考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它site-安裝及設定參考"}},[e._v("#")]),e._v(" 其它Site 安裝及設定參考")]),e._v(" "),s("h2",{attrs:{id:"wagtail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wagtail"}},[e._v("#")]),e._v(" Wagtail")]),e._v(" "),s("p",[s("strong",[e._v("環境設定檔:")])]),e._v(" "),s("ul",[s("li",[e._v("base.py")]),e._v(" "),s("li",[e._v("dev.py")]),e._v(" "),s("li",[e._v("staging.py")]),e._v(" "),s("li",[e._v("production.py")]),e._v(" "),s("li",[e._v("wsgi.py")])]),e._v(" "),s("p",[s("strong",[e._v("使用「環境設定檔」啟動 ./manage.py 用法:")])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging")]),e._v(" "),s("p",[e._v("$ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py migrate\n$ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py createsuperuser\n$ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py collectstatic\n$ DJANGO_SETTINGS_MODULE=wagtail_mysite.settings.staging python manage.py runserver 192.168.66.10:8888")])])]),e._v(" "),s("p",[e._v("App Server 設定檔："),s("strong",[e._v("/etc/uwsgi/sites/wagtail_mysite.ini")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[uwsgi]\nproject = wagtail_mysite\nuid = alanjui\nbase = /home/%(uid)\n\nchdir = %(base)/sites/%(project)\nhome = %(base)/Envs/%(project)\nenv = NEW_RELIC_ENVIRONMENT=staging\nenv = DJANGO_SETTINGS_MODULE=$(project).settings.staging\nmodule = %(project).wsgi:application\n\nmaster = true\nprocesses = 5\n\nsocket = /run/uwsgi/%(project).sock\nchown-socket = %(uid):www-data\nchmod-socket = 660\nvacuum = true\n")])])]),s("p",[e._v("Web Server 設定檔內容 — /etc/nginx/sites-avaiable/"),s("strong",[e._v("wagtail_mysite:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("server {\n    listen 80;\n    server_name 192.168.66.10;\n\n    location = /favicon.ico {\n            access_log off; \n            log_not_found off;\n    }\n\n    location /static/ {\n        root /home/alanjui/sites/wagtail_mysite;\n    }\n\n    location / {\n        include uwsgi_params;\n        uwsgi_pass unix:/run/uwsgi/wagtail_mysite.sock;\n    }\n}\n")])])]),s("p",[s("strong",[e._v("啟用 Web Server: Nginx 設定檔")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo ln -s /etc/nginx/sites-available/wagtail_mysite /etc/nginx/sites-enabled\n")])])]),s("hr"),e._v(" "),s("h2",{attrs:{id:"my-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#my-project"}},[e._v("#")]),e._v(" my_project")]),e._v(" "),s("p",[e._v("App Server 設定檔： "),s("strong",[e._v("/etc/uwsgi/sites/my_project.ini")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("[uwsgi]\nproject = my_project\nuid = alanjui\nbase = /home/%(uid)\n\nchdir = %(base)/sites/%(project)\nhome = %(base)/Envs/%(project)\nmodule = %(project).wsgi:application\n\nmaster = true\nprocesses = 5\n\nsocket = /run/uwsgi/%(project).sock\nchown-socket = %(uid):www-data\nchmod-socket = 660\nvacuum = true\n")])])]),s("p",[s("strong",[e._v("Verify uWSGI")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ uwsgi --http :8080 --home /home/alanjui/Envs/my_project --chdir /home/alanjui/sites/my_project -w my_project.wsgi\n")])])]),s("p",[e._v("Web Server 設定檔內容 —/etc/nginx/sites-avaiable/"),s("strong",[e._v("my_project:")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("server {\n    listen 8080;\n    server_name 192.168.66.10;\n\n    location = /favicon.ico {\n            access_log off; \n            log_not_found off;\n    }\n\n    location /static/ {\n        root /home/alanjui/sites/my_project;\n    }\n\n    location / {\n        include uwsgi_params;\n        uwsgi_pass unix:/run/uwsgi/my_project.sock;\n    }\n}\n")])])]),s("p",[s("strong",[e._v("啟用 Web Server: Nginx 設定檔")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ sudo ln -s /etc/nginx/sites-available/my_project /etc/nginx/sites-enabled\n")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);