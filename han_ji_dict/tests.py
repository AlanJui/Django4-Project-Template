"""
Unit tests for han_ji_dict application

poetry run python manage.py test han_ji_dict

Command to run UT:
poetry run python manage.py test han_ji_dict.tests
"""

# han_ji_dict/tests.py
from django.test import TestCase

from .models import HanJi


class HanJiModelTestCase(TestCase):
    def setUp(self):
        HanJi.objects.create(
            han_ji="字",
            chu_im="ji7",
            freq=0.9,
            siann="j",
            un="i",
            tiau=7,
            old_chu_im="zi7",
            sni_siann="j",
            sni_un="i",
        )

    def test_han_ji_model_creation(self):
        han_ji_instance = HanJi.objects.get(han_ji="字")
        self.assertEqual(han_ji_instance.chu_im, "ji7")
        self.assertEqual(han_ji_instance.freq, 0.9)
        self.assertEqual(han_ji_instance.siann, "j")
        self.assertEqual(han_ji_instance.un, "i")
        self.assertEqual(han_ji_instance.tiau, 7)
        self.assertEqual(han_ji_instance.old_chu_im, "zi7")
        self.assertEqual(han_ji_instance.sni_siann, "j")
        self.assertEqual(han_ji_instance.sni_un, "i")

    def test_han_ji_model_str(self):
        han_ji_instance = HanJi.objects.get(han_ji="字")
        self.assertEqual(str(han_ji_instance), "字")
