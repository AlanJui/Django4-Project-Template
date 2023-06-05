# article_pronunciation/urls.py
from django.urls import path

from . import views

app_name = 'article_pronunciation'

urlpatterns = [
    path('save_file/', views.save_file, name='save_file'),
    path('', views.index, name='index'),
]
