import {useState} from 'react'
import {Button, Badge  } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const ItemCount = () => {

const toast = useToast()

const [count, setCount] = useState(0)


const addToCart =()=>{
  toast({
    title: 'Producto agregado',
    description: `Has agregado ${count} unidades`,
    status: 'success',
    duration: 2500,
    isClosable: true,
  })
}

  return (
    <div>
    
      <Button colorScheme='teal' variant='outline' size='sm' onClick={() => setCount(count + 1)}>
        +
      </Button>

      <Badge colorScheme='green'size='md'>
        {count}
      </Badge>

      <Button colorScheme='teal' variant='outline' size='sm' onClick={() => setCount(count - 1)}>
        -
      </Button>
      <Button colorScheme='blue'size='sm' onClick={addToCart}>
        Agregar al carrito
      </Button>

    </div>
    // mirar desde las 13hs hasta 13:20hs aprox el zoom
  )
}

export default ItemCount