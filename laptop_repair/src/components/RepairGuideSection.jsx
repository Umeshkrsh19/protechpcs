import { ArrowRight } from 'lucide-react';

export default function RepairGuideSection() {
  return (
    <section className="py-24 bg-midnight-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neon-purple/5 to-cyber-orange/5"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Free Repair Guide</h2>
        <div className="h-1 w-20 bg-gradient-purple-orange mx-auto mb-8 rounded-full"></div>
        <p className="text-muted-gray text-lg mb-10 max-w-3xl mx-auto">
          Have a small computer problem and want to give it a try? Check out our free repair guide for tips and tricks to make small repairs on your own, saving you both time and money!
        </p>

        <button className="bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white px-10 py-4 font-bold uppercase tracking-wider text-sm rounded transition-all flex items-center justify-center gap-2 mx-auto group">
          Load All Guides 
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
