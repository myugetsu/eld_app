FROM python:3.10

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Copy entrypoint script and set executable permissions
RUN chmod +x entrypoint.sh

# Expose port
EXPOSE 8000

# Use the entrypoint script
ENTRYPOINT ["./entrypoint.sh"]

# Run application
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]
