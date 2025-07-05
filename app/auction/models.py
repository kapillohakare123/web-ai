
from django.db import models
from django.contrib.auth.models import User


class Team(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    owner_name = models.CharField(max_length=100)
    budget = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Player(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50)  # Batsman, Bowler, All-Rounder
    base_price = models.IntegerField()
    image = models.URLField(blank=True)
    sold_price = models.IntegerField(null=True, blank=True)
    sold_to = models.ForeignKey(
        'Team', null=True, blank=True, on_delete=models.SET_NULL)

    # 🆕 Stats fields
    matches = models.IntegerField(default=0)
    batting_avg = models.FloatField(default=0.0)
    strike_rate = models.FloatField(default=0.0)
    economy = models.FloatField(default=0.0)  # for bowlers

    def __str__(self):
        return self.name


class Bid(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
