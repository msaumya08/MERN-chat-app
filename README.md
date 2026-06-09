# MERN Chat Application

## Overview

A real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that enables secure and seamless communication between users. The application supports real-time messaging, user authentication, online status tracking, and responsive user interactions through Socket.io.

## Features

* Real-time messaging using Socket.io
* Secure JWT-based user authentication
* User registration and login
* Online/Offline user status tracking
* Responsive and modern user interface
* Encrypted user sessions
* Message storage and retrieval using MongoDB
* Full-stack MERN architecture

## Tech Stack

### Frontend

* React.js
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Socket.io

### Database

* MongoDB

## Project Structure

```text
├── frontend/
│   ├── src/
│   └── public/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
│
├── package.json
└── README.md
```

## How It Works

1. Users register and log in securely using JWT authentication.
2. Authenticated users can access the chat platform.
3. Socket.io establishes real-time communication between connected users.
4. Messages are stored in MongoDB for persistence.
5. Online user status is dynamically updated across the application.

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/MERN-chat-app.git
cd MERN-chat-app
```

### Install Dependencies

```bash
npm install
cd frontend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Application

Backend:

```bash
npm start
```

Frontend:

```bash
cd frontend
npm start
```

## Key Highlights

* Secure authentication using JWT tokens
* Real-time communication powered by Socket.io
* Scalable MERN architecture
* Efficient database operations with MongoDB
* Responsive user experience across devices

## Impact

This project demonstrates practical full-stack development skills by combining modern web technologies, secure authentication mechanisms, real-time communication, and database management to deliver a reliable chat platform for collaborative communication.

## Author

**Dev Shukla**

Computer Science Undergraduate | Full Stack Developer | MERN Stack Enthusiast
