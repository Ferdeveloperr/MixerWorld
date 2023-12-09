import React, { useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'


const form = () => {

  const cart = [{
    nombre: "Servicio magic flowers", precio: "$10.000"
  },
  {
    nombre: "Producto de limpieza", precio: "$4.000"
  }]

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")

  const db = getFirestore()

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(orderCollection, order).then(({ id }) =>
      setId(id))



  }

  const order = {
    comprador: {
      nombre,
      email

    },

    productos: cart

  }

  const orderCollection = collection(db, "ordenes")

  return (
    <div>

      <form action='' onSubmit={handleSubmit}>

        <input type="text" placeholder='Ingrese su nombre' onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder='Ingrese su email' onChange={(e) => setEmail(e.target.value)} />
        <button type='submit'>Enviar informacion</button>

      </form>

      <p>Id de la compra: {id} </p>

    </div>
  )
}

export default form