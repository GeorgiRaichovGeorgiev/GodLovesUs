from django.shortcuts import render
from django.views import View

from home.models import Question


class PollQuestions(View):
    title = 'Questions'
    template = 'index.html'

    def get(self, request):
        questions = list(Question.objects.values('pk', 'question_text'))

        context = {
            'question_text': self.title,
            'props': questions,
        }

        return render(request, self.template, context)
