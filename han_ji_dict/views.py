from django.shortcuts import render

from .models import HanJi


def index(request):
    all_han_ji = HanJi.objects.all()
    context = {'all_han_ji': all_han_ji}
    return render(request, 'han_ji_dict/index.html', context)
