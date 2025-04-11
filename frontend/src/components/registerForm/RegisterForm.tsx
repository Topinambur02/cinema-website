import { useContext, useState } from 'react'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import styles from './RegisterForm.module.scss'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const { userStore } = useContext(Context) as StoresType
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await userStore.register(email, password, 'user')
        navigate('/')
    }

    return (
        <form name='register' method='post' onSubmit={handleSubmit}>
            <div className={styles.formItem}>
                <input
                    id='email'
                    name='email'
                    type='email'
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
                    placeholder='Пароль'
                    className={styles.password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                type='submit'
                className={styles.button}
            >Регистрация</button>

        </form>
    )
}

export default RegisterForm