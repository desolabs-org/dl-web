import { Container, Box } from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/react'
import { Heading, Text, Button, Image } from '@chakra-ui/react'

export default function RecognitionCard(props) {
    return (
	<Container centerContent>
        <VStack spacing='2rem'>
            <Box>
              <Image src='/reward.png' height='200px'/>
            </Box>
            <VStack>
                <Heading>
                    recognition awards
                </Heading>
                <Text align="center">
                    Thanks to the support of the amazing community members, we are able to providing recognition awards to community built tools and community operated nodes.
                </Text>
            </VStack>
            <HStack>
                <Button colorScheme='blue'>Submit tool</Button>
                <Button colorScheme='green'>DeSo ecosystem</Button>
            </HStack>
        </VStack>
    </Container>
	);
}