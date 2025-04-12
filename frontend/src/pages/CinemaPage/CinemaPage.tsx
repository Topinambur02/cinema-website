import { JSX } from 'react'
import YandexMap from '../../components/YandexMap/YandexMap'
import Layout from '../Layout'
import styles from './CinemaPage.module.scss'

const CinemaPage = (): JSX.Element => {
  return (
    <Layout>
      <h1 className={styles.title}>Кинотеатры в Москве</h1>
      <YandexMap />
    </Layout>
  )
}

export default CinemaPage
