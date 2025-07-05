
from .serializers import TeamSerializer
from .models import Team
from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Team, Player, Bid
from .serializers import TeamSerializer, PlayerSerializer, BidSerializer


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_team(request):
    team = Team.objects.get(user=request.user)
    return Response(TeamSerializer(team).data)
