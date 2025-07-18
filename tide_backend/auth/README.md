# Tide Auth Service

A complete JWT-based authentication service built with Spring Boot.

## Features

- User registration and login
- JWT token-based authentication
- Role-based authorization (USER, ADMIN, MODERATOR)
- Password encryption with BCrypt
- CORS configuration
- MySQL database integration

## API Endpoints

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/health` - Health check

### User Endpoints (Protected)

- `GET /api/users/profile` - Get current user profile
- `GET /api/users/{id}` - Get user by ID

## Request/Response Examples

### Register User
```json
POST /api/auth/register
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
```

Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "message": "User registered successfully",
    "success": true
}
```

### Login User
```json
POST /api/auth/login
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "message": "Login successful",
    "success": true
}
```

## Configuration

The service uses the following configuration in `application.yml`:

- **Port**: 8081
- **Database**: MySQL (tide_auth)
- **JWT Secret**: Base64 encoded secret key
- **Token Expiration**: 24 hours
- **Refresh Token Expiration**: 7 days

## Security

- JWT tokens are used for stateless authentication
- Passwords are encrypted using BCrypt
- CORS is configured to allow cross-origin requests
- Role-based access control is implemented

## Running the Service

1. Ensure MySQL is running
2. Update database credentials in `application.yml` if needed
3. Run the application: `mvn spring-boot:run`

The service will be available at `http://localhost:8081` 