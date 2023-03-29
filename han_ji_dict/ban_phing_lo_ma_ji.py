"""閩南拼音方案（BP）."""

import re


class BanPhing:
    def __init__(self):
        """Intialize class with dicitionaries."""
        self.siann_bu_dict = {
            'l': 'l',
            'n': 'n',
            'p': 'p',
            'k': 'k',
            'kh': 'kh',
            't': 't',
            'ph': 'ph',
            'th': 'th',
            'ts': 'ch',
            'j': 'j',
            's': 's',
            '': '',
            'q': '',
            'b': 'b',
            'm': 'm',
            'g': 'g',
            'ng': 'ng',
            'tsh': 'chh',
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
            'ee': 'ee',
            'eeh': 'eeh',
            'an': 'an',
            'at': 'at',
            'ong': 'ong',
            'ok': 'ok',
            'uai': 'uai',
            'uaih': 'uaih',
            'ing': 'eng',
            'ik': 'ek',
            'uan': 'oan',
            'uat': 'oat',
            'oo': 'o͘ ',
            'ooh': 'ooh',
            'iau': 'iau',
            'iauh': 'iauh',
            'ei': 'ei',
            'eih': 'eih',
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
            'ap': 'ap',
            'ua': 'oa',
            'uah': 'oah',
            'ang': 'ang',
            'ak': 'ak',
            'iam': 'iam',
            'iap': 'iap',
            'au': 'au',
            'auh': 'auh',
            'ia': 'ia',
            'iah': 'iah',
            'ue': 'oe',
            'ueh': 'oeh',
            'ann': 'ann',
            'ahnn': 'ahnn',
            'u': 'u',
            'uh': 'uh',
            'a': 'a',
            'ah': 'ah',
            'i': 'i',
            'ih': 'ih',
            'iu': 'iu',
            'iuh': 'iuh',
            'enn': 'enn',
            'ehnn': 'ehnn',
            'uinn': 'uinn',
            'uinnh': 'uinnh',
            'io': 'io',
            'ioh': 'ioh',
            'inn': 'inn',
            'ihnn': 'ihnn',
            'ionn': 'ionn',
            'ionnh': 'ionnh',
            'iann': 'iann',
            'iannh': 'iannh',
            'uann': 'oann',
            'uannh': 'oannh',
            'ng': 'ng',
            'ngh': 'ngh',
            'e': 'e',
            'eh': 'eh',
            'ainn': 'ainn',
            'ainnh': 'ainnh',
            'onn': 'onn',
            'ohnn': 'ohnn',
            'onnh': 'onnh',
            'm': 'm',
            'mh': 'mh',
            'uang': 'uang',
            'uak': 'uak',
            'uainn': 'uainn',
            'uaihnn': 'uaihnn',
            'uenn': 'uenn',
            'uennh': 'uennh',
            'iaunn': 'iaunn',
            'iauhnn': 'iauhnn',
            'om': 'om',
            'op': 'op',
            'aunn': 'aunn',
            'aunnh': 'aunnh',
            'iunn': 'iunn',
            'iunnh': 'iunnh',
        }

        self.tiau_dict = {
            1: "一",
            2: "二",
            3: "三",
            4: "四",
            5: "五",
            7: "七",
            8: "八",
        }

        # 將「傳統八聲調」轉換成閩拼使用的調號
        self.trandication_tiau_dict = {
            1: 1,  # 陰平: 44
            2: 3,  # 上聲：53
            3: 5,  # 陰去：21
            4: 7,  # 上聲：53
            5: 2,  # 陽平：24
            7: 6,  # 陰入：3?
            8: 8,  # 陽入：4?
        }

        self.accent_mapping = {
            'a': {2: 'á', 3: 'à', 4: 'a', 5: 'â', 7: 'ā', 8: 'a̍'},
            'e': {2: 'é', 3: 'è', 4: 'e', 5: 'ê', 7: 'ē', 8: 'e̍'},
            'i': {2: 'í', 3: 'ì', 4: 'i', 5: 'î', 7: 'ī', 8: 'i̍'},
            'o': {2: 'ó', 3: 'ò', 4: 'o', 5: 'ô', 7: 'ō', 8: 'o̍'},
            'u': {2: 'ú', 3: 'ù', 4: 'u', 5: 'û', 7: 'ū', 8: 'u̍'},
            'm': {2: 'ḿ', 3: 'm̀', 4: 'ṃ', 5: 'm̂', 7: 'm̄', 8: 'm̍'},
            'n': {2: 'ń', 3: 'ǹ', 4: 'ṇ', 5: 'n̂', 7: 'n̄', 8: 'n̍'},
        }

        self.pattern = r"(a|oo|ere|iu|ui|ng|e|o|i|u|m)"

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
        siann_bu = self.get_siann_bu(siann).strip()
        un_bu = self.get_un_bu(un)

        # 當聲母為「空白」，韻母為：i 或 u 的調整
        un_chars = list(un_bu)
        if siann_bu == "":
            if un_chars[0] in ('i', 'u'):
                siann = "y" if un_chars[0] == "i" else "w"

        # 將「傳統八聲調」轉換成閩拼使用的調號
        tiau = self.convert_trandication_tiau(int(tiau))

        chu_im = f"{siann_bu}{un_bu}"

        searchObj = re.search(self.pattern, chu_im, re.M | re.I)
        if searchObj:
            found = searchObj.group(1)
            un_chars = list(found)
            idx = 0
            if found in ('iu', 'ui'):
                idx = 1
            elif found in ('oo', 'ng'):
                idx = 0
            elif found == "ere":
                idx = 2

            guan_im = un_chars[idx]
            un_chars[idx] = self._find_accented_vowel(guan_im, int(tiau))
            un_str = "".join(un_chars)
            chu_im = chu_im.replace(found, un_str)

        return chu_im
