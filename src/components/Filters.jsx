import { useContext } from "react"
import GlobalContext from "../assets/context/GlobalContext"

export default function Filter() {

    const { query, setQuery, fetchData } = useContext(GlobalContext)

    function onChange(e) {
        setQuery(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()

        // qui facciamo la chiamata a TheMovieDB 
        
        fetchData()
    }

    return (
        <form onSubmit={onSubmit}>

            <div>
                <label htmlFor="query">Cerca</label>
                <input type="text" name="query" onChange={onChange} id="query" value={query} placeholder="Cerca..."/>
                <button>Cerca</button>
            </div>

        </form>
    )
}