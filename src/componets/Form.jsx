import React from 'react'

const Form = ({setInput}) => {
 const handleSumblimet= e=>{
    e.preventDefault()
    setInput(e.target.search.value)
}
  return (
    <div className='container-form'>
      <form onSubmit={handleSumblimet}>
        <input id="search" type="text"/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default Form

