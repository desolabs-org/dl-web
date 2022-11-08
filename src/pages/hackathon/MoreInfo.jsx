/* eslint-disable */

import { Box, Button, Container, Heading, Icon, Link, Text, VStack } from '@chakra-ui/react'
import { MdNoteAlt } from 'react-icons/md'
import { MdOutlineDoubleArrow } from 'react-icons/md';

export default function MoreInfo() {
  return (
    <>
      <Box maxW='container.sm' align="center" bgColor='rgba(33, 150, 243, 0.6)' p='2rem'>
          <MdNoteAlt fontSize='3rem'/>
          <Heading fontSize='2xl' mt='4'>Notes on participation and projects</Heading>
          <VStack spacing='3' mb='6'>
              <Text mt='4'>A person can be a member of only one hackathon team and a team can submit only one project to any of the categories.</Text>
              <Text mt='6'>Free for all category automatically includes all projects, also ones that don't fit in other categories. Projects don't have to be new products. We welcome pull request contributions, and technical documentation improvements.</Text>
              <Text mt='6'>
                If devs can't review the technical blueprint or source code (and the project has one to review), it will most likely not be included in the hackathon. 
                We will consider reviewing your technology in private if necessary and reasonable, but we will prefer and promote open and free proposals.
              </Text>
              <Text>
              If users can't review the product (and the project has a visible part to it), it will most likely not be included in the hackathon. 
              We will consider reviewing your demo product in private if necessary and reasonable, but we will prefer openly available projects that are free to try or use.
              </Text>
        </VStack>
      </Box>
    </>
  )
}
