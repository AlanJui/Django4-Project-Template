import re

from django.db import models
from sip_ngoo_im.models import SipNgooIm

sip_ngoo_im = SipNgooIm()


class HanJi(models.Model):
    # 漢字
    han_ji = models.CharField(max_length=2, default='')
    # 漢字讀音編碼
    chu_im = models.CharField(max_length=10, default='')
    # 讀音常用頻率
    freq = models.FloatField(default=0.0)
    # 聲母碼
    siann = models.CharField(max_length=2, default='')
    # 韻母碼
    un = models.CharField(max_length=5, default='')
    # 調號
    tiau = models.IntegerField(default=0)
    # 原編者使用的 BP 標音
    old_chu_im = models.CharField(max_length=10, null=True)
    # 十五音聲母
    sni_siann = models.CharField(max_length=10, default='')
    # 十五音韻母
    sni_un = models.CharField(max_length=10, default='')

    def __str__(self):
        return self.han_ji

    def split_chu_im(self):
        """返回一個 list，包含聲母、韻母、調號"""
        result = []

        siann_pattern = re.compile(r"(b|tsh|ts|g|h|j|kh|k|l|m|ng|n|ph|p|s|th|t|q)")
        siann_bu = siann_pattern.match(self.chu_im).group()
        un_bu = self.chu_im[len(siann_bu) : len(self.chu_im) - 1]
        diau = self.chu_im[len(self.chu_im) - 1]

        result += [siann_bu]
        result += [un_bu]
        result += [diau]
        return result

    # ==========================================================
    # 十五音聲母處理
    # ==========================================================
    def get_sip_ngoo_im_siann_bu(self):
        sip_ngoo_im_siann_bu = {
            'l': '柳',
            'n': '柳',
            'p': '邊',
            'k': '求',
            'kh': '去',
            't': '地',
            'ph': '頗',
            'th': '他',
            'ts': '曾',
            'j': '入',
            's': '時',
            'q': '英',
            'b': '門',
            'm': '門',
            'g': '語',
            'ng': '語',
            'tsh': '出',
            'h': '喜',
        }
        # 取得「聲母」
        siann = self.split_chu_im()[0]
        return sip_ngoo_im_siann_bu[siann]

    def get_sip_ngoo_im_un_bu(self):
        sip_ngoo_im_un_bu = {
            'un': '君',
            'ut': '君',
            'ian': '堅',
            'iat': '堅',
            'im': '金',
            'ip': '金',
            'ui': '規',
            'uih': '規',
            'ee': '嘉',
            'eeh': '嘉',
            'an': '干',
            'at': '干',
            'ong': '公',
            'ok': '公',
            'uai': '乖',
            'uaih': '乖',
            'ing': '經',
            'ik': '經',
            'uan': '觀',
            'uat': '觀',
            'oo': '沽',
            'ooh': '沽',
            'iau': '嬌',
            'iauh': '嬌',
            'ei': '稽',
            'eih': '稽',
            'iong': '恭',
            'iok': '恭',
            'o': '高',
            'oh': '高',
            'ai': '皆',
            'aih': '皆',
            'in': '巾',
            'it': '巾',
            'iang': '姜',
            'iak': '姜',
            'am': '甘',
            'ap': '甘',
            'ua': '瓜',
            'uah': '瓜',
            'ang': '江',
            'ak': '江',
            'iam': '兼',
            'iap': '兼',
            'au': '交',
            'auh': '交',
            'ia': '迦',
            'iah': '迦',
            'ue': '檜',
            'ueh': '檜',
            'ann': '監',
            'ahnn': '監',
            'u': '艍',
            'uh': '艍',
            'a': '膠',
            'ah': '膠',
            'i': '居',
            'ih': '居',
            'iu': '丩',
            'iuh': '丩',
            'enn': ' 更',
            'ehnn': '更',
            'uinn': '褌',
            'uinnh': '褌',
            'io': '茄',
            'ioh': '茄',
            'inn': '梔',
            'ihnn': '梔',
            'ionn': '薑',
            'ionnh': '薑',
            'iann': '驚',
            'iannh': '驚',
            'uann': '官',
            'uannh': '官',
            'ng': '鋼',
            'ngh': '鋼',
            'e': '伽',
            'eh': '伽',
            'ainn': '閒',
            'ainnh': '閒',
            'onn': '扛',
            'ohnn': '扛',
            'onnh': '姑',
            'm': '姆',
            'mh': '姆',
            'uang': '光',
            'uak': '光',
            'uainn': '閂',
            'uaihnn': '閂',
            'uenn': '糜',
            'uennh': '糜',
            'iaunn': '嘄',
            'iauhnn': '嘄',
            'om': '箴',
            'op': '箴',
            'aunn': '爻',
            'aunnh': '爻',
            'iunn': '牛',
            'iunnh': '牛',
        }

        # 取得「韻母」
        un = self.split_chu_im()[1]
        # 取得「調號」
        tiau = self.split_chu_im()[2]

        if tiau == 4 or tiau == 8:
            # 韻母為入聲韻
            un_bu_code = sip_ngoo_im_un_bu[un_bu][1]
        else:
            # 韻母為舒聲韻
            un_bu_code = sip_ngoo_im_un_bu_2_un_code_dict[un_bu][0]
        return un_bu_code

    def get_siann_code_by_siann_bu(self, sian_bu):
        index = sip_ngoo_im_siann_bu.index(sian_bu)
        return siann_list[index]
