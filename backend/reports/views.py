import os
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Report
from .serializers import ReportSerializer
from api.models import Trip
from reportlab.pdfgen import canvas
from .utils import generate_trip_report

class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

    @action(detail=True, methods=['post'])
    def generate(self, request, pk=None):
        trip = Trip.objects.get(pk=pk)
        report = Report.objects.create(trip=trip)
        report.pdf_file.save(f"trip_report_{trip.id}.pdf", generate_trip_report(trip))
        report.save()
        return Response({"message": "Report generated successfully", "report_id": report.id})

class GenerateTripReportView(APIView):
    def post(self, request, trip_id):
        try:
            trip = Trip.objects.get(id=trip_id)

            # Define the report file path
            reports_dir = os.path.join(os.getcwd(), "reports")
            os.makedirs(reports_dir, exist_ok=True)
            file_path = os.path.join(reports_dir, f"trip_{trip_id}_report.pdf")

            # Generate the PDF
            pdf = canvas.Canvas(file_path)
            pdf.drawString(100, 800, f"Trip Report - {trip.start_location} to {trip.dropoff_location}")
            pdf.drawString(100, 780, f"Pickup Location: {trip.pickup_location}")
            pdf.drawString(100, 760, f"Created At: {trip.created_at}")
            pdf.save()

            return Response({"message": "Report generated", "file_path": file_path}, status=status.HTTP_201_CREATED)
        except Trip.DoesNotExist:
            return Response({"error": "Trip not found"}, status=status.HTTP_404_NOT_FOUND)

