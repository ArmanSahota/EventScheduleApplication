import { fetchAllEvents } from "./src/Data/eventRepository.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


// Simple function to show initial data or set up components
function initializeApp() {
  fetchAllEvents()
    .then((events) => {
      const app = document.querySelector("#app");
      const eventList = events
        .map((event) => `<li>${event.title}</li>`)
        .join("");
     
    })
    .catch((error) => {
      console.error("Failed to fetch events:", error);
    });
}

initializeApp();
