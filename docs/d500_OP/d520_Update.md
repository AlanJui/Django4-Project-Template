---
sidebar: auto
---

<!-- markdownlint-disable MD013 MD024 MD043 -->

# 系統更新作業程序

## 文件摘要

當應用系統需要：新增功能、修正軟體錯誤時，機房管理人員當循本
作業程序所述步驟，執行新版軟體更新作業。

## 作業程序

1. 停止應用系統：在伺服器上執行 Ctrl + C 命令，停止正在運行
   的應用系統。

2. 獲取更新後的原始碼：從版本控制系統（如 Git）中獲取更新後
   的應用系統原始碼，並覆蓋伺服器上的

3. 更新相依套件：如有必要，請執行 pip install -r
   requirements.txt 命令，以更新應用系統所需的相依套件。

4. 更新資料庫結構：如有資料庫結構變動，請執行 python
   manage.py migrate 命令，以更新資料庫結構。

5. 重新啟動應用系統：分別重啟 Nginx 和 Gunicorn 伺服器，使更
   新後的應用系統生效。例如，對於 Gunicorn，您可以使用類似於
   以下的命令：gunicorn -c gunicorn.conf.py
   your_project.wsgi:application。對於 Nginx，您可以使用類似
   於 sudo service nginx restart 的命令重啟。
