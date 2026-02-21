import { Play, Wrench, Shield, Cpu } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { laptopImages } from '../../data/images';

export default function AboutHero() {
  // Using multiple images for the collage
  const heroImage1 = laptopImages[2] || laptopImages[0];
  const heroImage2 = laptopImages[1] || laptopImages[0];
  const heroImage3 = laptopImages[0];

  return (
    <header className="relative min-h-[700px] flex items-center justify-center text-repair-dark overflow-hidden bg-repair-light py-20 pt-80">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-repair-platinum rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-repair-silver/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-repair-gray/10 rounded-full blur-[60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 h-full">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-repair-gray/30 bg-white/50 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-repair-gray shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Established 2014
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-repair-dark">
            <TypeAnimation
              sequence={[
                'About Us',
                2000,
                'Dedicated.',
                1000,
                'Secure.',
                1000,
                'Reliable.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <div className="flex gap-2 mb-8 justify-center lg:justify-start">
            <div className="w-24 h-1.5 bg-gradient-to-r from-repair-gray to-repair-silver rounded-full"></div>
          </div>

          <p className="text-lg text-repair-dark/70 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            We provide professional computer repair, laptop servicing, data recovery, custom PC builds, and IT support solutions. Your technology is safe in our hands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-repair-dark hover:bg-repair-gray text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all transform hover:-translate-y-1 shadow-xl rounded-xl flex items-center justify-center gap-2">
              <Wrench size={18} />
              Contact Us
            </button>
            <button className="flex items-center justify-center gap-2 text-repair-dark hover:text-repair-gray px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all bg-white border border-repair-silver hover:border-repair-gray hover:shadow-lg rounded-xl group">
              <div className="bg-repair-platinum p-1.5 rounded-full group-hover:bg-repair-silver transition-colors">
                <Play size={12} fill="currentColor" />
              </div>
              Our Story
            </button>
          </div>
          
          {/* Quick stats row */}
          <div className="grid grid-cols-3 gap-4 mt-12 border-t border-repair-silver/50 pt-8">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-black text-repair-dark">10k+</p>
              <p className="text-xs text-repair-gray uppercase tracking-wider font-bold">Repairs</p>
            </div>
            <div className="text-center lg:text-left border-l border-repair-silver/50 pl-4">
              <p className="text-2xl font-black text-repair-dark">15+</p>
              <p className="text-xs text-repair-gray uppercase tracking-wider font-bold">Experts</p>
            </div>
            <div className="text-center lg:text-left border-l border-repair-silver/50 pl-4">
              <p className="text-2xl font-black text-repair-dark">4.9</p>
              <p className="text-xs text-repair-gray uppercase tracking-wider font-bold">Rating</p>
            </div>
          </div>
        </div>

        {/* Image Collage - "Cool" Multi-Image Layout */}
        <div className="w-full lg:w-1/2 relative h-[500px] hidden md:block">
          {/* Main large image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[420px] z-20 transition-transform duration-500 hover:scale-105">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white relative group">
              <img src={heroImage1.url} alt="Technician working" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-repair-dark/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-repair-silver mb-1">Expert Team</p>
                <p className="text-xl font-bold">Professional Repair</p>
              </div>
            </div>
          </div>

          {/* Top right floating image */}
          <div className="absolute top-0 right-10 w-[200px] h-[150px] z-10 animate-float-slow">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border-4 border-white rotate-6 hover:rotate-0 transition-all duration-300 group">
              <img src={heroImage2.url} alt="Hardware components" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-repair-dark/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-2 right-2 bg-white p-1.5 rounded-lg shadow-sm">
                <Cpu size={16} className="text-repair-dark" />
              </div>
            </div>
          </div>

          {/* Bottom left floating image */}
          <div className="absolute bottom-10 left-0 w-[180px] h-[180px] z-30 animate-float-delayed">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border-4 border-white -rotate-6 hover:rotate-0 transition-all duration-300 group">
              <img src={heroImage3.url} alt="Laptop repair" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-repair-dark/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute top-2 left-2 bg-white p-1.5 rounded-lg shadow-sm">
                <Shield size={16} className="text-repair-dark" />
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-repair-gray/20 rounded-full z-0 animate-spin-slow-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-repair-gray/10 rounded-full z-0 animate-spin-slow"></div>
          
          {/* Floating badge */}
          <div className="absolute top-[20%] left-[10%] bg-white p-4 rounded-xl shadow-xl z-40 animate-bounce-slow border border-repair-platinum/50">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-[10px] text-repair-gray font-bold uppercase tracking-wider">Warranty</p>
                <p className="text-sm font-black text-repair-dark">30 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
