from django.urls import path

from .views import huan_tshiat_huat

urlpatterns = [
    path('huan_tshiat_huat/', huan_tshiat_huat, name='huan_tshiat_huat'),
]
