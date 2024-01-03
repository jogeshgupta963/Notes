# RESTful API for Notes

## Overview

This project implements a secure and scalable RESTful API that allows users to manage notes. Users can create, read, update, and delete notes, as well as share notes with other users. The application also features a search functionality based on keywords.

## Technical Stack

-   **Framework**: ExpressJS
-   **Database**: MongoDB
-   **Authentication Protocol**:JWT based authentication with cookies
-   **Rate Limiting & Throttling**: Implemented for handling high traffic.
-   **Search Functionality**: Implemented with regex
-   **Testing Framework**: Jest

## Project Structure

-   `src/`: Contains the source code for the API.
-   `tests/`: Includes tests for API endpoints.
-   `config/`: Configuration files or scripts.
-   `controllers/`: Main Logic of Endpoint.
-   `routes/`: Inclueds routes.
-   `middlewares/`: Consists of middlewares.
-   `model/`: Consists of database schemas.
-   `data/`: Consists of mock data.
-   `utils/`: Consists of external utilities like types, interfaces etc.

## Setup Instructions

1. **Clone the repository:**

    ```bash
    https://github.com/jogeshgupta963/Notes.git
    cd ./Notes/server

    ```

2. **Environment Variables:**

    Already added for your convenience

3. **Database Setup:**

    Already setup

4. **Create Docker Image:**

    ```bash
    docker build -t notes_image .
    ```

5. **Run application inside docker:**

    ```bash
    docker run -it -p 3001:3001 notes_image
    ```

6. **Install dependencies(Optional, for running locally or testing):**

    ```bash
    npm install
    ```

7. **Run Tests:**

    ```bash
    npm run test
    ```

## API Endpoints

### Authentication Endpoints

#### `POST /api/auth/signup`

Create a new user account.

#### `POST /api/auth/login`

Log in to an existing user account and receive an access token.

### Note Endpoints

#### `GET /api/notes`

Get a list of all notes for the authenticated user.

#### `GET /api/notes/:note_id`

Get a note by ID for the authenticated user.

#### `POST /api/notes`

Create a new note for the authenticated user.

#### `PUT /api/notes/:note_id`

Update an existing note by ID for the authenticated user.

#### `DELETE /api/notes/:note_id`

Delete a note by ID for the authenticated user.

#### `POST /api/notes/:note_id/share`

Share a note with another user for the authenticated user.

#### `GET /api/notes/search?q=query`

Search for notes based on keywords for the authenticated user.
