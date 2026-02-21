import { Play, ArrowRight } from 'lucide-react';
import { laptopImages } from '../data/images';

export default function HeroSection() {
  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden bg-deep-space-black">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={laptopImages[0].url} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space-black via-transparent to-deep-space-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-space-black via-deep-space-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        <div className="w-full md:w-3/4 lg:w-1/2 mt-20 md:mt-0">
          <div className="inline-block px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full text-neon-purple text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Expert Tech Support
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Fast Repair <br/>
            <span className="text-gradient-purple-orange">Service</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            We have all your web, phone and computer repair needs covered. We can help you with Macs, PC equipment setup, data recovery, security and more!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-purple-orange text-white px-8 py-4 font-bold uppercase tracking-wider text-sm rounded hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Started Now <ArrowRight size={16} />
            </button>
            <button className="border border-white/20 hover:border-neon-purple hover:text-neon-purple bg-white/5 backdrop-blur-sm text-white px-8 py-4 font-bold uppercase tracking-wider text-sm rounded transition-all flex items-center justify-center gap-2 group">
              Learn More <div className="bg-white/10 p-1 rounded-full group-hover:bg-neon-purple group-hover:text-white transition-colors"><Play size={10} fill="currentColor" /></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-deep-space-black to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-cyber-orange/10 rounded-full blur-[80px]"></div>
    </header>
  );
}
