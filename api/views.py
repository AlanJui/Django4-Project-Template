from rest_framework.decorators import api_view
from rest_framework.response import Response

from article_pronunciation.lib_huan_tshiat_huat import (determine_tone,
                                                        parse_fanqie)
from article_pronunciation.lib_tsa_huan_tshiat import tsa_huan_tshiat
from han_ji_dict.models import HanJi


# ==========================================================
# 反切法推導漢字讀音
# http://localhost:8000/api/huan_tshiat_huat/?han_ji=東
# ==========================================================
@api_view(['GET'])
def huan_tshiat_huat(request):
    # return Response({'message': '你好，世界！'})
    if 'han_ji' in request.query_params:
        han_ji = request.query_params['han_ji']
        result = tsa_huan_tshiat(han_ji)
        return Response({'han_ji': han_ji, 'huan_tshiat': result})
    else:
        return Response({'error': '請提供要查詢的漢字。'})
