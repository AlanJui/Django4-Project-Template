from django.contrib.auth.models import AnonymousUser
from django.test import RequestFactory, TestCase

from han_ji_dict.models import HanJi

from .views import index


class ArticlePronunciationTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        HanJi.objects.create(
            character="字",
            sip_ngoo_im="sip_ngoo_im_example",
            hong_im="hong_im_example",
            POJ="POJ_example",
            TL="TL_example",
            BP="BP_example",
        )

    def test_article_pronunciation_view(self):
        request = self.factory.post("/article_pronunciation/", {"article": "字"})
        request.user = AnonymousUser()
        response = index(request)

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "<ruby>字<rt>sip_ngoo_im_example</rt></ruby>")
        print(response.content.decode('utf-8'))
