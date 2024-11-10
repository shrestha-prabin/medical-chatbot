from rest_framework import generics, permissions
from .models import Category, Information
from .serializers import CategorySerializer, InformationSerializer

class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['post']

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ['get']

class InformationCreateView(generics.CreateAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ['post']

class InformationListView(generics.ListAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer
    http_method_names = ['get']