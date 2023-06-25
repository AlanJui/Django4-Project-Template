import requests
from bs4 import BeautifulSoup


# 使用《中國哲學書電子化計劃》的《漢字字典》查「讀音」
# url = 'https://ctext.org/dictionary.pl?if=gb&char=東'
# url = 'https://ctext.org/dictionary.pl?if=gb&char=在'
def extract_readings_from_html(han_ji, html):
    # 自「網頁」中的「表格（Table）」，查找「反切」欄位，及取出「漢字讀音」
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find('table', class_='info')
    rows = table.find_all('tr')
    readings = []
    for row in rows:
        th = row.find('th')
        if th and th.text.strip() == '反切:':
            td = row.find('td')
            if td:
                reading_list = []
                for content in td.contents:
                    if content.name == 'a' and '(' not in content.text:
                        reading = content.text.strip()
                        reading_list.append(reading)
                if reading_list:
                    for i in range(len(reading_list)):
                        if i % 5 == 0:
                            reading = {
                                'han_ji': han_ji,
                                'huan_tshiat': None,
                                'un_su': None,
                                'siann_tiau': None,
                                'siann_bu': None,
                                'un_bu': None,
                            }
                        if i % 5 == 0:
                            reading['huan_tshiat'] = reading_list[i]
                        elif i % 5 == 1:
                            reading['un_su'] = reading_list[i]
                        elif i % 5 == 2:
                            reading['siann_tiau'] = reading_list[i]
                        elif i % 5 == 3:
                            reading['siann_bu'] = reading_list[i]
                        elif i % 5 == 4:
                            reading['un_bu'] = reading_list[i]

                        if i % 5 == 4:
                            readings.append(reading)
    # 若輸入之「漢字」查找不到「反切」的讀音，則 readings 為空
    return readings


def tsa_huan_tshiat(han_ji):
    # 發送 HTTP GET Request，要求查詢「漢字」的「讀音」
    url = f'https://ctext.org/dictionary.pl?if=gb&char={han_ji}'
    response = requests.get(url)

    # 解析 HTTP Response 返回的網頁（HTML）內容
    readings = extract_readings_from_html(han_ji, response.text)
    results = []
    for reading in readings:
        result = {
            'han_ji': han_ji,
            'huan_tshiat': reading['huan_tshiat'],
            'un_su': reading['un_su'],
            'siann_tiau': reading['siann_tiau'],
            'siann_bu': reading['siann_bu'],
            'un_bu': reading['un_bu']
        }
        results.append(result)
    return results


def run_test(han_ji):
    results = tsa_huan_tshiat(han_ji)
    if results:
        for result in results:
            print(f'【查找漢字】：{han_ji}')
            print(f'【反切讀音】：{result["huan_tshiat"]}')
            print(f'【查詢結果】：{result}')
    else:
        print('找不到反切讀音')
    print()


# 驗證用例
han_ji_thak_im = {
    'han_ji': '在',
    'huan_tshiat': '昨宰',
    'un_su': '廣韻',
    'siann_tiau': '上聲',
    'siann_bu': '海',
    'un_bu': '在',


}
han_ji_thak_im2 = {
    'han_ji': '在',
    'huan_tshiat': '昨代',
    'un_su': '廣韻',
    'siann_tiau': '去聲',
    'siann_bu': '代',
    'un_bu': '載',
}
han_ji_thak_im_list = [han_ji_thak_im, han_ji_thak_im2]

run_test('在')
run_test('東')
