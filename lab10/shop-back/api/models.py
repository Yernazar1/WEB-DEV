from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.FloatField()
    rating = models.FloatField(default=4.5)
    image = models.URLField(blank=True)
    images = models.JSONField(default=list, blank=True)
    link = models.URLField(blank=True)
    likes = models.IntegerField(default=0)
    count = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")

    def __str__(self):
        return self.name

# Create your models here.
