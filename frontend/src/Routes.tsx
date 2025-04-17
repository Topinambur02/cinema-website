import {
  ABOUT_ROUTE,
  ACCOUNT_ROUTE,
  ADMIN_ROUTE,
  CINEMAS_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  MOVIE_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTER_ROUTE,
  TICKETS_ROUTE,
} from './constants/routes'
import MainPage from './pages/MainPage/MainPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import CinemaPage from './pages/CinemaPage/CinemaPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MoviePage from './pages/MoviePage/MoviePage'
import TicketsPage from './pages/TicketsPage/TicketsPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AccountPage from './pages/AccountPage/AccountPage'
import AdminPage from './pages/AdminPage/AdminPanel'

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    component: <MainPage />,
  },
  {
    path: CONTACT_ROUTE,
    component: <ContactPage />,
  },
  {
    path: ABOUT_ROUTE,
    component: <AboutPage />,
  },
  {
    path: CINEMAS_ROUTE,
    component: <CinemaPage />,
  },
  {
    path: NOT_FOUND_ROUTE,
    component: <NotFoundPage />,
  },
  {
    path: MOVIE_ROUTE,
    component: <MoviePage />,
  },
  {
    path: TICKETS_ROUTE,
    component: <TicketsPage />,
  },
  {
    path: LOGIN_ROUTE,
    component: <LoginPage />,
  },
  {
    path: REGISTER_ROUTE,
    component: <RegisterPage />,
  },
  {
    path: ACCOUNT_ROUTE,
    component: <AccountPage />,
  },
]

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    component: <AdminPage />,
  },
]
