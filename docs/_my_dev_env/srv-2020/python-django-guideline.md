---
sidebar: auto
---

# 建置 Pyton 作業環境

## 摘要

建置 Python 語言開發應用系統時，所需之作業環境。

主要作業：
- 使用 pyenv 管理 python 直譯器版本
- 建置 Django Project 所需使用套件

## 安裝 pyenv 作業

### (1) 自 GitHub 安裝 pyenv

自 GitHub 下載 pyenv 及 pyenv-virtualenv

```
cd
git clone https://github.com/pyenv/pyenv.git ~/.pyenv
git clone https://github.com/pyenv/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv
```

### (2) 設定 Shell 作業環境

```
vim ~/.profile
```

~/.profile:

```
....
#-----------------------------------------------------------
# pyenv
#-----------------------------------------------------------

export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"

if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
  eval "$(pyenv virtualenv-init -)"   
fi
# export PYENV_VIRTUALENV_DISABLE_PROMPT=1
export PIPENV_VERBOSITY=-1
....
```

### (3) 重啟 SHELL 服務

```
exec $SHELL
```

## 設定作業使用之 Python 直譯器

### (1) 透過 pyenv 安裝 python 直譯器

透過 pyenv 這套 python 版本管理工具，安裝 python v3.8.5 版本
之直譯器。

1. 執行安裝指令。

```
pyenv install 3.8.5
```

```
$ pyenv versions
* system (set by /Users/alanjui/.pyenv/version)

$ pyenv install 3.8.5
python-build: use openssl@1.1 from homebrew
python-build: use readline from homebrew
Downloading Python-3.8.5.tar.xz...
-> https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tar.xz
Installing Python-3.8.5...
python-build: use readline from homebrew
python-build: use zlib from xcode sdk
Installed Python-3.8.5 to /Users/alanjui/.pyenv/versions/3.8.5
```

2. 檢視已安裝之 python 直譯器。

```
$ pyenv versions
* system (set by /Users/alanjui/.pyenv/version)
  3.8.5
```

### (2) 設定「預設使用之 Python 直譯器」

```
pyenv global <VerNo>
```

Ex: Without Python 2 specified

```
$ pyenv global 3.8.5

$ pyenv versions
  system
* 3.8.5 (set by /Users/alanjui/.pyenv/version)
```

Ex: With Python 2 and Python 3 specified

```
$  pyenv versions
  system
  2.7.16
* 3.8.5 (set by /Users/alanjui/.pyenv/version)
  3.9.1

$ pyenv global 2.7.16 3.9.1

$ pyenv versions
  system
* 2.7.16 (set by /Users/alanjui/.pyenv/version)
  3.8.5
* 3.9.1 (set by /Users/alanjui/.pyenv/version)
```

```
$ which python
/usr/bin/python
$ la /usr/bin/python
lrwxr-xr-x  1 root  wheel    75B  1  1  2020 /usr/bin/python -> ../../System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7
$ /usr/bin/python

WARNING: Python 2.7 is not recommended.
This version is included in macOS for compatibility with legacy software.
Future versions of macOS will not include Python 2.7.
Instead, it is recommended that you transition to using 'python3' from within Terminal.

Python 2.7.16 (default, Dec 21 2020, 23:00:36)
[GCC Apple LLVM 12.0.0 (clang-1200.0.30.4) [+internal-os, ptrauth-isa=sign+stri on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> ^D

$ which python2
/usr/bin/python2
$ la /usr/bin/python2
lrwxr-xr-x  1 root  wheel    75B  1  1  2020 /usr/bin/python2 -> ../../System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7

$ which python3
/usr/local/bin/python3
$ la /usr/local/bin/python3
lrwxr-xr-x  1 alanjui  admin    40B  2 13 12:23 /usr/local/bin/python3 -> ../Cellar/python@3.9/3.9.1_8/bin/python3
$ /usr/local/bin/python3
Python 3.9.1 (default, Feb  3 2021, 07:38:02)
[Clang 12.0.0 (clang-1200.0.32.29)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> ^D
```

## 管理 python 虛擬環境

### (1) 建置 python 虛擬環境

依據某版本之 python 直譯器，建立虛擬環境。

```
pyenv virtualenv <VerNo> <VirtualEnvName>
```

【情境用例】：

使用 python v3.9.1 ，建立名為：venv-3.9.1 之 python 
虛擬環境。

```
pyenv virtualenv 3.9.1 venv-3.9.1
```

### (2) 指定專案所使用之虛擬環境

1. 透過 pyenv local 指定專案使用之虛擬環境。

```
pyenv local <VirtualEnvName>
```

【情境用例】：

對於名為：test-100 的 Django 專案，指定使用名為：venv-3.9.1 之 python 虛擬環境。

```
$ cd ~/workspace/django/test-100

$ pyenv virtualenv 3.9.1 venv-3.9.1
Looking in links: /var/folders/36/6kwybs_92bj1_x96p67h7q8w0000gp/T/tmp67ulkd55
Requirement already satisfied: setuptools in /Users/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages (49.2.1)
Requirement already satisfied: pip in /Users/alanjui/.pyenv/versions/3.9.1/envs/venv-3.9.1/lib/python3.9/site-packages (20.2.3)

$ pyenv local venv-3.9.1

$pyenv versions
  system
  2.7.16
  3.8.5
  3.9.1
  3.9.1/envs/venv-3.9.1
* venv-3.9.1 (set by /Users/alanjui/workspace/django/test-100/.python-version)
```

2. 安裝 python 套件管理工具： pipenv 。

```
pyenv shell
pip install pipenv
```


### (3) 安裝 python 套件

```
pipenv shell
pipenv install <Python_Package>
```

【情境用例】：

在 Django 專案安裝 django 套件。

```
cd ~/workspace/django
mkdir ex-101 && cd $_

pyenv local venv-3.9.1
pipenv shell
pipenv install django
```


