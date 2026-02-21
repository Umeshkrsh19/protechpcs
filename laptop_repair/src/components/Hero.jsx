import { Play } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { laptopImages } from '../data/images';

export default function Hero() {
  // Find the new hero image we added
  const heroImage = laptopImages.find(img => img.id === "new_hero") || laptopImages[0];

  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center text-repair-dark overflow-hidden bg-repair-light">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage.url} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        {/* Heavy light gray overlay */}
        <div className="absolute inset-0 bg-repair-light/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center h-full">
        <div className="w-full md:w-2/3 mt-20 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-repair-dark">
            <TypeAnimation
              sequence={[
                'Fast Repair Service',
                2000,
                'Computer Repair Service',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <div className="flex gap-2 mb-6 justify-center md:justify-start">
            <div className="w-3 h-3 bg-repair-gray rotate-45"></div>
            <div className="w-3 h-3 bg-repair-gray rotate-45"></div>
            <div className="w-3 h-3 bg-repair-gray rotate-45"></div>
          </div>

          <p className="text-lg md:text-xl text-repair-gray italic mb-10 max-w-lg">
            10 years of impeccable computer repair service in the heart of the city!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-repair-gray hover:bg-repair-dark text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors shadow-lg">
              Request a Quote
            </button>
            <button className="flex items-center gap-2 text-repair-dark hover:text-repair-gray px-6 py-3 font-bold uppercase tracking-wider text-sm transition-colors group border border-repair-silver hover:border-repair-gray bg-repair-light/50 backdrop-blur-sm">
              <div className="bg-repair-dark text-white rounded-full p-1 group-hover:bg-repair-gray transition-colors">
                <Play size={12} fill="currentColor" />
              </div>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 w-full bg-repair-platinum/80 backdrop-blur-sm text-repair-dark py-6 border-t border-repair-silver shadow-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-repair-gray font-bold uppercase tracking-wider text-sm mb-1">Address</span>
            <span className="font-semibold flex items-center gap-2 text-sm">
              123 Tech Street, Silicon Valley
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-repair-gray font-bold uppercase tracking-wider text-sm mb-1">Call Us</span>
            <span className="font-semibold text-xl">+1 (234) 567 89 00</span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-repair-gray font-bold uppercase tracking-wider text-sm mb-1">Hours</span>
            <span className="text-sm">Mon-Sat 10 AM - 8 PM</span>
            <span className="text-sm">Sun 11 AM - 5 PM</span>
          </div>
        </div>
      </div>
    </header>
  );
}
