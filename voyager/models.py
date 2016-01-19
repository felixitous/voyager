from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=30)
    year = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    major = models.CharField(max_length=40)
