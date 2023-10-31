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
    const { _id, eventNumber, capacity, specializations} =
      events.find(({ _id }) => _id === eventId);
  
    const deleteEvent = createAsyncThunk(
      "events/deleteevent",
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
          event Details
        </Heading>
        <Card w="20rem">
          <CardBody textAlign="center">
            <Heading size="md" m={1}>
              {eventNumber}
            </Heading>
            <Heading size="xs">event Capacity : {capacity}</Heading>
            <Heading size="xs">Specializations: {specializations}</Heading>
           
            <ButtonGroup m="1rem" spacing={5}>
              <Button
                colorScheme="teal"
                color="white"
                onClick={() => {
                  navigate("/event/edit", {
                    state: { _id, eventNumber, capacity, specializations},
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
