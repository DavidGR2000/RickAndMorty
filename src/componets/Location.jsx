import React from 'react'

const Location = ({location}) => {
  return (
    <article className='cardLocation'>
      <ul className='items'>
            <li><span className='bold'>Name:</span>{location?.name}</li>
            <li><span className='bold'>Type:</span>{location?.type}</li>
            <li><span className='bold'>Dimension:</span>{location?.dimension}</li>
            <li><span className='bold'>Population:</span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default Location