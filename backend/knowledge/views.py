import json
import os

from rest_framework import generics, permissions, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Information
from .serializers import CategorySerializer, InformationSerializer


class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["post"]


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ["get"]


class InformationCreateView(generics.CreateAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer
    permission_classes = [permissions.IsAuthenticated]
    http_method_names = ["post"]


class InformationListView(generics.ListAPIView):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer
    http_method_names = ["get"]


class InformationScraperView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        category = Category.objects.filter(name="Diseases")[0]
        print(category)

        for entry in os.scandir("knowledge/data/A"):
            # print(entry.path)
            with open(entry.path, "r") as f:
                data = json.load(f)

                if len(data) <= 1:
                    print(len(data), entry.path)
                    continue

                if not Information.objects.filter(title=data[0]["category"]).exists():
                    info = Information(
                        category=category,
                        title=data[0]["category"],
                        summary=data[1]["answer"],
                        text=data[0]["answer"],
                    )

                    info.save()
                    print("saved")
        return Response({}, status=status.HTTP_201_CREATED)
