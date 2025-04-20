import { JSX, useContext, useEffect, useState } from 'react'
import { ConfigProvider, Layout, theme } from 'antd'
import { Context } from '../../App'
import { StoresType } from '../../types/StoresType'
import MoviesApi from '../../http/MoviesApi'
import { observer } from 'mobx-react-lite'
import ImagesApi from '../../http/ImagesApi'
import GenresApi from '../../http/GenresApi'
import AdminMenu from './AdminMenu'
import HallApi from '../../http/HallApi'
import SessionApi from '../../http/SessionApi'
import SeatApi from '../../http/SeatApi'
import AdminRouter from './AdminRouter'
import BookingApi from '../../http/BookingApi'

const AdminPage = (): JSX.Element => {
  const { movieStore, imageStore, genreStore, hallStore, sessionStore, seatStore, bookingStore } = useContext(Context) as StoresType
  const [selectedKey, setSelectedKey] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedKey') ?? '1'
    }

    return '1'
  })

  useEffect(() => {
    const fetchData = async () => {
      const [images, genres, movies, halls, sessions, seats, bookings] = await Promise.all([
        ImagesApi.getAll(),
        GenresApi.getAll(),
        MoviesApi.getAll(),
        HallApi.getAll(),
        SessionApi.getAll(),
        SeatApi.getAll(),
        BookingApi.getAll()
      ])
      imageStore.setImages(images)
      genreStore.setGenres(genres)
      movieStore.setMovies(movies)
      hallStore.setHalls(halls)
      sessionStore.setSessions(sessions)
      seatStore.setSeats(seats)
      bookingStore.setBookings(bookings)
    }
    fetchData()
  }, [selectedKey])

  const movies = movieStore.getMovies()
  const images = imageStore.getImages()
  const genres = genreStore.getGenres()
  const halls = hallStore.getHalls()
  const sessions = sessionStore.getSessions()
  const seats = seatStore.getSeats()

  const handleMenuSelect = async ({ key }: { key: string }) => {
    setSelectedKey(key)

    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedKey', key)
    }
  }

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Layout>
        <AdminMenu selectedKey={selectedKey} handleMenuSelect={handleMenuSelect} />

        <AdminRouter
          selectedKey={selectedKey}
          images={images}
          genres={genres}
          movies={movies}
          halls={halls}
          sessions={sessions}
          seats={seats}
        />
      </Layout>
    </ConfigProvider>
  )
}

export default observer(AdminPage)
