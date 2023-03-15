from django.db import models


class HanJi(models.Model):
    character = models.CharField(max_length=2, unique=True)
    sip_ngoo_im = models.CharField(max_length=15)
    hong_im = models.CharField(max_length=15)
    POJ = models.CharField(max_length=15)
    TL = models.CharField(max_length=15)
    BP = models.CharField(max_length=15)

    def __str__(self):
        return self.character
