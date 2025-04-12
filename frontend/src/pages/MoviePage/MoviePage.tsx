import { Link, useParams } from 'react-router-dom'
import Layout from '../Layout'
import styles from './MoviePage.module.scss'
import { ChevronLeft } from 'lucide-react'
import { JSX, useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import SessionApi from '../../http/SessionApi'
import HallApi from '../../http/HallApi'
import MoviesApi from '../../http/MoviesApi'
import { MovieTypeWithImageAndGenres } from '../../types/MovieTypeWithImageAndGenres'
import ImagesApi from '../../http/ImagesApi'
import GenresApi from '../../http/GenresApi'
import { GenreType } from '../../types/GenreType'
import Session from '../../components/Session/Session'
import MovieInfo from '../../components/MovieInfo/MovieInfo'

const MoviePage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const { sessionStore, hallStore } = useContext(Context) as StoresType
  const [movie, setMovie] = useState<MovieTypeWithImageAndGenres>({} as MovieTypeWithImageAndGenres)

  useEffect(() => {
    const fetchData = async () => {
      const movie = await MoviesApi.getById(Number(id))
      const image = await ImagesApi.getById(movie.imageID)
      const genres = await GenresApi.getAll()
      const listOfGenres = genres.filter((genre: GenreType) => movie.genres_ids.includes(genre.id))
      setMovie({ ...movie, image, listOfGenres })
    }
    SessionApi.getAll().then((data) => sessionStore.setSessions(data))
    HallApi.getAll().then((data) => hallStore.setHalls(data))
    fetchData()
  }, [])

  const genres = movie.listOfGenres?.map((genre) => genre.name)
  const halls = hallStore.getHalls()
  const sessions = sessionStore.getSessions()
  const sessionsForMovie = sessions.filter((session) => session.movieId === movie.id)
  const sessionsWithHall = sessionsForMovie.map((session) => ({
    ...session,
    hall: halls.find((hall) => hall.id === session.hallId) || null,
  }))

  return (
    <Layout>
      <div className={styles.pageControl}>
        <Link to={'/'} className={styles.iconBack}>
          {' '}
          <ChevronLeft /> Все фильмы{' '}
        </Link>
      </div>

      <div className={styles.filmBoard}>
        <MovieInfo
          imageUrl={movie.image?.url}
          name={movie.name}
          ageLimit={movie.ageLimit}
          genres={genres}
          description={movie.description}
        />
      </div>

      <div className={styles.sessionBox}>
        {sessionsWithHall.map((sessionWithHall) => (
          <Session key={sessionWithHall.id} sessionWithHall={sessionWithHall} movie={movie} />
        ))}
      </div>
    </Layout>
  )
}

export default MoviePage
