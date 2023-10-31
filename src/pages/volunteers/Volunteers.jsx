import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVolunteers } from '../../services/volunteerServices'
import { useNavigate } from 'react-router'
import { Button, Card, Flex, Heading } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

export const Volunteers = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const volunteers = useSelector(state=>state.volunteers.volunteers)
    useEffect(()=>{
        dispatch(fetchVolunteers())
    },[dispatch,volunteers])
  
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => navigate("/volunteer/add")}
        bgColor="teal.300"
        px="2rem"
        py="1rem"
        m="1rem"
      >
        Add New volunteer
      </Button>
      {!volunteers?.length && (
        <Heading size="sm" m="1rem">
          No volunteers found
        </Heading>
      )}
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {volunteers?.map(({ _id, name, gender, assignedWard }) => (
          <Card key={_id} m="1rem" p="1rem">
            <Link
              to={`/volunteers/${_id}`}
              as={NavLink}
              textDecoration="underline"
            >
              {`${name} - ${gender} - ${assignedWard}`}
            </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
