from django.urls import path
from . import views

urlpatterns = [
    path('', views.save_updated_data, name='home'),
]