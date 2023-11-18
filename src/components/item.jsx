import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({titulo, descripcion, precio, img, id,}) => {

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
    <Link to={`/item/${id}`}>
        Ver Detalle
    </Link>
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