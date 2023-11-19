import React from 'react';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import Item from './Item';

import { Center, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const foundProduct = productos.find((producto) => producto.id == id);

  // if (!foundProduct) {
  //   return <div>Producto no encontrado</div>;
  // }

  const { titulo, descripcion, category, img, precio } = foundProduct || {};


  return (
    <div>


      {/* <Item

key={id}
category={category}
titulo={titulo}
descripcion={descripcion}
precio={precio}
img={img}


      /> */}


      <Center p='1rem'>
        <Card>
          <CardHeader>
            <Heading size='md'>{titulo}</Heading>
          </CardHeader>
          <CardBody>
          <img src={img} alt={titulo} style={{ width: '100%', height: 'auto' }}/>
            <Text>{descripcion}</Text>
            <Text>{category}</Text>
          </CardBody>
          <CardFooter>
            <ItemCount />
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;
