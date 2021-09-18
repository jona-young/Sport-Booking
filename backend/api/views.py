from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import TennisBooking, Profile
from .serializers import TennisBookingSerializer, MyTokenObtainPairSerializer, ProfileSerializer

# Create your views here.
#Need API endpoint for a list of members that can be called with fetchTasks()
#in React and used as a drop-down list when choosing members for court booking


@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Tbook-List': '/tbook-list/',
        'Tbook-Detail View': '/tbook-detail/<str:pk>/',
        'Tbook-Create': '/tbook-create/',
        'Tbook-Update': '/tbook-update/<str:pk>/',
        'Tbook-Delete': '/tbook-delete/<str:pk>/',
        'Profile-Detail': '/profile/<str:pk>/',
    }

    return Response(api_urls)


@api_view(['GET'])
def tbook_list(request, pk):
    tbook = TennisBooking.objects.filter(court_date=pk)
    serializer = TennisBookingSerializer(tbook, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def tbook_create(request):
    serializer = TennisBookingSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def tbook_detail(request, pk):
    tbook = TennisBooking.objects.get(id=pk)
    serializer = TennisBookingSerializer(tbook, many=False)

    return Response(serializer.data)


@api_view(['POST'])
def tbook_update(request, pk):
    tbook = TennisBooking.objects.get(id=pk)
    serializer = TennisBookingSerializer(instance=tbook, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def tbook_delete(request, pk):
    tbook = TennisBooking.objects.get(id=pk)
    tbook.delete()

    return Response('Item Successfully deleted!')

@api_view(['GET'])
def profile_detail(request, pk):
    profile = Profile.objects.get(id=pk)
    serializer = ProfileSerializer(profile, many=False)

    return Response(serializer.data)

class ObtainTokenPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class ProfileUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request, format='json'):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
