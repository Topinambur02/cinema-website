import styles from './Screen.module.scss'

const Screen = () => {
  return (
    <div className={styles.screenContainer}>
      <span className={styles.screenText}>Экран</span>
      <img src="/img/screen.png" alt="screen" className={styles.screen} />
    </div>
  )
}

export default Screen
