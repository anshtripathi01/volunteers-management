import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async () => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/events"
      );
      const { events } = await response.json();
      return events;
    } catch (error) {
      console.log("error while fetching events");
    }
  }
);
export const addEvent = createAsyncThunk(
  "events/addEvent",
  async (eventData) => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );
      const event = await response.json();
      toast.success("event Added Successfully", { autoClose: 1000 });
      return event;
    } catch (error) {
      console.log("error while adding");
    }
  }
);

export const editEvent = createAsyncThunk(
  "events/editEvent",
  async (data) => {
    const { event, id } = data;
    
    try {
      const response = await fetch(
        `https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/events/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }
      );
      const updatedEvent = await response.json();
      toast.success("event details updated", { autoClose: 1000 });
      return updatedEvent;
    } catch (error) {
      console.log("error while editing");
    }
  }
);
