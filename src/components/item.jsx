import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import "./Item.css";

const Item = ({titulo, descripcion, precio, img}) => {

  return (


    <div className='product-container'>

  
  <Card maxW='sm' align="center">
  <CardBody>
  
      <img src={img} alt={titulo} style={{ width: '100%', height: 'auto' }}/>
   
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Producto:{titulo}</Heading>
      <Text>
        Descripcion:{descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Precio: {precio}
      </Text>
    </Stack>
  </CardBody>
  <Button variant='solid' colorScheme='blue'>
        Ver Detalle
      </Button>
    
  <CardFooter>
    <ButtonGroup align="center">
     
       <ItemCount/>

    </ButtonGroup>
  </CardFooter>
</Card>

        

    </div>


  )
}

export default Item