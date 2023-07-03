# ==========================================================
# 反切法推導漢字讀音
# ==========================================================
from han_ji_dict.models import HanJi


def determine_tone(tiau1, tiau2):
    # determine the clearness/muddiness
    tshing_lo_im = 'tshing' if int(tiau1) <= 4 else 'lo'

    # 定四聲：平、上、去、入
    if int(tiau2) in {1, 5}:
        si_siann_tiau = 'ping'
    elif int(tiau2) in {2, 6}:
        si_siann_tiau = 'siong'
    elif int(tiau2) in {3, 7}:
        si_siann_tiau = 'khi'
    elif int(tiau2) in {4, 8}:
        si_siann_tiau = 'jip'
    else:
        return f"{tiau2} 聲調，無法歸入四聲調：平、上、去、入其中一種！"

    # 分清、濁
    if tshing_lo_im == 'tshing_lo':
        if si_siann_tiau == 'ping':
            tiau_ho = '1'
        elif si_siann_tiau == 'siong':
            tiau_ho = '2'
        elif si_siann_tiau == 'khi':
            tiau_ho = '3'
        else:  # entering
            tiau_ho = '4'
    else:  # lo
        if si_siann_tiau == 'ping':
            tiau_ho = '5'
        elif si_siann_tiau == 'siong':
            tiau_ho = '6'
        elif si_siann_tiau == 'khi':
            tiau_ho = '7'
        else:  # entering
            tiau_ho = '8'

    return tiau_ho, tshing_lo_im, si_siann_tiau


def parse_fanqie(character1, character2):
    try:
        han_ji1 = HanJi.objects.get(han_ji=character1)
        han_ji2 = HanJi.objects.get(han_ji=character2)
    except HanJi.DoesNotExist:
        return None

    siann_bu1, un_bu1, tiau1 = han_ji1.split_chu_im()
    siann_bu2, un_bu2, tiau2 = han_ji2.split_chu_im()

    tiau_ho, tshing_lo_im, si_siann_tiau = determine_tone(tiau1, tiau2)

    piau_im = siann_bu1 + un_bu2 + tiau_ho

    return {
        'piau_im': piau_im,                      # 漢字拼音
        'siong_ji': [siann_bu1, un_bu1, tiau1],  # 上字
        'e_ji': [siann_bu2, un_bu2, tiau2],      # 下字
        'tshing_lo_im': tshing_lo_im,            # 清濁音
        'si_siann_tiau': si_siann_tiau,          # 四聲調
        'siann_bu': f"{siann_bu1}",              # 聲母
        'siann_bu_piau_im': f"{siann_bu1}{un_bu1}{tiau1}",
        'un_bu': f"{un_bu2}",                    # 韻母
        'un_bu_piau_im': f"{siann_bu2}{un_bu2}{tiau2}",
        'tiau_ho': tiau_ho,                      # 聲調
    }
