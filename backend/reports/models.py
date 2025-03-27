from django.db import models
from api.models import Trip

class Report(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='reports')
    created_at = models.DateTimeField(auto_now_add=True)
    pdf_file = models.FileField(upload_to='reports/', blank=True, null=True)
