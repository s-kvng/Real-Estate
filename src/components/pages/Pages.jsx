import React from 'react'
import { Header } from '../common/Header/Header';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import  Home   from '../home/Home';
import Footer from '../common/footer/Footer';

const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Pages;
