import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { createContext, JSX, useEffect, useState } from 'react'
import { MovieStore } from './store/MovieStore'
import { StoresType } from './types/StoresType'
import { ImageStore } from './store/ImageStore'
import { GenreStore } from './store/GenreStore'
import { SessionStore } from './store/SessionStore'
import { HallStore } from './store/HallStore'
import { SeatStore } from './store/SeatStore'
import { UserStore } from './store/UserStore'
import AppContent from './AppContent'

export const Context = createContext<StoresType | null>(null)

function App(): JSX.Element {
  const [currentStore] = useState<StoresType>({
    movieStore: new MovieStore(),
    imageStore: new ImageStore(),
    genreStore: new GenreStore(),
    sessionStore: new SessionStore(),
    hallStore: new HallStore(),
    seatStore: new SeatStore(),
    userStore: new UserStore(),
  })

  useEffect(() => {
    currentStore.userStore.checkAuth()
  }, [])

  return (
    <div className="App">
      <Context.Provider value={currentStore}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
