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
            <Wrap>
              <WrapItem>
                <VStack spacing='0'>
                <Link href='https://diamondapp.com/u/pbmc' target='_blank'>
                  <Image maxH='140px' src='https://images.deso.org/c4481270baa63ee8dbc038af372872a2fafbc0590044a2f86da246a25fc46e98.webp' />
                </Link>
                <Text fontSize='2xl' fontWeight='bold'>PBMC</Text>
                </VStack>
              </WrapItem>
            </Wrap>

            <SilverSponsors />
            <CommunitySponsors />
          </VStack>
        </VStack>
    </Container>
  )
}
