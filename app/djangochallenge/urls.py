#-*- coding: utf-8 -*-
from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path

admin.autodiscover()

urlpatterns = [
    path('', include('mailer.urls')),
    path('api/', include('api.urls')),
    path("admin/", admin.site.urls),
]

