import { JSX } from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Layout from '../Layout'

const RegisterPage = (): JSX.Element => {
  return (
    <Layout>
      <h1>Регистрация</h1>
      <RegisterForm />
    </Layout>
  )
}

export default RegisterPage
