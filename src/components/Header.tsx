/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react';
import { Button, IconButton } from '@chakra-ui/button';
import { Container, Flex, Stack, Text, VStack } from '@chakra-ui/layout';
import { FaBars } from 'react-icons/fa';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { useHistory } from 'react-router';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react';
import constants from '../config/constants';
import { Logo } from './Logo';
import WalletInfo from './WalletInfo';

export default function Header(): React.ReactElement {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  const goTo = useCallback(
    (path: string) => (e?: any) => {
      setDrawerOpen(false);
      if (e) {
        e.preventDefault();
      }
      history.push(path);
    },
    [history]
  );

  const handleDrawerOpen = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <Container>
      <Drawer placement="left" onClose={handleDrawerClose} isOpen={drawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={2} />
          <DrawerHeader borderBottomWidth="1px" mb={4}>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <Button
                isFullWidth
                onClick={goTo('/')}
                bg={constants.colors.light}
                color={constants.colors.dark}
              >
                Home
              </Button>
              <Button
                isFullWidth
                onClick={goTo('/farming')}
                bg={constants.colors.light}
                color={constants.colors.dark}
              >
                Farm
              </Button>
              <Button
                isFullWidth
                onClick={goTo('/swap')}
                bg={constants.colors.light}
                color={constants.colors.dark}
              >
                Swap
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex pt={8} pb={8} justifyContent="space-between">
        <Stack spacing={2} display="flex" direction="row" alignItems="center">
          <IconButton
            variant="outline"
            aria-label="Menu"
            icon={
              <FaBars
                color={constants.colors.light}
                width={24}
                height={24}
                size={24}
              />
            }
            onClick={handleDrawerOpen}
          />
          <Logo height={9} />
          <Text
            fontSize={24}
            display={{ base: 'none', md: 'block' }}
            color={constants.colors.light}
            fontWeight="bold"
          >
            Frenchie Network
          </Text>
        </Stack>
           <Menu>
            <MenuButton onClick={goTo('/')} as={Button}  color={constants.colors.dark} bg={constants.colors.light}>
              Home
             </MenuButton>
             <MenuButton onClick={goTo('/farming')} as={Button}  color={constants.colors.dark} bg={constants.colors.light}>
              Farming
             </MenuButton>
             <MenuButton onClick={goTo('/swap')} as={Button}  color={constants.colors.dark} bg={constants.colors.light} >
              FrenchieSwap
             </MenuButton>
           </Menu>
        <WalletInfo />
      </Flex>
    </Container>
  );
}
