/* eslint-disable */

import { VStack } from '@chakra-ui/react'
import Header from './Header'
import Timeline from './Timeline'

export default function HackathonPage() {
  return (
    <VStack spacing='6'>
      <Header />
      <Timeline />
    </VStack>
  )
}
