import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './components/AppRouter'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { createContext, JSX, useState } from 'react'
import { MovieStore } from './store/MovieStore'
import { StoresType } from './types/StoresType'
import { ImageStore } from './store/ImageStore'
import { GenreStore } from './store/GenreStore'
import { SessionStore } from './store/SessionStore'
import { HallStore } from './store/HallStore'
import { SeatStore } from './store/SeatStore'

export const Context = createContext<StoresType | null>(null)

function App(): JSX.Element {
  const [currentStore] = useState<StoresType>({
    movieStore: new MovieStore(),
    imageStore: new ImageStore(),
    genreStore: new GenreStore(),
    sessionStore: new SessionStore(),
    hallStore: new HallStore(),
    seatStore: new SeatStore(),
  })

  return (
    <div className="App">
      <Context.Provider value={currentStore}>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
