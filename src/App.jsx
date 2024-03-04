import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/NavBar/About'
import Home from './components/NavBar/Home'
import Cart from './components/NavBar/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './context/CartContext'





const App = () => {

  const [carrito, Setcarrito] = useState({});



  return (

    <div>


      <CartContext.Provider value={{ carrito, Setcarrito }}>
        <BrowserRouter>

          <NavBar />

          <Routes>


            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/ItemListContainer' element={<ItemListContainer />} />
            <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />



          </Routes>
        </BrowserRouter>



      </CartContext.Provider>


      {/* <Form /> */}


    </div>



  )
}




export default App
