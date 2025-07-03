from django.contrib import admin
from .models import Product, Offer
# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock')


class OfferAdmin(admin.ModelAdmin):
    list_display = ('code', 'discount')


admin.site.register(Product, ProductAdmin)
admin.site.register(Offer, OfferAdmin)
# This code registers the Product model with the Django admin site,
# allowing it to be managed through the admin interface.
# The ProductAdmin class customizes the admin interface to display
