from django.db import models

# Create your models here.
class TennisBooking(models.Model):
    court_date = models.CharField(max_length=10)
    court_time = models.CharField(max_length=8)
    court_number = models.CharField(max_length=1)
    #court_play refers to Singles(True) or Doubles(False)
    court_play = models.BooleanField()
    comments = models.TextField(max_length=200)

    #TODO: Switch to a ForeignKey(User) after...
    player1 = models.CharField(max_length=50)
    player2 = models.CharField(max_length=50)
    player3 = models.CharField(max_length=50, blank=True)
    player4 = models.CharField(max_length=50, blank=True)
    author = models.CharField(max_length=50)

    def __str__(self):
        return '{} {} - {}'.format(self.court_date, self.court_time, self.author)
