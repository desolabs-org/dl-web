/* eslint-disable */
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

import { Container, Heading, Link, Text, VStack } from '@chakra-ui/react'

export default function ProjectGrading() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} color='red.800'>Project grading guidelines</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Grading guidelines</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Projects are evaluated by selected DeSoLabs community members, with each group's vote having an equal impact on the final lineup.</Text>
            <Heading fontSize='md' mt='4'>1. Devs and architects: (TBA)</Heading>
            <Text>Is the tech: clean, secure, optimized, open, free/libre, ...?</Text>
            
            <Heading fontSize='md' mt='4'>2. Power-users and creators: (TBA)</Heading>
            <Text>Is the product: original, usable, useful, beautiful, ...?</Text>

            <Heading fontSize='md' mt='4'>3. Sponsorship NFT owners: (TBA)</Heading>
            <Text>Is the hackathon team's proposal popular, liked, supported?</Text>
            
            <Text mt='6'>Each hackathon category contains a prize pool formed with a proportional part of the proceeds from sponsorship NFTs.</Text>
            <Text mt='2'>In an unlikely event of the project colliding with any guidelines of the hackathon, DeSoLabs crew might exclude a team from the competition.</Text>
            
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
                Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
