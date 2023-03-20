---
sidebar: auto
---

# Git 操作指引

## 作業指引

### 將已納入版本管理的檔案移除

若有剛簽入（commit）檔案，已納入容器，管理其內容變更及識別版本。可因需要，
將之撤除。

### 剛完成簽入的檔案欲捨棄

剛完成簽入（commit）作業後，發現有無需納管之檔案，不慎已置入容器，需將之撤除。

1. 取消最近一次的 commit 。

```
git reset --soft HEAD~1
```

2. 自 staging 區，除去不需再納入版本管理檔案。

```
git reset HEAD [file]
```

3. 自 index 區，除去不需再納入版本管理檔案。

```
git rm --cached [file]
```

4. 重新再簽入容器。

```
git commit --amend
```

5. 驗證執行結果。

```
git ls-files
```

### 列示所有納管檔案

將納管在 Git Repo 中的檔案，全部列示。

```
$ git ls-files
.gitignore
.pylintrc
.python-version
app_config/__init__.py
app_config/asgi.py
app_config/settings.py
app_config/settings_local.py
app_config/settings_local_example.py
app_config/urls.py
app_config/wsgi.py
config/app1.ccc.tw.local
config/uwsgi_app1.ini
db.sqlite3
index.html
manage.py
media/search.svg
requirements.txt
```

### 列示所有標籤

將容器已建立之所有標籤，全部列示。

```
git tag -l
```

### 發行版本

執行以下作業前，需先完成 git add 與 git commit 之「簽入作業」。

1. 建立新標籤。

```
git tag -a [tag_name] -m "[message]"
```

📺 發行 v0.1 版 Django App 。

```
git tag -a v0.1.0 -m "已完成驗證 Django App 可佈署至上線環境（尙缺DB）"
```

2. 確認標籤已被建立。

```
git tag
```

### 開發新版本

1. 建立「新版本」使用之分支（branch）

```
git branch [dev_branch_name]
```

2. 切換分支

```
git checkout [dev_branch_name]
```

📚 上述步驟 1 及 2 可合併成如下一個指令。

```
git checkout -b [dev_branch_name]
```

📚 刪去 Local 端已棄置不用之分支。

```
git branch -d [dev_branch_name]
```

3. 檢視目前所使用之分支，借以確認已成功完成切換。

```
git branch
```

📺 建立新版本開發用 v0.1.1 分支。

```
$ git branch v0.1.1

$ git checkout v0.1.1
切換到分支 'v0.1.1'

$ git branch
  master
* v0.1.1
```

### 發行更新版

例如：v0.1.1 版，以 v0.1 版為基礎，進行新版本 v0.2 開發作業。在開發作業過程中
，更新版的開發作業，在開發期間，使用「分支」名稱為：「v0.1.1」進行作業。

在程式編撰完成及通過測試後，發行「更新版」：v0.2.0 時，其作業程序如下。

【註】：在執行發行更新版作業前，原先在「開發時期」所有的新增／刪除/變更檔案，
均需已完成 git add 及 git commit 之「簽入作業」。

1. 切換分支回到 master 。

```
git checkout master
```

2. 將「開發時期」使用之「分支」：v0.1.1 ，與分支：master 合併。

```
git branch
git merege [dev_branch_name]
```

📺

```
git merege v0.1.1
```

3. 刪去 Local 端已棄置不用之分支。

```
git branch -d [branch_name]
```

📺

```
git branch -d v0.1.1
```

4. 執行「版本發行」作業。

📺

```
git tag -a v0.2.0 -m "自 v0.1.1 變更後，改發行 v0.2.0"
```

## 問題診斷與狀況排除

- [執行 git status 指令後，畫面顯示的中文檔名為亂碼](https://www.google.com/search?q=git+status+%E4%B8%AD%E6%96%87%E4%BA%82%E7%A2%BC&oq=git+stat&aqs=chrome.1.69i57j35i39j0l2j69i65j69i60l3.7942j0j7&sourceid=chrome&ie=UTF-8)

## 參考資料

### 取消簽入

- [How to remove files from Git commit](https://devconnected.com/how-to-remove-files-from-git-commit/)

### 使用標籤（tag）

- [Git 官網文件：2.6 Git 基礎 - 標籤](https://git-scm.com/book/zh-tw/v2/Git-%E5%9F%BA%E7%A4%8E-%E6%A8%99%E7%B1%A4)
