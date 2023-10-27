import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div className='Background'>
      
      <Flex>
  <Box p='4' >
      <h3 >MixerWorld</h3>
      
      
    
  </Box>
  <Spacer />

      <Menu>
  <MenuButton>
    Categorias
  </MenuButton>
  <MenuList>
    <MenuItem>Mixers</MenuItem>
    <MenuItem>Auriculares</MenuItem>
    <MenuItem>Parlantes</MenuItem>
    
  </MenuList>
  </Menu>

  <Spacer/>
  <Box p='4' >
      <CartWidget/>
  </Box>
</Flex>

    </div>
  )
}

export default NavBar