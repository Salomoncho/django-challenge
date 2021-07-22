#-*- coding: utf-8 -*-
# Create your views here.
from django.views.generic import ListView
from django.shortcuts import render

from mailer.models import Company


class IndexView(ListView):
    template_name = "mailer/index.html"
    model = Company
    paginate_by = 100


def index(request, *args, **kargs):
    return render(request, 'mailer/index2.html')
