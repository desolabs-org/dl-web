import { Heading, Image, Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'

class SilverSponsors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        items: []
        };
    }

    componentDidMount() {
        fetch("https://api.love4src.com/api/v0/get-nft-bids-for-nft-post", {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "PostHashHex":"ece78b9f3f20c678f9433349fe6df2f32a410f17816d2e371714452b1ca32998",
            "ReaderPublicKeyBase58Check":"BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N"
        })
        })
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.NFTEntryResponses
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
            <VStack mt='4rem'>
                <Heading fontSize='lg'>
                    Silver sponsors
                </Heading>
                <Wrap
                    justify='center'
                >
                {items.filter(i => (i.OwnerPublicKeyBase58Check != 'BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N' && i.IsPending === false))
                    .sort((l, r) => l.SerialNumber - r.SerialNumber)
                    .map(item => (
                        <WrapItem key={'ss-' + item.SerialNumber}>
                            <Link href={'https://diamondapp.com/u/' + item.ProfileEntryResponse.Username} target='_blank'>
                                <Image 
                                    m='0.2rem'
                                    borderRadius='full'
                                    boxSize='3rem'
                                    objectFit='cover'
                                    src={'https://diamondapp.com/api/v0/get-single-profile-picture/' + item.OwnerPublicKeyBase58Check + '?fallback=https://diamondapp.com/assets/img/default_profile_pic.png'} 
                                />
                            </Link>
                        </WrapItem>
                    ))}
                
                </Wrap>
            </VStack>
        );
        }
    }
}

export default SilverSponsors