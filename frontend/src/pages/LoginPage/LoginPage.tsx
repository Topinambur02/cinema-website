import { JSX } from 'react'
import LoginForm from '../../components/loginForm/LoginForm'
import Layout from '../Layout'

const LoginPage = (): JSX.Element => {
  return (
    <Layout>
      <h1>Авторизация</h1>
      <LoginForm />
    </Layout>
  )
}

export default LoginPage
