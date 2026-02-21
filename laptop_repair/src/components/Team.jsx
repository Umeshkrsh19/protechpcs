export default function Team() {
  return (
    <section className="py-20 bg-[#f9f7f2]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
        <div className="flex gap-2 mb-6 justify-center">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-500 italic mb-16 max-w-2xl mx-auto">
          Our certified technicians and engineers offer everything from screen replacements to custom builds.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md group">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                alt="John Shimmer" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">John Shimmer</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Lead Technician</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md group">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
                alt="Thomas Siston" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Thomas Siston</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Hardware Engineer</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md group">
            <div className="h-80 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" 
                alt="Tom Ferton" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Tom Ferton</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Diagnostic Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
