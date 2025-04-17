import { JSX, useContext, useEffect, useState } from 'react'
import Layout from '../Layout'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import styles from './AccountPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { UserType } from '../../types/UserType'

const AccountPage = (): JSX.Element => {
  const { userStore } = useContext(Context) as StoresType
  const [user, setUser] = useState<UserType | null>(null)
  const navigate = useNavigate()
  const handleLogout = () => {
    userStore.logout()
    navigate('/')
  }


  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await userStore.getCurrentUser()
      setUser(fetchedUser)
    }
    fetchUser()
  }, [])

  return (
    <Layout>
      <h1>Личный кабинет</h1>
      <p className={styles.email}>Почта: {user?.email}</p>
      <div className={styles.buttons}>
        <button className={styles.logout} onClick={handleLogout}>
          Выход
        </button>
        {
          user?.role === 'admin' && (
            <button className={styles.logout} onClick={() => navigate('/admin')}>
              Админ-панель
            </button>
          )
        }
      </div>
    </Layout>
  )
}

export default AccountPage
