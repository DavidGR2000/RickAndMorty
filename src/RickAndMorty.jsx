import { useState } from 'react'
import './App.css'
import Form from './componets/Form'
import Location from './componets/Location'
import Residents from './componets/Residents'
import useLocation from './hooks/useLocation'
import  header from '../public/header.png'
import  title  from '../public/title.png'

function RickAndMorty() {
 const [inputSearch, setInputSearch] = useState()
 const location = useLocation(inputSearch)
  return (
    <>
    <div className='app'>
      <header>
        <div className="container-header">
          <img className='fond' src={header} alt="Font" />
          <div className='name'><img src={title} alt="Rick And Morty"/></div>
        </div>
      </header>
      <main>
        <section>
          <Form setInput={setInputSearch}/>
        </section>
        <Location location={location}/>

      <div className='container'>
      {
        location?.residents.map(url=>(
          <Residents 
          key={url} 
          url={url} />
        ))
        
      }
      </div>
      </main>
    </div>
    </>
  )
}

export default RickAndMorty
