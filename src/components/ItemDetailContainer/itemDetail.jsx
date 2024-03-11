// ItemDetail.js
import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Center, Box, Badge, Text, Collapse, Button } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {

  const { carrito, setCarrito } = useContext(CartContext);
  console.log(carrito)

  const { nombre, descripcion, imagen, precio } = item;


  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  }




  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);



  return (
    <div>
      <h2>Detalles del item</h2>
      <Center p='1rem'>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <img src={imagen} alt={nombre} style={{ width: '100%', height: 'auto' }} />

          <Box p='6'>
            <Box display='box' alignItems='center' w={100} h={50} justifyContent='center' textAlign='center' mt={4}>
              <Badge borderRadius='full' px='5' colorScheme='purple' textAlign='center'>
                <h1 style={{ textAlign: 'center', fontSize: '20px' }}>{nombre}</h1>
              </Badge>
            </Box>

            <Box
              mt='3'
              fontWeight='semibold'
              as='h4'

              textAlign='center'

            >

              <Collapse startingHeight={50} in={show}>
                {descripcion}
              </Collapse>
              <Button size='sm' onClick={handleToggle} mt='1rem'>
                Ver {show ? 'Menos' : 'Mas'}
              </Button>
            </Box>

            <Box position='relative' h='100px' mt='9'>
              <Text color='blue.600' fontSize='2xl' fontWeight='bold' textAlign='center'>
                ${precio}
              </Text>
            </Box>
            <Box textAlign='center'
              mb='9'>{
                setCantidad > 0 ? (
                  <Link to='/Cart' className='Option'> Terminar compra </Link>
                ) : (

                  <ItemCount
                    cantidad={cantidad}
                    handleRestar={handleRestar}
                    handleSumar={handleSumar}
                    handleAgregar={() => { setCarrito(item, cantidad) }} />
                )
              }
            </Box>
          </Box>


        </Box>

      </Center>


    </div>
  );
};

export default ItemDetail;


