# article_pronunciation/views.py
from django.db.models import Max
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from han_ji_dict.models import HanJi


def get_chu_im(char, pronunciation):
    han_ji_instances = HanJi.objects.filter(han_ji=char, freq__isnull=False).order_by(
        '-freq'
    )
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
    return ''


def index(request):
    default_text = "我可以為您標註漢字讀音"
    annotated_text = []

    if request.method == 'POST':
        text = request.POST.get('text')
        selected_pronunciation = request.POST.get('pronunciation')
        if not selected_pronunciation:
            selected_pronunciation = "tai_lo"

        if text:
            for char in text:
                if char == "\n":
                    annotated_text.append(
                        {
                            'han_ji': char,
                            'chu_im_fu_ho': '',
                        }
                    )
                elif char.strip():
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
            "selected_pronunciation": selected_pronunciation,
        }
    else:
        context = {
            "default_text": default_text,
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
