# han_ji_dict/tests.py

"""
Unit tests for han_ji_dict application.

poetry run python manage.py test han_ji_dict

Command to run UT:
poetry run python manage.py test han_ji_dict.tests
"""

from django.test import Client, TestCase
from django.urls import reverse

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
            sni_siann="英",
            sni_un="巾",
        )

    def test_han_ji_model_creation(self):
        han_ji_instance = HanJi.objects.get(han_ji="字")
        self.assertEqual(han_ji_instance.chu_im, "ji7")
        self.assertEqual(han_ji_instance.freq, 0.9)
        self.assertEqual(han_ji_instance.siann, "j")
        self.assertEqual(han_ji_instance.un, "i")
        self.assertEqual(han_ji_instance.tiau, 7)
        self.assertEqual(han_ji_instance.old_chu_im, "zi7")
        self.assertEqual(han_ji_instance.sni_siann, "英")
        self.assertEqual(han_ji_instance.sni_un, "巾")

    def test_han_ji_model(self):
        han_ji_instance = HanJi.objects.get(han_ji="字")
        self.assertEqual(str(han_ji_instance), "字")


class HanJiCRUDTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        HanJi.objects.create(
            han_ji="字",
            chu_im="ji7",
            freq=0.9,
            siann="j",
            un="i",
            tiau=7,
            old_chu_im="zi7",
            sni_siann="英",
            sni_un="巾",
        )

    def test_han_ji_detail_view(self):
        # 測試資料取出 setUp 已建檔的漢字
        han_ji = HanJi.objects.filter(han_ji='字').first()

        # 確認能進入 UpdateView
        response = self.client.get(reverse('han_ji_dict:detail', args=[han_ji.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'han_ji_dict/detail.html')

        # 驗證測試資料讀入的測試漢字無誤
        # Get the han_ji object from the response context
        han_ji_from_context = response.context['object']

        self.assertEqual(han_ji_from_context.chu_im, 'ji7')
        self.assertEqual(han_ji_from_context.han_ji, '字')
        self.assertEqual(han_ji_from_context.freq, 0.9)
        self.assertEqual(han_ji_from_context.siann, 'j')
        self.assertEqual(han_ji_from_context.un, 'i')
        self.assertEqual(han_ji_from_context.tiau, 7)
        self.assertEqual(han_ji_from_context.old_chu_im, 'zi7')
        self.assertEqual(han_ji_from_context.sni_siann, '英')
        self.assertEqual(han_ji_from_context.sni_un, '巾')

    def test_han_ji_list_view(self):
        response = self.client.get(reverse('han_ji_dict:home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'han_ji_dict/index.html')

    def test_han_ji_create_view(self):
        # 確認能進入 CreateView
        response = self.client.get(reverse('han_ji_dict:create'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'han_ji_dict/create.html')
        # 在表單中完成輸入，並按下「新增漢字」鈕
        new_han_ji_data = {
            'han_ji': '詞',
            'chu_im': 'su5',
            'freq': 0.5,
            'siann': 's',
            'un': 'u',
            'tiau': 5,
            'old_chu_im': 'si7',
            'sni_siann': '時',
            'sni_un': '居',
        }
        response = self.client.post(reverse('han_ji_dict:create'), data=new_han_ji_data)
        self.assertEqual(
            response.status_code, 302
        )  # Expect a redirect after successful creation

        # 檢查資料庫已新增漢字？
        # Test if the new HanJi object is created in the database
        new_han_ji = HanJi.objects.filter(han_ji='詞').first()
        self.assertIsNotNone(new_han_ji)
        self.assertEqual(new_han_ji.chu_im, 'su5')
        self.assertEqual(new_han_ji.freq, 0.5)
        self.assertEqual(new_han_ji.siann, 's')
        self.assertEqual(new_han_ji.un, 'u')
        self.assertEqual(new_han_ji.tiau, 5)
        self.assertEqual(new_han_ji.old_chu_im, 'si7')
        self.assertEqual(new_han_ji.sni_siann, '時')
        self.assertEqual(new_han_ji.sni_un, '居')

    def test_han_ji_update_view(self):
        # 測試資料取出 setUp 已建檔的漢字
        han_ji = HanJi.objects.filter(han_ji='字').first()

        # 確認能進入 UpdateView
        response = self.client.get(reverse('han_ji_dict:update', args=[han_ji.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'han_ji_dict/update.html')

        # 在表單中完成輸入，並按下「保存更改」鈕
        update_han_ji_data = {
            'han_ji': '字',
            'chu_im': 'zu3',
            'freq': 0.1,
            'siann': 'z',
            'un': 'u',
            'tiau': 3,
        }
        response = self.client.post(
            reverse('han_ji_dict:update', args=[han_ji.pk]), data=update_han_ji_data
        )
        self.assertEqual(
            response.status_code, 302
        )  # Expect a redirect after successful creation

        # 檢查資料庫的漢字已更新
        han_ji = HanJi.objects.filter(han_ji='字').first()
        self.assertIsNotNone(han_ji)
        self.assertEqual(han_ji.chu_im, 'zu3')
        self.assertEqual(han_ji.freq, 0.1)
        self.assertEqual(han_ji.siann, 'z')
        self.assertEqual(han_ji.un, 'u')
        self.assertEqual(han_ji.tiau, 3)

    def test_han_ji_delete_view(self):
        # 測試資料取出 setUp 已建檔的漢字
        han_ji = HanJi.objects.filter(han_ji='字').first()

        # 確認能進入 UpdateView
        response = self.client.get(reverse('han_ji_dict:delete', args=[han_ji.pk]))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'han_ji_dict/delete.html')

        response = self.client.post(
            reverse('han_ji_dict:delete', args=[han_ji.pk]),
        )
        self.assertEqual(
            response.status_code, 302
        )  # Expect a redirect after successful creation

        # 檢查資料庫的漢字已刪除
        han_ji = HanJi.objects.filter(han_ji='字').first()
        # self.assertIsNotNone(han_ji)
        self.assertIsNone(han_ji)
