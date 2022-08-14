import axios from "axios"
import { useEffect, useState } from 'react'
import './App.css'
import CardCharacter from './Components/CardCharacter'
import InputFind from './Components/InputFind'
import LoadingCard from "./Components/LoadingCard"
import LocationInfo from './Components/LocationInfo'
import useLocation from './hooks/useLocation'

function App() {

  const [searchLocation, setSearchLocation] = useState()

  //////////////////////////
  const [loading, setLoading] = useState(true)
  const [loading1, setLoading1] = useState()

  useEffect(() => {
    let findLocation
    if (searchLocation) {
      findLocation = searchLocation
    } else {
      findLocation = Math.ceil(Math.random() * 126)
    }
    const URL = `https://rickandmortyapi.com/api/location/${findLocation}`
    axios.get(URL)
      .then(res => setLoading1(res.data))

      setTimeout(() => {
        setLoading(false)
      }, 1000)
  }, [])
  //////////////////////////

  const location = useLocation(searchLocation)

  return (
    <div className="App">
      {loading ?
        <LoadingCard />
        :
        ''
      }
      {loading ?
      ''
      :
      <div className="other">
        <InputFind setSearchLocation={setSearchLocation} />
        <LocationInfo location={location} />
        <div className='Cards'>
          {location?.residents.map(resident => (
            <CardCharacter resident={resident} key={resident} />
          ))}
        </div>
      </div>
      }
    </div>
  )
}

export default App
