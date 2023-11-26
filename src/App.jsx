import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import {BrowserRouter , Routes , Route } from "react-router-dom"
import About from './About'
import Home from './home'
import Cart from './components/Cart'





const App = () => {



  return (

    <div>

     <BrowserRouter>
      
        <NavBar />

            <Routes>


                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/cart' element={<Cart/>}/>
                <Route exact path='/ItemListContainer' element={<ItemListContainer/>}/>
                <Route exact path='/category/:category' element={<ItemListContainer/>} />
                <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>

            </Routes>
      
      </BrowserRouter>


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
