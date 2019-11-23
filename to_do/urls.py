from django.urls import path

from to_do import views

app_name = 'to_do'

urlpatterns = [
    path('', views.index, name='index'),
]
