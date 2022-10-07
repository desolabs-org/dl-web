/* eslint-disable */

import { ChakraProvider } from "@chakra-ui/react";
import Background from './layout/Background.js'
import Foreground from './layout/Foreground.js'

export default function LandingPage() {
  return (
    <ChakraProvider>
      <Background />
      <Foreground />
    </ChakraProvider>
  )
}
