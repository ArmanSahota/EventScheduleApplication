const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 1234;

// load events.json 
function loadEvents() {
    return JSON.parse(fs.readFileSync("./events.json", "utf8"));
}

// function that saves event data to json file
function saveEvents(events){
    // validate the data before saving
    fs.writeFileSync("./events.json", JSON.stringify(events), "utf8");
}

// middle ware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


// get all events
app.get("/events", (req, res)=> {
    const events = loadEvents();
    res.json(events);
});

// get events by ID
app.get("/events/:id", (req, res)=> {
    const events = loadEvents();
    const event = events.find((s) => s.id === parseInt(req.params.id));
    if(event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

// create a new event
app.post("/events",(req, res) => {
    const events = loadEvents();
    //post requests pass data in req.body
    const event = req.body;
    console.log("received event:", event);
    //assign  a unique id to the event
    event.id = events.length + 1;
    events.push(event);
    saveEvents(events);
    // 201 status code is used to indicate that a new resouce has been created
    res.status(201).send(event);
});

// update an existing event
app.put("/events/:id", (req, res) => {
    let events = loadEvents();   
    //find the index of the event we want to update
    const index = events.findIndex((s) => s.id === parseInt(req.params.id));
    //if the event is found, update the event with the new data
    if (index !== -1) {
      //update the event at index with the data from the request body
      events[index] = { ...events[index], ...req.body };
      saveEvents(events);
      res.send(events[index]);
    } else {
      res.status(404).send("Event not found");
    }
  });

//Delete an event
app.delete("/events/:id", (req, res) => {
    let events = loadEvents();
    // filter creates a new array that matches all elements conditions
    const filteredEvents = events.filter(
        (s) => s.id !== parseInt(req.params.id)
    );
    // if the lengths do not match event was deleted
    if(events.length!== filteredEvents.length){
        saveEvents(filteredEvents);
        res.status(200).send({message: "Event Deleted Successfully"});
    } else {
        res.status(404).send("Event not found");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });




