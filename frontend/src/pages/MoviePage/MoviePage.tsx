import { Link, useParams } from 'react-router-dom'
import Layout from '../Layout'
import styles from './MoviePage.module.scss'
import { Armchair, ChevronLeft } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import SessionApi from '../../http/SessionApi'
import HallApi from '../../http/HallApi'
import MoviesApi from '../../http/MoviesApi'
import { MovieTypeWithImageAndGenres } from '../../types/MovieTypeWithImageAndGenres'
import ImagesApi from '../../http/ImagesApi'
import GenresApi from '../../http/GenresApi'
import { GenreType } from '../../types/GenreType'

function formatTime(isoDate: string): string {
  const date = new Date(isoDate)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

const MoviePage = () => {
  const { id } = useParams<{ id: string }>()
  const { sessionStore, hallStore } = useContext(Context) as StoresType
  const [movie, setMovie] = useState<MovieTypeWithImageAndGenres>({} as MovieTypeWithImageAndGenres)

  useEffect(() => {
    const fetchData = async () => {
      const movie = await MoviesApi.getById(Number(id))
      const image = await ImagesApi.getById(movie.imageID)
      const genres = await GenresApi.getAll()
      const listOfGenres = genres.filter((genre: GenreType) => movie.genres_ids.includes(genre.id))
      setMovie({ ...movie, image: image, listOfGenres: listOfGenres })
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
        <div className={styles.image}>
          <img src={movie.image?.url} alt={movie.name} />
          <div className={styles.gradient}></div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>{movie.name}</h1>
          <p> {genres && genres.length > 1 ? genres.join(', ') : genres}</p>
          <div className={styles.stickerWhite}>{movie.ageLimit}</div>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionTitle}>Описание</p>
          <p className={styles.descriptionText}>{movie.description}</p>
        </div>
      </div>
      <div className={styles.sessionBox}>
        {sessionsWithHall.map((session) => (
          <Link to={'/sessions/' + session.id + '/tickets'} key={session.id} className={styles.sessionItem}>
            <div className={styles.head}>
              <div className={styles.infoLine}>
                <div className={styles.period}>
                  {formatTime(session.startTime)} - {formatTime(session.endTime)}
                </div>
                <div className={styles.format}>2D</div>
              </div>
              <div className={styles.age}>{movie.ageLimit}</div>
            </div>
            <div className={styles.title}>{movie.name}</div>
            <div className={styles.hallWrapper}>
              <div className={styles.name}>{session.hall?.name}</div>
              <div className={styles.place}>
                {' '}
                <Armchair /> 550₽
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default MoviePage
