import { laptopImages } from '../../data/images';

export default function WhoWeAre() {
  const whoWeAreImage = laptopImages[4] || laptopImages[0];
  const whyUsImage = laptopImages[2] || laptopImages[1];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Who We Are */}
          <div className="flex flex-col gap-10 group">
            <div>
              <span className="text-repair-gray font-bold tracking-[0.2em] text-sm uppercase mb-3 block relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-0.5 before:bg-repair-gray">
                Who We Are
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-repair-dark mb-8 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-repair-dark/70 leading-relaxed text-lg">
                <p>
                  Established in 2014, <span className="font-bold text-repair-dark">ProTech PCS</span> has been dedicated to creating reliable technology experiences. Our journey started with a simple idea: to make computer repair transparent and stress-free.
                </p>
                <p>
                  Today, we continue to turn that vision into reality by helping thousands of individuals and businesses restore, protect, and optimize their devices with precision and care.
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={whoWeAreImage.url} 
                alt="Who We Are" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-repair-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
          
          {/* Right Column - Why Us (Staggered) */}
          <div className="flex flex-col gap-10 md:mt-32 group">
            <div>
              <span className="text-repair-gray font-bold tracking-[0.2em] text-sm uppercase mb-3 block relative pl-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-0.5 before:bg-repair-gray">
                Why Us
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-repair-dark mb-8 leading-tight">
                Why Us
              </h2>
              <div className="space-y-6 text-repair-dark/70 leading-relaxed text-lg">
                <p>
                  What makes us unique is our unwavering commitment to excellence. We're not just a repair shop; we're your trusted technology partner.
                </p>
                <p>
                  Discover the reasons why clients choose us for their critical repairs. We prioritize security, speed, and long-term reliability in every repair we undertake, ensuring you can get back to what matters most.
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={whyUsImage.url} 
                alt="Why Us" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-repair-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
