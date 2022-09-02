import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "../Components/Spinner";
import { getMovieImg } from "../utilities/getMovieImg";
import { getHttp } from "../utilities/httpClient";
import styles from "./MovieDetails.module.css"

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie,SetMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
       getHttp("/movie/" + movieId).then(data => {
            setIsLoading(false);
            SetMovie(data);
       })
    }, [movieId])

    if (isLoading) {
        return <Spinner/>;
    }

    const imageUrl = getMovieImg(movie.poster_path, 500);

   return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.column} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
        <div className={`${styles.column} ${styles.movieDetails}`} >
            <p className={styles.firstItem}>
                <strong>Title: </strong>{movie.title}
            </p>
            <p>
                <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description: </strong>{movie.overview}
            </p>
        </div>
    </div>
   );
}

