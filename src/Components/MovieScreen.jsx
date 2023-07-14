import MovieCard from "./MovieCard"

const MovieScreen = ({movieList, watchList, page, setPage, addMovie, removeMovie}) => {

    // Here in the map method, we are map over the movie array from the website. Based on the console.log, 
    // original_title is one of the properties from that "movie" array. We are assigning movie to that element aka
    // the array from the website and pulling the original title to display the movies from there.
    const movieDisplay = movieList.map(movie => {
        return (
            <MovieCard
                movie={movie}
                watchList={watchList}
                addMovie = {addMovie}
                removeMovie = {removeMovie}
            />
        )
    })

    const increment = () => {
        setPage(page + 1)
    }

    const decrement = () => {
        setPage(page - 1)
    }
    // with the buttons/arrow functions, if it takes a parameter than in the onClick part you'll need to set it like
    // {() => function(parameter)}
    //  <button onClick={() => page !==1 && decrement} >Previous</button>
    //  <button onClick={() => increment} >Next</button>

    // If it's a single function like above, then all you need to us put the function name itself like below

    return (
        <div className="page">
            <h1>Phillip's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen