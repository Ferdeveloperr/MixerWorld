import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { FaRecordVinyl } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='Background'>
      
      <Flex>
  <Box p='4' >
      
      <Link to={"/"}>
      <h3>MixerWorld <FaRecordVinyl/> </h3>
      </Link>
      
    
  </Box>
  <Spacer />

      <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
    <Link to={'/category/A'}>
    <MenuItem>Mixers</MenuItem>
    </Link>
    <Link to={'/category/B'}>
    <MenuItem>Auriculares</MenuItem>
    </Link>
    <Link to={'/category/C'}>
    <MenuItem>Parlantes</MenuItem>
    </Link>
    
  </MenuList>
  </Menu>

  <Spacer/>
  <Box p='4' >

      <Link to={"/Cart"}>
      <CartWidget/>
      </Link>

  </Box>
</Flex>

    </div>
  )
}

export default NavBar