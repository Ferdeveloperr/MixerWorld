import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Item from './Item';
import { Button } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  const { id } = useParams();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {productos.map((p) => (
        <div key={p.id}>
          <Item
            titulo={p.titulo}
            descripcion={p.descripcion}
            img={p.img}
            precio={p.precio}
          />
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
