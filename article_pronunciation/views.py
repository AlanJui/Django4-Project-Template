from django.shortcuts import render

from han_ji_dict.models import HanJi


def index(request):
    if request.method == 'POST':
        article = request.POST['article']
        characters = list(article)
        ruby_text = []

        for char in characters:
            try:
                han_ji = HanJi.objects.get(character=char)
                ruby_text.append((char, han_ji.sip_ngoo_im))
            except HanJi.DoesNotExist:
                ruby_text.append((char, ''))

        context = {'ruby_text': ruby_text}
        return render(request, 'article_pronunciation/index.html', context)

    return render(request, 'article_pronunciation/index.html')
