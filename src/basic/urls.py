from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
   # url(r'^productsearch/anysearch' , views.productsearch , name='productsearch'),
    url(r'^dashboard/', views.dashboard, name='dashboard'),
]