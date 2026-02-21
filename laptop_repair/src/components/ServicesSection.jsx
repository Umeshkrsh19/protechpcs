import { Monitor, ShieldAlert, Cpu, Rocket } from 'lucide-react';

const services = [
  {
    title: "Onsite Computer Repair",
    description: "If your computer has been giving you trouble, or has been infected with viruses, we’ll come to your location so you no longer have to worry as much as possible.",
    icon: <Monitor size={48} className="text-repair-dark" />
  },
  {
    title: "Virus & Suspicious Software Removal",
    description: "When a disabled virus or spyware attacks your computer network, you can depend on us to restore your computer back to top-notch working condition.",
    icon: <ShieldAlert size={48} className="text-repair-dark" />
  },
  {
    title: "Custom PCs, Laptops, Servers",
    description: "We offer a wide array of custom products and services, all built to your specification and productivity needs.",
    icon: <Cpu size={48} className="text-repair-dark" />
  },
  {
    title: "Hardware & Software Upgrades",
    description: "Optimize your computer performance with upgrades and improvements in speed, performance, and custom styling.",
    icon: <Rocket size={48} className="text-repair-dark" />
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-repair-platinum" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-repair-dark">Our Repair Services</h2>
          <div className="h-1 w-20 bg-repair-gray mx-auto mb-8 rounded-full"></div>
          <p className="text-repair-dark text-lg">
            High-quality service you deserve at affordable prices you won’t believe! We offer a wide range of services including onsite & remote computer/laptop repair, data recovery, system troubleshooting, security, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-repair-light p-8 rounded-xl border border-repair-silver hover:border-repair-gray transition-all hover:shadow-lg group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-repair-silver/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-repair-gray/10 transition-colors"></div>
              
              <div className="mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-repair-dark mb-4 group-hover:text-repair-gray transition-colors uppercase tracking-wider">
                {service.title}
              </h3>
              
              <p className="text-repair-dark text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
