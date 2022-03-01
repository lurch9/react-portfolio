import React, { useState } from 'react';
import './styles/Styles.css'
import Hero from './helpers/Hero'
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from "./Footer";


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      else if (currentPage === 'About') {
        return <About />;
      }

      else if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }

      else if (currentPage === 'Resume') {
        return <Resume />;
      }

      return <Contact />;
    };
  
  
    return (
      <div>
        
        <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
        <Hero />
        {renderPage()}
        <div className='footer'> 
        <Footer />
        </div>
      </div>
      
    );
  }