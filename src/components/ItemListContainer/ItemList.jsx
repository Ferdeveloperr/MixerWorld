import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from '../item';
import { Button, Box, Badge } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  const { id } = useParams();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {productos.map((p) => (
        <div key={p.id}>
          <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' m={6}>
            <img src={p.imagen} alt={p.nombre} style={{ width: '100%', height: '400px' }} />
          </Box>

          <Box m={5}>
            <Badge borderRadius='full' px='3' textAlign='center' colorScheme='purple'>
              <h1 style={{ textAlign: 'center', fontSize: '20px' }}>{p.nombre}</h1>
            </Badge>
          </Box>


          <Button variant='solid' colorScheme='blue'>
            <Link to={`/item/${p.id}`}>
              Ver Detalle
            </Link>
          </Button>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
