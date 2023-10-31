import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { addEvent, editEvent } from '../../services/eventServices';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';

export const EventForm = () => {
    const{ _id:id, name, description, date, location, requiredRoles} = useLocation()?.state ?? "";
      const navigate = useNavigate();
      const pathLocation = useLocation()?.pathname;
      const dispatch = useDispatch();
      const [event, setEvent] = useState({ name, description, date, location, requiredRoles});
      const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editEvent({ event, id }));
        navigate("/events");
      };
    
      const handleAddEvent = (e, eventData) => {
        e.preventDefault();
        dispatch(addEvent(eventData));
        navigate("/events");
      };
      return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Heading size="md" m="1rem">
            {pathLocation === "/event/edit"
              ? "Update event Details"
              : "Fill event Details"}
          </Heading>
          <Flex
            w="20rem"
            h="30rem"
            as="form"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            onSubmit={(e) => {
              pathLocation === "/event/edit"
                ? handleUpdate(e)
                : handleAddEvent(e, event);
            }}
          >
            <Input
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
              type="text"
              placeholder="Enter event name"
              defaultValue={name}
              required
            />
            <Input
              onChange={(e) => setEvent({ ...event, description: e.target.value })}
              type="text"
              placeholder="description"
              defaultValue={description}
              required
            />
            <Input
              onChange={(e) => setEvent({ ...event, date: e.target.value })}
              type="text"
              placeholder="DD-MM-YYY"
              defaultValue={date}
              required
            />
             <Input
              onChange={(e) => setEvent({ ...event, location: e.target.value })}
              type="text"
              placeholder="Event Location"
              defaultValue={location}
              required
            />
            <Input
              onChange={(e) => setEvent({ ...event, requiredRoles: e.target.value })}
              type="number"
              placeholder="Required Roles"
              defaultValue={requiredRoles}
              required
            />
    
            <Button type="submit" m="1rem" colorScheme="teal" color="white">
              {pathLocation === "/event/edit" ? "Update" : "Add"}
            </Button>
          </Flex>
        </Flex>
  )
}
