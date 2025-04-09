import {
  ABOUT_ROUTE,
  CINEMAS_ROUTE,
  CONTACT_ROUTE,
  MAIN_ROUTE,
  MOVIE_ROUTE,
  NOT_FOUND_ROUTE,
  TICKETS_ROUTE,
} from './constants/constants'
import MainPage from './pages/MainPage/MainPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import CinemaPage from './pages/CinemaPage/CinemaPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MoviePage from './pages/MoviePage/MoviePage'
import TicketsPage from './pages/TicketsPage/TicketsPage'

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
]
