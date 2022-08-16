import axios from "axios"
import { useEffect, useState } from "react"

const useLocation = inputSearch =>{
  const [location, setLocation] = useState()
  useEffect(() => {
    if(!inputSearch){
      alert("Falta colocar datos en la busqueda")
    }else{
      let nlocation
      inputSearch ? nlocation=inputSearch: nlocation = Math.floor(Math.random()*(126-1)+1)
      const url = `https://rickandmortyapi.com/api/location/${nlocation}`
      axios.get(url)
       .then(res=>setLocation(res.data))
       .catch(err=>console.log(err))}
}, [inputSearch])

return location
}

export default useLocation