
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Navbar from './components/Navbar/Navbar'
import Movie from './pages/Movie'
import Genrers from './pages/Genrers'
import Producers from './pages/Producers'
import Profile from './pages/Profile'
import Follow  from './pages/Follow'
import Producer from './pages/Producer'
import Genrer from './pages/Genrer'
import LoginPage from './pages/Login'
import Search from './pages/Search'
import Footer from './components/Footer/footer'
import { useContext } from 'react'
import { AlertsContext } from './Context/alertContext'
import Alert from './components/Alert/Alert'
function App() {

  const {alerts} = useContext(AlertsContext)

  return (
    <>
      
      <BrowserRouter>
        
        <Navbar />
          <main id='body'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movie/:title" element={<Movie />} />
              <Route path="/series" element={<About />} />
              <Route path="/genrers" element={ <Genrers/>} />
              <Route path="/producers" element={ <Producers/>} />
              <Route path="/login" element={ <LoginPage/>} />
              <Route path="/profile" element={ <Profile/>} />
              <Route path="/follow" element={ <Follow/>} />
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
      </BrowserRouter>

    </>
  )
}

export default App
