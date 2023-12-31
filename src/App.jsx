
import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Serie from './pages/Serie'
import Season from './pages/Season'
import Navbar from './components/Navbar/Navbar'
import Movie from './pages/Movie'
import Genrers from './pages/Genrers'
import Producers from './pages/Producers'
import Profile from './pages/Profile'
import Favorites  from '././pages/Favorites'
import Producer from './pages/Producer'
import Genrer from './pages/Genrer'
import LoginPage from './pages/Login'
import Anime from './pages/Anime'
import Search from './pages/Search'
import Studio from './pages/Studio'
import Footer from './components/Footer/footer'
import TopMovies from './pages/TopMovies'
import TopSeries from './pages/TopSeries'
import { useContext } from 'react'
import { AlertsContext } from './Context/alertContext'
import Alert from './components/Alert/Alert'
import Episode from './pages/Episode'
function App() {

  const {alerts} = useContext(AlertsContext)

  return (
    <>
      
      <HashRouter>
        
        <Navbar />
          <main id='body'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:title" element={<Movie />} />
              <Route path="/top-movies" element={<TopMovies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/serie/:title" element={<Serie />} />
              <Route path="/serie/:title/season/:season" element={<Season />} />
              <Route path="/serie/:title/season/:season/episode/:episode" element={<Episode />} />
              <Route path="/top-series" element={<TopSeries />} />
              <Route path="/genrers" element={ <Genrers/>} />
              <Route path="/studio/:id" element={ <Studio/>} />
              <Route path="/producers" element={ <Producers/>} />
              <Route path="/login" element={ <LoginPage/>} />
              <Route path="/animes" element={ <Anime/>} />
              <Route path="/profile" element={ <Profile/>} />
              <Route path="/favorites" element={ <Favorites/>} />
              <Route path="/search/:title" element={<Search />} />
              <Route path="/producers/:id" element={<Producer />} />
              <Route path="/genrers/:id" element={<Genrer />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            
            { alerts.length > 0 && <div className='alerts-container'>
              {
                alerts.map(alert => (
                  <Alert key={alert.id} type={alert.type} text={alert.text} id={alert.id} />
                ))
              }
                  </div>
            }
            
        </main>
        <Footer/>
      </HashRouter>

    </>
  )
}

export default App
