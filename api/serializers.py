from rest_framework import serializers
from .models import TennisBooking

class TennisBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TennisBooking
        fields = '__all__'