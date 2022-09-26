import { VStack, Center } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'

export default function Footer(props) {
    return (
        <Center>
            <VStack borderTop='1px solid lightblue' px='2rem' pt='1rem' mb='4rem'>
                <Text>
                    <Link href='https://node.desolabs.org/u/desolabs'>Made with 💙 by DeSo Labs community</Link>
                </Text>
            </VStack>
        </Center>
    );
}