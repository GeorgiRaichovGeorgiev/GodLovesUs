from django.shortcuts import render

from to_do.models import ToDo


def index(request):
    todos = ToDo.objects.all()
    return render(request, 'todos.html', {'todos_test': todos})
