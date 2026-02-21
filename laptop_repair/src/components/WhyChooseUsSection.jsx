import { Phone, Clock } from 'lucide-react';
import { laptopImages } from '../data/images';

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 bg-repair-light overflow-hidden" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-repair-platinum skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-[200px] font-black text-repair-gray/10 leading-none select-none">22</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-repair-dark relative z-10 leading-tight">
              Because we’re not just the best, <span className="text-repair-gray">we truly care.</span>
            </h2>
          </div>
          
          <p className="text-repair-dark text-lg mb-10 leading-relaxed">
            At ProTech PCS, we have been serving the industry standard on service for over a decade. We use trained and experienced technicians offering quality work through our computer system repair, data recovery, network installations, system backup and security services. We value long-lasting customer relationships and ensure satisfaction.
          </p>

          <div className="bg-repair-platinum p-8 rounded-2xl border-l-4 border-repair-gray shadow-xl">
            <h3 className="text-repair-dark font-bold text-xl mb-4 tracking-wider uppercase">Call Us For Your Free Quote Today!</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-repair-silver p-3 rounded-full text-repair-dark">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-xs text-repair-gray uppercase tracking-widest font-bold">Phone</span>
                  <span className="text-repair-dark font-bold text-lg">703.373.7412</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-repair-silver p-3 rounded-full text-repair-dark">
                  <Clock size={24} />
                </div>
                <div>
                  <span className="block text-xs text-repair-gray uppercase tracking-widest font-bold">Working Hours</span>
                  <span className="text-repair-dark font-bold text-lg">Mon – Fri, 9am – 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-repair-silver">
            <img 
              src={laptopImages[1].url} 
              alt="Why Choose Us" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-repair-dark/20 to-transparent"></div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-repair-platinum p-6 rounded-xl border border-repair-silver shadow-xl hidden md:block">
            <div className="text-4xl font-black text-repair-dark mb-1">10+</div>
            <div className="text-repair-gray text-xs font-bold uppercase tracking-widest">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
