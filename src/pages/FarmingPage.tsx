import React, { useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Link,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/layout';
import Title from '../components/Title';
import constants from '../config/constants';
import Farm from '../components/Farm';
import { FaCheckCircle } from 'react-icons/fa';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import Liquidity from '../components/Liquidity';
import APR from '../components/APR';


export default function FarmingPage(): React.ReactElement {


  return (
    <Container>
      <Box mt={16} mb={10}>
        <Title lineHeight="48px" isPageTitle>
          Farm {'&'}
        </Title>
        <Title isPageTitle color={constants.colors.red}>
          Earn rewards
        </Title>
      </Box>
      <Title mt={4} mb={4} isSecondary>
        Instructions
      </Title>
      <Text>
        If you are already a liquidity provider, you can stake your LP tokens
        and earn rewards every day! Also, you can easilly become a liquidity
        provider. It’s easy, you can access our{' '}
        <Link
          fontWeight="bold"
          color={constants.colors.red}
          href={
            'https://app.1inch.io/#/56/dao/pools?action=stake&token0=0x0000000000000000000000000000000000000000&token1=0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af'
          }
          target="_blank"
        >
          1inch liquidity pool
        </Link>{' '}
        and will be able to deposit a certain amount of tokens (BNB+FREN) to
        collaborate with our liquidity. You will receive back an amount of LP
        tokens and will passively earn a certain quantity of FREN from the 1inch
        swap fees.
      </Text>
      <HStack mb={10} mt={10}>
      </HStack>
      
      <Flex>
      <List spacing={3}>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            Create liquidity tokens on 1inch or use our liquidity features below
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            Deposit FREN-BNB LP on Frenchie Farm
          </ListItem>
          <ListItem display="flex" alignItems="center">
            <ListIcon as={FaCheckCircle} color="green.500" />
            Every 3 seconds 5000 FREN is divided between the number of farmers
            in our Frenchie Farm contract
          </ListItem>
        </List>
  <Spacer />
      <Alert w="550px" status="warning">
  <AlertIcon />
  <Box >
    <AlertTitle>DISCLAIMER</AlertTitle>
    <AlertDescription display="block">
    <Text fontSize="12px">
    Providing liquidity to pools comes with certain risks like the impermanent loss risk. 
      </Text>
      <Text fontSize="12px">Please make sure you do your own research and due dilligence before proceeding.</Text>
      <Text fontSize="12px">Providing liquidity is an advanced subject and you should have some experience.</Text>

    <Text fontSize="12px">
    We are not responsible for any losses that might occur. Also note that nothing of what is described here constitutes financial advice.
</Text>
    </AlertDescription>
  </Box>
</Alert>

  </Flex>
  <Title mt={4} mb={4} isSecondary>
        APY
      </Title>
      <APR mb={10} />
      <Title mt={4} mb={4} isSecondary>
        Liquidity (FREN+BNB)
      </Title>
      <Liquidity mb={10} />
      <Title mt={4} mb={4} isSecondary>
        Frenchie Farm
      </Title>
      <Farm />
    </Container>
  );
}
