from django.shortcuts import render
from rest_framework import viewsets
from .models import TODO
from .serializers import TODO_Serializer


class TODO_Viewset(viewsets.ModelViewSet):
    serializer_class = TODO_Serializer
    queryset = TODO.objects.all()



