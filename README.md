# ConvoSpace

ConvoSpace is a modern chat application designed to provide seamless communication with a rich set of features. Built with a robust backend and a dynamic frontend, ConvoSpace stands out with its real-time messaging capabilities, group chat functionalities, and media sharing options.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Socket Events](#socket-events)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time Messaging**: Instant messaging with real-time updates using Socket.IO.
- **Group Chats**: Create and manage group chats with multiple members.
- **Media Sharing**: Upload and share images, videos, and audio files.
- **Notifications**: Receive notifications for new messages and alerts.
- **User Authentication**: Secure user authentication and session management.
- **Admin Dashboard**: Manage users, chats, and messages with an admin interface.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data, messages, and chat information.
- **Mongoose**: ODM for MongoDB.
- **Socket.IO**: Real-time communication library.
- **Cloudinary**: Cloud service for media storage and management.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management for React applications.
- **Material-UI**: React components for faster and easier web development.
- **Vite**: Next-generation frontend tooling.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ConvoSpace.git
   cd ConvoSpace/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173` to access the ConvoSpace application.
2. Register a new account or log in with existing credentials.
3. Start chatting with friends or create new group chats.

## API Endpoints

### User Routes
- `POST /api/v1/user/register`: Register a new user.
- `POST /api/v1/user/login`: Log in a user.
- `GET /api/v1/user/me`: Get the logged-in user's profile.
- `POST /api/v1/user/logout`: Log out the user.

### Chat Routes
- `POST /api/v1/chat/new`: Create a new group chat.
- `GET /api/v1/chat/my`: Get all chats of the logged-in user.
- `PUT /api/v1/chat/addmembers`: Add members to a group chat.
- `PUT /api/v1/chat/removemember`: Remove a member from a group chat.
- `DELETE /api/v1/chat/leave/:id`: Leave a group chat.
- `POST /api/v1/chat/message`: Send a message with attachments.
- `GET /api/v1/chat/message/:id`: Get messages of a chat.

### Admin Routes
- `POST /api/v1/admin/login`: Admin login.
- `POST /api/v1/admin/logout`: Admin logout.
- `GET /api/v1/admin/dashboard`: Get dashboard statistics.

## Socket Events

### Client-Side Events
- `NEW_MESSAGE`: Emitted when a new message is sent.
- `START_TYPING`: Emitted when a user starts typing.
- `STOP_TYPING`: Emitted when a user stops typing.
- `CHAT_JOINED`: Emitted when a user joins a chat.
- `CHAT_LEAVED`: Emitted when a user leaves a chat.

### Server-Side Events
- `NEW_MESSAGE`: Broadcasted to all members of a chat when a new message is sent.
- `START_TYPING`: Broadcasted to all members of a chat when a user starts typing.
- `STOP_TYPING`: Broadcasted to all members of a chat when a user stops typing.
- `ONLINE_USERS`: Broadcasted to all members of a chat when a user joins or leaves.

## File Structure

### Backend
