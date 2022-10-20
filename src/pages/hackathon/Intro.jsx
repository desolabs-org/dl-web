/* eslint-disable */

import { Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import Header from './Header'
import Timeline from './Timeline'

export default function Intro() {
  return (
    <VStack spacing='12'>
      <Container maxW='container.md'  align="center">
        <Text fontSize='lg'>Join us for an event filled with fun and creativity! This is a community organized hackathon 
          open for all participants. We are aiming to decentralize social networks ladscape in general and the <Link href='https://deso.com' target='_blank'>DeSo ecosystem</Link> in particular.</Text>
          
          <Heading fontSize='2xl' mt='12'>Participation in the hackathon</Heading>
          <Text fontSize='md' mt='4'>
            This is an open community event, open for everybody to participate in. 
            As an unlikely exception, we reserve the right to exclude selected individuals or groups from the event at our discretion.
          </Text>
          <Text fontSize='md' mt='4'>
            Participants in the hackathon are forming project teams, that are invited to improve the decentralized ecosystem. 
            Project are qualified based on the <Link href='https://tally.so/r/n0QXGP' target='_blank'>submissions to the hackathon made via this form</Link>.
          </Text>
          <Text fontSize='md' mt='4'>
            DeSoLabs crew will publicly announce every participating project to avoid doubt, promote team completion and support the early stage hype.
          </Text>
      </Container>
    </VStack>
  )
}
