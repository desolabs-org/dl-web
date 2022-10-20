/* eslint-disable */

import { Button, Container, Heading, Image, Link, Show, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import Header from './Header'
import Timeline from './Timeline'

export default function Intro() {
  return (
    <VStack spacing='12'>
      <Container maxW='container.md'  align="center">
        <Text fontSize='lg'>Join us for an event filled with fun and creativity! This is a community organized hackathon 
          open for all participants. We are aiming to decentralize social networks ladscape in general and the <Link href='https://deso.com' target='_blank'>DeSo ecosystem</Link> in particular.</Text>
          
          <Heading fontSize='2xl' mt='12'>Hackathon sponsorship</Heading>
          <Text fontSize='md' mt='4'>
            Prizes for this hackathon are funded from the sales of sponsorship NFTs. Owners will get a banner, avatar, or a nickname listed as a hackathon sponsor and be able to vote on the hackathon projects!
          </Text>

          <Wrap spacing='40px' justify='center' mt='6'>
                <WrapItem>
                    <Link href='https://diamondapp.com/nft/27c914ddbad7674a82a9f5cd002febf5adbb87df467fe73741593bf11d8a0d42' target='_blank'>
                        <Image src='/dl-diamond-gold-min.gif' height='200px'/>
                    </Link>
                </WrapItem>
                <Show above='md'>
                    <WrapItem>
                        <Link href='https://diamondapp.com/nft/ece78b9f3f20c678f9433349fe6df2f32a410f17816d2e371714452b1ca32998' target='_blank'>
                            <Image src='/dl-diamond-silver-min.gif' height='200px'/>
                        </Link>
                    </WrapItem>
                </Show>
                <Show above='lg'>
                    <WrapItem>
                        <Link href='https://diamondapp.com/nft/0dfe7d735e756ce89f92bbd2b6a16f6ef3da621169bd507b20778a5b0bed6726' target='_blank'>
                            <Image src='/dl-diamond-mint-min.gif' height='200px'/>
                        </Link>
                    </WrapItem>
                </Show>
          </Wrap>
          <Link fontSize='sm' href='https://desolabs.nftz.me/'>View on NFTz</Link>

          <Heading fontSize='2xl' mt='12'>Hackathon participation</Heading>
          <Text fontSize='md' mt='4'>
          Participants in the hackathon are forming project teams, that are invited to improve the decentralized ecosystem. 
            As an unlikely exception, we might exclude selected individuals or groups from the event.
          </Text>
          <Text fontSize='md' mt='4'>
            Projects are qualified based on the <Link href='https://tally.so/r/n0QXGP' target='_blank'>submissions to the hackathon</Link> and further communications with the DeSoLabs crew.
            We will assist participants in forming of the project teams if necessary.
          </Text>
          <Text fontSize='md' mt='4'>
            DeSoLabs crew will publicly announce every participating project to: avoid doubt, promote completion of teams and support the early stage hype of the projects.
          </Text>
      </Container>
    </VStack>
  )
}
