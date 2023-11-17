import React, { useState } from 'react'

const form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState(20)


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(nombre)
        console.log(email)
    }

  return (
    <div>

    <form action='' onSubmit={handleSubmit}>

    <input type="text" onChange={(e) => setNombre(e.target.value)}placeholder='Ingrese su nombre'/>
    <input type="email"onChange={(e) => setEmail(e.target.value)}placeholder='Ingrese su email'/>
    <button type='submit'>Enviar informacion</button>

    </form>


    </div>
  )
}

export default form