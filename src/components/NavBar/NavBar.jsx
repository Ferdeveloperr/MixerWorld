import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button, Image } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import newBrand from '../image/newBrand.png';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className='Background'>
      <Flex>
        <Box p='2'>
          <Link to={"/"}>
            <Flex align='center'>

              <Image src={newBrand} alt="Logo" boxSize="100px" className='BrandImage' justifyContent='center' />
            </Flex>
          </Link>
        </Box>
        <Spacer />

        <Box p='4'>
          <Menu>
            <MenuButton as={Button} fontWeight='500'>
              Categorias
            </MenuButton>
            <MenuList>
              <Link to={'/categoria/mixers'}>
                <MenuItem>Mixers</MenuItem>
              </Link>
              <Link to={'/categoria/auriculares'}>
                <MenuItem>Auriculares</MenuItem>
              </Link>
              <Link to={'/categoria/parlantes'}>
                <MenuItem>Parlantes</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>

        <Spacer />
        <Box p='4'>
          <Link to={"/Cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>

      <div className='DarkModeButton'>
        <Button onClick={toggleColorMode} colorScheme='dark' bg='scheme'>
          Modo {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
