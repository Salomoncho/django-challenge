#-*- coding: utf-8 -*-
from django.conf.urls import include, url

from .views import IndexView, index

urlpatterns = [
    url(r'^$', IndexView.as_view(), name="index"),
    url(r'^index/', index, name="index"),
]
