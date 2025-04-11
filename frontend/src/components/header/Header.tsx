import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { CircleUser, MapPin } from 'lucide-react'
import { JSX, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'

const Header = (): JSX.Element => {
  const { userStore } = useContext(Context) as StoresType
  const isAuth = userStore.isAuth  

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link to={'/'}>
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className={styles.city}>
            <Link to={'#'} className={styles.cityLink}>
              <MapPin className={styles.icon} />
              <p>Москва</p>
            </Link>
          </div>

          {
            isAuth
              ?
              <div className={styles.user}>
                <Link to={'/account'}>
                  <div>Личный кабинет</div>
                </Link>

                <Link to={'/account'} className={styles.userIcon}>
                  <CircleUser className={styles.circleUser} />
                </Link>
              </div>
              :
              <div className={styles.auth}>
                <div className={styles.user}>
                  <Link to={'/login'}>Вход</Link>
                </div>

                <div className={styles.user}>
                  <Link to={'/register'}>Регистрация</Link>
                </div>

              </div>
          }

        </div>
      </div>
    </header>
  )
}

export default observer(Header)
