import { Container, Heading, Image, Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'

class DesoSupporters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        items: []
        };
    }

    componentDidMount() {
        fetch("https://api.love4src.com/api/v0/get-hodlers-for-public-key", {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "Username":"DeSoLabs",
            "NumToFetch":0,
            "PublicKeyBase58Check":"",
            "LastPublicKeyBase58Check":"",
            "FetchHodlings":false,
            "FetchAll":true,
            "IsDAOCoin":false
        })
        })
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.Hodlers
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
        return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Loading...</div>;
        } else {
        return (
            <VStack mb='3rem'>
                <Heading 
                    size='lg'
                    mb='1rem'
                >Big thank you to our supporters!</Heading>
                <Container maxW='container.lg'>
                    <Wrap
                        justify='center'
                    >
                    {items.filter(i => i.BalanceNanos > 1_000_000 && i.ProfileEntryResponse !== undefined).map(item => (
                        <WrapItem>
                            <Link
                                href={'https://diamondapp.com/u/' + item.ProfileEntryResponse.Username}
                                target='_blank'
                            >
                            <Image 
                                m='0.2rem'
                                borderRadius='full'
                                boxSize='3rem'
                                objectFit='cover'
                                title={item.ProfileEntryResponse.Username}
                                src={'https://diamondapp.com/api/v0/get-single-profile-picture/' + item.HODLerPublicKeyBase58Check + '?fallback=https://diamondapp.com/assets/img/default_profile_pic.png'} 
                            />
                            </Link>
                        </WrapItem>
                    ))}
                    </Wrap>
                </Container>
                <Text>Join this list by holding at least 0.001 <Link href='https://diamondapp.com/u/desolabs' target='_blank'>$DesoLabs</Link> coins.</Text>
            </VStack>
        );
        }
    }
}

export default DesoSupporters