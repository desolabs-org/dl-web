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

export default function ProjectsInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'>Hackathon projects</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hackathon projects list</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
            To give time for early participants to join and form the project teams, we will start qualifying projects on the 1st of November.
            </Text>
            <Text mt='4'>
              We will publicly announce every participating project to: avoid doubt, promote completion of teams and support the early stage hype of the projects.  
            </Text>
            <Text mt='4'>
              Join us on the <Link href='https://discord.com/invite/TjaFunhqju' target='_blank' color='blue'>DeSoLabs discord</Link> to meet other participants and get involved in the hackathon!
            </Text>
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
