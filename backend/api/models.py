from django.db import models

class Trip(models.Model):
    start_location = models.CharField(max_length=255)
    pickup_location = models.CharField(max_length=255)
    dropoff_location = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
