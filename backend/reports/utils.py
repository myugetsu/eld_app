from reportlab.pdfgen import canvas
from io import BytesIO
from django.core.files.base import ContentFile

def generate_trip_report(trip):
    buffer = BytesIO()
    p = canvas.Canvas(buffer)
    p.drawString(100, 800, f"Trip Report for {trip.start_location} to {trip.dropoff_location}")
    p.drawString(100, 780, f"Pickup Location: {trip.pickup_location}")
    p.drawString(100, 760, f"Trip Created: {trip.created_at}")
    p.save()
    buffer.seek(0)
    return ContentFile(buffer.read(), name=f"trip_report_{trip.id}.pdf")
