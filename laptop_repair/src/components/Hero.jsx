import { Play } from 'lucide-react';
import { laptopImages } from '../data/images';

export default function Hero() {
  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={laptopImages[0].url} 
          alt="Hero Background" 
          className="w-full h-full object-cover brightness-[0.35]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center h-full">
        <div className="w-full md:w-2/3 mt-20 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Laptop <br/><span className="text-white">Repair</span>
          </h1>
          
          <div className="flex gap-2 mb-6 justify-center md:justify-start">
            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 italic mb-10 max-w-lg">
            10 years of impeccable computer repair service in the heart of the city!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors">
              Request a Quote
            </button>
            <button className="flex items-center gap-2 text-white hover:text-yellow-500 px-6 py-3 font-bold uppercase tracking-wider text-sm transition-colors group">
              <div className="bg-white text-black rounded-full p-1 group-hover:bg-yellow-500 transition-colors">
                <Play size={12} fill="currentColor" />
              </div>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-white py-6 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Address</span>
            <span className="font-semibold flex items-center gap-2 text-sm">
              123 Tech Street, Silicon Valley
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Call Us</span>
            <span className="font-semibold text-xl">+1 (234) 567 89 00</span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Hours</span>
            <span className="text-sm">Mon-Sat 10 AM - 8 PM</span>
            <span className="text-sm">Sun 11 AM - 5 PM</span>
          </div>
        </div>
      </div>
    </header>
  );
}
