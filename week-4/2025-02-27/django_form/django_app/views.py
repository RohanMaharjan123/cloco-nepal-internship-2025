from django.shortcuts import render, redirect
from .forms import ContactForm
# Create your views here.

#home page view function
def home_view(request):
    return render(request, 'django_app/home.html')


#contact page view function to handle the contact form
def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.send_email()
            return redirect('contact-success')
    else:
        form = ContactForm()
    context = {'form': form}
    return render(request, 'django_app/contact.html', context)

# about success page
def contact_success_view(request):
    return render(request, 'django_app/contact_success.html')