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

export default function ProjectQualification() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} color='red.800'>Project qualification rules</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Qualification guidelines</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Projects will be qualified for the hackathon based on the declaration of project's goal by its team.</Text>
            <Text mt='4'>To assure a fast flow qualifications we request all projects to provide us with: name, one sentence goal description, and a list of team members.</Text>
            <Text mt='4'>In general, if none of the participation guidelines are broken, the projects will qualify without further formalities.</Text>
            <Text mt='4'>Please notice, that any projects that can be considered harmful or ideological in their nature will not be included in the hackathon.</Text>
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
