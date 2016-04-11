from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'basic/ip_first.html', {})

# def productsearch(request):
# 	if request.method == 'POST':
# 		pass
# 	else:
# 		return HttpResponse("Nothing to see")
