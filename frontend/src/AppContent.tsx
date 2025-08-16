import { useLocation } from 'react-router-dom'
import { ADMIN_ROUTE } from './constants/routes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AppRouter from './components/AppRouter'
import { JSX } from 'react'

const AppContent = (): JSX.Element => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith(ADMIN_ROUTE)

  return (
    <>
      {!isAdminRoute && <Header />}
      <AppRouter />
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default AppContent
