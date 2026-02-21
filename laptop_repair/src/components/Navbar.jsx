import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/Logo.png';

export default function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
      isScrolled ? 'bg-repair-light/90 backdrop-blur-md shadow-md py-4' : 'bg-repair-light/90 py-4'
    }`}>
      <div className="container mx-auto px-8 md:px-12 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          <img src={logo} alt="Laptop Repair Logo" className="h-12 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-repair-dark`}>
          <button onClick={() => handleNavClick('home')} className="hover:text-repair-gray transition-colors">Home</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-repair-gray transition-colors">About us</button>
          <a href="#services" className="hover:text-repair-gray transition-colors">Services</a>
          <a href="#contact" className="hover:text-repair-gray transition-colors">Contact us</a>
          <div className="flex gap-4 ml-4">
            <a href="#" className="bg-repair-gray text-white p-2 rounded-full hover:bg-repair-dark transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-repair-gray text-white p-2 rounded-full hover:bg-repair-dark transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-repair-gray text-white p-2 rounded-full hover:bg-repair-dark transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-repair-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-repair-light shadow-lg p-6 flex flex-col gap-6 items-center md:hidden border-t border-repair-silver">
            <button onClick={() => handleNavClick('home')} className="text-repair-dark font-medium hover:text-repair-gray">Home</button>
            <button onClick={() => handleNavClick('about')} className="text-repair-dark font-medium hover:text-repair-gray">About us</button>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-repair-dark font-medium hover:text-repair-gray">Services</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-repair-dark font-medium hover:text-repair-gray">Contact us</a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="bg-repair-gray text-white p-2 rounded-full hover:bg-repair-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-repair-gray text-white p-2 rounded-full hover:bg-repair-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-repair-gray text-white p-2 rounded-full hover:bg-repair-dark transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
