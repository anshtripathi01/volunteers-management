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

export const EventSummary = () => {
  const { eventId } = useParams();
  console.log(eventId);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchedEvent = {
      name: "Community Cleanup",
      date: "2023-12-15",
      location: "City Park",
      description: "Join us in cleaning up the city park. We need your help!",
      registeredVolunteers: ["Volunteer 1", "Volunteer 2", "Volunteer 3"],
      roles: [
        { role: "Trash Collector", requiredVolunteers: 10 },
        { role: "Gardener", requiredVolunteers: 5 },
        { role: "Supervisor", requiredVolunteers: 2 },
      ],
    };
    setEvent(fetchedEvent);
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <VStack spacing={4} align="start"  padding={4} borderWidth={1} borderRadius="md">
      <Heading>{event.name}</Heading>
      <Text>Date: {event.date}</Text>
      <Text>Location: {event.location}</Text>
      <Text>Description: {event.description}</Text>

      <Box>
        <Heading size="md">Registered Volunteers</Heading>
        <List>
          {event.registeredVolunteers.map((volunteer, index) => (
            <ListItem key={index}>{volunteer}</ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Heading size="md">Volunteer Roles</Heading>
        <List>
          {event.roles.map((role, index) => (
            <ListItem key={index}>
              {role.role} - {role.requiredVolunteers} volunteers needed
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};