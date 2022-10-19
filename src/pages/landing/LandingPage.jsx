/* eslint-disable */

import { VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import Header from './Header'
import HackathonCard from './HackathonCard'
import RecognitionCard from './RecognitionCard'
import DesoSupporters from './DesoSupporters'

export default function LandingPage() {
  return (
    <div>
        <Header />
        <Wrap spacing='40px' mt='8rem' mb='6rem' justify='center'>
            <WrapItem>
                <HackathonCard />
            </WrapItem>
            <WrapItem>
                <RecognitionCard />
            </WrapItem>
        </Wrap>
        <DesoSupporters />
    </div>
  )
}
