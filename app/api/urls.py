#-*- coding: utf-8 -*-
from django.conf.urls import include, url
from api.views import CompanyList

urlpatterns = [
    url(r'companies/', CompanyList.as_view(), name='company_list'),
]
