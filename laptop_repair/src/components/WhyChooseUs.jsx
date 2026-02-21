import { laptopImages } from '../data/images';

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-1/2 h-[500px] md:h-auto relative">
        <img 
          src={laptopImages[1].url} 
          alt="Why Choose Us" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-12 md:p-20 bg-white flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-300 mb-6">Why Choose Us?</h2>
        <div className="flex gap-2 mb-8">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-500 italic mb-10">
          Need urgent laptop repair? We are ready to fulfill any order quickly, reliably, and efficiently!
        </p>

        <div className="space-y-8">
          <div className="flex gap-6">
            <span className="text-4xl font-bold text-yellow-600 opacity-50">01</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Vast Experience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have been repairing computers for more than 10 years, so we are ready to tackle even the most difficult cases.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <span className="text-4xl font-bold text-yellow-600 opacity-50">02</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">All-in-One Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We have everything needed for repairing any kind of device, from screens and batteries to motherboards and software.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <span className="text-4xl font-bold text-yellow-600 opacity-50">03</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">High-Quality Parts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We order original or high-quality OEM parts. We use professional tools to ensure your device looks perfect again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
