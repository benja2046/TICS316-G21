import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'




function Card({title, imageSource, url, encargado}) {   //props para darle los datos a cada tarjeta
  return (
    <div className='card text-center bg-dark member'>
      <img className='perfil' src={imageSource} alt =""/>   
        <div className='card-body text-light mt-20'>
            <h4 className='card-title'>{title}</h4>
            <h4>
              {encargado}
            </h4>
            <br></br>
            <h5>
              {url}
            </h5>        
        
        </div>

    </div>
  )
}

export default Card