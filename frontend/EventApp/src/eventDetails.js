import { fetchEventId } from "./Data/eventRepository.js";

function getEventIdFromUrl() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("id");
}

document.addEventListener("DOMContentLoaded", () => {
  const eventId = getEventIdFromUrl();
  if (eventId) {
    fetchEventId(eventId)
      .then((event) => {
        document.getElementById("event-title").textContent = event.title;
        document.getElementById("event-description").textContent = event.description;
        document.getElementById("event-date").textContent = event.date;
        document.getElementById("event-location").textContent = event.location;
      })
      .catch((error) => {
        console.error("Failed to fetch event details:", error);
        document.getElementById("app").innerHTML = "Failed to load event details.";
      });
  } else {
    console.error("No event ID provided in the URL.");
  }
});
