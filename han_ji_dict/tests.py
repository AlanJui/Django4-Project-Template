"""
poetry run python manage.py test han_ji_dict
"""
from django.test import TestCase

from han_ji_dict.models import HanJi

# 軟體單元測試


class HanJiModelTestCase(TestCase):
    def setUp(self):
        HanJi.objects.create(
            character="字",
            sip_ngoo_im="sip_ngoo_im_example",
            hong_im="hong_im_example",
            POJ="POJ_example",
            TL="TL_example",
            BP="BP_example",
        )

    def test_han_ji_model(self):
        han_ji = HanJi.objects.get(character="字")
        self.assertEqual(han_ji.sip_ngoo_im, "sip_ngoo_im_example")
        self.assertEqual(han_ji.hong_im, "hong_im_example")
        self.assertEqual(han_ji.POJ, "POJ_example")
        self.assertEqual(han_ji.TL, "TL_example")
        self.assertEqual(han_ji.BP, "BP_example")
