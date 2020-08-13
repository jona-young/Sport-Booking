from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_overview, name='tbook-overview'),
    path('tbook-list/', views.tbook_list, name='tbook-list'),
    path('tbook-create/', views.tbook_create, name='tbook-create'),
    path('tbook-detail/<str:pk>/', views.tbook_detail, name='tbook-detail'),
    path('tbook-update/<str:pk>/', views.tbook_update, name='tbook-update'),
    path('tbook-delete/<str:pk>/', views.tbook_delete, name='tbook-detail'),
    path('news-list/', views.news_list, name='news-list'),
    path('news-create/', views.news_create, name='news-create'),
    path('news-detail/<str:pk>/', views.news_detail, name='news-detail'),
    path('news-update/<str:pk>/', views.news_update, name='news-update'),
    path('news-delete/<str:pk>/', views.news_delete, name='news-detail'),
]