import Layout from '../Layout'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.formBox}>
        <h1>404</h1>
        <div className={styles.subtitle}>Информация не найдена</div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
