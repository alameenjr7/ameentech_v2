# AmeenTECH Backend API Documentation

## Overview
This is the backend API for the AmeenTECH digital agency website. It provides CRUD operations for managing contacts, services, and portfolio projects.

## Base URL
```
http://localhost:3000/api
```

## Endpoints

### Contacts

#### Create Contact
- **POST** `/contacts`
- **Description**: Create a new contact form submission
- **Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+221 XX XXX XX XX",
  "service": "web",
  "message": "I need a website for my business"
}
```

#### Get All Contacts
- **GET** `/contacts`
- **Query Parameters**:
  - `email`: Filter by email
  - `service`: Filter by service type

#### Get Contact by ID
- **GET** `/contacts/:id`

#### Update Contact
- **PATCH** `/contacts/:id`

#### Delete Contact
- **DELETE** `/contacts/:id`

### Services

#### Create Service
- **POST** `/services`
- **Body**:
```json
{
  "title": "Web Development",
  "description": "Modern web applications",
  "icon": "fas fa-laptop-code",
  "isActive": true,
  "order": 1
}
```

#### Get All Services
- **GET** `/services`

#### Get Active Services Only
- **GET** `/services/active`

#### Get Service by ID
- **GET** `/services/:id`

#### Update Service
- **PATCH** `/services/:id`

#### Toggle Service Active Status
- **PUT** `/services/:id/toggle`

#### Delete Service
- **DELETE** `/services/:id`

### Projects

#### Create Project
- **POST** `/projects`
- **Body**:
```json
{
  "title": "E-commerce Platform",
  "description": "Online store with advanced features",
  "icon": "fas fa-shopping-cart",
  "technologies": ["Laravel", "Vue.js", "MySQL"],
  "isActive": true,
  "order": 1,
  "clientName": "ABC Company",
  "projectUrl": "https://example.com"
}
```

#### Get All Projects
- **GET** `/projects`
- **Query Parameters**:
  - `technology`: Filter by technology

#### Get Active Projects Only
- **GET** `/projects/active`

#### Get Project by ID
- **GET** `/projects/:id`

#### Update Project
- **PATCH** `/projects/:id`

#### Toggle Project Active Status
- **PUT** `/projects/:id/toggle`

#### Delete Project
- **DELETE** `/projects/:id`

## Database Setup

1. Install PostgreSQL
2. Create a database named `ameentech_db`
3. Update the `.env` file with your database credentials
4. Install dependencies:
```bash
npm install @nestjs/typeorm typeorm pg @nestjs/config class-validator class-transformer @nestjs/mapped-types
```
5. Run the application:
```bash
npm run start:dev
```
6. Seed the database (optional):
```bash
npx ts-node src/database/seeds/seed.ts
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=ameentech_db
NODE_ENV=development
PORT=3000
API_PREFIX=/api
```

## CORS Configuration

The API is configured to accept requests from:
- http://localhost:3000
- http://localhost:5173
- http://127.0.0.1:5500

## Validation

All endpoints use class-validator for input validation. Invalid requests will return a 400 Bad Request with validation errors.

## Error Handling

The API returns standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request (validation errors)
- 404: Not Found
- 500: Internal Server Error
