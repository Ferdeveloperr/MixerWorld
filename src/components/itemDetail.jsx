import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

import { Center, Card, Box, Badge, Text } from '@chakra-ui/react';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const foundProduct = productos.find((producto) => producto.id == id);
  const { titulo, descripcion, img, precio } = foundProduct || {};

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const handleAddToCart = (cantidad) => {
    setCantidadSeleccionada(cantidad);
    setMostrarItemCount(false);
    // Aquí puedes realizar acciones adicionales, como agregar el producto al carrito, etc.
  };

  return (
    <div>
      <Center p='1rem'>
        <Card>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <img src={img} alt={titulo} style={{ width: '100%', height: 'auto' }} />

            <Box p='6'>
              <Box display='box' alignItems='center' w={100} h={50} justifyContent='center'>
                <Badge borderRadius='full' px='3' colorScheme='purple'>
                  <h2>{titulo}</h2>
                </Badge>
              </Box>

              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                textAlign='center'
                noOfLines={1}
              >
                {descripcion}
              </Box>

              <Box position='relative' h='100px'>
                <Text color='blue.600' fontSize='2xl' fontWeight='bold' textAlign='center'>
                   ${precio}
                </Text>
              </Box>

              {mostrarItemCount && (
                <Box display='flex' mt='2' alignItems='center' justifyContent='center'>
                  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {/* Pasa el manejador de eventos a ItemCount */}
                    <ItemCount onAdd={handleAddToCart} />
                  </Box>
                </Box>
              )}

              {!mostrarItemCount && (
                <Box textAlign='center' mt='4'>
                  <Text>Producto agregado al carrito. Cantidad: {cantidadSeleccionada}</Text>
                </Box>
              )}
            </Box>
          </Box>
        </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;

