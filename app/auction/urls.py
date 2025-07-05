
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from auction.models import Team
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

router = DefaultRouter()
router.register('teams', views.TeamViewSet)
router.register('players', views.PlayerViewSet)
router.register('bids', views.BidViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('my-team/', views.my_team, name='my_team'),
]


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_team(request):
    team = Team.objects.get(user=request.user)
    return Response({
        'id': team.id,
        'name': team.name,
        'owner_name': team.owner_name,
        'budget': float(team.budget),
    })
