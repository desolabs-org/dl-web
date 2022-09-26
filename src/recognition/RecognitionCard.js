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
                    Recognition awards
                </Heading>
                <Text align="center">
                    Thanks to the support of the amazing community members, we are providing recognition awards to community built tools and community operated nodes.
                </Text>
            </VStack>
            <HStack>
                <Button colorScheme='blue'
                        variant='outline'>Submit tool</Button>
                <Button colorScheme='blue' 
                        onClick={() => window.open('https://deso.ninja/tool/node-monitor','_blank')}
                        variant='outline'>DeSo ecosystem</Button>
            </HStack>
        </VStack>
    </Container>
	);
}