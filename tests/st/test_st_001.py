""" Test Command: poetry run python manage.py test tests.st
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

    def tearDown(self):
        self.browser.quit()

    def test_article_pronunciation(self):
        self.browser.get("http://localhost:8000/article_pronunciation/")

        input_box = self.browser.find_element(By.NAME, "article")
        input_box.send_keys("天")
        # input_box.send_keys(Keys.ENTER)

        # Locate the submit button using XPath
        submit_button = self.browser.find_element(
            By.XPATH, '//input[@type="submit" and @value="提交"]'
        )

        # Click the submit button
        submit_button.click()

        WebDriverWait(self.browser, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "ruby, rt"))
        )

        # Find all 'ruby' elements on the page
        ruby_elements = self.browser.find_elements(By.CSS_SELECTOR, "ruby")

        # Iterate through the 'ruby' elements and find the one with the text '天'
        for ruby in ruby_elements:
            if ruby.text.strip().strip("天"):
                break
        else:
            raise AssertionError("The 'ruby' element with the text '天' was not found")

        # Find the corresponding 'rt' element
        rt = ruby.find_element(By.TAG_NAME, "rt")

        # Assert that the found 'ruby' and 'rt' elements have the expected text
        self.assertEqual(ruby.text.strip(), "天\n堅一他")
        self.assertEqual(rt.text.strip(), "堅一他")


if __name__ == "__main__":
    unittest.main()
