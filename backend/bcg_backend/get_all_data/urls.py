from django.urls import path
from . import views

urlpatterns = [
    path('', views.fetch_all_details, name='home'),
]