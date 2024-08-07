# Blog CMS
This is a react-based application I developed to manage my blog which can be read over at my portfolio website.
Built using React, it allows users to create, edit, delete, and manage blog posts. It includes features such as a login system, blog editor with a rich text editor, and a dashboard for managing posts.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication:** Secure login and registration system.
- **Blog Management:** Create, edit, delete, and manage blog posts.
- **Rich Text Editor:** Utilizes ReactQuill for content creation.
- **Dashboard:** Overview of all posts with options to edit, delete, or create new posts.
- **Preview Mode:** Preview blog posts before publishing.

## Technologies Used
- **Frontend:** React, React Router, ReactQuill
- **API Handling:** Axios
- **Styling:** CSS
- **Build & Deployment:** React Scripts, gh-pages

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/asdhamidi/blog-cms.git
   cd blog-cms
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application
1. **Start the development server:**
   ```bash
   npm start
   ```
   This will run the app in the development mode, and you can view it at `http://localhost:3000`.

2. **Build the app for production:**
   ```bash
   npm run build
   ```
   The build is optimized and ready for deployment.

## Usage
1. **Login/Register:**
   - Use the login form to access the dashboard.
   - Register a new account if you don’t have one using the registration code.

2. **Dashboard:**
   - View all blog posts.
   - Create new posts, or edit/delete existing ones.

3. **Editor:**
   - Use the rich text editor to create and format your blog content.
   - Preview the post before publishing.

## API Integration
The app communicates with a backend API for managing blog posts and user authentication. The base URL for the API is set to `https://blog-api-h1by.vercel.app/`. 

### API Endpoints
- `GET /posts`: Fetch all blog posts.
- `GET /posts/:id`: Fetch a specific blog post.
- `POST /posts`: Create a new blog post.
- `PUT /posts/:id`: Update an existing blog post.
- `DELETE /posts/:id`: Delete a blog post.
- `POST /login`: User login.
- `POST /register`: User registration.

## Project Structure
```bash
src/
│
├── components/
│   ├── api-handling.js  # Axios instance with API configuration
│   ├── dashboard.js     # Dashboard component
│   ├── editor.js        # Blog editor component
│   ├── login.js         # Login and registration component
│   ├── preview.js       # Preview component
│
├── App.css              # Global styles
├── App.js               # Main app component
└── index.js             # Entry point of the app
```



## License
This project is licensed under... I don't know which license. Use it, don't use it, I couldn't care less.