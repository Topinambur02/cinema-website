import { JSX } from 'react'
import { MovieInfoProps } from '../../types/props/MovieInfoProps'
import styles from './MovieInfo.module.scss'

const MovieInfo = ({ 
  imageUrl, 
  name, 
  ageLimit, 
  genres, 
  description 
}: MovieInfoProps): JSX.Element => {
  return (
    <div>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <p> {genres && genres.length > 1 ? genres.join(', ') : genres}</p>
        <div className={styles.stickerWhite}>{ageLimit}</div>
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionTitle}>Описание</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
    </div>
  )
}

export default MovieInfo
