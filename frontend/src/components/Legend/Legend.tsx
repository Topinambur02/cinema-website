import { JSX } from 'react'
import styles from './Legend.module.scss'

const Legend = (): JSX.Element => {
  return (
    <div className={styles.legend}>
      <div className={styles.legendItem}>
        <span className={`${styles.legendColor} ${styles.free}`}></span>
        <span>Свободно</span>
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.legendColor} ${styles.selected}`}></span>
        <span>Выбрано</span>
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.legendColor} ${styles.sold}`}></span>
        <span>Занято</span>
      </div>
    </div>
  )
}

export default Legend
