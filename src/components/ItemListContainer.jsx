import { Progress } from '@chakra-ui/react'
import React from 'react'
import "./ItemListContainer.css";
import ItemCount from './itemCount';

const ItemListContainer = () => {
  const productos = [
    {id:1 , titulo:"producto A", descripcion: "descripcion producto A" , precio:1000 , categoria: "A"},
    {id:2 , titulo:"producto B", descripcion: "descripcion producto A" , precio:1500 , categoria: "B"},
    {id:3 , titulo:"producto C", descripcion: "descripcion producto A" , precio:2000 , categoria: "C"},
    {id:4 , titulo:"producto D", descripcion: "descripcion producto A" , precio:3000 , categoria: "D"}
  ]


  // const mostrarProductos = new Promise((resolve, reject)=>{

  // })
  
  const mostrarProductos = new Promise((resolve, reject)=>{

    if(productos.length > 0){
    
      setTimeout(() => {
        resolve(productos)

      }, 5000)

    }else{
      reject("No se encontraron los productos")
    }

  })

  
  .then((resultado)=>{
    console.log(resultado)
  })

  .catch((error)=>{
    console.log(error)
  })

  return (
  
    <div className='greetingStyle'>
      <div>
      {
       productos.map((p)=>{
        return(
          <div key={p.id}>
            <h2>Producto: {p.titulo}</h2>
            <h4>$ {p.precio}</h4>
          </div>
       )
       })

      }
      
      <itemList productos={productos}/>

      {/* <ItemCount /> */}
      </div> 
        <div className='stripeStyle'>
        <Progress hasStripe value={25} />
        </div>
    </div>
  )
}

export default ItemListContainer