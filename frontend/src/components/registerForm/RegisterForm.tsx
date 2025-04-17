import { ChangeEvent, FormEvent, JSX, useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import styles from './RegisterForm.module.scss'

const RegisterForm = (): JSX.Element => {
  const { userStore } = useContext(Context) as StoresType
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isRegistered, setIsRegistered] = useState(false)
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault()
      await userStore.register(email, password, 'user')
      setIsRegistered(true)
      setEmail('')
      setPassword('')
    }
    catch (error) {
      console.error('Registration failed:', error)
    }
  }

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => setIsRegistered(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isRegistered])

  return (
    <form
      name="register"
      method="post"
      onSubmit={handleSubmit}
    >
      {isRegistered && <div className={styles.successMessage}>Регистрация прошла успешно! Можете войти в систему.</div>}

      <div className={styles.formItem}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Почта"
          className={styles.email}
          onChange={handleEmailChange}
        />
      </div>

      <div className={styles.formItem}>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Пароль"
          className={styles.password}
          onChange={handlePasswordChange}
        />
      </div>

      <button type="submit" className={styles.button}>
        Регистрация
      </button>
    </form>
  )
}

export default RegisterForm
