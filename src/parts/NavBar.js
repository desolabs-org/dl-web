import { Center } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Heading, Text, IconButton, Image } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs';

export default function NavBar(props) {
    return (
        <Flex h='4rem'>
            <Center w='2.5rem' mr='1rem'>
                <Image src='/logo192.png' />
            </Center>
            <Heading flex='1' mt='0.5rem'>
                DeSo Labs
            </Heading>
            <Spacer />
            <Center>
                <IconButton size='lg' icon={<BsGithub />} colorScheme='blue' variant='outline' aria-label="GitHub" />
            </Center>
        </Flex>
    );
}