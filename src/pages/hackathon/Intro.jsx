/* eslint-disable */

import { Box, Button, Container, Heading, HStack, Image, Link, Show, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { MdOutlineDoubleArrow } from 'react-icons/md';
import SponsorshipInfo from './SponsorshipInfo';
import ProjectsInfo from './ProjectsInfo';
import SilverSponsors from './SilverSponsors';
import CommunitySponsors from './CommunitySponsors';

export default function Intro() {
  return (
    <VStack spacing='12'>
      <Container maxW='container.md'  align="center">
          <Box bgColor='rgba(29, 12, 0, 0.15)' mb='5rem' p='2rem'>
            <Heading fontSize='3xl'>Hackathon participation</Heading>
            <VStack spacing='2rem'>
              
              <Text fontSize='md' mt='4'>
                This is an inter-disciplinary event! We invite everybody to join and compete to improve the technical landscape of our decentralized future.
              </Text>
              
              <VStack>
                <Text fontSize='2xl' align="center"
                    fontFamily='monospace'>
                    Current participants: 16+
                </Text>
              </VStack>
              <HStack spacing='1rem'>
                <ProjectsInfo />
                <Button 
                  rightIcon={<MdOutlineDoubleArrow />}
                  colorScheme='blue'
                  onClick={() => window.open('https://tally.so/r/n0QXGP', '_blank')}>Join the hackathon</Button>
              </HStack>
            </VStack>
          </Box>

          <Heading fontSize='3xl' mt='2rem'>Hackathon sponsorship NFTs</Heading>
          <Wrap spacing='40px' justify='center'>
                <Show above='lg'>
                  <WrapItem>
                      <Link href='https://diamondapp.com/nft/27c914ddbad7674a82a9f5cd002febf5adbb87df467fe73741593bf11d8a0d42' target='_blank'>
                          <Image src='/dl-diamond-gold-min.gif' height='200px'/>
                      </Link>
                  </WrapItem>
                </Show>
                <Show above='md'>
                  <WrapItem>
                      <Link href='https://diamondapp.com/nft/ece78b9f3f20c678f9433349fe6df2f32a410f17816d2e371714452b1ca32998' target='_blank'>
                          <Image src='/dl-diamond-silver-min.gif' height='200px'/>
                      </Link>
                  </WrapItem>
                </Show>
                
                <WrapItem>
                    <Link href='https://diamondapp.com/nft/0dfe7d735e756ce89f92bbd2b6a16f6ef3da621169bd507b20778a5b0bed6726' target='_blank'>
                        <Image src='/dl-diamond-mint-min.gif' height='200px'/>
                    </Link>
                </WrapItem>
          </Wrap>
          <VStack spacing='2rem'>
            <HStack spacing='1rem'>
              <SponsorshipInfo />
              <Button 
                rightIcon={<MdOutlineDoubleArrow />}
                colorScheme='blue'
                onClick={() => window.open('https://desolabs.nftz.me/', '_blank')}>View all NFTs</Button>
            </HStack>
          </VStack>

          <VStack>
            <SilverSponsors />
            <CommunitySponsors />
          </VStack>

      </Container>
    </VStack>
  )
}
