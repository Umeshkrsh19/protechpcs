import { Monitor, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/Logo.png';

export default function Footer() {
  return (
    <footer className="bg-repair-dark text-repair-light py-12 border-t border-repair-gray">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Laptop Repair Logo" className="h-10 w-auto brightness-0 invert" />
        </div>
        <div className="text-sm text-repair-silver">
          &copy; 2024 Laptop Repair Service. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-repair-silver hover:text-repair-light transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-repair-silver hover:text-repair-light transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-repair-silver hover:text-repair-light transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
