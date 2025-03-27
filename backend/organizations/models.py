from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    contact_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
