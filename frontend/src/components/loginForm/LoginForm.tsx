import { ChangeEvent, FormEvent, JSX, useContext, useState } from 'react'
import styles from './LoginForm.module.scss'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'

const LoginForm = (): JSX.Element => {
  const { userStore } = useContext(Context) as StoresType
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await userStore.login(email, password)
  }

  return (
    <form name="login" method="post" onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
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
          value={password}
          placeholder="Пароль"
          className={styles.password}
          onChange={handlePasswordChange}
        />
      </div>

      <button type="submit" className={styles.button}>
        Войти
      </button>
    </form>
  )
}

export default LoginForm
