""" Test Command: poetry run python manage.py test tests.st_001
"""
import os
import sys
import unittest

import chromedriver_autoinstaller
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from han_ji_dict.models import HanJi


class SystemFunctionalTest(unittest.TestCase):
    def setUp(self):
        chromedriver_autoinstaller.install()
        self.browser = webdriver.Chrome()  # 使用 Google Chrome WebDriver
        HanJi.objects.create(
            character="字",
            sip_ngoo_im="sip_ngoo_im_example",
            hong_im="hong_im_example",
            POJ="POJ_example",
            TL="TL_example",
            BP="BP_example",
        )

    def tearDown(self):
        self.browser.quit()

    def test_article_pronunciation(self):
        self.browser.get("http://localhost:8000/article_pronunciation/")

        input_box = self.browser.find_element_by_name("article")
        input_box.send_keys("字")
        input_box.send_keys(Keys.ENTER)

        WebDriverWait(self.browser, 20).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "ruby rt"))
        )

        ruby = self.browser.find_element_by_css_selector("ruby")
        rt = self.browser.find_element_by_css_selector("rt")

        self.assertEqual(ruby.text, "字")
        self.assertEqual(rt.text, "sip_ngoo_im_example")


if __name__ == "__main__":
    unittest.main()
