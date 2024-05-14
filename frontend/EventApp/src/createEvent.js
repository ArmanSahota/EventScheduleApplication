import { createEvent } from "./Data/eventRepository";

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value,
        location: document.getElementById("location").value
    };

    // Send POST request to the server using createEvent function
    createEvent(formData)
        .then(() => {
            alert("Event created successfully!");
            // Redirect to event list page or do any other necessary action
            window.location.href = "eventlist.html";
        })
        .catch(error => {
            console.error("Error creating event:", error);
            alert("Failed to create event. Please try again.");
        });
}

// Add event listener to the form
document.getElementById("add-event-form").addEventListener("submit", handleFormSubmission);
