from django.db import models

# Create your models here.
class Book(models.Model):
    book_name= models.CharField(max_length=30)
    author = models.CharField(max_length=30)

    def __str__(self):
        return self.book_name + " by " + self.author

class Review(models.Model):
    Text_review = models.TextField(max_length=200)
    book = models.ForeignKey(Book,on_delete=models.CASCADE)

    posting_time = models.TimeField()
    posting_date = models.DateField()

    def __str__(self):
        return "Review posted by " + self.user.username + " on book " + self.book.book_name