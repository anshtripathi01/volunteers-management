import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { VolunteerSummary } from "./pages/VolunteerSummary";
import { Volunteers } from "./pages/volunteers/Volunteers";
import { Events } from "./pages/events/Events";
import { VolunteerForm } from "./pages/volunteers/VolunteerForm";
import { VolunteerDetails } from "./pages/volunteers/VolunteerDetails";
import { EventForm } from "./pages/events/EventForm";
import { EventDetails } from "./pages/events/EventsDetails";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EventsSummary } from "./pages/EventsSummary";

function App() {
  
  return (
    <Flex flexDirection="column">
    <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<VolunteerSummary />} />
        <Route path="/event-summary" element={<EventsSummary />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/volunteer/add" element={<VolunteerForm />} />
        <Route path="/volunteer/edit" element={<VolunteerForm />} />
        <Route path="/volunteers/:volunteerId" element={<VolunteerDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/add" element={<EventForm />} />
        <Route path="/event/edit" element={<EventForm />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </Flex>
  );
}

export default App;
