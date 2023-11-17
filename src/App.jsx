import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'




const App = () => {



  return (

    <div>

     
      
      <NavBar />

      <ItemListContainer greeting= {"Bienvenido"}/>
      
      
      


      </div>



  )
}



// estructura de una promesa //

// const aplicarDescuento = new Promise ((resolve, reject) =>{
//   const descuento = false

//   if (descuento) {
//     resolve ("descuento aplicado")
//   } else{
//     reject("no se pudo aplicar el descuento")
//   } 
// })

// aplicarDescuento
//  .then((resultado)=>{
//   console.log(resultado)
//  })

//  .catch((error)=>{
//   console.log(error)
//  })

//  console.log(aplicarDescuento)




// array de objetos tipo producto




export default App
