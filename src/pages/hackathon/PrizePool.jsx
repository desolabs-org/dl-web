import { Heading, Image, Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'

class PrizePool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        goldSold: 0,
        silverSold: 0,
        mintSold: 0,
        usdDeso: 0
        };
    }

    getSoldCountFor(id, resultFn) {
        fetch("https://api.love4src.com/api/v0/get-nft-entries-for-nft-post", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'PostHashHex': id,
                "ReaderPublicKeyBase58Check":"BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N"
            })
        })
        .then(res => res.json())
        .then(resultFn,
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({ isLoaded: true, error });
            }
        );
    }

    componentDidMount() {
        this.getSoldCountFor('27c914ddbad7674a82a9f5cd002febf5adbb87df467fe73741593bf11d8a0d42',
            (result) => {
                this.setState({isLoaded: true, 
                    goldSold: result.NFTEntryResponses.filter(i => (i.OwnerPublicKeyBase58Check != 'BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N'
                        && i.IsPending === false)).length
                });
            }
        );
        this.getSoldCountFor('ece78b9f3f20c678f9433349fe6df2f32a410f17816d2e371714452b1ca32998',
            (result) => {
                this.setState({isLoaded: true, 
                    silverSold: result.NFTEntryResponses.filter(i => (i.OwnerPublicKeyBase58Check != 'BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N'
                        && i.IsPending === false)).length
                });
            }
        );
        this.getSoldCountFor('0dfe7d735e756ce89f92bbd2b6a16f6ef3da621169bd507b20778a5b0bed6726',
            (result) => {
                this.setState({isLoaded: true, 
                    mintSold: result.NFTEntryResponses.filter(i => (i.OwnerPublicKeyBase58Check != 'BC1YLjBvzHjemzgY4va55AzZ7VhRBLDmjxsfxRHQ9PybPARMQvtDH5N'
                        && i.IsPending === false)).length
                });
            }
        );
    }

    render() {
        const { error, isLoaded, goldSold, silverSold, mintSold } = this.state;
        let nftsInDeso = Math.floor((goldSold * 32 + silverSold * 8 + mintSold) * 0.95)
        if (error) {
            console.log(error.message);
            return <>$5500+</>;
        } else if (!isLoaded) {
            return <>...</>;
        } else {
            return (
                <>$5000 + Ɖ{nftsInDeso}
                </>
            );
        }
    }
}

export default PrizePool