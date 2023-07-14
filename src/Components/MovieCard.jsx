

// removeMovie had to be passed down from the App to both moviescreen and watchlist. Since both are using moviecard
// you have to pass them down even further by props to end up here in the moviecard component
const MovieCard = ({movie, watchList, addMovie, removeMovie}) => {

    // Below, we have to make sure the watchList props is passed from the watchlist component since we are going to filter
    // over that array. After we do a filter method, we need to grab the id which is a property that exist from the website.
    // Since a movie is added into our watchlist, it will be assigned an id so now we just set it equal to the movie.id in order to
    // take it out so i.e (watched.id = 1 === movie.id = the id from the movie website)
    const inWatchList = watchList.filter(watched => {
        return watched.id === movie.id
    })

    const button = inWatchList.length === 0 ? 
    (<button onClick={() => addMovie(movie)}>Add to List</button>) 
    : 
    (<button onClick={() => removeMovie(movie)} >Remove</button>)

    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                <h2>{movie.original_title}</h2>
            </div>
            {button}
        </div>
    )
}

export default MovieCard