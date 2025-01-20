import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import './index.css';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import Contact from './pages/Contact';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Scroll /> 
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
