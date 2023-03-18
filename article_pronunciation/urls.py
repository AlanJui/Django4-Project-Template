# article_pronunciation/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('input/', views.input_article, name='input_article'),
    path('pronunciation/', views.pronunciation, name='pronunciation'),
]
