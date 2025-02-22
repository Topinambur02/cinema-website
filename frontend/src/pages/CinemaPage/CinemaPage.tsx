import YandexMap from '../../components/yandexMap/YandexMap'
import Layout from '../Layout'
import styles from './CinemaPage.module.scss'

const CinemaPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Кинотеатры в Москве</h1>
      <YandexMap />
    </Layout>
  )
}

export default CinemaPage
