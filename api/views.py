from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def huan_tshiat_huat(request):
    return Response({'message': '你好，世界！'})
