import { Button, Card, Flex, Heading, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { fetchevents } from '../../services/eventServices'
import { NavLink } from 'react-router-dom'

export const Events = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const events = useSelector(state=>state.events.events)
    useEffect(()=>{
        dispatch(fetchevents())
    },[dispatch,events])

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Button
        onClick={() => navigate("/event/add")}
        bgColor="teal.300"
        px="2rem"
        py="1rem"
        m="1rem"
      >
        Add New event
      </Button>
      {!events?.length && (
        <Heading size="sm" m="1rem">
          No events found
        </Heading>
      )}
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {events?.map(({ _id, eventNumber, capacity, specializations}) => (
          <Card key={_id} m="1rem" p="1rem">
            <Link
              to={`/events/${_id}`}
              as={NavLink}
              textDecoration="underline"
            >
              {`event Number : ${eventNumber} - Capacity : ${capacity}`}
            </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}
