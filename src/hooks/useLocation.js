import axios from "axios"
import { useEffect, useState } from "react"

const useLocation = (searchLocation) => {

  const [location, setLocation] = useState()

  useEffect(() => {
    let findLocation
    if(searchLocation){
        findLocation = searchLocation
    }else{
        findLocation = Math.ceil(Math.random() * 126)
    } 
    const URL = `https://rickandmortyapi.com/api/location/${findLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    
    
  }, [searchLocation])
  return location
}

export default useLocation