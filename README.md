# Renton Technical College CSI-244
<br />    

<div align="center">  
    <img src="logo.jpg" alt="Logo">
    <h3 align="center">Midterm Exam</h3>
</div>

This repository is a part of CSI-244 at Renton Technical College.

## Midterm Exam

You have been asked to build a event scheduling application.


### Project Overview

The Event Management Application will consist of a frontend and a backend. The backend will manage the event data, while the frontend will provide an interface for users to interact with the application.

### Backend Setup

1. **Project Structure:**
   - Inside your main project folder, create two subfolders: `frontend` and `backend`.

2. **Node Project Initialization:**
   - Navigate to the `backend` folder and initialize a new Node.js project with `npm init -y`.
   - Install Express.js (`npm install express`) and any other necessary packages like `body-parser` for request parsing, `cors` for cross-origin resource sharing, and `nodemon` for hot reloading during development.

3. **Server Setup:**
   - In the `backend` directory, create a `server.js` file.
   - Setup an Express server in this file. Include middleware for CORS and json parsing.

4. **Data Model:**
   - An `events.json` file is provided with a few basic examples. Note the shape of the data within the json file. Move this file into your backend folder for easy access from server.js

5. **Endpoints:**
   - **GET /events:** Retrieve and return all events.
   - **POST /events:** Add a new event.
   - **GET /events/:id:** Retrieve a single event by ID.
   - **PUT /events/:id:** Update an existing event by ID.
   - **DELETE /events/:id:** Delete an event by ID.

### Frontend Development

1. **Event List Page:**
   - Display all events fetched from the backend.
   - Each event entry should have options to view details, edit, or delete.
   - The view details page should access **GET /events/:id:**
   - The edit page should show the user a form with all of the information about the event. When the form is submitted it should send its request to **PUT /events/:id:**
   - The delete page should show a confirmation page to the user asking them if they are sure they want to delete. If the user clicks yes, send a request to **DELETE /events/:id:**

2. **Add Event Page:**
   - A form to create a new event. Include fields for the event title, description, date, and location. Sends request to **POST /events:** Add a new event.

3. **Event Details Page:**
   - Show detailed information about a single event. Include options to edit or delete the event.

4. **Edit Event Page:**
   - A form pre-populated with the event's existing data, allowing users to update and save changes.


### Design

- Style these pages to make sure they are visually appealing and responsve. You may use bootstrap or a similar CSS library for styling.
### Midterm Exam Grading Rubric

**Total Points: 250**

#### Project Structure (25 Points)
- [ ] Two folders created for frontend and backend (10 points)
- [ ] Backend: Node project initialized, Express, and other necessary packages installed (8 points)
- [ ] Frontend: JavaScript and HTML files properly set up for the application (7 points)

#### Backend Functionality (100 Points)
- [ ] **GET /events** endpoint correctly retrieves and returns all events (20 points)
- [ ] **POST /events** endpoint correctly adds a new event (20 points)
- [ ] **GET /events/:id** endpoint correctly retrieves a single event by ID (20 points)
- [ ] **PUT /events/:id** endpoint correctly updates an existing event's information (20 points)
- [ ] **DELETE /events/:id** endpoint correctly deletes an event (20 points)

#### Frontend Functionality (100 Points)
1. **Event List Page (25 Points)**
   - [ ] Correctly fetches and displays events from the backend (9 points)
   - [ ] Displays event title, description, date, and location for each event (8 points)
   - [ ] Implements navigation to the Event Details Page (8 points)

2. **Add Event Page (25 Points)**
   - [ ] Provides a form to submit a new event with all required fields (13 points)
   - [ ] Correctly sends a POST request to the backend to add the event (12 points)

3. **Event Details Page (25 Points)**
   - [ ] Correctly fetches and displays detailed information using the event's ID (13 points)
   - [ ] Includes options to EDIT and DELETE the event (12 points)

4. **Edit Event Page (25 Points)**
   - [ ] Form pre-populated with the selected event's data (13 points)
   - [ ] Includes all required fields and a submit button to save changes (12 points)

#### Design and Usability (25 Points)
- [ ] Use of Bootstrap or similar framework for a professional appearance (9 points)
- [ ] Consistent and user-friendly interface design (8 points)
- [ ] Responsive design that works on different devices and screen sizes (8 points)

**Total Points: __ / 250**

#### Additional Notes:
- Extra credit may be awarded for innovative features, exceptional design, or particularly efficient solutions.
