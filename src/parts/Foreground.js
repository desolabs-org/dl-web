import { Container } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import HackathonCard from '../hackathon/HackathonCard'
import RecognitionCard from '../recognition/RecognitionCard'

export default function Foreground(props) {
    return (
        <VStack position="absolute" height="100%"
            top="0" left = "0" right="0"
            overflowX="hidden" overflowY="auto">
            <Container maxW='container.xl'>
                <NavBar />
                <Header />
                <Wrap minChildWidth='400px' spacing='40px' mt='8rem' mb='6rem' justify='center'>
                    <WrapItem>
                        <HackathonCard />
                    </WrapItem>
                    <WrapItem>
                        <RecognitionCard />
                    </WrapItem>
                </Wrap>
                <Footer />
            </Container>
        </VStack>
    )
}