const API_BASE_URL = "http://localhost:1234";

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// Fetch all events
function fetchAllEvents() {
  return fetch(`${API_BASE_URL}/events`)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching all events:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}

// Fetch a single Event by ID
function fetchEventId(eventId) {
  return fetch(`${API_BASE_URL}/events/${eventId}`)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching event by ID:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}

// Create a new event
function createEvent(eventData) {
  return fetch(`${API_BASE_URL}/events`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
  })
  .then(handleResponse)
  .catch((error) => {
      console.error("Error creating new event:", error);
      throw error; // Re-throw to allow caller to handle or display error message
  });
}

// Update an existing event
function updateEvent(eventId, eventData) {
  return fetch(`${API_BASE_URL}/events/${eventId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Error updating event:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}
// Delete an event by ID
function deleteEvent(eventId) {
  return fetch(`${API_BASE_URL}/events/${eventId}`, {
      method: "DELETE"
  })
  .then(handleResponse)
  .catch((error) => {
      console.error("Error deleting event:", error);
      throw error;
  });
}


export { fetchAllEvents, fetchEventId, createEvent, updateEvent, deleteEvent };