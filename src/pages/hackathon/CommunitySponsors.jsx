import { Heading, Image, Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'

class CommunitySponsors extends React.Component {
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
            "PostHashHex":"0dfe7d735e756ce89f92bbd2b6a16f6ef3da621169bd507b20778a5b0bed6726",
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
            <VStack>
                <Heading fontSize='lg' mt='2rem' mb='0.5rem'>Community sponsors</Heading>
                <Wrap justify='center'>

                    {items.filter(i => (i.OwnerPublicKeyBase58Check != 'BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N'
                            && i.IsPending === false))
                        .sort((l, r) => l.SerialNumber - r.SerialNumber)
                        .map(item => (
                        <WrapItem key={'cs-' + item.SerialNumber}>
                            <Link color='green.200' target='_blank'
                                href={'https://diamondapp.com/u/' + item.ProfileEntryResponse.Username} 
                            >{item.ProfileEntryResponse.Username}</Link>
                        </WrapItem>
                    ))}
                </Wrap>
            </VStack>
        );
        }
    }
}

export default CommunitySponsors