import Menu from '../../components/menu/Menu'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
        <div className={styles.container}>
            <Menu />
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.formBox}>
                        <h1>404</h1>
                        <div className={styles.subtitle}>Информация не найдена</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage