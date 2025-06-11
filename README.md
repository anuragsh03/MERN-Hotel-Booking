# Hotel Booking Backend

**A Node.js backend application for managing hotel reservations and bookings.**

---

## Overview

This project provides a backend service for hotel booking systems, enabling users to create, view, update, and delete bookings. It is designed for learning and experimentation with Node.js, Express, and MongoDB, and can serve as a foundation for a full-stack hotel booking platform.

---

## Features

- **Hotel Management:**  
  - Create, read, update, and delete hotel listings.
- **Booking Management:**  
  - Make, view, update, and cancel reservations.
- **User Management:**  
  - (Optional) User authentication and role-based access control for admin vs. guest users.
- **API Endpoints:**  
  - RESTful routes for all CRUD operations.
- **Data Validation:**  
  - Input validation for bookings and hotels.

---

## Technologies Used

- **Backend:**  
  - Node.js
  - Express.js
- **Database:**  
  - MongoDB (with Mongoose ODM)
- **Authentication:**  
  - (Optional) JWT or Passport.js for user authentication
- **Environment Management:**  
  - dotenv for environment variables

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** installed and running

### Installation

1. **Clone the repository:**

git clone https://github.com/ANHEDONICS/hotel_booking.git
cd hotel_booking

2. **Install dependencies:**

npm install

3. **Set up environment variables:**
- Create a `.env` file in the root directory.
- Add the following variables (adjust as needed):
  ```
  DATABASE_URL=mongodb://localhost:27017/hotel_booking
  JWT_SECRET=your_jwt_secret
  ```
4. **Start the application:**

node index.js

- The server will start at `http://localhost:3000` (or your specified port).

---

## API Documentation

Below are example endpoints. Adjust according to your actual routes.

| Endpoint                | Method | Description                |
|-------------------------|--------|----------------------------|
| `/api/hotels`           | GET    | List all hotels            |
| `/api/hotels`           | POST   | Create a new hotel         |
| `/api/hotels/:id`       | GET    | Get a specific hotel       |
| `/api/hotels/:id`       | PUT    | Update a hotel             |
| `/api/hotels/:id`       | DELETE | Delete a hotel             |
| `/api/bookings`         | GET    | List all bookings          |
| `/api/bookings`         | POST   | Create a new booking       |
| `/api/bookings/:id`     | GET    | Get a specific booking     |
| `/api/bookings/:id`     | PUT    | Update a booking           |
| `/api/bookings/:id`     | DELETE | Delete a booking           |

> **Note:** If user authentication is implemented, endpoints may require valid tokens.

---

## Project Structure

hotel_booking/
├── controllers/ # Business logic for hotels and bookings
├── models/ # Data models (Mongoose schemas)
├── routes/ # API route definitions
├── utils/ # Utility functions and helpers
├── index.js # Main entry point
├── .env # Environment variables
└── package.json # Dependencies and scripts


---

## Acknowledgments

- **Node.js** and **Express** for backend development.
- **MongoDB** for database storage.
- **GitHub** for project management and collaboration[1].

---

*Enjoy building and experimenting with your hotel booking backend!*
