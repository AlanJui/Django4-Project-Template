"""
韻母＋聲調 = 韻母注音

a2: á (U+00E1)
a3: à (U+00E0)
a4: ah
a5: â (U+00E2)
a7: ā (U+0101)
a8: a̍h

e2: é (U+00E9)
e3: è (U+00E8)
e4: eh
e5: ê (U+00EA)
e7: ē (U+0113)
e8: e̍h
"""
import re


class TaiLo:
    def __init__(self):
        """Intialize SipNgooIm class with dicitionaries."""
        self.siann_bu_dict = {
            'l': 'l',
            'n': 'n',
            'p': 'p',
            'k': 'k',
            'kh': 'kh',
            't': 't',
            'ph': 'ph',
            'th': 'th',
            'ts': 'ts',
            'j': 'j',
            's': 's',
            '': '',
            'q': '',
            'b': 'b',
            'm': 'm',
            'g': 'g',
            'ng': 'ng',
            'tsh': 'tsh',
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
            'ing': 'ing',
            'ik': 'ik',
            'uan': 'uan',
            'uat': 'uat',
            'oo': 'oo',
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
            'ua': 'ua',
            'uah': 'uah',
            'ang': 'ang',
            'ak': 'ak',
            'iam': 'iam',
            'iap': 'iap',
            'au': 'au',
            'auh': 'auh',
            'ia': 'ia',
            'iah': 'iah',
            'ue': 'ue',
            'ueh': 'ueh',
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
            'uann': 'uann',
            'uannh': 'uannh',
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

        self.trandication_tiau_dict = {
            1: "上平",
            2: "上上",
            3: "上去",
            4: "上入",
            5: "下平",
            6: "下上",
            7: "下去",
            8: "下入",
        }

    def get_siann_bu(self, siann):
        return self.siann_bu_dict[siann]

    def get_un_bu(self, un, tiau):
        # if tiau == 4 or tiau == 8:
        if tiau in (4, 8):
            # 韻母為入聲韻
            un_bu = self.un_bu_dict[un][1]
        else:
            # 韻母為舒聲韻
            un_bu = self.un_bu_dict[un][0]
        return un_bu

    def get_tiau_ho(self, tiau):
        return self.tiau_dict[tiau]

    def convert_trandication_tiau(self, tiau):
        return self.trandication_tiau_dict[tiau]

    def _find_accented_vowel(self, un_bu, tiau):
        accent_mapping = {
            'a': {2: 'á', 3: 'à', 4: 'a', 5: 'â', 7: 'ā', 8: 'a̍'},
            'e': {2: 'é', 3: 'è', 4: 'e', 5: 'ê', 7: 'ē', 8: 'e̍'},
            'i': {2: 'í', 3: 'ì', 4: 'i', 5: 'î', 7: 'ī', 8: 'i̍'},
            'o': {2: 'ó', 3: 'ò', 4: 'o', 5: 'ô', 7: 'ō', 8: 'o̍'},
            'u': {2: 'ú', 3: 'ù', 4: 'u', 5: 'û', 7: 'ū', 8: 'u̍'},
            'm': {2: 'ḿ', 3: 'm̀', 4: 'ṃ', 5: 'm̂', 7: 'm̄', 8: 'm̍'},
            'n': {2: 'ń', 3: 'ǹ', 4: 'ṇ', 5: 'n̂', 7: 'n̄', 8: 'n̍'},
        }

        for vowel, accent_map in accent_mapping.items():
            if vowel in un_bu:
                un_bu = un_bu.replace(vowel, accent_map[tiau])
                break

        return un_bu

    def get_chu_im(self, siann, un, tiau):
        chu_im = f"{siann}{un}"

        pattern = r"(oo|ee|ei|o|e|a|u|i|ng|m)"
        searchObj = re.search(pattern, chu_im, re.M | re.I)

        if searchObj:
            found = searchObj.group(1)
            un_chars = list(found)
            guan_im = un_chars[0]
            un_chars[0] = self._find_accented_vowel(guan_im, int(tiau))
            un_str = "".join(un_chars)
            chu_im = chu_im.replace(found, un_str)

        return chu_im
