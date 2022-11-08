import PrizePool from './PrizePool';

import { Box, Button, Container, Heading, HStack, Image, Link, Show, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { MdOutlineDoubleArrow } from 'react-icons/md';
import ProjectsInfo from './ProjectsInfo';
import SponsorshipInfo from './SponsorshipInfo';

export default function Header(props) {
    return (
        <Container maxW='container.md'  align="center" mt="3rem">
            <Box bgColor='rgba(29, 12, 0, 0.15)' p='4rem'>
            <VStack spacing='2rem'>
                <Heading as='h1' size='2xl' align="center"
                    fontFamily='monospace'>
                    CRYPT0WINTER 2022
                </Heading>
                <VStack spacing='0'>
                    <Text fontSize='3xl'>
                        community hackathon
                    </Text>
                    
                    <Text fontSize='xl' as='em' align='center'>
                        decentralizing social networks in general, <Link href='https://deso.com' target='_blank'>DeSo&nbsp;in&nbsp;particular</Link>
                    </Text>
                </VStack>
                <VStack spacing='0'>
                    <Text fontSize='2xl' align="center"
                        fontFamily='monospace'>
                        Current prize pool: <PrizePool />
                    </Text>
                    <Text fontSize='sm' as='em' px='1rem'>
                        grows with community and NFT contributions
                    </Text>
                </VStack>
                <VStack spacing='0'>
                    <Text fontSize='2xl' align="center"
                        fontFamily='monospace'>
                        Current participants: 46
                    </Text>
                    <Text fontSize='sm' as='em' px='1rem'>
                        improving our decentralized, social future
                    </Text>
                </VStack>
                <HStack spacing='1rem'>
                    <ProjectsInfo />
                    <Button colorScheme='blue' variant='outline'
                    onClick={() => { 
                        const el = document.getElementById('timeline');
                        if (el != null)
                        el.scrollIntoView({behavior: "smooth"});
                    }}
                    >Timeline</Button>
                    
                    <SponsorshipInfo />
                </HStack>
                <VStack spacing='0'>
                    <Wrap spacing='0px' justify='center'>
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
                    <Container pb='1rem'>
                        <Text as='em'>hodl at least one NFT to become a sponsor</Text>
                    </Container>
                    
                    <Button 
                        rightIcon={<MdOutlineDoubleArrow />}
                        colorScheme='blue'
                        onClick={() => window.open('https://desolabs.nftz.me/', '_blank')}>View sponsorship NFTs</Button>

                    <Container pt='3rem'>
                        <Link href='https://deso.com' target='_blank'>
                            <HStack>
                                <Image src='https://www.deso.com/assets/img/logo-deso-white.svg' height='100%'/>
                                <Text maxW='25rem'>Thank you to the DeSo Foundation for supporting this community event 🎉</Text>
                            </HStack>
                        </Link>
                    </Container>    
                </VStack>
            </VStack>
            </Box>
        </Container>
    );
}