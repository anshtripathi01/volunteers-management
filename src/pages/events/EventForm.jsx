import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { addevent, editevent } from '../../services/eventServices';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';

export const EventForm = () => {
    const{ _id:id, eventNumber, capacity, specializations} = useLocation()?.state ?? "";
      const navigate = useNavigate();
      const location = useLocation()?.pathname;
      const dispatch = useDispatch();
      const [event, setevent] = useState({ eventNumber, capacity, specializations});
      const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(editevent({ event, id }));
        navigate("/events");
      };
    
      const handleAddEvent = (e, eventData) => {
        e.preventDefault();
        dispatch(addevent(eventData));
        navigate("/events");
      };
      return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Heading size="md" m="1rem">
            {location === "/event/edit"
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
              location === "/event/edit"
                ? handleUpdate(e)
                : handleAddEvent(e, event);
            }}
          >
            <Input
              onChange={(e) => setevent({ ...event, eventNumber: e.target.value })}
              type="number"
              placeholder="Enter event number"
              defaultValue={eventNumber}
              required
            />
            <Input
              onChange={(e) => setevent({ ...event, capacity: e.target.value })}
              type="number"
              placeholder="Capacity"
              defaultValue={capacity}
              required
            />
            <Input
              onChange={(e) => setevent({ ...event, specializations: e.target.value })}
              type="text"
              placeholder="Specializations"
              defaultValue={specializations}
              required
            />
    
            <Button type="submit" m="1rem" colorScheme="teal" color="white">
              {location === "/event/edit" ? "Update" : "Add"}
            </Button>
          </Flex>
        </Flex>
  )
}
