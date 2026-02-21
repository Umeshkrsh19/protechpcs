import { Play } from 'lucide-react';
import { laptopImages } from '../data/images';

export default function VideoSection() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Video</h2>
        <div className="flex gap-2 mb-6 justify-center">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-400 italic mb-12 max-w-2xl mx-auto">
          Computer repair requires high skills and accuracy. See how we work in our small workshop based in Silicon Valley.
        </p>

        <div className="relative max-w-4xl mx-auto aspect-video bg-gray-800 group cursor-pointer overflow-hidden rounded-lg shadow-2xl">
          <img 
            src={laptopImages[3].url} 
            alt="Workshop Video Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-transparent border-4 border-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={40} fill="white" className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
