/* eslint-disable */

import { Container, Heading, Link, Text, VStack } from '@chakra-ui/react'

export default function MoreInfo() {
  return (
    <VStack spacing='12'>
      <Container maxW='container.md'  align="center">
          <Heading fontSize='lg' mt='6'>Notes on participation</Heading>
          <Text mt='4'>A person can be a member of only one hackathon team.</Text>
          <Text mt='4'>A team can submit only one project to any of the categories: <br/>creator tools, NFT tools, user/trader/inverstor tools, technical documentation.</Text>
          <Text mt='4'>Free for all automagically includes all proposals from other categories <br/>and includes projecs that don't fit in other categories.</Text>
          <Text mt='4'>This doesn't have to be a full-on new product.<br/>Can be an enhancement done in the spirit of the hackathon.</Text>
      </Container>
    </VStack>
  )
}
