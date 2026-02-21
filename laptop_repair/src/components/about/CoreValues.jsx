import { Target, Eye, HeartHandshake } from 'lucide-react';

export default function CoreValues() {
  return (
    <section className="py-24 bg-repair-platinum">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-repair-dark mb-4">Our Core Values</h2>
          <div className="h-1 w-20 bg-repair-gray mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-repair-gray hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-repair-platinum w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target size={32} className="text-repair-dark" />
            </div>
            <h3 className="text-2xl font-bold text-repair-dark mb-4 text-center">Our Mission</h3>
            <p className="text-repair-dark/80 text-center leading-relaxed">
              To provide high-quality technology repair and IT solutions that are affordable, transparent, and customer-focused — empowering individuals and businesses to stay connected and productive.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-repair-silver hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-repair-platinum w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye size={32} className="text-repair-dark" />
            </div>
            <h3 className="text-2xl font-bold text-repair-dark mb-4 text-center">Our Vision</h3>
            <p className="text-repair-dark/80 text-center leading-relaxed">
              To become the most trusted technology repair and IT service provider by delivering excellence, innovation, and long-term client relationships.
            </p>
          </div>

          {/* Promise */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-repair-gray hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-repair-platinum w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HeartHandshake size={32} className="text-repair-dark" />
            </div>
            <h3 className="text-2xl font-bold text-repair-dark mb-4 text-center">Our Promise</h3>
            <p className="text-repair-dark/80 text-center leading-relaxed">
              We promise fast response times, honest pricing, expert diagnostics, and complete customer satisfaction — every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
