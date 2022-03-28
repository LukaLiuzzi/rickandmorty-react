import React from 'react'

const Character = ({character}) => {

    const {name, status, species, image, origin} = character

  return (
      <div className='col-md-4 mb-2'>
          <div className="card">
              <img src={image} alt={`imagen-${name}`} className='card-img-top'/>
              <div className="card-body bg-dark">
                  <h5>{name}</h5>
                  <p className='mb-0'>Specie: {species}</p>
                  <p className='mb-0'>Origin: {origin.name}</p>
                  <p className='mb-0'>Status: {status}</p>
              </div>
          </div>
      </div>
  )
}

export default Character