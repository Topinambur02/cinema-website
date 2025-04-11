import { useContext, useState } from 'react'
import styles from './LoginForm.module.scss'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const { userStore } = useContext(Context) as StoresType
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await userStore.login(email, password)
        navigate('/')
    }

    return (
        <form name='login' method='post' onSubmit={handleSubmit}>
            <div className={styles.formItem}>
                <input
                    id='email'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='Почта'
                    className={styles.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.formItem}>
                <input
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Пароль'
                    className={styles.password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                type='submit'
                className={styles.button}
            >Войти</button>
        </form>
    )
}

export default LoginForm