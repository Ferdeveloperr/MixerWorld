import { Progress } from '@chakra-ui/react'
import React from 'react'
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
  return (
    <div className='greetingStyle'>
      <Progress hasStripe value={25} />
    <div>
    {greeting}
    </div> 
    </div>
  )
}

export default ItemListContainer