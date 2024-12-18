import flagMaps from "./Flags"

export default function Card ( {item} ) {

    const { title, original_title , name, original_name,  vote_average , original_language, poster_path } = item

    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : `https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1`

    return (
        <div>
            <figure>
                <img src={imgSrc} alt="" />
            </figure>
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