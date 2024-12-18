import { useState } from "react"
import GlobalContext from "./assets/context/GlobalContext"

const API_KEY = 'e99307154c6dfb0b4750f6603256716d'

function App() {
  
  const [movies,setMovies] = useState([])
  const [series,setSeries] = useState([])
  const [query, setQuery] = useState('')

  return (
    <>
      <GlobalContext.Provider value={{API_KEY}}>
        ciao
      </GlobalContext.Provider>
    </>
  )
}

export default App
