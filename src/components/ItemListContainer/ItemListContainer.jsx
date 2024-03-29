
import React from 'react'
import ItemList from './ItemList';
import "../styles/ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore"








const ItemListContainer = () => {



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


  console.log(categoria)


  return (

    <div className='greetingStyle'>
      <div>


        <ItemList productos={filteredProducts} />



      </div>





    </div>
  )
}


export default ItemListContainer
