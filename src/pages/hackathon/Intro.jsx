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
                <Link href='https://diamondapp.com/u/pbmc' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/pbmc_banner.jpg' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>PBMC</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/seelz' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/seelz_banner.gif' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>Seelz</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/tijn' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/tijn_banner.png' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>tijn</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/WhaleSharkETH' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/whalesharketh_banner.png' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>WhaleSharkETH</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/GOOSIES' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='https://exfbi3ygsxnt3pzxlagyggftx47j7agsjh4aivbjyf2jsehwzdgq.arweave.net/JcoUbwaV2z2_N1gNgxizvz6fgNJJ-ARUKcF0mRD2yM0' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>GOOSIES</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://diamondapp.com/u/MissKatiann' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/misskatiann_banner.png' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>MissKatiann</Text>
                  </VStack>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='https://desocialworld.com/u/Desomon' target='_blank' marginBottom='12px'>
                  <VStack spacing='0'>
                    <Image maxH='120px' src='/desomon_banner.jpg' />
                    <Text fontSize='2xl' fontWeight='bold' color='#f3e07b'>Desomon</Text>
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
