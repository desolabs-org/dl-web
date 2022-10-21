import { Center, Link } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'

export default function Header(props) {
    return (
        <Center>
            <VStack mt="6rem" spacing='2rem'>
                <Heading as='h1' size='2xl' align="center"
                    fontFamily='monospace'>
                    CRYPT0WINTER 2022
                </Heading>
                <VStack spacing='0'>
                    <Text fontSize='2xl'>
                        ~ community hackathon ~
                    </Text>
                    
                    <Text fontSize='xl' as='em' align='center'>
                        decentralizing social networks in general and&nbsp;<Link href='https://deso.com' target='_blank'>DeSo&nbsp;in&nbsp;particular</Link>
                    </Text>
                </VStack>
                <VStack>
                    
                    <Text fontSize='2xl' align="center"
                        fontFamily='monospace'>
                        Current prize pool: $5500+
                    </Text>
                </VStack>
            </VStack>
        </Center>
    );
}