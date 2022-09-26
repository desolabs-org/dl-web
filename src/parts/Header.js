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
                        
                    </Text>
                    <HStack>
                        <Button 
                            onClick={() => window.open('https://discord.gg/TjaFunhqju','_blank')}
                            title="Community Discord server"
                            colorScheme='blue'>
                            Join the Discord
                        </Button>
                        <Button 
                            title="DAODAO account and funding rounds"
                            onClick={() => window.open('https://daodao.io/d/DeSoLabs','_blank')}
                            colorScheme='blue'>
                            Join the DAO
                        </Button>
                    </HStack>
                </VStack>
            </Center>
        </VStack>
    );
}