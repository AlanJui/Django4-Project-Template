# article_pronunciation/views.py
from django.db.models import Max
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from han_ji_dict.models import HanJi

# 依據「漢字」查字典，並取出漢字讀音
def get_chu_im(char, pronunciation):
    # 建置「漢字」的篩選用物件
    han_ji_instances = HanJi.objects.filter(han_ji=char, freq__isnull=False).order_by(
        '-freq'
    )
    # 若漢字的篩選物件，被成功建置；則依據指定的「注音方式」，取用漢字讀音的第一個注音
    if han_ji_instances.exists():
        han_ji_instance = han_ji_instances[0]
        if pronunciation == "tai_lo":
            return han_ji_instance.get_tai_lo_chu_im()
        elif pronunciation == "peh_oe_ji":
            return han_ji_instance.get_peh_oe_ji_chu_im()
        elif pronunciation == "ban_phing":
            return han_ji_instance.get_ban_phing_chu_im()
        elif pronunciation == "sip_ngoo":
            return han_ji_instance.get_sip_ngoo_im_chu_im()
        elif pronunciation == "fong_yim":
            return han_ji_instance.get_fong_yim_fu_ho_chu_im()
    # 若漢字的薛選物件無法建立（即字典中沒有找到該漢字之注音），則返回空值字串
    return ''


def index(request):
    default_text = "我可以為您標註漢字讀音"
    annotated_text = []
    pronunciation_options = {
        "sip_ngoo": "十五音",
        "fong_yim": "方音符號",
        "peh_oe_ji": "白話字",
        "tai_lo": "台羅拼音",
        "ban_phing": "閩南語拼音方案",
    }
    # 預設注音方式：台羅拼音
    selected_pronunciation = "tai_lo"


    # 使用者輸入資料
    if request.method == 'POST':
        # 取得使用者輸入的漢文
        text = request.POST.get('text')
        # 取得使用者要求的「注音／拚音」方式
        selected_pronunciation = request.POST.get('pronunciation')
        # 若使用者未挑選，則以預設：台羅拼音，為漢字標註讀音
        if not selected_pronunciation:
            selected_pronunciation = "tai_lo"

        # 標註讀音的前置處理
        if text:
            # 根據使用者的輸入（text），逐字(char) 處理
            for char in text:
                # 若是要處理的字元為「換行」，則漢字欄存放換行字元，而注音符號欄則留空白。
                if char == "\n":
                    annotated_text.append(
                        {
                            'han_ji': char,
                            'chu_im_fu_ho': '',
                        }
                    )
                elif char.strip():
                    # 若是要處理的字元為漢字，則透過查字典，取得漢字之「注音符號」
                    chu_im_fu_ho = get_chu_im(char, selected_pronunciation)
                    annotated_text.append(
                        {
                            'han_ji': char,
                            'chu_im_fu_ho': chu_im_fu_ho,
                        }
                    )
        context = {
            "default_text": default_text,
            "annotated_text": annotated_text,
            "pronunciation_options": pronunciation_options,
            "selected_pronunciation": selected_pronunciation,
        }
    else:
    # 使用者啟動功能
        context = {
            "default_text": default_text,
            "pronunciation_options": pronunciation_options,
            "selected_pronunciation": selected_pronunciation,
        }

    return render(request, "article_pronunciation/index.html", context)


def annotate_pronunciation(text):
    # annotated_text = ""
    annotated_text = []

    for character in text:
        if not character.strip():
            annotated_text.append(character)
            continue

        if character == '\n':
            annotated_text.append('<br/><br/>')
            continue

        max_freq = HanJi.objects.filter(han_ji=character).aggregate(Max('freq'))[
            'freq__max'
        ]

        if max_freq is None:
            annotated_text.append(character)
            continue

        hanji_objects = HanJi.objects.filter(han_ji=character, freq=max_freq)
        annotated_text.extend(hanji_objects)

    return annotated_text
