import { Container, Box } from '@chakra-ui/react'
import { VStack, HStack } from '@chakra-ui/react'
import { Heading, Text, Button, Image } from '@chakra-ui/react'

export default function HackathonCard(props) {
    return (
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
	);
}