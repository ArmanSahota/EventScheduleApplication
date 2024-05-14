import { fetchAllEvents } from "./Data/eventRepository.js";

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("events-table").getElementsByTagName("tbody")[0];

  fetchAllEvents()
    .then((events) => {
      events.forEach((event) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${event.id}</td>
            <td>${event.title}</td>
            <td>${event.date}</td>
            <td>${event.location}</td>
            <td>
              <a href="eventdetails.html?id=${event.id}" class="btn btn-info">Details</a> 
              <a href="editevent.html?id=${event.id}" class="btn btn-warning">Edit</a>
              <a href="deleteevent.html?id=${event.id}" class="btn btn-danger">Delete</a>
            </td>
            <td>${event.description} </td>
        `;
      });
    })
    .catch((error) => {
      console.error("Failed to fetch events:", error);
      tableBody.innerHTML = `<tr><td colspan="5">Error loading events. Please try again later.</td></tr>`;
    });
});
