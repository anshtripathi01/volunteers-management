import { Button, ButtonGroup, Card, CardBody, Flex, Heading } from "@chakra-ui/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export const VolunteerDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const volunteers = useSelector((state) => state.volunteers.volunteers);
  const { volunteerId } = useParams();
  const  { _id, name, contactInfo, skills, availability,areasOfInterest }  =
    volunteers.find(({ _id }) => _id === volunteerId);

  const deleteVolunteer = createAsyncThunk(
    "volunteers/deleteVolunteer",
    async (id) => {
      try {
        const response = await fetch(
          `https://anshtripathi-assignment-22.ansh-tripathi.repl.co/api/v1/volunteers/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const { message } = await response.json();
        toast.warning(message, { autoClose: 1000 });
        navigate("/volunteers");
      } catch (error) {
        console.log("error while deleting volunteer");
      }
    }
  );
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        Volunteer Details
      </Heading>
      <Card w="20rem">
        <CardBody textAlign="center">
          <Heading size="md" m={1}>
            {name}
          </Heading>
          <Heading size="xs">Email : {contactInfo?.email}</Heading>
          <Heading size="xs">Phone : {contactInfo?.phone}</Heading>
          <Heading size="xs">Address : {contactInfo?.address}</Heading>
          <Heading size="xs">Skills : {skills}</Heading>
          <Heading size="xs">Availbility : {availability}</Heading>
          <Heading size="xs">Areas Of Interest : {areasOfInterest}</Heading>
          <ButtonGroup m="1rem" spacing={5}>
            <Button
              colorScheme="teal"
              color="white"
              onClick={() => {
                navigate("/volunteer/edit", {
                  state: { _id, name, contactInfo, skills, availability,areasOfInterest },
                });
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteVolunteer(_id));
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
};
