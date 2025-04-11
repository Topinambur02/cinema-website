import { useContext } from "react"
import Layout from "../Layout"
import { Context } from "../../App"
import { StoresType } from "../../types/StoresType"
import styles from "./AccountPage.module.scss"
import { useNavigate } from "react-router-dom"

const AccountPage = () => {
    const { userStore } = useContext(Context) as StoresType
    const user = userStore.getUser()
    const navigate = useNavigate()
    const handleLogout = () => {
        userStore.logout()
        navigate('/')
    }

    return (
        <Layout>
            <h1>Личный кабинет</h1>
            <p className={styles.email}>Почта: {user?.email}</p>
            <button className={styles.logout} onClick={handleLogout}>Выход</button>
        </Layout>
    )
}

export default AccountPage