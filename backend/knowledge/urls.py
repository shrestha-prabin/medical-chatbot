from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('categories/create/', views.CategoryCreateView.as_view(), name='category-create'),
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('information/', views.InformationListView.as_view(), name='information-list'),
    path('information/create/', views.CategoryCreateView.as_view(), name='information-create'),
]