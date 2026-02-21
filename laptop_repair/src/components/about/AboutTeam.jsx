import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function AboutTeam() {
  const team = [
    {
      name: "John Shimmer",
      role: "Lead Technician",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Thomas Siston",
      role: "Hardware Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
    },
    {
      name: "Tom Ferton",
      role: "Diagnostic Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-repair-dark mb-4">Meet Our Experts</h2>
          <div className="h-1 w-20 bg-repair-gray mx-auto mb-6 rounded-full"></div>
          <p className="text-repair-dark/70 text-lg max-w-2xl mx-auto">
            Our skilled and certified professionals bring years of hands-on experience in computer repair, cybersecurity, networking, and IT consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-repair-platinum/20 rounded-xl overflow-hidden shadow-lg border border-repair-silver group hover:shadow-2xl transition-all duration-300">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-repair-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-repair-light p-2 rounded-full text-repair-dark hover:bg-repair-gray hover:text-white transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="bg-repair-light p-2 rounded-full text-repair-dark hover:bg-repair-gray hover:text-white transition-colors"><Twitter size={20} /></a>
                  <a href="#" className="bg-repair-light p-2 rounded-full text-repair-dark hover:bg-repair-gray hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-bold text-repair-dark mb-1">{member.name}</h3>
                <p className="text-sm text-repair-gray uppercase tracking-widest font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
