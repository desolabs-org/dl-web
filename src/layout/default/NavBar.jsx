import { Heading, Link } from '@chakra-ui/react'
import { Flex, HStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { BsGithub, BsDiscord, BsGem } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function NavBar(props) {
    let navigate = useNavigate();

    return (
        <Flex h='4rem' pt='1rem'>
                <Image src='/logo192.png' 
                        boxSize='2.5rem' mr='0.5rem'
                        cursor='pointer'
                        onClick={() => navigate('/')}
                        />
            <Heading flex='1' 
                    cursor='pointer'
                    onClick={() => navigate('/')} size='lg'>
                DeSo Labs
            </Heading>
            <Heading>
                <HStack spacing='1.25rem'>
                    <Link href='https://diamondapp.com/u/desolabs' target='_blank' title='DeSo account on Diamond app'>
                        <BsGem />
                    </Link>
                    <Link href='https://github.com/desolabs-org' target='_blank' title='GitHub account'>
                        <BsGithub />
                    </Link>
                    <Link href='https://discord.gg/TjaFunhqju' target='_blank' title='Discord server'>
                        <BsDiscord />
                    </Link>
                </HStack>
            </Heading>
        </Flex>
    );
}