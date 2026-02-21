import { Search, ClipboardList, Wrench, Truck } from 'lucide-react';

export default function AboutProcess() {
  const steps = [
    {
      title: "Diagnosis",
      description: "We identify the root cause of the issue quickly and accurately.",
      icon: <Search size={32} className="text-repair-light" />,
      step: "1"
    },
    {
      title: "Solution Plan",
      description: "We explain the issue and provide a clear repair plan with transparent pricing.",
      icon: <ClipboardList size={32} className="text-repair-light" />,
      step: "2"
    },
    {
      title: "Repair & Optimization",
      description: "Our experts fix the issue using professional tools and best practices.",
      icon: <Wrench size={32} className="text-repair-light" />,
      step: "3"
    },
    {
      title: "Delivery & Support",
      description: "Your device is returned fully tested, optimized, and ready to perform.",
      icon: <Truck size={32} className="text-repair-light" />,
      step: "4"
    }
  ];

  return (
    <section className="py-24 bg-repair-platinum">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-repair-dark mb-4">Our Simple 4-Step Process</h2>
          <div className="h-1 w-20 bg-repair-gray mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative bg-white p-8 rounded-xl shadow-lg border border-repair-silver group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-repair-dark rounded-full flex items-center justify-center border-4 border-repair-platinum">
                <span className="text-repair-light font-bold">{item.step}</span>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-repair-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-repair-dark transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-repair-dark mb-4">{item.title}</h3>
                <p className="text-repair-dark/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
