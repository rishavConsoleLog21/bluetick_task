# Bluetask Consultants Next.js Application

This Next.js application is built for Bluetask Consultants to manage user data fetched from an API. The application allows users to view, edit, delete, and add user information using state management without relying on additional APIs.

## Features

- **View Modes**: The application supports three different view modes:
    - **Table View**: Displays user data in a tabular format.
    - **Card View**: Displays user data in card format.
    - **List View**: Displays user data in a list format. This mode is also used for editing and deleting user data.

- **User Management**:
    - **Edit User**: Users can edit existing user information in the list view mode.
    - **Delete User**: Users can delete existing user information in the list view mode.
    - **Add User**: Users can add new user information.

## State Management

The application uses state management to handle user data operations such as fetching, editing, deleting, and adding users. This ensures a seamless user experience without the need for additional API calls.

## Getting Started

To get started with the application, follow these steps:

### With Docker

**Docker Setup**:
    For Docker setup instructions, please refer to the [README.docker.md](README.docker.md) file.

### Without Docker

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/bluetask-task.git
    cd bluetask-task
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Run the development server**:
    ```bash
    npm run dev
    ```


## Conclusion

This Next.js application provides a comprehensive solution for managing user data with multiple view modes and state management, ensuring efficient and user-friendly operations for Bluetask Consultants.
