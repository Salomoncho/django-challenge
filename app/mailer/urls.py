#-*- coding: utf-8 -*-
from django.conf.urls import include, url

from .views import IndexView, index

urlpatterns = [
    url(r'^$', index, name="index"),

]
