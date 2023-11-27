import React from 'react'
import ItemCount from './ItemCount'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ titulo, descripcion, precio, img, id, }) => {

  return (


    <div  >


      <Card maxW='sm' align="center" margin='2'>
        <CardBody>

          <img src={img} alt={titulo} style={{ width: '100%', height: 'auto' }} />

          <Stack mt='6' spacing='3'>
            <Heading size='md'>{titulo}</Heading>
            <Text>
              {descripcion}
            </Text>

          </Stack>
        </CardBody>

        <CardFooter>
          <ButtonGroup align="center">


          </ButtonGroup>
        </CardFooter>
      </Card>



    </div>


  )
}

export default Item