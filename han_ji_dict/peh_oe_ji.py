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
            'l': 'l',
            'n': 'ln',
            'p': 'b',
            'k': 'g',
            'kh': 'k',
            't': 'd',
            'ph': 'p',
            'th': 't',
            'ts': 'z',
            'j': 'zz',
            's': 's',
            '': '',
            'b': 'bb',
            'm': 'bbn',
            'g': 'gg',
            'ng': 'ggn',
            'tsh': 'c',
            'h': 'h',
        }

        self.un_bu_dict = {
            'un': 'un',
            'ut': 'ut',
            'ian': 'ian',
            'iat': 'iat',
            'im': 'im',
            'ip': 'ip',
            'ui': 'ui',
            'uih': 'uih',
            'ee': 'e',
            'eh': 'eh',
            'an': 'an',
            'ap': 'ap',
            'ong': 'ong',
            'ok': 'ok',
            'uai': 'uai',
            'uaih': 'uaih',
            'ing': 'ing',
            'ik': 'ik',
            'uan': 'uan',
            'uat': 'uat',
            'oo': 'oo',
            'ooh': 'ooh',
            'iau': 'iao',
            'iauh': 'iaoh',
            'e': 'e',
            'iong': 'iong',
            'iok': 'iok',
            'o': 'o',
            'oh': 'oh',
            'ai': 'ai',
            'aih': 'aih',
            'in': 'in',
            'it': 'it',
            'iang': 'iang',
            'iak': 'iak',
            'am': 'am',
            'ua': 'ua',
            'uah': 'uah',
            'ang': 'ang',
            'ak': 'ak',
            'iam': 'iam',
            'iap': 'iap',
            'au': 'ao',
            'auh': 'aoh',
            'ia': 'ia',
            'iah': 'iah',
            'ue': 'ue',
            'ueh': 'ueh',
            'ann': 'na',
            'annh': 'nah',
            'u': 'u',
            'uh': 'uh',
            'a': 'a',
            'ah': 'ah',
            'i': 'i',
            'ih': 'ih',
            'iu': 'iu',
            'iuh': 'iuh',
            'enn': 'ne',
            'ennh': 'neh',
            'uinn': 'nui',
            'uinnh': 'nuih',
            'io': 'io',
            'ioh': 'ioh',
            'inn': 'ni',
            'innh': 'nih',
            'ionn': 'nioo',
            'ionnh': 'niooh',
            'iann': 'nia',
            'iannh': 'niah',
            'uann': 'nua',
            'uannh': 'nuah',
            'ng': 'ng',
            'ngh': 'ngh',
            'ainn': 'nai',
            'ainnh': 'naih',
            'onn': 'no',
            'onnh': 'noh',
            'm': 'm',
            'mh': 'mh',
            'uang': 'uang',
            'uak': 'uak',
            'uainn': 'nuai',
            'uainnh': 'nuaih',
            'uenn': 'nue',
            'uennh': 'nueh',
            'iaunn': 'niao',
            'iaunnh': 'niaoh',
            'om': 'om',
            'op': 'op',
            'aunn': 'nao',
            'aunnh': 'naoh',
            'iunn': 'niu',
            'iunnh': 'niuh',
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
            'a': {1: 'ā', 2: 'á', 3: 'ǎ', 5: 'à', 6: 'â', 7: 'ā', 8: 'á'},
            'e': {1: 'ē', 2: 'é', 3: 'ě', 5: 'è', 6: 'ê', 7: 'ē', 8: 'e̍'},
            'i': {1: 'ī', 2: 'í', 3: 'ǐ', 5: 'ì', 6: 'î', 7: 'ī', 8: 'i̍'},
            'o': {1: 'ō', 2: 'ó', 3: 'ǒ', 5: 'ò', 6: 'ô', 7: 'ō', 8: 'o̍'},
            'oo': {1: 'ō', 2: 'ó', 3: 'ǒ', 5: 'ò', 6: 'ô', 7: 'ō', 8: 'o̍'},
            'u': {1: 'ū', 2: 'ú', 3: 'ǔ', 5: 'ù', 6: 'û', 7: 'ū', 8: 'u̍'},
            'm': {1: 'ḿ', 2: 'm̀', 3: 'ṃ', 5: 'm̂', 6: 'm̂', 7: 'm̄', 8: 'm̍'},
            'n': {1: 'ń', 2: 'ǹ', 3: 'ṇ', 5: 'n̂', 6: 'n̂', 7: 'n̄', 8: 'n̍'},
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
            if searchObj2:
                found = searchObj2.group(1)
                guan_im = found
                new_un = self._find_accented_vowel(guan_im, int(tiau))
                chu_im = chu_im.replace(found, new_un)

        return chu_im
