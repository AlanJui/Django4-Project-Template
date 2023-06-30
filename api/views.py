from rest_framework.decorators import api_view
from rest_framework.response import Response

from article_pronunciation.lib_tsa_huan_tshiat import (determine_tone,
                                                       parse_fanqie,
                                                       tsa_huan_tshiat)
from han_ji_dict.models import HanJi


# ==========================================================
# 反切法推導漢字讀音
# http://localhost:8000/api/huan_tshiat_huat/?han_ji=東
# http://localhost:8000/api/huan_tshiat_huat/?han_ji=在
# ==========================================================
@api_view(['GET'])
def huan_tshiat_huat(request):
    if 'han_ji' in request.query_params:
        # 取得欲查詢之「漢字」
        han_ji = request.query_params['han_ji']
        # 以漢字查詢「反切讀音」
        han_ji_dict = tsa_huan_tshiat(han_ji)
        tak_im_list = han_ji_dict['tak_im_list']
        for tak_im in tak_im_list:
            siong_ji = tak_im['huan_tshiat'][0]
            e_ji = tak_im['huan_tshiat'][1:]
            tak_im['piau_im'] = parse_fanqie(siong_ji, e_ji)
        return Response({
            'han_ji': han_ji,
            'tak_im_list': tak_im_list,
        })
    else:
        return Response({'error': '請提供要查詢的漢字。'})


@api_view(['GET'])
def huan_tshiat_huat2(request):
    # return Response({'message': '你好，世界！'})
    if 'han_ji' in request.query_params:
        han_ji = request.query_params['han_ji']
        result = tsa_huan_tshiat(han_ji)
        return Response({'han_ji': han_ji, 'huan_tshiat': result})
    else:
        return Response({'error': '請提供要查詢的漢字。'})


@api_view(['GET'])
def hello(request):
    return Response({'message': '你好，世界！'})
