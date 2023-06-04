import React from 'react'
import { Header } from '../common/Header/Header';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import  Home   from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../blog/Blog';

const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />

          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;
