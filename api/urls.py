from django.urls import path
from . import views

urlpatterns = [
    path('', views.tbook_overview, name='tbook-overview'),
    path('tbook-list/', views.tbook_list, name='tbook-list'),
    path('tbook-create/', views.tbook_create, name='tbook-create'),
    path('tbook-detail/<str:pk>/', views.tbook_detail, name='tbook-detail'),
    path('tbook-update/<str:pk>/', views.tbook_update, name='tbook-update'),
    path('tbook-delete/<str:pk>/', views.tbook_delete, name='tbook-detail'),
]