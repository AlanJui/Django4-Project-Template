"""
白話字（POJ）.

韻母標聲調規則：《o＞e＞a＞u＞i＞ng＞m》；而 ng 標示在字母 n 上。
例外：
1. oai、oan、oat、oah 標在 a 上。
2. oeh 標在 e 上。
"""

import re


class PehOeJi:
    def __init__(self):
        """Intialize class with dicitionaries."""
        self.siann_bu_dict = {
            '': '',
            'b': 'b',
            'g': 'g',
            'h': 'h',
            'j': 'j',
            'k': 'k',
            'kh': 'kh',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'ng': 'ng',
            'p': 'p',
            'ph': 'ph',
            's': 's',
            't': 't',
            'th': 'th',
            'ts': 'ch',
            'tsh': 'chh',
        }

        self.un_bu_dict = {
            'a': 'a',
            'ah': 'ah',
            'ai': 'ai',
            'aih': 'aih',
            'ainn': 'aiⁿ',
            'ainnh': 'aihⁿ',
            'ak': 'ak',
            'am': 'am',
            'an': 'an',
            'ang': 'ang',
            'ann': 'aⁿ',
            'annh': 'ahⁿ',
            'ap': 'ap',
            'au': 'au',
            'auh': 'auh',
            'aunn': 'auⁿ',
            'aunnh': 'auhⁿ',
            'e': 'e',
            'ee': 'ee',
            'eh': 'eh',
            'enn': 'eⁿ',
            'ennh': 'ehⁿ',
            'i': 'i',
            'ia': 'ia',
            'iah': 'iah',
            'iak': 'iak',
            'iam': 'iam',
            'ian': 'ian',
            'iang': 'iang',
            'iann': 'iaⁿ',
            'iannh': 'iahⁿ',
            'iap': 'iap',
            'iat': 'iat',
            'iau': 'iau',
            'iauh': 'iauh',
            'iaunn': 'iauⁿ',
            'iaunnh': 'iauⁿh',
            'ih': 'ih',
            'ik': 'ek',
            'im': 'im',
            'in': 'in',
            'ing': 'eng',
            'inn': 'iⁿ',
            'innh': 'iⁿh',
            'io': 'io',
            'ioh': 'ioh',
            'iok': 'iok',
            'iong': 'iong',
            'ionn': 'ioⁿ',
            'ionnh': 'iohⁿ',
            'ip': 'ip',
            'it': 'it',
            'iu': 'iu',
            'iuh': 'iuh',
            'iunn': 'iuⁿ',
            'iunnh': 'iuhⁿ',
            'm': 'm',
            'mh': 'mh',
            'ng': 'ng',
            'ngh': 'ngh',
            'o': 'o',
            'oh': 'oh',
            'ok': 'ok',
            'om': 'om',
            'ong': 'ong',
            'onn': 'oⁿ',
            'onnh': 'ohⁿ',
            'oo': 'o͘',
            'ooh': 'o͘h',
            'op': 'op',
            'u': 'u',
            'ua': 'oa',
            'uah': 'oah',
            'uai': 'oai',
            'uaih': 'oaih',
            'uainn': 'oaiⁿ',
            'uainnh': 'oaiⁿh',
            'uak': 'oak',
            'uan': 'oan',
            'uang': 'oang',
            'uann': 'oaⁿ',
            'uannh': 'oahⁿ',
            'uat': 'oat',
            'ue': 'oe',
            'ueh': 'oeh',
            'uenn': 'oeⁿ',
            'uennh': 'oehⁿ',
            'uh': 'uh',
            'ui': 'ui',
            'uih': 'uih',
            'uinn': 'uiⁿ',
            'uinnh': 'uihⁿ',
            'un': 'un',
            'ut': 'ut',
        }

        self.tiau_dict = {
            1: "一",
            2: "二",
            3: "三",
            4: "四",
            5: "五",
            6: "六",
            7: "七",
            8: "八",
        }

        self.trandication_tiau_dict = {
            1: "上平",
            2: "下平",
            3: "上声",
            4: "下上",
            5: "上去",
            6: "下去",
            7: "上入",
            8: "下入",
        }

        self.accent_mapping = {
            'a': {1: 'a', 2: 'á', 3: 'à', 4: 'a', 5: 'â', 6: 'ǎ', 7: 'ā', 8: 'a̍'},
            'e': {1: 'e', 2: 'é', 3: 'è', 4: 'e', 5: 'ê', 6: 'ě', 7: 'ē', 8: 'e̍'},
            'i': {1: 'i', 2: 'í', 3: 'ì', 4: 'i', 5: 'î', 6: 'ǐ', 7: 'ī', 8: 'i̍'},
            'o': {1: 'o', 2: 'ó', 3: 'ò', 4: 'o', 5: 'ô', 6: 'ǒ', 7: 'ō', 8: 'o̍'},
            'u': {1: 'u', 2: 'ú', 3: 'ù', 4: 'u', 5: 'û', 6: 'ǔ', 7: 'ū', 8: 'u̍'},
            'm': {1: 'm', 2: 'ḿ', 3: 'm̀', 4: 'm', 5: 'm̂', 6: 'm̌', 7: 'm̄', 8: 'm̍'},
            'n': {1: 'n', 2: 'ń', 3: 'ǹ', 4: 'n', 5: 'n̂', 6: 'ň', 7: 'n̄', 8: 'n̍'},
            'oo': {1: 'o͘', 2: 'ó͘', 3: 'ò͘', 4: 'o͘', 5: 'ô͘', 6: '', 7: 'ō͘', 8: 'o̍'},
        }

        self.pattern1 = r"(oai|oan|oah|oeh|ee|ei)"
        self.pattern2 = r"(o|e|a|u|i|ng|m)"

    def get_siann_bu(self, siann):
        return self.siann_bu_dict[siann]

    def get_un_bu(self, un):
        return self.un_bu_dict[un]

    def get_tiau_ho(self, tiau):
        return self.tiau_dict[tiau]

    def convert_trandication_tiau(self, tiau):
        return self.trandication_tiau_dict[tiau]

    def _find_accented_vowel(self, un_bu, tiau):
        for vowel, accent_map in self.accent_mapping.items():
            if vowel in un_bu:
                un_bu = un_bu.replace(vowel, accent_map[tiau])
                break
        return un_bu

    def get_chu_im(self, siann, un, tiau):
        siann_bu = self.get_siann_bu(siann)
        un_bu = self.get_un_bu(un)

        chu_im = f"{siann_bu}{un_bu}"

        # pattern1 = r"(oai|oan|oah|oeh)"
        searchObj = re.search(self.pattern1, chu_im, re.M | re.I)
        if searchObj:
            found = searchObj.group(1)
            un_chars = list(found)
            idx = 0
            if found in ('ee', 'ei'):  # 使用 'in' 简化比较
                idx = 0
            else:
                idx = 1
            guan_im = un_chars[idx]
            un_chars[idx] = self._find_accented_vowel(guan_im, int(tiau))
            un_str = "".join(un_chars)
            chu_im = chu_im.replace(found, un_str)
        else:
            searchObj2 = re.search(self.pattern2, chu_im, re.M | re.I)
            if searchObj2:  # 注音中有單元音
                found = searchObj2.group(1)
                guan_im = found
                new_un = self._find_accented_vowel(guan_im, int(tiau))
                chu_im = chu_im.replace(found, new_un)

        return chu_im
