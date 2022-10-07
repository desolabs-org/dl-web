import { VStack, Center } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'

export default function Footer(props) {
    return (
        <Center>
            <VStack borderTop='1px solid lightblue' px='1rem' pt='0.75rem' my='4rem'>
                <Text>
                    <Link 
                        href='https://diamondapp.com/u/desolabs'
                        target='_blank'
                        >Made with 💙 by DeSo Labs community</Link>
                </Text>
            </VStack>
        </Center>
    );
}