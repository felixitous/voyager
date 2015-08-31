from django import forms

class ContactForm(forms.Form):
    subject = forms.CharField(max_length=100)
    sender = forms.EmailField()
    message = forms.CharField(widget=forms.Textarea)

class InterestForm(forms.Form):
	name = forms.CharField(max_length=100)
	email = forms.EmailField()
	year = forms.CharField(max_length=100)
	major = forms.CharField(max_length=100)
