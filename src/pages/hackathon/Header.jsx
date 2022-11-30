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
                        Prize pool: <PrizePool />
                    </Text>
                </VStack>
                <VStack spacing='0'>
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