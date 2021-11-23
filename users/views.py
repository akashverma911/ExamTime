# File contains the code of integration od urls.py and serializers.py as well as Models.py for display or output
from rest_framework import viewsets
from django.shortcuts import render

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
