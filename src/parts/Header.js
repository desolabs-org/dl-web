import { Center } from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/react'
import { Heading, Text, Button } from '@chakra-ui/react'

export default function Header(props) {
    return (
        <VStack mt="6rem" spacing='1rem'>
            <Center>
                <Heading as='h1' size='2xl' align="center">
                    Decentralized Social Labs
                </Heading>
            </Center>
            <Center>
                <Text fontSize='2xl'>
                    ~ hackathons & community ~
                </Text>
            </Center>
            <Center>
                <VStack spacing='1rem'>
                    <Text>
                        Building tools for DeSo?
                    </Text>
                    <HStack>
                        <Button colorScheme='purple'>Join the Discord</Button>
                        <Button colorScheme='purple'>Join the DAO</Button>
                    </HStack>
                </VStack>
            </Center>
        </VStack>
    );
}