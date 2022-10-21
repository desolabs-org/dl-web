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

export default function SponsorshipInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme='blue'>Sponsorship info</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sponsorship of the community hackathon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Prizes for this hackathon are funded from the sales of sponsorship NFTs!</Text>
            <Text mt='4'>Owners of the NFTs get a banner, avatar, or a nickname listed as a hackathon sponsor and be able to vote on the hackathon projects!</Text>
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
