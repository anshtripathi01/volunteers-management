import { Button, ButtonGroup, Card, CardBody, Flex, Heading } from '@chakra-ui/react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

export const EventDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.events);
    const { eventId } = useParams();
    const { _id, name, description, date, location,requiredRoles} =
      events.find(({ _id }) => _id === eventId);
  
    const deleteEvent = createAsyncThunk(
      "events/deleteEvent",
      async (id) => {
        try {
          const response = await fetch(
            `https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/events/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const { message } = await response.json();
          toast.warning(message, { autoClose: 1000 });
          navigate("/events");
        } catch (error) {
          console.log("error while deleting event");
        }
      }
    );
    return (
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading size="md" m="1rem">
          Event Details
        </Heading>
        <Card w="20rem">
          <CardBody textAlign="center">
            <Heading size="md" m={1}>
              {name}
            </Heading>
            <Heading size="xs"> description : {description}</Heading>
            <Heading size="xs">Date: {date}</Heading>
            <Heading size="xs">Location: {location}</Heading>
            <Heading size="xs">Required Roles: {requiredRoles}</Heading>
           
            <ButtonGroup m="1rem" spacing={5}>
              <Button
                colorScheme="teal"
                color="white"
                onClick={() => {
                  navigate("/event/edit", {
                    state: {_id, name, description, date, location, requiredRoles},
                  });
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteEvent(_id));
                }}
                colorScheme="red"
                color="white"
              >
                Delete
              </Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      </Flex>
    );
}
