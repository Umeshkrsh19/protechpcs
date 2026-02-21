import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, Monitor } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute w-full z-20 top-0 left-0 bg-transparent text-white py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Monitor className="w-8 h-8 text-yellow-500" />
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wider uppercase leading-none">Laptop</span>
          <span className="text-xs tracking-[0.2em] uppercase text-yellow-500">Repair</span>
        </div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#about" className="hover:text-yellow-500 transition-colors">About us</a>
        <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
        <a href="#testimonials" className="hover:text-yellow-500 transition-colors">Testimonials</a>
        <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact us</a>
        <div className="flex gap-4 ml-4">
          <a href="#" className="bg-yellow-500 text-black p-1.5 rounded-full hover:bg-yellow-400 transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="bg-yellow-500 text-black p-1.5 rounded-full hover:bg-yellow-400 transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="bg-yellow-500 text-black p-1.5 rounded-full hover:bg-yellow-400 transition-colors">
            <Youtube size={16} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 p-6 flex flex-col gap-6 items-center md:hidden border-t border-gray-700">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact us</a>
        </div>
      )}
    </nav>
  );
}
