from django.urls import path
from . import views
# Define URL patterns for the products app
# This file defines the URL routing for the products app.
# It maps URLs to views within the products app.
# urlpatterns is a list of URL patterns that Django will check in order.
# Each pattern is a path that maps to a view function.


urlpatterns = [
    path('', views.index),
    path('new/', views.new),
]
