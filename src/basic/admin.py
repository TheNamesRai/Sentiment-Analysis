from django.contrib import admin

# Register your models here.
from .models import Products , Reviews

class ProductsAdmin(admin.ModelAdmin):
    fields = ('brand_name', 'product_name', 'image_name')



admin.site.register(Products)
admin.site.register(Reviews)