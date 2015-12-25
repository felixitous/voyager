import smtplib
from django.shortcuts import render
from django.template import RequestContext, loader
from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from .forms import ContactForm, InterestForm
from django.middleware.gzip import GZipMiddleware
from django.views.decorators.cache import cache_control

gzip_middleware = GZipMiddleware()
# logger = logging.getLogger(__name__)


@cache_control(must_revalidate=True, max_age=3600)
def index(request):
    response = render(request, 'index.html')
    return gzip_middleware.process_response(request, response)

def about(request):
    return render(request, 'about.html')


def careers(request):
    return render(request, 'careers.html', { 'careers' : True })


def services(request):
    return render(request, 'services.html')


def recruiting(request):
    return render(request, 'recruiting.html')


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            sender = form.cleaned_data['sender']
            super_message = "name: {0} \nsender: {1} \nmessage: {2}".format(
                subject, sender, message)

            send_mail(
                "Felix Liu", super_message, sender, ["felixmbx@gmail.com"])
            return HttpResponseRedirect('/')
    else:
        form = ContactForm()
        return render(request, 'contact.html', {'form': form})


def apply(request):
    if request.method == 'POST':
        form = InterestForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            year = form.cleaned_data['year']
            major = form.cleaned_data['major']
            super_message = "name: {0} \nemail: {1} \nyear: {2} \nmajor: {3}".format(
                name, email, year, major)
            send_mail(
                "Felix Liu", super_message, email, ["felixmbx@gmail.com"])
            return HttpResponseRedirect('/')
    else:
        form = InterestForm()
        return render(request, 'apply.html', {'form': form})

def savan(request):
    return render(request, 'members/savanpatel.html')

def philmon(request):
    return render(request, 'members/philmontanuri.html')

def ted(request):
    return render(request, 'members/tedxiao.html')

def olivia(request):
    return render(request, 'members/oliviagu.html')

def felix(request):
    return render(request, 'members/felixliu.html')
