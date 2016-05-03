from __future__ import unicode_literals
from datetime import date
from django.db import models

# Create your models here.

class Products(models.Model):
	product_name = models.CharField(max_length = 50)
	image_name = models.CharField(max_length = 100)

	def __unicode__(self): # __str__ in python 3
		return "%s" % (self.product_name)

class Reviews(models.Model):
	GENDER = (
		('M' , 'Male'),
		('F' , 'Female'),
	)

	REVIEWS_STATUS = (
		('POS' , 'Positive'),
		('NEG' , 'Negative'),
		('NEU' , 'Neutral'),
	)
	product = models.ForeignKey(Products, on_delete=models.CASCADE)
	name = models.CharField(max_length = 30)
	email = models.EmailField(max_length=70,null=True)
	review = models.CharField(max_length = 3000)
	age = models.IntegerField()
	gender = models.CharField(max_length=1 , choices=GENDER)
	date = models.DateField(default=date.today )
	rivals = models.CharField(max_length = 60 , null=True)

	overall = models.CharField(max_length=3,choices=REVIEWS_STATUS , null=True)
	camera = models.CharField(max_length=3 , choices=REVIEWS_STATUS , null=True) 
	performance = models.CharField(max_length=3 , choices=REVIEWS_STATUS , null=True) 
	battery = models.CharField(max_length=3 , choices=REVIEWS_STATUS , null=True) 
	display = models.CharField(max_length=3 , choices=REVIEWS_STATUS , null=True) 

	def __unicode__(self):
		return "%s" % (self.name)