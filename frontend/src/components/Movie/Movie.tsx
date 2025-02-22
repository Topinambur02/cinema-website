import { Link } from 'react-router-dom'
import styles from './Movie.module.scss'
import { MovieProps } from '../../types/props/MovieProps'
import { JSX } from 'react'

const Movie = ({ movie }: MovieProps): JSX.Element => {
  return (
    <div className={styles.movieItem}>
      <Link to={'/'} className={styles.preview}>
        <img src={movie.imageUrl} alt={movie.name} />
        <span className={styles.panel}>
          <span className={styles.sticker}>{movie.ageLimit}+</span>
        </span>
      </Link>
      <div className={styles.wrapper}>
        <Link to={'/'} className={styles.title}>
          {movie.name}
        </Link>
        <div className={styles.category}>
          <Link to={'/'}>{movie.genres.join(', ')}</Link>
        </div>
      </div>
    </div>
  )
}

export default Movie
