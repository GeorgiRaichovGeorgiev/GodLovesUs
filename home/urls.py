from django.urls import path

from home import views

app_name = 'home'

urlpatterns = [
    path('questions/', views.PollQuestions.as_view(), name='questions'),
]
