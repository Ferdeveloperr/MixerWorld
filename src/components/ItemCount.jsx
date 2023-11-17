import { useState } from 'react';
import { Button, Badge } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const ItemCount = () => {
  const toast = useToast();

  // fn del contador junto con estilo para agregar al carrito
  const [count, setCount] = useState(0);

  const addToCart = () => {
    toast({
      title: 'Producto agregado',
      description: `Has agregado ${count} unidades`,
      status: 'success',
      duration: 2500,
      isClosable: true,
    });
  };

  // funciones con condicionales para el contador
  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Button colorScheme="teal" variant="outline" size="sm" onClick={incrementCount}>
        +
      </Button>

      <Badge colorScheme="green" size="md">
        {count}
      </Badge>

      <Button colorScheme="teal" variant="outline" size="sm" onClick={decrementCount}>
        -
      </Button>

      <Button colorScheme="blue" size="sm" onClick={addToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
