import React from 'react'
import Item from './item'



const ItemList = ({productos}) => {
  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        {
          productos.map((p)=>{
            return(
        
                
              
              <Item
              key={p.id}
              category={p.category}
              titulo={p.titulo}
              descripcion={p.descripcion}
              precio={p.precio}
              img={p.img}
              /> 

           )
    
           })
        }

    </div>
  )
}

export default ItemList