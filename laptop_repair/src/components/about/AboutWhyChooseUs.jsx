import { CheckCircle2 } from 'lucide-react';
import { laptopImages } from '../../data/images';

export default function AboutWhyChooseUs() {
  const reasons = [
    "Certified & Experienced Technicians",
    "Fast Turnaround Time",
    "Transparent Pricing",
    "Onsite & Remote Support",
    "Secure Data Handling",
    "100% Customer Satisfaction Focus"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-repair-silver">
             <img 
              src={laptopImages[1].url} 
              alt="Why Choose Us" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-repair-dark/40 to-transparent"></div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-repair-dark mb-8">Why Clients Trust Us</h2>
          <p className="text-lg text-repair-dark/80 mb-10 leading-relaxed">
            We understand how important your technology is to your daily life and business. That's why we've built our reputation on reliability, speed, and expertise.
          </p>
          
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-repair-platinum/20 rounded-lg border border-repair-platinum hover:bg-repair-platinum/50 transition-colors">
                <CheckCircle2 className="text-repair-gray flex-shrink-0" size={24} />
                <span className="font-semibold text-repair-dark">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
