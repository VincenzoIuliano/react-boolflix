export default function Card ( {item} ) {

    const { title, original_title , name, original_name,  vote_average , original_language, poster_path } = item

    return (
        <div>
            <h3>{title}</h3>
            <p>{original_title}</p>
            <p>{original_language}</p>
            <p>{vote_average}</p>
        </div>
    )

}