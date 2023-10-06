import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'




function Card({title, imageSource, url, message}) {   //props para darle los datos a cada tarjeta
  return (
    <div className='card text-center bg-dark member'>
      <img className='perfil' src={imageSource} alt =""/>   
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-info'> Para acceder</p>
            <a href={url} className='btn btn-outline-secondary rounded-0'>
              Haga click Aquí  
            </a>        
        
        </div>

    </div>
  )
}

export default Card