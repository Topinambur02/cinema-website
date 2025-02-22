import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './components/AppRouter'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { JSX } from 'react'

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
