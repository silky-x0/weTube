# weTube

A modern, full-stack video sharing platform built with cutting-edge technologies. weTube provides a seamless video uploading, streaming, and social interaction experience similar to popular video platforms.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)

## 🎯 Overview

weTube is a comprehensive video sharing platform that allows users to upload, watch, and interact with video content. Built as a monorepo using pnpm workspaces, the project is structured into multiple packages for better code organization and maintainability.

## 🚀 Tech Stack

### Backend
- **Framework**: [NestJS](https://nestjs.com/) v11.0.1
- **Runtime**: Node.js with TypeScript
- **Database**: MongoDB with Mongoose ODM
- **API Documentation**: Swagger/OpenAPI
- **Authentication**: Cookie-based sessions
- **Validation**: Class-validator & Class-transformer

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) v16.0.0
- **UI Library**: React v19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Compiler**: React Compiler (Babel plugin)

### Development Tools
- **Package Manager**: pnpm v10.19.0
- **Monorepo**: pnpm workspaces
- **Linting**: ESLint v9.38.0
- **Formatting**: Prettier v3.6.2
- **Testing**: Jest (Backend)

## 📁 Project Structure

```
weTube/
├── backend/              # NestJS API server
│   ├── src/
│   │   ├── modules/      # Feature modules
│   │   │   ├── auth/     # Authentication & authorization
│   │   │   ├── users/    # User management
│   │   │   ├── videos/   # Video upload & streaming
│   │   │   ├── comments/ # Comment system
│   │   │   └── health/   # Health check endpoints
│   │   ├── common/       # Shared utilities & decorators
│   │   ├── config/       # Configuration files
│   │   ├── app.module.ts # Root module
│   │   └── main.ts       # Application entry point
│   └── test/             # E2E tests
├── frontend/             # Next.js web application
│   ├── src/
│   │   ├── app/          # App router pages
│   │   ├── components/   # Reusable UI components
│   │   └── lib/          # Utility functions
│   └── public/           # Static assets
├── shared/               # Shared types & utilities
├── worker/               # Background job processing
└── package.json          # Root package configuration
```

## ✨ Features

### Current Features
- ✅ **Health Monitoring**: API health check endpoints with database connectivity status
- ✅ **API Documentation**: Interactive Swagger UI for API exploration

### Planned Features
- 🔄 **User Authentication**: Secure user registration and login
- 🔄 **Video Management**: Upload, edit, and delete videos
- 🔄 **Video Streaming**: Optimized video playback
- 🔄 **Comments System**: Engage with video content through comments
- 🔄 Video transcoding and multiple quality options
- 🔄 Real-time notifications
- 🔄 User subscriptions and channels
- 🔄 Video recommendations
- 🔄 Search functionality
- 🔄 Likes and dislikes
- 🔄 Playlists

## 🏁 Getting Started

### Prerequisites

- **Node.js**: v20.x or higher
- **pnpm**: v10.19.0 or higher
- **MongoDB**: v8.x or higher (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weTube
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   **Backend** (`backend/.env.local`):
   ```env
   MONGODB_URI=<your_mongodb_connection_string>
   DB_NAME=<database_name>
   PORT=5000
   ```

   **Frontend** (`frontend/.env.local`):
   ```env
   # Add frontend-specific environment variables here
   ```

4. **Start the development servers**

   **Backend**:
   ```bash
   cd backend
   pnpm run start:dev
   ```

   **Frontend**:
   ```bash
   cd frontend
   pnpm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - API Documentation: http://localhost:5000/docs

## 💻 Development

### Code Quality

The project uses ESLint and Prettier for code quality and consistency:

```bash
# Run linting
pnpm run lint

# Format code
pnpm run format
```

### Backend Development

```bash
cd backend

# Development mode with hot reload
pnpm run start:dev

# Debug mode
pnpm run start:debug

# Production build
pnpm run build

# Run tests
pnpm run test
pnpm run test:watch
pnpm run test:cov
pnpm run test:e2e
```

### Frontend Development

```bash
cd frontend

# Development server
pnpm run dev

# Production build
pnpm run build

# Start production server
pnpm run start
```

## 📚 API Documentation

The backend API is fully documented using Swagger/OpenAPI. Once the backend server is running, you can access the interactive API documentation at:

**http://localhost:5000/docs**

The documentation includes:
- All available endpoints
- Request/response schemas
- Authentication requirements
- Example requests and responses

## 🔐 Environment Variables

### Backend Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `DB_NAME` | Database name | Yes |
| `PORT` | Server port (default: 5000) | No |

### Frontend Variables

Create a `frontend/.env.local` file for frontend-specific environment variables.

## 📜 Scripts

### Root Level

```bash
pnpm run lint          # Lint all packages
pnpm run format        # Format all packages
```

### Backend

```bash
pnpm run build         # Build for production
pnpm run start         # Start production server
pnpm run start:dev     # Start development server
pnpm run start:debug   # Start in debug mode
pnpm run test          # Run unit tests
pnpm run test:e2e      # Run E2E tests
```

### Frontend

```bash
pnpm run dev           # Start development server
pnpm run build         # Build for production
pnpm run start         # Start production server
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Run linting and formatting before committing

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Akhil

## 🙏 Acknowledgments

- NestJS team for the amazing backend framework
- Next.js team for the powerful React framework
- MongoDB team for the flexible database solution

---

**Note**: This project is currently in active development. Features and documentation may change frequently.