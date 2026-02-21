import { Phone } from 'lucide-react';

export default function EmergencyCall() {
  return (
    <section className="bg-[#111] text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
            Need urgent <br/>
            laptop repair?
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4 text-yellow-500">
            <Phone size={32} fill="currentColor" />
            <span className="text-3xl font-bold font-mono">call us +1 (234) 567 89 00</span>
          </div>
        </div>
        <div className="md:w-1/3">
           {/* Placeholder for optional image or just empty space as per design */}
        </div>
      </div>
    </section>
  );
}
