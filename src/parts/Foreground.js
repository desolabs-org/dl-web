import { Center, Container, Heading } from '@chakra-ui/react'

export default function Foreground(props) {
    return (
        <Container position="absolute" h="100%" top="0" left="0" right="0">
            <Center marginTop="5rem">
                <Heading>
                DeSo Labs
                </Heading>
            </Center>
        </Container>
    )
}