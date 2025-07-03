from django.shortcuts import render
from django.http import HttpResponse
from .models import Product, Offer
# the name, price, and stock of each product.
# The OfferAdmin class does the same for the Offer model.
# Create your views here.


def index(request):
    return render(request, 'index.html', {'products': Product.objects.all()})


def new(request):
    return HttpResponse("This is the new product page.")
