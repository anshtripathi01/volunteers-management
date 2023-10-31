import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    const activeLink = ({ isActive }) => ({
        borderBottom: isActive ? "3px teal solid" : "",
      });
      return (
        <Flex
          w="100%"
          boxShadow="md"
          flexWrap="wrap"
          justifyContent="space-between"
          bgColor="teal.300"
          p="3"
        >
          <Link to="/">
            <Heading fontSize="md">Volunteers Management</Heading>
          </Link>
          <Flex flexGrow="1" justifyContent="space-evenly">
            <NavLink style={activeLink} to="/">
              Volunteer Summary
            </NavLink>
            <NavLink style={activeLink} to="/event-summary">
              Event Summary
            </NavLink>
            <NavLink style={activeLink} to="/volunteers">
              Volunteers
            </NavLink>
            <NavLink style={activeLink} to="/events">
              Events
            </NavLink>
          </Flex>
        </Flex>
      );
}
