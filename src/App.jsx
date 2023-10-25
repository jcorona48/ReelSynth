
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import Navbar from './components/Navbar/Navbar'
import Movie from './pages/Movie'
import LoginPage from './pages/Login'
import Footer from './components/Footer/footer'


function App() {
  return (
    <>
      
      <BrowserRouter>
        
        <Navbar />
         <main id='body'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:title" element={<Movie />} />
              <Route path="/series" element={<About />} />
              <Route path="/login" element={ <LoginPage/>} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </main>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
