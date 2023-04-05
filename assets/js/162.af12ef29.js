(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{447:function(n,e,t){"use strict";t.r(e);var r=t(10),s=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"postgres-for-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgres-for-docker"}},[n._v("#")]),n._v(" postgres for docker")]),n._v(" "),e("h1",{attrs:{id:"docker-指令集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-指令集"}},[n._v("#")]),n._v(" docker 指令集")]),n._v(" "),e("h2",{attrs:{id:"docker-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[n._v("#")]),n._v(" docker run")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('docker run --help\n\nUsage:        docker run \\[OPTIONS] IMAGE [COMMAND\\] [ARG...]\nOptions:\n  -d, --detach                         Run container in background and print container ID\n  -e, --env list                       Set environment variables\n      --name string                    Assign a name to the container\n\n\n\ndocker run --name some-postgres -e POSTGRES_PASSWORD=Passw0rd -d postgres\n\n\n\ndocker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS               NAMES\naa20cd13cc2a        postgres            "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp            some-postgres\n')])])]),e("h2",{attrs:{id:"docker-exec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-exec"}},[n._v("#")]),n._v(" docker exec")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("docker exec --help\n\nUsage:        docker exec [OPTIONS] CONTAINER COMMAND [ARG...]\n\nRun a command in a running container\n\nOptions:\n  -d, --detach               Detached mode: run command in the background\n      --detach-keys string   Override the key sequence for detaching a container\n  -e, --env list             Set environment variables\n  -i, --interactive          Keep STDIN open even if not attached\n      --privileged           Give extended privileges to the command\n  -t, --tty                  Allocate a pseudo-TTY\n  -u, --user string          Username or UID (format: <name|uid>[:<group|gid>])\n  -w, --workdir string       Working directory inside the container\n")])])]),e("p",[n._v("以下指令示範，將 Host 自 db 改成 localhost 亦行")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('# docker exec -it aa2 /bin/bash\ndocker exec -it some-postgres /bin/bashp\nroot@aa20cd13cc2a:/# su - postgres\npostgres@aa20cd13cc2a:~$ psql -h db -U postgres -W\nPassword:\npsql (12.2 (Debian 12.2-2.pgdg100+1))\nType "help" for help.\n\npostgres=# postgres=# \\l\n postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |\n template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n           |          |          |            |            | postgres=CTc/postgres\n template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +\n           |          |          |            |            | postgres=CTc/postgres\n\npostgres=# \\c postgres\nPassword for user postgres:\nYou are now connected to database "postgres" as user "postgres".\npostgres=# \\dt\nDid not find any relations.\npostgres=# \\dt\nDid not find any relations.\npostgres=# CREATE TABLE leads (id INTEGER PRIMARY KEY, name VARCHAR);\nCREATE TABLE\npostgres=# \\dt\n public | leads | table | postgres\n\npostgres=# INSERT INTO leads(id, name) VALUES (1, \'AlanJui\');\nINSERT 0 1\n\npostgres=# select * from leads;\n  1 | AlanJui\n\npostgres=# \\dt\n         List of relations\n Schema | Name  | Type  |  Owner\n--------+-------+-------+----------\n public | leads | table | postgres\n(1 row)\n\npostgres=# \\q\npostgres@aa20cd13cc2a:~$ exit\nlogout\nroot@aa20cd13cc2a:/# exit\nexit\n～/workspace/docker/postgres$ \n')])])]),e("h2",{attrs:{id:"docker-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-start"}},[n._v("#")]),n._v(" docker start")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('$ docker start aa2\naa2\n\n$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES\naa20cd13cc2a        postgres            "docker-entrypoint.s…"   24 minutes ago      Up 14 seconds       5432/tcp            some-postgres\n')])])]),e("h1",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[n._v("#")]),n._v(" Nginx")]),n._v(" "),e("h2",{attrs:{id:"nginx-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-log"}},[n._v("#")]),n._v(" Nginx Log")]),n._v(" "),e("p",[n._v("https://docs.splunk.com/Documentation/AddOns/released/NGINX/Setupv2\nNginx Access Log 與 Error Log 其設定，定義於 nginx.conf 設定檔中。")]),n._v(" "),e("p",[n._v("/etc/nginx/nginx.conf")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('user  nginx;\nworker_processes  1;\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    include /etc/nginx/conf.d/*.conf;\n}\n')])])]),e("h2",{attrs:{id:"web-site-設定-default-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-site-設定-default-conf"}},[n._v("#")]),n._v(" Web Site 設定（default.conf）")]),n._v(" "),e("p",[n._v("/etc/nginx/conf.d/default.conf")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("server {\n    listen       80;\n    server_name  localhost;\n\n    #charset koi8-r;\n    #access_log  /var/log/nginx/host.access.log  main;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    #error_page  404              /404.html;\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n    # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n    #\n    #location ~ \\.php$ {\n    #    proxy_pass   http://127.0.0.1;\n    #}\n\n    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n    #\n    #location ~ \\.php$ {\n    #    root           html;\n    #    fastcgi_pass   127.0.0.1:9000;\n    #    fastcgi_index  index.php;\n    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n    #    include        fastcgi_params;\n    #}\n\n    # deny access to .htaccess files, if Apache's document root\n    # concurs with nginx's one\n    #\n    #location ~ /\\.ht {\n    #    deny  all;\n    #}\n}\n")])])]),e("p",[n._v("/etc/nginx/nginx.conf")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('user  nginx;\nworker_processes  1;\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    #include /etc/nginx/conf.d/*.conf;\n    server {\n        listen       80;\n        server_name  localhost;\n    \n        #charset koi8-r;\n        #access_log  /var/log/nginx/host.access.log  main;\n    \n        location / {\n            root   /usr/share/nginx/html;\n            index  index.html index.htm;\n        }\n    \n        #error_page  404              /404.html;\n    \n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   /usr/share/nginx/html;\n        }\n    }\n}\n')])])]),e("p",[n._v("config/nginx/Dockerfile")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('FROM      nginx\n\nRUN       rm -f /etc/nginx/conf.d/default.conf\nCOPY      conf.d/web_app.conf /etc/nginx/conf.d/web_app.conf\n\nCOPY      static_collected /usr/share/nginx/html/static\n\nRUN       ls -l /etc/nginx/nginx.conf\nRUN       ls -l /etc/nginx/conf.d\nRUN       ls -l /usr/share/nginx/html/static\n\n\n\ndocker build --tag my-nginx config/nginx/Dockerfile\n\n\n\ndocker run --rm --name my-proxy -d my-nginx\n\ndocker ps\nCONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                    NAMES\n229a8be99d61        my-nginx                "nginx -g \'daemon of…"   4 seconds ago       Up 3 seconds        80/tcp                   my-proxy\n\n\n\ndocker exec -it my-proxy /bin/bash\n\nroot@229a8be99d61:/# ls -al /usr/share/nginx/html\ntotal 16\ndrwxr-xr-x 2 root root 4096 Apr 23 13:02 .\ndrwxr-xr-x 3 root root 4096 Apr 23 13:02 ..\n-rw-r--r-- 1 root root  494 Apr 14 14:19 50x.html\n-rw-r--r-- 1 root root  612 Apr 14 14:19 index.html\n\nroot@229a8be99d61:/# cat /etc/nginx/nginx.conf | more\n')])])]),e("p",[e("img",{attrs:{src:"http://127.0.0.1/static/admin/img/search.svg",alt:""}})]),n._v(" "),e("p",[e("a",{attrs:{href:"http://127.0.0.1/static/admin/img/search.svg",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://127.0.0.1/static/admin/img/search.svg"),e("OutboundLink")],1),n._v("\nhttp://127.0.0.1/static/log_msg/test.png")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('docker logs --tail="all" my-proxy\n\n\n\ndocker-compose logs web\nAttaching to docker-compose-02_web_1\nweb_1      | \\[2020-05-05 02:40:48 +0000\\] [1] [INFO] Starting gunicorn 20.0.4\nweb_1      | \\[2020-05-05 02:40:48 +0000\\] [1] [INFO] Listening at: http://0.0.0.0:8000 (1)\nweb_1      | \\[2020-05-05 02:40:48 +0000\\] [1] [INFO] Using worker: sync\nweb_1      | \\[2020-05-05 02:40:48 +0000\\] [7] [INFO] Booting worker with pid: 7\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);