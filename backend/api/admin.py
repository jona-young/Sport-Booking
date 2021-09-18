from django.contrib import admin
from .models import TennisBooking, Profile

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    model = Profile


admin.site.register(Profile, ProfileAdmin)
