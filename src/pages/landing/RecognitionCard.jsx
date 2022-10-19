import { Container } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Heading, Text, } from '@chakra-ui/react'

export default function RecognitionCard(props) {
    return (
	<Container centerContent>
        <VStack spacing='2rem'>
            <Container centerContent>
                <iframe width='356px' height='200px' src="https://www.youtube.com/embed/y4851eQMb-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
            <VStack>
                <Heading>
                    Recognition awards
                </Heading>
                <Text align="center">
                    Thanks to the support of the amazing community members, we are providing recognition awards to DeSo developers.
                </Text>
            </VStack>
        </VStack>
    </Container>
	);
}