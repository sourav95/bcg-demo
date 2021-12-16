from django.urls import path
from . import views

urlpatterns = [
    path('', views.group_data_by_month, name='home'),
]