from django import forms

pronunciation_options = {
    "tai_lo": "台羅拼音",
    "peh_oe_ji": "白話字",
    "ban_phing": "閩南語拼音方案",
    "sip_ngoo": "十五音",
    "fong_yim": "方音符號"
}

class MyForm(forms.Form):
    PRONUNCIATION_CHOICES = [
        ("tai_lo", "台羅拼音"),
        ("peh_oe_ji", "白話字"),
        ("ban_phing", "閩南語拼音方案"),
        ("sip_ngoo", "十五音"),
        ("fong_yim", "方音符號")
    ]
    pronunciation = forms.ChoiceField(choices=PRONUNCIATION_CHOICES)
