import { Center } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'

export default function Header(props) {
    return (
        <VStack mt="6rem" spacing='1rem'>
            <Center>
                <Heading as='h1' size='2xl' align="center"
                    fontFamily='monospace'>
                    CRYPT0WINTER 2022
                </Heading>
            </Center>
            <Center>
                <Text fontSize='2xl'>
                    ~ community hackathon ~
                </Text>
            </Center>
        </VStack>
    );
}