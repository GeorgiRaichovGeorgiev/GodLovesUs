from django.urls import path

from to_do import views

urlpatterns = [
    path('', views.index, name='index'),
]
