# File Pertains the implementation of the urls in django framwork
from rest_framework.routers import DefaultRouter
from .views import UserViewSet


router = DefaultRouter()
router.register(r'', UserViewSet)
urlpatterns = router.urls
