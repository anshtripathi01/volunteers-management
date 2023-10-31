import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addVolunteer, editVolunteer } from "../../services/volunteerServices";

export const VolunteerForm = () => {
  const { _id:id, name, contactInfo, skills, availability,areasOfInterest } = useLocation()?.state ?? "";
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const [volunteer, setVolunteer] = useState({ name, contactInfo, skills, availability, areasOfInterest });
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editVolunteer({ volunteer, id }));
    navigate("/volunteers");
  };

  const handleAddVolunteer = (e, volunteerData) => {
    e.preventDefault();
    dispatch(addVolunteer(volunteerData));
    navigate("/volunteers");
  };
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading size="md" m="1rem">
        {location === "/volunteer/edit"
          ? "Update volunteer Details"
          : "Fill volunteer Details"}
      </Heading>
      <Flex
        w="20rem"
        h="30rem"
        as="form"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        onSubmit={(e) => {
          location === "/volunteer/edit"
            ? handleUpdate(e)
            : handleAddVolunteer(e, volunteer);
        }}
      >
        <Input
          onChange={(e) => setVolunteer({ ...volunteer, name: e.target.value })}
          type="text"
          placeholder="Enter volunteer name"
          defaultValue={name}
          required
        />
        <Input
          onChange={(e) => setVolunteer({ ...volunteer, contactInfo: e.target.value})}
          type="text"
          placeholder="Contact Details"
          defaultValue={contactInfo}
          required
        />
      
        <Input
          onChange={(e) => setVolunteer({ ...volunteer, skills: e.target.value })}
          type="text"
          placeholder="Skills"
          defaultValue={skills}
          required
        />
        <Input
          onChange={(e) =>
            setVolunteer({ ...volunteer, availability: e.target.value })
          }
          type="text"
          placeholder="Availability"
          defaultValue={availability}
          required
        />
         <Input
          onChange={(e) =>
            setVolunteer({ ...volunteer, areasOfInterest: e.target.value })
          }
          type="text"
          placeholder="Areas Of Interest"
          defaultValue={areasOfInterest}
          required
        />

        <Button type="submit" m="1rem" colorScheme="teal" color="white">
          {location === "/volunteer/edit" ? "Update" : "Add"}
        </Button>
      </Flex>
    </Flex>
  );
};
