import { laptopImages } from '../data/images';

export default function AdditionalServices() {
  return (
    <section className="py-20 bg-[#f9f7f2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <div className="flex gap-2 mb-6 justify-center">
            <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
            <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
            <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          </div>
          <p className="text-gray-500 italic max-w-2xl mx-auto">
            Our experts not only repair hardware. We also offer additional services for your digital life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row bg-white group">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img 
                src={laptopImages[5].url} 
                alt="Software Installation" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">Software</span>
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Software Installation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We install and configure operating systems, office suites, and specialized software. We ensure everything runs smoothly and is properly licensed.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse bg-white group">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
              <img 
                src={laptopImages[3].url} 
                alt="Custom Builds" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center text-right md:text-left">
               {/* Note: text-right on mobile to match template style if needed, but md:text-left is better for readability. Kept simple. */}
              <span className="text-xs text-gray-400 uppercase tracking-widest mb-2">Hardware</span>
              <h3 className="text-xl font-bold text-yellow-600 mb-4">Custom PC Builds</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Want a powerful gaming rig or a workstation? We select compatible components and assemble the perfect computer for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
