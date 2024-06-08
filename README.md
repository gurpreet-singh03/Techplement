# Techplement

# Quote of the Day API

Developed an API system that allows users to get a random quote of the day.
Implement functionalities such as add, update, delete quote by user.
Search by name of author

## Features

- Get a random quote of the day
- Add a new quote
- Update an existing quote
- Delete a quote
- Search quotes by author

## Prerequisites

- Node.js
- MongoDB

## Installation


1. Install dependencies:

    npm install


3. Create a `.env` file in the root directory and add your MongoDB connection string and desired port:

    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the server:

  
    npx nodemon server.js
   

## API Endpoints

### Get a Random Quote

- **Endpoint:** `GET /api/quotes`
- **Description:** Retrieves a random quote from the database.
- **Response Example:**
  ```json
  {
    "_id": "60d5ec49f7d6c12e345ec9b0",
    "text": "The only limit to our realization of tomorrow is our doubts of today.",
    "author": "Franklin D. Roosevelt"
  }
