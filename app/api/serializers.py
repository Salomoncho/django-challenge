#-*- coding: utf-8 -*-
from mailer.models import Company, Contact
from rest_framework import serializers


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'first_name', 'last_name', 'email', 'get_order_count']


class CompanyListSerializer(serializers.ModelSerializer):
    contacts = ContactSerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ['id', 'name', 'bic', 'contacts', 'get_order_count', 'get_order_sum']

