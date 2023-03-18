# article_pronunciation/views.py
from django.db.models import Max
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from han_ji_dict.models import HanJi


def input_article(request):
    return render(request, 'article_pronunciation/input_article.html')


def pronunciation(request):
    if request.method != "POST":
        return HttpResponseRedirect(reverse("input_article"))

    article = request.POST["article"]
    article = article.replace('\r\n', '\n')
    pronunciation_list = []

    for character in article:
        if not character.strip():
            pronunciation_list.append(character)
            continue

        if character == '\n':
            pronunciation_list.append('<br/><br/>')
            continue

        max_freq = HanJi.objects.filter(han_ji=character).aggregate(Max('freq'))[
            'freq__max'
        ]

        if max_freq is None:
            pronunciation_list.append(character)
            continue

        hanji_objects = HanJi.objects.filter(han_ji=character, freq=max_freq)
        pronunciation_list.extend(hanji_objects)

    return render(
        request,
        "article_pronunciation/pronunciation.html",
        {"pronunciation_list": pronunciation_list},
    )
