from django.test import TestCase

from han_ji_dict.models import HanJi

# 軟體整合測試


class HanJiIntegrationTestCase(TestCase):
    def setUp(self):
        HanJi.objects.create(
            character="字",
            sip_ngoo_im="sip_ngoo_im_example",
            hong_im="hong_im_example",
            POJ="POJ_example",
            TL="TL_example",
            BP="BP_example",
        )

    def test_han_ji_query(self):
        han_ji = HanJi.objects.get(character="字")
        self.assertEqual(han_ji.sip_ngoo_im, "sip_ngoo_im_example")
