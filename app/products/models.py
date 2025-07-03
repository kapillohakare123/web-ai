from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    stock = models.IntegerField()
    image = models.CharField(max_length=2083)


class Offer(models.Model):
    code = models.CharField(max_length=10)
    description = models.TextField()
    discount = models.FloatField()

    # def __str__(self):
    #     return self.name

    # class Meta:
    #     verbose_name = 'Product'
    #     verbose_name_plural = 'Products'
    #     ordering = ['name']
