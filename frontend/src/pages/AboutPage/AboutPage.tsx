import Layout from '../Layout'
import styles from './AboutPage.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <h1>О компании</h1>
      <div className={styles.aboutBlock}>
        <div className={styles.progressList}>
          <div className={styles.item}>
            <div className={styles.value}>100</div>
            <div className={styles.text}>
              современных <br /> кинотеатра
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.value}>100</div>
            <div className={styles.text}>комфортабельных кинозала</div>
          </div>
          <div className={styles.item}>
            <div className={styles.value}>100</div>
            <div className={styles.text}>посадочных мест</div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.block}>
            <div className={styles.title}>
              Современное оборудование <br /> Просторные залы <br /> Собственная кухня <br /> более{' '}
              <span className={styles.rb}>6 видов попкорна</span>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.text}>
              <p className={styles.paragraph}>
                <span className={styles.rb}>В VIP залах</span> вас ждут вместо обычных кресел комфортные диваны для
                одного, двоих и троих гостей и столики, оснащенные кнопками
                <span className={styles.rb}>вызова официанта, который принесет вам любое блюдо из меню</span> прямо в
                зал.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
