/* eslint-disable */

import { Box, Button, Container, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { MdNoteAlt } from 'react-icons/md'

export default function MoreInfo() {
  return (
    <>
      <Box maxW='container.md' align="center" bgColor='rgba(33, 150, 243, 0.6)' p='2rem'>
          <MdNoteAlt fontSize='3rem'/>
          <Heading fontSize='2xl' mt='4'>Notes on participation and projects</Heading>
          <VStack spacing='3' mb='6'>
              <Text mt='4'>A person can be a member of only one hackathon team.</Text>
              <Text mt='4'>A team can submit only one project to any of the categories.</Text>
              <Text mt='4'>Free for all includes all projects, also ones that don't fit in other categories.</Text>
              <Text mt='4'>Projects don't have to be new products.</Text>
        </VStack>
      </Box>
      <Heading mt='12'>Are you ready?</Heading>
      <Button colorScheme='blue' onClick={() => window.open('https://tally.so/r/n0QXGP', '_blank')}>Join the hackathon!</Button>
    </>
  )
}
