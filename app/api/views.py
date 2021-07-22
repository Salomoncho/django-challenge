#-*- coding: utf-8 -*-
from mailer.models import Company
from rest_framework import generics, status
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from api import serializers


# Create your views here.
class CompanyListPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 100


class CompanyList(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = serializers.CompanyListSerializer
    pagination_class = CompanyListPagination
    filter_backends = [DjangoFilterBackend]
