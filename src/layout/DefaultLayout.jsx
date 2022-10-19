/* eslint-disable */

import { ChakraProvider } from "@chakra-ui/react";
import Background from './Background'

import { Container } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import NavBar from './default/NavBar'
import Footer from './default/Footer'
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <ChakraProvider>
      <Background />
      <VStack position="absolute" height="100%"
            top="0" left = "0" right="0"
            overflowX="hidden" overflowY="auto">
            <Container maxW='container.xl'>
                <NavBar />
                <Outlet />
                <Footer />
            </Container>
        </VStack>
    </ChakraProvider>
  )
}
