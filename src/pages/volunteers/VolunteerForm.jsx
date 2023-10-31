import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addVolunteer, editVolunteer } from "../../services/volunteerServices";

export const VolunteerForm = () => {
  const {
    _id: id,
    name,
    age,
    gender,
    assignedWard,
    medicalHistory,
    contactInfo,
  } = useLocation()?.state ?? "";
  const navigate = useNavigate();
  const location = useLocation()?.pathname;
  const dispatch = useDispatch();
  const [volunteer, setvolunteer] = useState({
    name,
    age,
    gender,
    assignedWard,
    medicalHistory,
    contactInfo,
  });
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
          onChange={(e) => setvolunteer({ ...volunteer, name: e.target.value })}
          type="text"
          placeholder="Enter volunteer name"
          defaultValue={name}
          required
        />
        <Input
          onChange={(e) => setvolunteer({ ...volunteer, age: e.target.value })}
          type="number"
          placeholder="age"
          defaultValue={age}
          required
        />
        <Input
          onChange={(e) => setvolunteer({ ...volunteer, gender: e.target.value })}
          type="text"
          placeholder="gender"
          defaultValue={gender}
          required
        />
        <Input
          onChange={(e) => setvolunteer({ ...volunteer, assignedWard: e.target.value })}
          type="number"
          placeholder="ward number"
          defaultValue={assignedWard}
          required
        />
        <Input
          onChange={(e) => setvolunteer({ ...volunteer, medicalHistory: e.target.value })}
          type="text"
          placeholder="Medical History"
          defaultValue={medicalHistory}
          required
        />
        <Input
          onChange={(e) =>
            setvolunteer({ ...volunteer, contactInfo: e.target.value })
          }
          type="text"
          placeholder="contact details"
          defaultValue={contactInfo}
          required
        />

        <Button type="submit" m="1rem" colorScheme="teal" color="white">
          {location === "/volunteer/edit" ? "Update" : "Add"}
        </Button>
      </Flex>
    </Flex>
  );
};
