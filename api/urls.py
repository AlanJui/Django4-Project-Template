from django.urls import path

from .views import hello, huan_tshiat_huat

urlpatterns = [
    path('huan_tshiat_huat/', huan_tshiat_huat, name='huan_tshiat_huat'),
    path('hello/', hello, name='hello'),
]
