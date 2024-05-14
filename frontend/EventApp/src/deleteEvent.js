import { deleteEvent } from "./Data/eventRepository.js";

document.addEventListener("DOMContentLoaded", () => {
    const queryParams = new URLSearchParams(window.location.search);
    const eventId = queryParams.get("id");

    document.getElementById("confirm-delete-btn").addEventListener("click", () => {
        if (eventId) {
            deleteEvent(eventId)
                .then(() => {
                    alert("Event deleted successfully!");
                    window.location.href = "eventlist.html"; // Redirect to event list
                })
                .catch((error) => {
                    console.error("Error deleting event:", error);
                    alert("Failed to delete event. Please try again.");
                });
        } else {
            console.error("No event ID provided in the URL.");
        }
    });
});
