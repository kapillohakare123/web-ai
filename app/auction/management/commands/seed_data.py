
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from auction.models import Team, Player
import random


class Command(BaseCommand):
    help = 'Seed teams and players with unique users'

    def handle(self, *args, **kwargs):
        Team.objects.all().delete()
        Player.objects.all().delete()
        User.objects.exclude(is_superuser=True).delete()

        team_names = ['Team Alpha', 'Team Bravo', 'Team Charlie', 'Team Delta']
        for name in team_names:
            username = name.lower().replace(' ', '')
            user = User.objects.create_user(
                username=username, password='password123')
            Team.objects.create(user=user, name=name,
                                owner_name=f'{name} Owner', budget=100)

        roles = ['Batsman', 'Bowler', 'All-Rounder', 'Wicket-Keeper']
        for i in range(20):
            Player.objects.create(
                name=f'Player {i+1}',
                role=random.choice(roles),
                base_price=random.randint(10, 30),
                image=f'https://i.pravatar.cc/100?img={i+1}'
            )
        Player.objects.create(
            name="Virat Kohli", role="Batsman", base_price=50, image="...", matches=275,
            batting_avg=57.5, strike_rate=138.2, economy=0
        )

        self.stdout.write(self.style.SUCCESS(
            'Seeded sample teams and players.'))
