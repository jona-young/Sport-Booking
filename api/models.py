from django.db import models

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


class News(models.Model):
    news_title = models.CharField(max_length=100)
    news_date = models.CharField(max_length=10)
    news_time = models.CharField(max_length=8)
    news_body = models.TextField()
    news_readtime = models.CharField(max_length=15)

    #TODO: Switch to a ForeignKey(User) after...
    author = models.CharField(max_length=50)

    def __str__(self):
        return '{} - {} at {}'.format(self.news_title, self.news_date, self.news_time)

#TODO: Members Account models