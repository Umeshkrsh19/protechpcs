const stats = [
  { number: "171", label: "Current Repairs", color: "text-neon-purple" },
  { number: "3953", label: "Happy Clients", color: "text-vivid-magenta" },
  { number: "13", label: "Years Experience", color: "text-electric-blue" },
  { number: "3593", label: "Devices Repaired", color: "text-cyber-orange" }
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-midnight-navy border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Statistics</h2>
          <div className="h-1 w-20 bg-gradient-purple-orange mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-gray text-lg max-w-3xl mx-auto">
            We are an experienced and award-winning computer repair company in Gainesville, VA. Our team has successfully executed and implemented thousands of computer repair solutions, leading to many satisfied customers over the years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-dark-charcoal/50 rounded-xl border border-white/5 backdrop-blur-sm hover:bg-dark-charcoal transition-colors group">
              <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-gray uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
