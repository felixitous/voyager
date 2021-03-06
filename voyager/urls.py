"""voyager URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index'),
    url(r'^about/', views.about, name='about'),
    url(r'^about\.php/', views.about, name='about'),
    url(r'^careers\.php/', views.careers, name='career'),
    url(r'^careers/', views.careers, name='career'),
    url(r'^services/', views.services, name='service'),
    url(r'^services\.php/', views.services, name='service'),
    url(r'^recruiting/', views.recruiting, name='recruit'),
    url(r'^contact/', views.contact, name="contact"),
    url(r'^contact\.php/', views.contact, name="contact"),
    url(r'^apply/', views.apply, name="apply"),
    url(r'^savanpatel/', views.savan, name="savan"),
    url(r'^philmontanuri/', views.philmon, name="philmon"),
    url(r'^felixliu/', views.felix, name="felix"),
    url(r'^oliviagu/', views.olivia, name="olivia"),
    url(r'^tedxiao/', views.ted, name="ted"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
