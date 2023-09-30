import React, { useState, useEffect } from 'react'
import CardUser from '../Card/CardUser'

const Usuarios = () => {

  const [users, setUsers] = useState([])


  const obtenerDatos = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const datos = await data.json()
      setUsers(datos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <div className='container py-5'>
      <h1 className='py-5 text-center'>Usuarios</h1>
        {
          users.map(item => (
            <div className='col my-3' key={item.id}>
                <CardUser item={item} />
            </div>
          ))
        }
      
    </div>
  )
}

export default Usuarios
