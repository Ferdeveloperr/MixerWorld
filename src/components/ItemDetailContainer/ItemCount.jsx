import { useState } from 'react';
import { Button, Badge } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  const toast = useToast();

  const addToCart = () => {
    toast({
      title: 'Producto agregado',
      description: `Has agregado ${cantidad} unidades`,
      status: 'success',
      duration: 2500,
      isClosable: true,
    });
  };




  return (
    <div>
      <Button colorScheme="teal" variant="outline" size="sm" onClick={handleRestar}>
        -
      </Button>

      <Badge colorScheme="green" size="md">
        {cantidad}
      </Badge>

      <Button colorScheme="teal" variant="outline" size="sm" onClick={handleSumar}>
        +
      </Button>


      <Link to="/cart">
        <Button colorScheme="blue" size="sm" variant="solid" onClick={handleAgregar}>
          Agregar al carrito
        </Button>
      </Link>
    </div>
  );
};

export default ItemCount;

