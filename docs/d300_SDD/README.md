---
sidebar: auto
---

<!-- markdownlint-disable MD024 MD043 -->

# SDD

## Old Table

### HanJi Model

```python
class HanJi(models.Model):
    character = models.CharField(max_length=2, unique=True)
    sip_ngoo_im = models.CharField(max_length=15)
    hong_im = models.CharField(max_length=15)
    POJ = models.CharField(max_length=15)
    TL = models.CharField(max_length=15)
    BP = models.CharField(max_length=15)

    def __str__(self):
        return self.character
```

### HanJi Table

```python
CREATE TABLE "han_ji_dict_hanji" (
 "id" integer NOT NULL,
 "character" varchar(2) NOT NULL UNIQUE,
 "sip_ngoo_im" varchar(15) NOT NULL,
 "hong_im" varchar(15) NOT NULL,
 "POJ" varchar(15) NOT NULL,
 "TL" varchar(15) NOT NULL,
 "BP" varchar(15) NOT NULL,
 PRIMARY KEY("id" AUTOINCREMENT)
);
```

## New Table

### HanJi Model

```python
class HanJi(models.Model):
    han_ji = models.CharField(max_length=2)
    chu_im = models.CharField(max_length=10)
    freq = models.FloatField(null=True)
    siann = models.CharField(max_length=2)
    un = models.CharField(max_length=5)
    tiau = models.IntegerField()
    old_chu_im = models.CharField(max_length=10)
    sni_siann = models.CharField(max_length=10)
    sni_un = models.CharField(max_length=10)

    def __str__(self):
        return self.han_ji
```

### HanJi Table

```python
CREATE TABLE "han_ji_dict_hanji" (
 "id" integer NOT NULL,
 "han_ji" varchar(2) NOT NULL,
 "chu_im" varchar(10) NOT NULL,
 "freq" real,
 "siann" varchar(2) NOT NULL,
 "un" varchar(5) NOT NULL,
 "tiau" integer,
 "old_chu_im" varchar(10),
 "sni_siann" varchar(10) NOT NULL,
 "sni_un" varchar(10) NOT NULL,
 PRIMARY KEY("id" AUTOINCREMENT)
);
```

## Import from CSV File

```python
import csv
import sqlite3

# 建立連線
conn = sqlite3.connect('db.sqlite3')

# 讀取 CSV 檔案
with open('data.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)

    # 建立資料庫表格
    conn.execute('''CREATE TABLE IF NOT EXISTS han_li_dict_hanji (
        id INTEGER PRIMARY KEY,
        han_ji TEXT NOT NULL,
        chu_im TEXT NOT NULL,
        freq REAL,
        siann TEXT NOT NULL,
        un TEXT NOT NULL,
        tiau INTEGER NOT NULL,
        old_chu_im TEXT NOT NULL,
        sni_siann TEXT NOT NULL,
        sni_un TEXT NOT NULL
    )''')

    # 將 CSV 資料匯入到資料庫表格中
    for row in reader:
        values = [
            row['id'], row['han_ji'], row['chu_im'], row['freq'],
            row['siann'], row['un'], row['tiau'], row['old_chu_im'],
            row['sni_siann'], row['sni_un']
        ]
        conn.execute('INSERT INTO han_li_dict_hanji VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values)

    # 提交變更
    conn.commit()

# 關閉連線
conn.close()
```

## 匯入 CSV 資料

如果你不想使用 Python 程式碼建立新的資料表，可以使用以下程式碼將 CSV 資料匯入到現有的 han_li_dict_hanji 資料表中：

這個程式碼示例與之前的範例很相似，但是不需要建立新的資料表，而是假設資料庫中已經存在了名為 han_li_dict_hanji 的資料表。在這種情況下，你只需使用 INSERT INTO 語句將 CSV 資料插入到現有的資料表中即可。

請注意，這個程式碼示例假設資料庫檔案 db.sqlite3 已經存在，並且匯入的 CSV 檔案名稱為 data.csv。如果您的 CSV 檔案有不同的欄位名稱或資料型別，請根據需要修改程式碼。

```python
import csv
import sqlite3

# 建立連線
conn = sqlite3.connect('db.sqlite3')

# 讀取 CSV 檔案
with open('data.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)

    # 將 CSV 資料匯入到資料庫表格中
    for row in reader:
        values = [
            row['id'], row['han_ji'], row['chu_im'], row['freq'],
            row['siann'], row['un'], row['tiau'], row['old_chu_im'],
            row['sni_siann'], row['sni_un']
        ]
        conn.execute('INSERT INTO han_li_dict_hanji VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values)

    # 提交變更
    conn.commit()

# 關閉連線
conn.close()
```
