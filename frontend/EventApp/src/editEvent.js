import { fetchEventId, updateEvent } from "./Data/eventRepository.js";

function getEventIdFromUrl() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("id");
}

document.addEventListener("DOMContentLoaded", () => {
  const eventId = getEventIdFromUrl();
  if (eventId) {
    fetchEventId(eventId)
      .then((event) => {
        document.getElementById("title").value = event.title;
        document.getElementById("description").value = event.description;
        document.getElementById("date").value = event.date;
        document.getElementById("location").value = event.location;
      })
      .catch((error) => {
        console.error("Failed to fetch event for editing:", error);
        alert("Failed to load event data.");
      });

    document.getElementById("edit-event-form").addEventListener("submit", function (event) {
      event.preventDefault();
      const updatedEventData = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value,
        location: document.getElementById("location").value,
      };

      updateEvent(eventId, updatedEventData)
        .then((data) => {
          alert("Event updated successfully!");
          window.location.href = "eventlist.html"; // Redirect to the event list
        })
        .catch((error) => {
          console.error("Error updating event:", error);
          alert("Failed to update event. Please try again.");
        });
    });
  } else {
    console.error("No event ID provided in the URL for editing.");
  }
});
