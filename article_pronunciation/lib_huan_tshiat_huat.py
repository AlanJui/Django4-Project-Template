# ==========================================================
# 反切法推導漢字讀音
# ==========================================================
from han_ji_dict.models import HanJi


def determine_tone(tiau1, tiau2):
    # determine the clearness/muddiness
    clearness = 'clear' if int(tiau1) <= 4 else 'muddy'

    # determine tone category
    if int(tiau2) in {1, 5}:
        tone_category = 'level'
    elif int(tiau2) in {2, 6}:
        tone_category = 'rising'
    elif int(tiau2) in {3, 7}:
        tone_category = 'departing'
    elif int(tiau2) in {4, 8}:
        tone_category = 'entering'
    else:
        return "Invalid tone for the lower character."

    # get the tone
    if clearness == 'clear':
        if tone_category == 'level':
            tone = '1'
        elif tone_category == 'rising':
            tone = '2'
        elif tone_category == 'departing':
            tone = '3'
        else:  # entering
            tone = '4'
    else:  # muddy
        if tone_category == 'level':
            tone = '5'
        elif tone_category == 'rising':
            tone = '6'
        elif tone_category == 'departing':
            tone = '7'
        else:  # entering
            tone = '8'

    return tone


def parse_fanqie(character1, character2):
    try:
        han_ji1 = HanJi.objects.get(han_ji=character1)
        han_ji2 = HanJi.objects.get(han_ji=character2)
    except HanJi.DoesNotExist:
        return None

    siann_bu1, un_bu1, tiau1 = han_ji1.split_chu_im()
    siann_bu2, un_bu2, tiau2 = han_ji2.split_chu_im()

    tone = determine_tone(tiau1, tiau2)

    pinyin = siann_bu1 + un_bu2 + tone
    return pinyin
