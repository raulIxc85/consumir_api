import React from 'react'

const CardUser = (item) => {
    console.log(item.item.id)
    return (
        <div className='row'>
            <div className='col-2 mt-4'>
                <img
                    className='shadow bg-body rounded rounded-circle'
                    src="./users.jpg"
                    alt="foto de usuario"
                    width={200}
                    height={150}
                />
            </div>
            <div className="col-6">
                <div className='card'>
                    <div className='card-body'>
                        <blockquote class="blockquote mb-2">
                            <h4 className='card-title'>Datos personales</h4>
                        </blockquote>
                        <p className='card-text'>Id: {item.item.id}</p>
                        <p className='card-text'>Nombre: {item.item.name}</p>
                        <p className='card-text'>Username: {item.item.username}</p>
                        <p className='card-text'>Email: {item.item.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardUser