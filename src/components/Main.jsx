import { useContext } from "react";
import ItemList from "./ItemList";
import GlobalContext from "../assets/context/GlobalContext";

export default function Main() {(GlobalContext)

    const { movies , series} = useContext

    return (
        <main>
            <ItemList title='Movies' items={movies}/>
            <ItemList title='Series' items={series}/>
        </main>
    )
}