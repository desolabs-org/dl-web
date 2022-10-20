/* eslint-disable */

import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import Header from './Header'
import Intro from './Intro'
import MoreInfo from './MoreInfo'
import Timeline from './Timeline'

export default function HackathonPage() {
  return (
    <VStack spacing='12'>
      <Header />
      <Intro />
      <Heading size='lg'>Timeline</Heading>
      <Timeline />
      <MoreInfo />
    </VStack>
  )
}
