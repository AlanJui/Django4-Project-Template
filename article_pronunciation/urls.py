# article_pronunciation/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
