from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from . import views


urlpatterns = [
    path('', views.api_overview, name='tbook-overview'),
    path('tbook-list/<str:pk>/', views.tbook_list, name='tbook-list'),
    path('tbook-create/', views.tbook_create, name='tbook-create'),
    path('tbook-detail/<str:pk>/', views.tbook_detail, name='tbook-detail'),
    path('tbook-update/<str:pk>/', views.tbook_update, name='tbook-update'),
    path('tbook-delete/<str:pk>/', views.tbook_delete, name='tbook-detail'),
    path('profile/<str:pk>/', views.profile_detail, name='profile-detail'),
    path('token/obtain/', views.ObtainTokenPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token-refresh'),
    path('user/create/', views.ProfileUserCreate.as_view(), name='create-user'),
    path('blacklist/', views.LogoutAndBlacklistRefreshTokenForUserView.as_view(), name="blacklist")
]