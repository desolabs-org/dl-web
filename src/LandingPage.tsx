/* eslint-disable */

import { ChakraProvider } from "@chakra-ui/react";
import Background from './layout/Background.js'

import { Container } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import NavBar from './layout/NavBar'
import Header from './layout/Header'
import Footer from './layout/Footer'
import HackathonCard from './pages/landing-page/HackathonCard'
import RecognitionCard from './pages/landing-page/RecognitionCard'
import DesoSupporters from './pages/landing-page/DesoSupporters'

export default function LandingPage() {
  return (
    <ChakraProvider>
      <Background />
      
      <VStack position="absolute" height="100%"
            top="0" left = "0" right="0"
            overflowX="hidden" overflowY="auto">
            <Container maxW='container.xl'>
                <NavBar />
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
                <Footer />
            </Container>
        </VStack>
    </ChakraProvider>
  )
}
