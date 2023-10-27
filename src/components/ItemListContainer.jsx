import { Progress } from '@chakra-ui/react'
import React from 'react'
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
  return (
  
    <div className='greetingStyle'>
      <div>
      {greeting}
      </div> 
        <div className='stripeStyle'>
        <Progress hasStripe value={25} />
        </div>
    </div>
  )
}

export default ItemListContainer