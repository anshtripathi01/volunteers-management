import { Button, Flex, Heading } from '@chakra-ui/react'
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
            <NavLink style={activeLink} to="/">
              Event Summary
            </NavLink>
            <NavLink style={activeLink} to="/patients">
              Volunteers
            </NavLink>
            <NavLink style={activeLink} to="/wards">
              Events
            </NavLink>
            <NavLink style={activeLink} to="https://github.com/anshtripathi01/volunteers-management">
              <Button variant="solid" colorScheme='teal'>Github</Button>
            </NavLink>
          </Flex>
        </Flex>
      );
}
