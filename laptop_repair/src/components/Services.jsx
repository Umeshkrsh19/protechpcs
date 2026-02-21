import { Monitor, Cpu, Wrench } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20 bg-[#f9f7f2]" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
        <div className="flex gap-2 mb-6 justify-center">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-500 italic mb-16 max-w-2xl mx-auto">
          If it's broken, we can fix it. Your device will run like new again, we promise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-yellow-600 mb-6 flex justify-center">
              <Monitor size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Screen Repair</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              We replace cracked or broken screens with high-quality displays. Your view will be crystal clear again.
            </p>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-yellow-600 transition-colors">Learn More</a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-yellow-600 mb-6 flex justify-center">
              <Cpu size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Hardware Upgrades</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Is your computer slow? We can install faster RAM, SSDs, and better processors to boost performance.
            </p>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-yellow-600 transition-colors">Learn More</a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-yellow-600 mb-6 flex justify-center">
              <Wrench size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Diagnostics</h3>
            <p className="text-gray-600 text-sm mb-8 leading-relaxed">
              Not sure what's wrong? We perform thorough diagnostics to identify and fix software and hardware issues.
            </p>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-yellow-600 transition-colors">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
