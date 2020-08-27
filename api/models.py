from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class TennisBooking(models.Model):
    '''
    To change forms dynamically
    I can set state of singles/doubles variable to boolean field true or false
    Then based off selecting singles or doubles, the boolean field switches true or false
    The input field below will be determined by an if conditional that will show 4 input
    fields for players OR 2 input fields for players based off true or false of
    singles/doubles input field above
    '''

    court_date = models.CharField(max_length=10)
    court_time = models.CharField(max_length=8)
    court_number = models.CharField(max_length=1)
    #court_play refers to Singles(1) or Doubles(0)
    court_play = models.CharField(max_length=1)
    comments = models.TextField(max_length=200)

    #TODO: Switch to a ForeignKey(User) after...
    player1 = models.CharField(max_length=50)
    player2 = models.CharField(max_length=50)
    player3 = models.CharField(max_length=50, blank=True)
    player4 = models.CharField(max_length=50, blank=True)
    author = models.CharField(max_length=50)

    def __str__(self):
        return '{} {} - {}'.format(self.court_date, self.court_time, self.author)

#TODO: Members Account models

class Profile(AbstractUser):
    phone_number = models.CharField(max_length=12, blank=True)

