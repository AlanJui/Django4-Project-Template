from django.urls import path

from . import views

app_name = "han_ji_dict"

urlpatterns = [
    path("", views.index, name="index"),
]
