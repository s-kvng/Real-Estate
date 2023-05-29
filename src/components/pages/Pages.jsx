import React from 'react'
import { Header } from '../common/Header/Header';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';

const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {}
        </Routes>
      </Router>
    </>
  )
}

export default Pages;
