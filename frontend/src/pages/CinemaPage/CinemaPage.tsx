import Menu from '../../components/menu/Menu'
import YandexMap from '../../components/yandexMap/YandexMap'
import styles from './CinemaPage.module.scss'

const CinemaPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Menu />
        <div className={styles.content}>
          <h1>Кинотеатры в Москве</h1>
          <YandexMap />
        </div>
      </div>
    </div>
  )
}

export default CinemaPage