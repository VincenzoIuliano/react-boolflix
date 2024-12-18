import { useState } from "react"
import GlobalContext from "./assets/context/GlobalContext"
import Main from "./components/Main"
import Header from "./components/Header"
import axios from "axios"

const API_KEY = 'e99307154c6dfb0b4750f6603256716d'

function App() {
  
  const [movies,setMovies] = useState([])
  const [series,setSeries] = useState([])
  const [query, setQuery] = useState('Star Wars')

  function fetchData () {
    
    axios.get('https://api.themoviedb.org/3/search/movie',{
      params: {
        api_key: API_KEY,
        query
      }
    }).then(res => {
      console.log(res.data)
      setMovies(res.data.results)
    }).catch(err => {
      console.error(err)
      setMovies([])
    })
  }

  return (
    <>
      <GlobalContext.Provider value={{ movies, series, query, setQuery, fetchData}}>
        <Header />
        <Main />
      </GlobalContext.Provider>
    </>
  )
}

export default App
