import { Center } from '@chakra-ui/react'
import { Flex, HStack } from '@chakra-ui/react'
import { Text, IconButton, Image } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs';

export default function NavBar(props) {
    return (
        <Flex h='4rem'>
            <Center w='2.5rem' mr='1rem'>
                <Image src='/logo192.png' />
            </Center>
            <Text flex='1' mt='0.5rem' fontSize='2rem' fontWeight='bold'>
                DeSo Labs
            </Text>
            <HStack>
                <Center>
                    <IconButton 
                        size='lg' 
                        icon={<BsGithub />} 
                        colorScheme='blue' 
                        variant='outline' 
                        aria-label="GitHub account" 
                        title="GitHub account" 
                        onClick={() => window.open('https://github.com/desolabs-org')}
                        />
                </Center>
            </HStack>
        </Flex>
    );
}