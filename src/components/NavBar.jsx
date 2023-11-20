import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css";
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button, Image } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
import { FaRecordVinyl } from "react-icons/fa6";
import { Link } from 'react-router-dom';





const NavBar = () => {
  
    const { colorMode, toggleColorMode } = useColorMode()
    
    
  
  return (
    <div className='Background'>
      
      <Flex>
  <Box p='4' >
      
      <Link to={"/"}>
        <Flex align='center'>
          <h3>MixerWorld</h3>
          
        </Flex>
      
      </Link>
      
    
  </Box>
  <Spacer />

<Box p='4'>
      <Menu>
  <MenuButton fontWeight='500'>
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

  </Box>

  <Spacer/>
  <Box p='4' >

      <Link to={"/Cart"}>
      <CartWidget/>
      </Link>


  </Box>
</Flex>

<div className='DarkModeButton'>
 
        <Button onClick={toggleColorMode} colorScheme='dark' bg='scheme'>
          Modo {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
     

</div>  

    </div>

  )

  
}

export default NavBar