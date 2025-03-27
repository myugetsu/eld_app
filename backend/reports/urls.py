from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReportViewSet, GenerateTripReportView

router = DefaultRouter()
router.register(r'', ReportViewSet, basename='report')

urlpatterns = [
    path('', include(router.urls)),
    path("<int:trip_id>/generate/", GenerateTripReportView.as_view(), name="generate_trip_report"),
]
