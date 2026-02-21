import { Phone, Package, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: "Give Us a Call",
    description: "As soon as you notice an issue with your device, give us a call to set up an appointment.",
    icon: <Phone size={32} className="text-white" />,
    color: "bg-electric-blue"
  },
  {
    title: "Device Pickup",
    description: "We’ll have a chance to meet you and diagnose your device at our store location.",
    icon: <Package size={32} className="text-white" />,
    color: "bg-neon-purple"
  },
  {
    title: "Quick Fix",
    description: "We’ll start resolving your computer problems with skill and professional work.",
    icon: <Wrench size={32} className="text-white" />,
    color: "bg-vivid-magenta"
  },
  {
    title: "Easy Return",
    description: "After repairs, we’ll have your device ready for pickup — safe and securely.",
    icon: <CheckCircle size={32} className="text-white" />,
    color: "bg-cyber-orange"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-midnight-navy relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Process</h2>
          <p className="text-muted-gray text-lg max-w-2xl mx-auto">
            Need to have your device repaired? Simply follow these easy steps for fast and efficient computer repair!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-electric-blue via-vivid-magenta to-cyber-orange opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mb-8 shadow-lg shadow-black/50 z-10 transform group-hover:scale-110 transition-transform duration-300 border-4 border-midnight-navy`}>
                {step.icon}
              </div>
              
              <div className="bg-dark-charcoal p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all w-full h-full">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-muted-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
