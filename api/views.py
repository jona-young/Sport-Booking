from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TennisBooking
from .serializers import TennisBookingSerializer

# Create your views here.
#Need API endpoint for a list of members that can be called with fetchTasks()
#in React and used as a drop-down list when choosing members for court booking


@api_view(['GET'])
def tbook_overview(request):
    api_urls = {
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/'
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