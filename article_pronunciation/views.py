# article_pronunciation/views.py
from django.db.models import Max
from django.shortcuts import render

from han_ji_dict.models import HanJi


def input_article(request):
    return render(request, 'article_pronunciation/input_article.html')


def pronunciation(request):
    if request.method == "POST":
        article = request.POST["article"]
        pronunciation_list = []
        for character in article:
            if character.strip():
                # Filter by the highest `freq` value for each `han_ji`
                max_freq = HanJi.objects.filter(han_ji=character).aggregate(
                    Max('freq')
                )['freq__max']
                hanji_objects = HanJi.objects.filter(han_ji=character, freq=max_freq)

                # Add the HanJi objects with the highest `freq` value to the pronunciation_list
                for hanji in hanji_objects:
                    pronunciation_list.append(hanji)
            else:
                pronunciation_list.append(character)
        return render(
            request,
            "article_pronunciation/pronunciation.html",
            {"pronunciation_list": pronunciation_list},
        )
    else:
        return HttpResponseRedirect(reverse("input_article"))
