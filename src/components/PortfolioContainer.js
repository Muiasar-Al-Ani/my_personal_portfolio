import React, { useState } from 'react';
import NavBar from './NavBar'
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import ContactMe from './pages/ContactMe';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');


 

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Work') {
          return <Work />;
        }
        return <ContactMe />;
      };

      const handlePageChange = (page) => {
        setCurrentPage(page)
      };




    return (
        <>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </>
    )
}

export default PortfolioContainer
