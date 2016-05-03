from django.shortcuts import render
from django.http import HttpResponse , Http404 ,  HttpResponseRedirect
import json
from .models import Products
# Create your views here.
def index(request):
	allprod = Products.objects.all()
	return render(request, 'basic/ip_first.html', {'listofprod' : allprod})

def dashboard(request):
	if request.method == 'POST':
		string = request.POST.get('searchprod')
		context = {
			'prodname' : string 
		}
		return render(request , 'basic/ip_dash.html' , context)
	else:
		return HttpResponseRedirect("/")

# def productsearch(request):
# 	if request.method == 'POST':
# 		data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }]
# 		return json.dump(data)
# 	else:
# 		raise Http404("Page not found. This page cannot be displayed.")