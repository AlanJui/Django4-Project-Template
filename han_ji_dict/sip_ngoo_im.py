class SipNgooIm:
    def __init__(self):
        """Intialize SipNgooIm class with dicitionaries."""
        self.siann_bu_dict = {
            '柳': ['l', 'n'],
            '邊': 'p',
            '求': 'k',
            '去': 'kh',
            '地': 't',
            '頗': 'ph',
            '他': 'th',
            '曾': 'ts',
            '入': 'j',
            '時': 's',
            '英': 'q',
            '門': ['b', 'm'],
            '語': ['g', 'ng'],
            '出': 'tsh',
            '喜': 'h',
        }

        self.un_bu_dict = {
            '君': ['un', 'ut'],
            '堅': ['ian', 'iat'],
            '金': ['im', 'ip'],
            '規': ['ui', 'uih'],
            '嘉': ['ee', 'eeh'],
            '干': ['an', 'at'],
            '公': ['ong', 'ok'],
            '乖': ['uai', 'uaih'],
            '經': ['ing', 'ik'],
            '觀': ['uan', 'uat'],
            '沽': ['oo', 'ooh'],
            '嬌': ['iau', 'iauh'],
            '稽': ['ei', 'eih'],
            '恭': ['iong', 'iok'],
            '高': ['o', 'oh'],
            '皆': ['ai', 'aih'],
            '巾': ['in', 'it'],
            '姜': ['iang', 'iak'],
            '甘': ['am', 'ap'],
            '瓜': ['ua', 'uah'],
            '江': ['ang', 'ak'],
            '兼': ['iam', 'iap'],
            '交': ['au', 'auh'],
            '迦': ['ia', 'iah'],
            '檜': ['ue', 'ueh'],
            '監': ['ann', 'ahnn'],
            '艍': ['u', 'uh'],
            '膠': ['a', 'ah'],
            '居': ['i', 'ih'],
            '丩': ['iu', 'iuh'],
            '更': ['enn', 'ehnn'],
            '褌': ['uinn', 'uinnh'],
            '茄': ['io', 'ioh'],
            '梔': ['inn', 'ihnn'],
            '薑': ['ionn', 'ionnh'],
            '驚': ['iann', 'iannh'],
            '官': ['uann', 'uannh'],
            '鋼': ['ng', 'ngh'],
            '伽': ['e', 'eh'],
            '閒': ['ainn', 'ainnh'],
            '姑': ['onn', 'onnh'],
            '姆': ['m', 'mh'],
            '光': ['uang', 'uak'],
            '閂': ['uainn', 'uaihnn'],
            '糜': ['uenn', 'uennh'],
            '嘄': ['iaunn', 'iauhnn'],
            '箴': ['om', 'op'],
            '爻': ['aunn', 'aunnh'],
            '扛': ['onn', 'ohnn'],
            '牛': ['iunn', 'iunnh'],
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
            "上平": 1,
            "上上": 2,
            "上去": 3,
            "上入": 4,
            "下平": 5,
            "下上": 6,
            "下去": 7,
            "下入": 8,
        }

    def get_siann_bu(self, siann_bu):
        return self.siann_bu_dict[siann_bu]

    def get_un_bu(self, un_bu, tiau):
        # if tiau == 4 or tiau == 8:
        if tiau in (4, 8):
            # 韻母為入聲韻
            un_bu_code = self.un_bu_dict[un_bu][1]
        else:
            # 韻母為舒聲韻
            un_bu_code = self.un_bu_dict[un_bu][0]
        return un_bu_code

    def convert_trandication_tiau(self, tiau):
        return self.trandication_tiau_dict[tiau]

    def get_tiau_ho(self, idx):
        return self.tiau_dict[idx]

    def get_chu_im(self, siann_bu, un_bu, tiau):
        un_code = self.get_un_bu(un_bu, tiau)
        tiau_ho = self.get_tiau_ho(int(tiau))
        siann_code = self.get_siann_bu(siann_bu)

        return f"{un_code}{tiau_ho}{siann_code}"
