import { Progress } from '@chakra-ui/react'
import React from 'react'
import "./ItemListContainer.css";
import ItemCount from './itemCount';

const ItemListContainer = ({greeting}) => {
  return (
  
    <div className='greetingStyle'>
      <div>
      {greeting}
      <ItemCount />
      </div> 
        <div className='stripeStyle'>
        <Progress hasStripe value={25} />
        </div>
    </div>
  )
}

export default ItemListContainer