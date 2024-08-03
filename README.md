# Blog CMS

## Overview
This is a react-based application I developed to manage my blog which can be read over at my portfolio website.

## Project Structure
The application is composed of several key components:

1. **App Component**: The main component of the application, managing the state and rendering either the login page or the dashboard based on the user's authentication status.

2. **Login Component**: Handles user authentication. It sends login credentials to the backend, stores the received JWT token, and updates the authentication state of the application.

3. **Dashboard Component**: Displays a list of blog posts fetched from the backend. It allows users to create new posts, edit existing posts, or delete posts.

4. **Editor Component**: Provides a rich text editor (using React Quill) for creating or editing blog posts. Users can enter the title and content of the post and either save changes to an existing post or publish a new post.

5. **API Handling (axiosInstance)**: An Axios instance is created to handle API requests, including automatic inclusion of JWT tokens in headers for authenticated routes.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/react-blog-app.git
    cd react-blog-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```


## Components

### App Component (`App.js`)
- Manages the state of posts, editor visibility, current post, and user authentication.
- Loads posts from the backend when the user logs in.
- Controls the visibility of the login page, dashboard, and editor based on the state.

### Login Component (`Login.js`)
- Handles user input for username and password.
- Sends a login request to the backend.
- On successful login, stores the JWT token in `localStorage` and updates the logged-in state.

### Dashboard Component (`Dashboard.js`)
- Displays a list of blog posts fetched from the backend.
- Provides buttons to create a new post, edit a post, or delete a post.
- Allows the user to log out by clearing the JWT token from `localStorage`.

### Editor Component (`Editor.js`)
- Provides an interface for creating or editing blog posts using React Quill.
- Handles saving updates to existing posts or publishing new posts.

### API Handling (`api-handling.js`)
- Configures an Axios instance for making HTTP requests to the backend API.
- Automatically adds the JWT token to the Authorization header for authenticated requests.
- Manages requests for fetching posts, creating new posts, updating existing posts, and deleting posts.

## API Integration

This application is designed to work with a RESTful API. The following endpoints are used:

- **POST** `/login`: Authenticate user and retrieve JWT token.
- **GET** `/posts`: Fetch all blog posts.
- **GET** `/posts/:id`: Fetch a specific blog post by ID.
- **POST** `/posts`: Create a new blog post.
- **PUT** `/posts/:id`: Update an existing blog post by ID.
- **DELETE** `/posts/:id`: Delete a blog post by ID.

## Environment Variables

The base URL for the backend API is hardcoded in `api-handling.js`. You can modify it according to your backend configuration.

## License

This project is licensed under... I don't know which license. Use it, don't use it, I couldn't care less.
