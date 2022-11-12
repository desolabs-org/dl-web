/* eslint-disable */

import { Box, Button, Container, Heading, HStack, Image, Link, Show, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { MdOutlineDoubleArrow } from 'react-icons/md';
import SponsorshipInfo from './SponsorshipInfo';
import ProjectsInfo from './ProjectsInfo';
import SilverSponsors from './SilverSponsors';
import CommunitySponsors from './CommunitySponsors';
import {Link as RLink} from 'react-router-dom'

export default function Intro() {
  return (
    <Container maxW='container.md'  align="center">
      <VStack spacing='2rem'>
          <Heading fontSize='4xl'>Hackathon sponsors</Heading>
          <VStack spacing='1rem'>
            <Wrap justify='center'>
              <WrapItem>
                <Link href='https://diamondapp.com/u/pbmc' target='_blank'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='https://images.deso.org/c4481270baa63ee8dbc038af372872a2fafbc0590044a2f86da246a25fc46e98.webp' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>PBMC</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/seelz' target='_blank'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/seelz_banner.gif' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>Seelz</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/tijn' target='_blank'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/tijn_banner.png' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>tijn</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/WhaleSharkETH' target='_blank'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/whalesharketh_banner.png' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>WhaleSharkETH</Text>
                  </VStack>
                </Link>
              </WrapItem>
            </Wrap>
            <SilverSponsors />
            <CommunitySponsors />
          </VStack>
        </VStack>
    </Container>
  )
}
