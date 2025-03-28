import { JSX, useContext, useEffect } from 'react'
import Movie from '../../components/Movie/Movie'
import { MovieType } from '../../types/MovieType'
import styles from './MainPage.module.scss'
import Layout from '../Layout'
import { observer } from 'mobx-react-lite';
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import MoviesApi from '../../http/MoviesApi'
import ImagesApi from '../../http/ImagesApi'
import { MovieTypeWithImageAndGenres } from '../../types/MovieTypeWithImageAndGenres'
import GenresApi from '../../http/GenresApi'
import { GenreType } from '../../types/GenreType'

const MainPage = observer((): JSX.Element => {
  const { movieStore, imageStore, genreStore } = useContext(Context) as StoresType

  useEffect(() => {
    MoviesApi.getAll().then((data) => movieStore.setMovies(data))
    ImagesApi.getAll().then((data) => imageStore.setImages(data))
    GenresApi.getAll().then((data) => genreStore.setGenres(data))
  }, [])

  const movies = movieStore.getMovies()
  const images = imageStore.getImages()
  const genres = genreStore.getGenres()

  const moviesWithImagesAndGenres = movies.map((movie: MovieType) => {
    const image = images.find(image => image.id === movie.imageID)
    const listOfGenres = movie.genres_ids
      .map(genreId => genres.find(genre => genre.id === genreId))
      .filter((genre): genre is GenreType => genre !== undefined);
    return { ...movie, image, listOfGenres }
  })

  return (
    <Layout>
      <h1>Фильмы в Москве</h1>
      <div className={styles.catalog}>
        {moviesWithImagesAndGenres.map(
          (movie: MovieTypeWithImageAndGenres): JSX.Element => (
            <Movie movie={movie} key={movie.id} />
          )
        )}
      </div>
    </Layout>
  )
})

export default MainPage
