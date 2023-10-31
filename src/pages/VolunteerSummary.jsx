import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

export const VolunteerSummary = () => {
  const { volunteerId } = useParams();
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    const fetchedVolunteer = {
      name: "John Doe",
      contact: "johndoe@example.com",
      assignedEvents: ["Event 1", "Event 2"],
      volunteerHistory: [
        {
          event: "Event 3",
          role: "Trash Collector",
          date: "2023-11-10",
        },
        {
          event: "Event 4",
          role: "Gardener",
          date: "2023-11-15",
        },
      ],
    };
    setVolunteer(fetchedVolunteer);
  }, [volunteerId]);

  if (!volunteer) {
    return <div>Loading...</div>;
  }

  return (
    <VStack spacing={4} align="start" padding={4} borderWidth={1} borderRadius="md">
      <Heading>{volunteer.name}</Heading>
      <Text>Contact: {volunteer.contact}</Text>

      <Box>
        <Heading size="md">Assigned Events</Heading>
        <List>
          {volunteer.assignedEvents.map((event, index) => (
            <ListItem key={index}>{event}</ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Heading size="md">Volunteer History</Heading>
        <List>
          {volunteer.volunteerHistory.map((entry, index) => (
            <ListItem key={index}>
              Event: {entry.event}, Role: {entry.role}, Date: {entry.date}
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};