import React from 'react'
import ItemCount  from './ItemCount'
import {useParams} from 'react-router-dom'
import { CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react'

const itemDetail = ({productos}) => {
  const { id } = useParams()

  const filteredProducts = productos.filter((producto) => producto.id == id)
  return (
    <div>
      {
        filteredProducts.map((p) => {
          return (
            <div key={p.id}>
              <Center p='1rem'>
                <Card>
                  <CardHeader>
                    <Heading size='md'>
                      {p.nombre}                      
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{p.descripcion}</Text>
                    <Text>{p.category}</Text>
                  </CardBody>
                  <CardFooter>
                    <ItemCount/>
                  </CardFooter>
                </Card>
              </Center>
              </div>
          )
        })
      }
        <ItemCount />
    </div>
  )
}

export default itemDetail