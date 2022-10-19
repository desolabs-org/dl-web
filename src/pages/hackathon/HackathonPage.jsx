/* eslint-disable */

import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import Header from './Header'
import Timeline from './Timeline'

export default function HackathonPage() {
  return (
    <VStack spacing='12'>
      <Header />
      <Container maxW='container.md'  align="center">
        <Text fontSize='lg'>Join us for an event filled with fun and creativity! This is a community organized hackathon, 
          and we're open for all participants aiming to decentralize social networks.</Text>
      </Container>
      <Heading size='lg'>Timeline</Heading>
      <Timeline />
    </VStack>
  )
}
