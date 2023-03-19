---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# 使用者需求規格

## 系統需求摘要

我需要打造一個應用系統，讓我記錄漢字的「讀音」。我的需求條列如下，請代為撰寫程式碼：

- 漢字字庫編輯應用
- 文章標示讀音應用

## 漢字字庫編輯應用

需要一個「漢字字典」管理功能 。使用 han_ji_dict 為 App Name 。功能需求如下

2.1 提供基本編輯功能：新增、更改、刪除及查詢。

2.2 每個漢字標示讀音的方法，各有 5 種：

2.2.1 十五音標音：sip_ngoo_im

2.2.2 方音符號注音：hong_im

2.2.3 教會羅馬字拼音：POJ

2.2.4 台灣閩南語羅馬拼音：TL

2.2.5 中國廈門大學閩拼標音：BP

2.3 每個漢字等於兩個英文字元

2.4 每個漢字的讀音需要 15 個英文字元

2.5 每個漢字的讀音各有一至多個；

## 文章標示讀音應用

需要一個「文章標讀音」管理功能

3-1. 可以輸入一篇文章；

3-2. 文章中的「漢字讀音」，可從「漢字字典」查找其讀音，然後顯示於螢幕；

3-3. 使用 HTML Ruby Tag 為「漢字」標示「讀音」。
在執行「系統整合測試（System Integration Test）」及
「系統功能測試（System Functional Test）」前，我想
先做「單元測試（Unit Test）」，請提供可在 Django Project
執行「單元測試（Unit Test）」的 Python 程式碼。

## 系統品質測試

使用 Python 程式碼進行測試，使用之工具如下：

- Software Unit Test: 使用 Django 內建之 Unit Test
- Software Integration Test: 使用 Django Unit Test 或 Seleiumn
- System Functional Test: 使用 Seleiumn 及 Google Chrome 瀏覽模擬器

### 測試方法

- 軟體單元測試（Software Unint Test）
- 軟體整合測試（Software Integration Test）
- 系統功能測試（System Functional Test）

### 測試目標

- 漢字字典應用（Han_Ji_Dict Application）
- 文章標讀音應用（Article_Prounciation Application）

請彙總以上所有的問答（只要答覆即可），以 Markdown 文檔格式輸出。
