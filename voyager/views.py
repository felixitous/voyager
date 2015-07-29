from django.shortcuts import render
from django.template import RequestContext, loader
from django.http import HttpResponseRedirect

# logger = logging.getLogger(__name__)

def index(request):
	return render(request, 'index.html')

def about(request):
	return render(request, 'about.html')
