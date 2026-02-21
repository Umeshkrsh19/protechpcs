import { Monitor, Cpu, Wrench } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h2>
        <div className="flex gap-2 mb-6 justify-center">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-500 italic mb-16 max-w-2xl mx-auto">
          We offer affordable fixed prices for most common repairs. Check out our rates below.
        </p>

        <div className="grid md:grid-cols-3 gap-0 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#f9f7f2] p-12 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-8">Diagnostics</h3>
            <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
               <Monitor size={48} />
            </div>
            <div className="text-4xl font-bold text-yellow-600 mb-8">$30</div>
            <ul className="text-gray-600 text-sm space-y-3 mb-8">
              <li>• Hardware scan •</li>
              <li>• Software check •</li>
              <li>• Optimization plan •</li>
            </ul>
            <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 font-bold uppercase tracking-wider text-xs transition-colors">
              Order Services
            </button>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-yellow-600 text-white p-16 transform md:-translate-y-4 shadow-xl z-10 relative">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-8">Screen Repair</h3>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-600">
               <Wrench size={48} />
            </div>
            <div className="text-4xl font-bold mb-8">$100</div>
            <ul className="text-white/90 text-sm space-y-3 mb-8">
              <li>• Screen replacement •</li>
              <li>• Hinge repair •</li>
              <li>• Bezel alignment •</li>
            </ul>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 font-bold uppercase tracking-wider text-xs transition-colors">
              Order Services
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f9f7f2] p-12 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-200">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-8">System Cleanup</h3>
            <div className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
               <Cpu size={48} />
            </div>
            <div className="text-4xl font-bold text-yellow-600 mb-8">$50</div>
            <ul className="text-gray-600 text-sm space-y-3 mb-8">
              <li>• Virus removal •</li>
              <li>• Registry clean •</li>
              <li>• Driver updates •</li>
            </ul>
            <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 font-bold uppercase tracking-wider text-xs transition-colors">
              Order Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
