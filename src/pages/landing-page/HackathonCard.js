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
					Community hackathon
				</Heading>
				<Text align="center">
					The first community run developer competition aimed at creating apps, tools, features, and documentation for DeSo.
				</Text>
			</VStack>
			<HStack>
				<Button colorScheme='blue' onClick={() => window.open('https://tally.so/r/n0QXGP', '_blank')}>Sign up</Button>
			</HStack>
		</VStack>
	</Container>
	);
}