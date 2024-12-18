import flagMaps from "./Flags"

export default function Card ( {item} ) {

    const { title, original_title , name, original_name,  vote_average , original_language, poster_path } = item

    return (
        <div>
            <h3>{title}</h3>
            <p>{original_title}</p>
            {
                flagMaps[original_language] ? 
                <img src={flagMaps[original_language]} height={20} alt="Immagine della bandiera della lingua originale" /> :
                <p>{original_language}</p>   
            }
            <p>{vote_average}</p>
        </div>
    )

}