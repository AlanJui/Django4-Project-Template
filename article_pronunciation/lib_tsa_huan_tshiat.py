import requests
from bs4 import BeautifulSoup


# 使用《中國哲學書電子化計劃》的《漢字字典》查「讀音」
# url = 'https://ctext.org/dictionary.pl?if=gb&char=東'
# url = 'https://ctext.org/dictionary.pl?if=gb&char=在'
def convert_list_to_dict_list(string_list):
    dict_list = []
    for i in range(0, len(string_list), 5):
        han_ji_tak_im = {
            'huan_tshiat': string_list[i],
            'un_su': string_list[i + 1] if i + 1 < len(string_list) else None,
            'siann_tiau': string_list[i + 2] if i + 2 < len(string_list) else None,
            'siann_bu': string_list[i + 3] if i + 3 < len(string_list) else None,
            'un_bu': string_list[i + 4] if i + 4 < len(string_list) else None
        }
        dict_list.append(han_ji_tak_im)
    return dict_list


def extract_readings_from_html(html):
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
                    dict_list = convert_list_to_dict_list(reading_list)
                    readings.extend(dict_list)
    # 若輸入之「漢字」查找不到「反切」的讀音，則 readings 為空
    return readings


def tsa_huan_tshiat(han_ji):
    # 發送 HTTP GET Request，要求查詢「漢字」的「讀音」
    url = f'https://ctext.org/dictionary.pl?if=gb&char={han_ji}'
    response = requests.get(url)

    # 解析 HTTP Response 返回的網頁（HTML）內容
    han_ji_dict = {
        'han_ji': han_ji,
        'tak_im_list': None,
    }
    han_ji_dict['tak_im_list'] = extract_readings_from_html(response.text)
    return han_ji_dict


def run_test(han_ji):
    han_ji_dict = tsa_huan_tshiat(han_ji)
    if len(han_ji_dict['tak_im_list']) > 0:
        print('==============================================')
        print(f'【查找漢字】：{han_ji_dict["han_ji"]}')
        for tak_im in han_ji_dict['tak_im_list']:
            print('----------------------------------------------')
            print(f'【反切讀音】：{tak_im["huan_tshiat"]}')
            print(f'【查詢結果】：{tak_im}')
    else:
        print('找不到反切讀音')
    print()


# 驗證用例
# han_ji_thak_im = {
#     'han_ji': '在',
#     'huan_tshiat': '昨宰',
#     'un_su': '廣韻',
#     'siann_tiau': '上聲',
#     'siann_bu': '海',
#     'un_bu': '在',


# }
# han_ji_thak_im2 = {
#     'han_ji': '在',
#     'huan_tshiat': '昨代',
#     'un_su': '廣韻',
#     'siann_tiau': '去聲',
#     'siann_bu': '代',
#     'un_bu': '載',
# }
# han_ji_thak_im_list = [han_ji_thak_im, han_ji_thak_im2]

# run_test('在')
# run_test('東')
