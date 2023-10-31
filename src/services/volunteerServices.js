import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchVolunteers = createAsyncThunk(
  "volunteers/fetchVolunteers",
  async () => {
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/volunteers"
      );
      const { volunteers } = await response.json();
      return volunteers;
    } catch (error) {
      console.log("error while fetching volunteers");
    }
  }
);
export const addVolunteer = createAsyncThunk(
  "volunteers/addVolunteer",
  async (volunteerData) => {
    console.log(volunteerData);
    try {
      const response = await fetch(
        "https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/volunteers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(volunteerData),
        }
      );
      const volunteer = await response.json();
      console.log(volunteer);
      toast.success("volunteer Added Successfully", { autoClose: 1000 });
      return volunteer;
    } catch (error) {
      console.log("error while adding");
    }
  }
);

export const editVolunteer = createAsyncThunk(
  "volunteers/editVolunteer",
  async (data) => {
    const { volunteer, id } = data;

    try {
      const response = await fetch(
        `https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/volunteers/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(volunteer),
        }
      );
      const updatedVolunteer = await response.json();
      toast.success("volunteer details updated", { autoClose: 1000 });
      return updatedVolunteer;
    } catch (error) {
      console.log("error while editing");
    }
  }
);
