import React from 'react'
import useFetch from '../hooks/useFetch'

const Residents = ({url}) => {

  const resident=useFetch(url)
  const circlechange = {
    Alive: "green",
    Dead: "red",
    unknown: "orange",
  }

  return (
    <article className='card'>
        <header className='card_header'>
          <img src={resident?.image} alt={`image of ${resident?.name}`} />
          <div className='state'>
            <div>{resident?.status}</div>
            <div className='circle' style={{backgroundColor:circlechange[resident?.status]}}></div>
          </div>
        </header>
          <div className='card_body'>
            <h3>{resident?.name}</h3>
            <ul className='card_item'>
              <li><span className='bold'>Specie:</span>{resident?.species}</li>
              <li><span className='bold'>Origin:</span>{resident?.origin.name}</li>
              <li><span className='bold'>Eppisodes where appear:</span>{resident?.episode.length}</li>
            </ul>
          </div>
        </article>
      )
}
export default Residents

