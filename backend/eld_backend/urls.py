from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/auth/', include('users.urls')),
    path('api/logs/', include('logs.urls')),
    path('api/organizations/', include('organizations.urls')),
    path('api/reports/', include('reports.urls')),
]
