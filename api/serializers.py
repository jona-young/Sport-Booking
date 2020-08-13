from rest_framework import serializers
from .models import TennisBooking, News


class TennisBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TennisBooking
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'