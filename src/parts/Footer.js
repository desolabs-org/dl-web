import { VStack, Center } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function Footer(props) {
    return (
        <Center>
            <VStack borderTop='1px solid lightblue' px='4rem' pt='1rem' mb='4rem'>
                
                    <Text>
                        Made with 💙 by DeSo Labs community
                    </Text>
                
            </VStack>
        </Center>
    );
}