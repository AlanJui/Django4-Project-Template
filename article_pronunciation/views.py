# article_pronunciation/views.py
from django.db.models import Max
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from han_ji_dict.models import HanJi


def index(request):
    default_text = "我可以為您標註漢字讀音"
    annotated_text = ""

    if request.method == "POST":
        input_text = request.POST.get("text", default_text)
        annotated_text = annotate_pronunciation(input_text)

    context = {
        "default_text": default_text,
        "annotated_text": annotated_text,
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
