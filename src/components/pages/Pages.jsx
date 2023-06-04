import React from 'react'
import { Header } from '../common/Header/Header';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import  Home   from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../blog/Blog';
import Pricing from '../price/Pricing';
import Contact from '../contact/Contact';

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
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;
