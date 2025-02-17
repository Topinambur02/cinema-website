import { JSX } from 'react'
import Movie from '../components/Movie/Movie'
import { movies } from '../db/Movies'
import { MovieType } from '../types/MovieType'
import styles from './MainPage.module.scss'
import Menu from '../components/menu/Menu'

const MainPage = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>
          <h1>Фильмы в Москве</h1>
          <div className={styles.catalog}>
            {movies.map((movie: MovieType): JSX.Element => <Movie movie={movie} key={movie.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage