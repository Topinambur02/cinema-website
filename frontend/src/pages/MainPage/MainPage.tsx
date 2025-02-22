import { JSX } from 'react'
import Movie from '../../components/Movie/Movie'
import { movies } from '../../db/Movies'
import { MovieType } from '../../types/MovieType'
import styles from './MainPage.module.scss'
import Layout from '../Layout'

const MainPage = (): JSX.Element => {
  return (
    <Layout>
      <h1>Фильмы в Москве</h1>
      <div className={styles.catalog}>
        {movies.map(
          (movie: MovieType): JSX.Element => (
            <Movie movie={movie} key={movie.id} />
          )
        )}
      </div>
    </Layout>
  )
}

export default MainPage
