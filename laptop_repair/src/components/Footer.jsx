import { Monitor, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Monitor className="w-6 h-6 text-yellow-500" />
          <span className="text-lg font-bold tracking-wider uppercase">Laptop Repair</span>
        </div>
        <div className="text-sm text-gray-500">
          &copy; 2024 Laptop Repair Service. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
