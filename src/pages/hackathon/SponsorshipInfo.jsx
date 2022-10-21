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
            <Text>Help us grow the prize pool of this hackathon by grabbing one of the sponsorship NFTs!</Text>
            <Text mt='4'>Gold NFT owners get a banner on the hackathon's page.</Text>
            <Text mt='4'>Silver NFT owners get their avatar listed on the hackathon's page.</Text>
            <Text mt='4'>Community NFT owners get their name listed on the hackathon's page.</Text>
            <Text mt='4'>Each owner of the sponsor NFT(s) can vote on the hackathon projects and will receive lots of good karma and community appreciation.</Text>
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
