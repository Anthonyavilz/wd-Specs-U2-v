import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/Header'
import MovieScreen from './Components/MovieScreen'
import Watchlist from './Components/WatchList'

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US&page=${page}`

  const getData = () => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.results)
        setMovieList(res.data.results)
      })
  }

  useEffect(() => {
    getData()
  }, [page])

  const addMovie = (movie) => {
    setWatchList([...watchList, movie])
  }

  const removeMovie = (movie) => {
    const newState = watchList.filter(remove => {
      return remove !== movie
    })
    setWatchList(newState)
  }
  
  return (
      <div className='App'>
        <Header/>
        <main>
          <MovieScreen
            movieList = {movieList}
            watchList = {watchList}
            page = {page}
            setPage = {setPage}
            addMovie = {addMovie}
            removeMovie = {removeMovie}
          />
          <Watchlist
            watchList = {watchList}
            removeMovie = {removeMovie}
          />
        </main>
      </div>
  )
}

export default App
