from django.shortcuts import render
from .models import Book, Review
import datetime


# Create your views here.
def TextReviewForm(request, book_id):
    if request.method == 'GET':
        return render(request,"database/form.html", {})
    else:
        review = request.POST['review']
        book = Book.objects.get(id=book_id)
        newReview = Review(Text_review=review, book=book)


