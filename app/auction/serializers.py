
from rest_framework import serializers
from .models import Team, Player, Bid


class TeamSerializer(serializers.ModelSerializer):
    players = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = ['id', 'name', 'owner_name', 'budget', 'players']

    def get_players(self, team):
        return PlayerSerializer(team.player_set.all(), many=True).data


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            'id', 'name', 'role', 'image', 'sold_price',
            'matches', 'batting_avg', 'strike_rate', 'economy'
        ]


class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'

    def create(self, validated_data):
        team = validated_data['team']
        player = validated_data['player']
        amount = validated_data['amount']

        if player.sold_to:
            raise serializers.ValidationError("Player already sold.")
        if team.budget < amount:
            raise serializers.ValidationError("Insufficient budget.")

        bid = Bid.objects.create(**validated_data)
        player.sold_to = team
        player.sold_price = amount
        player.save()
        team.budget -= amount
        team.save()
        return bid
