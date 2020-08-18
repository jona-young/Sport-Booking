from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TennisBooking, News
from .serializers import TennisBookingSerializer, NewsSerializer

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
        'News-List': '/news-list/',
        'News-Detail View': '/news-detail/<str:pk>/',
        'News-Create': '/news-create/',
        'News-Update': '/news-update/<str:pk>/',
        'News-Delete': '/news-delete/<str:pk>/',
    }

    return Response(api_urls)


@api_view(['GET'])
def tbook_list(request):
    tbook = TennisBooking.objects.all()
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
def news_list(request):
    new = News.objects.all()
    serializer = NewsSerializer(new, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def news_create(request):
    serializer = NewsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def news_detail(request, pk):
    new = News.objects.get(id=pk)
    serializer = NewsSerializer(new, many=False)

    return Response(serializer.data)


@api_view(['POST'])
def news_update(request, pk):
    new = News.objects.get(id=pk)
    serializer = NewsSerializer(instance=new, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def news_delete(request, pk):
    new = News.objects.get(id=pk)
    new.delete()

    return Response('Item Successfully deleted!')