import { Center, Container, Box, SimpleGrid } from '@chakra-ui/react'
import { Stack, VStack, HStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Heading, Text, Link, Button, Image } from '@chakra-ui/react'

export default function Foreground(props) {
    return (
        <VStack
            position="absolute"
            top="0"
            left = "0"
            right="0"
            overflowX="hidden"
            overflowY="auto"
            height="100%"
        >
            <Container maxW='container.xl'>
                <Center mt="3rem">
                    <Heading as='h1' size='2xl' align="center">
                        Decentralized Social Labs
                    </Heading>
                </Center>
                <Center mt="1rem">
                    <Text fontSize='2xl'>
                        - hackathons & community -
                    </Text>
                </Center>
                <Center mt="3rem">
                    <VStack spacing='1rem'>
                        <Text>
                            Building tools for DeSo?
                        </Text>
                        <HStack>
                            <Button colorScheme='blue'>Join our Discord</Button>
                            <Button colorScheme='blue'>Join our DAO</Button>
                        </HStack>
                    </VStack>
                </Center>
                    <Wrap minChildWidth='400px' spacing='40px' mt='6rem' mb='6rem' justify='center'>
                        <WrapItem>
                            <Container centerContent>
                                <VStack spacing='2rem'>
                                    <Box>
                                      <Image src='/hackathon.png' height='200px'/>
                                    </Box>
                                    <VStack>
                                        <Heading>
                                            community hackathon
                                        </Heading>
                                        <Text align="center">
                                            DeSo Labs - Winter 2022 Hackathon is the first DeSo developer community competition on the topic of creating tools, features, and documentation for DeSo.
                                        </Text>
                                    </VStack>
                                    <HStack>
                                        <Button colorScheme='blue'>Sign up</Button>
                                        <Button colorScheme='green'>Read more</Button>
                                    </HStack>
                                </VStack>
                            </Container>
                        </WrapItem>
                        <WrapItem>
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
                        </WrapItem>
                    </Wrap>
            </Container>
        </VStack>
    )
}