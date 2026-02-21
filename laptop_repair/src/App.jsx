import { useState } from 'react';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Simple state-based routing
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation handler to pass to Navbar
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar onNavigate={navigate} />
      
      <main>
        {currentPage === 'home' && <LandingPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer />
    </>
  );
}

export default App;
