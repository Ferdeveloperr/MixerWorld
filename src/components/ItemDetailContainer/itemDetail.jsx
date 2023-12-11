import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Center, Card, Box, Badge, Text } from '@chakra-ui/react';


const ItemDetail = (props) => {
  const { id } = useParams();

  console.log(id)
  // Obtener el array de productos directamente de las props
  const { productos } = props;

  console.log(productos)

  // Verificar si productos no se encontró
  // if (!productos || productos.length === 0) {
  //   return <p>No se proporcionó la información del producto</p>;
  // }

  // Buscar el producto por ID
  const foundProduct = Array.isArray(productos) ? productos.find((producto) => producto.id === id) : undefined;

  // Verificar si el producto no se encontró
  if (!foundProduct) {
    console.log(productos);  // Agrega este console.log para verificar la estructura de productos
    return <p>Producto no encontrado</p>;
  }




  const { titulo, descripcion, img, precio } = foundProduct;

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const handleAddToCart = (cantidad) => {
    setCantidadSeleccionada(cantidad);
    setMostrarItemCount(false);

  };

  useEffect(() => {

  }, [foundProduct]);

  return (
    <div>
      <Center p='1rem'>
        <Card>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <img src={img} alt={titulo} style={{ width: '100%', height: 'auto' }} />

            <Box p='6'>
              <Box display='box' alignItems='center' w={100} h={50} justifyContent='center'>
                <Badge borderRadius='full' px='3' colorScheme='purple'>
                  <h1>{titulo}</h1>
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
                    {/* Aquí también puedes pasar otros detalles del producto si es necesario */}
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


