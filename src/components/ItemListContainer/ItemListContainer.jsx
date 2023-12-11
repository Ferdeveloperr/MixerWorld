
import React from 'react'
import "../styles/itemListContainer.css";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, snapshotEqual } from "firebase/firestore"
import Item from '../item';
import ItemDetailContainer from '../ItemDetailContainer/itemDetailContainer';





const ItemListContainer = () => {


  //   const filteredProducts = productos.filter((producto) => producto.category === category)


  //Eleccion de producto por categoria en firebase

  const [productos, setProductos] = useState([])
  const { categoria } = useParams();

  useEffect(() => {

    const db = getFirestore()



    const itemsCollection = collection(db, "Parlantes")

    getDocs(itemsCollection)
      .then((resp) => {

        setProductos(

          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })



  }, [categoria])

  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)


  return (

    <div className='greetingStyle'>
      <div>


        <ItemList productos={filteredProducts} />



      </div>





    </div>
  )
}


export default ItemListContainer
