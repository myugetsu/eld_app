# Fullstack ELD App - Backend

This is the backend of the Fullstack ELD (Electronic Logging Device) application, built with **Django** and **Django REST Framework**. It provides APIs for authentication, trip management, log management, and report generation.

## Features

- **Django**: High-level Python web framework for rapid development.
- **Django REST Framework (DRF)**: Toolkit for building Web APIs.
- **PostgreSQL**: Relational database for storing application data.
- **Gunicorn**: WSGI HTTP server for running the application.
- **Celery**: Task queue for background jobs (e.g., report generation).
- **Redis**: Message broker for Celery.
- **Docker**: Containerized deployment for the backend.

## Project Structure

The project is organized as follows:

```
backend/
├── reports/                # Reports app for generating trip reports
├── logs/                   # Logs app for managing trip logs
├── users/                  # Users app for authentication and user management
├── organizations/          # Organizations app for managing organizations
├── eld_backend/            # Main Django project settings and configuration
├── manage.py               # Django's command-line utility
├── requirements.txt        # Python dependencies
├── Dockerfile              # Docker configuration for the backend
├── docker-compose.yml      # Docker Compose configuration
```

## Getting Started

### Prerequisites

- **Python**: Ensure Python 3.10 or higher is installed.
- **Docker**: Install Docker and Docker Compose for containerized deployment.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/fullstack-eld-app.git
   cd backend
   ```

2. Create a virtual environment and activate it:

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```sh
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the `backend` directory and add the following:

   ```env
   SECRET_KEY=your-secret-key
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   DATABASE_URL=postgres://admin:password@db:5432/eld_db
   ```

5. Run database migrations:

   ```sh
   python manage.py migrate
   ```

6. Start the development server:

   ```sh
   python manage.py runserver
   ```

The backend will be available at [http://localhost:8000](http://localhost:8000).

### Running with Docker

1. Build and start the containers:

   ```sh
   docker-compose up --build
   ```

2. Access the backend at [http://localhost:8000](http://localhost:8000).

### Collect Static Files

To collect static files for production:

```sh
python manage.py collectstatic --noinput
```

## Key Endpoints

- **Authentication**:
  - `POST /api/auth/login/`: Login endpoint.
  - `POST /api/auth/register/`: User registration.

- **Trips**:
  - `GET /api/trips/`: Fetch all trips.
  - `POST /api/trips/`: Create a new trip.

- **Logs**:
  - `GET /api/logs/<trip_id>/`: Fetch logs for a specific trip.

- **Reports**:
  - `GET /api/reports/`: Fetch all reports.
  - `POST /api/reports/<trip_id>/generate/`: Generate a report for a trip.

## Tools and Libraries

- **Django**: Web framework for building the backend.
- **Django REST Framework**: Toolkit for building APIs.
- **PostgreSQL**: Database for storing application data.
- **Gunicorn**: WSGI server for production.
- **Celery**: Task queue for background jobs.
- **Redis**: Message broker for Celery.

## Environment Variables

The following environment variables are used in the project:

- `SECRET_KEY`: Django's secret key.
- `DEBUG`: Set to `True` for development, `False` for production.
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts.
- `DATABASE_URL`: Database connection URL.

## Folder Details

### `reports/`

Handles report generation for trips.

### `logs/`

Manages logs associated with trips.

### `users/`

Handles user authentication and management.

### `organizations/`

Manages organizations and related data.

### `eld_backend/`

Contains the main Django project settings and configuration.

## Running Tests

To run tests:

```sh
python manage.py test
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
