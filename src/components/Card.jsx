import flagMaps from "./Flags"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'


export default function Card ( {item} ) {

    const { title, original_title , name, original_name,  vote_average , original_language, poster_path } = item

    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : `https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1`

    const vote = Math.ceil(vote_average / 2)
    const stars = new Array(5)

    for (let i = 0; i < stars.length; i++) {
        stars[i] = <FontAwesomeIcon icon={i < vote ? faStar : faStarRegular} />
    }

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
            {/* <p>{vote_average} : {vote}</p> */}
            <div>
                {stars}
            </div>
        </div>
    )

}