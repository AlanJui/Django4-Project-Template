import requests
from bs4 import BeautifulSoup


# 使用《中國哲學書電子化計劃》的《漢字字典》查「讀音」
# url = 'https://ctext.org/dictionary.pl?if=gb&char=東'
def tsa_huan_tshiat(han_ji):
    url = f'https://ctext.org/dictionary.pl?if=gb&char={han_ji}'

    # 發送 HTTP GET Request
    response = requests.get(url)

    # 解析 HTTP Response 返回的網頁（HTML）內容
    soup = BeautifulSoup(response.text, 'html.parser')

    # 自「網頁」中的「表格（Table）」，查找「反切」欄位，及取出「漢字讀音」
    table = soup.find('table', class_='info')
    rows = table.find_all('tr')
    for row in rows:
        th = row.find('th')
        if th and th.text.strip() == '反切:':
            td = row.find('td')
            if td:
                # 提取反切内容
                anchor = td.find('a')
                if anchor:
                    result = anchor.text.strip()
                    return result

    # 若輸入之「漢字」查找不到「反切」的讀音，則回傳 None 表「找不到」
    return None
