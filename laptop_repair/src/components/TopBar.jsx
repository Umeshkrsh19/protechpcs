import { MapPin, Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-midnight-navy text-muted-gray text-xs py-2 border-b border-dark-charcoal">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-1 hover:text-neon-purple transition-colors cursor-pointer">
            <MapPin size={14} className="text-neon-purple" />
            <span>151 Fair View Rd, 100, Gainesville VA, 20155</span>
          </div>
          <div className="flex items-center gap-1 hover:text-neon-purple transition-colors cursor-pointer">
            <Mail size={14} className="text-neon-purple" />
            <span>info@protechpcs.com</span>
          </div>
        </div>
        <div className="flex items-center gap-1 hover:text-neon-purple transition-colors cursor-pointer">
          <Phone size={14} className="text-neon-purple" />
          <span>For Fax: 703.963.4848</span>
        </div>
      </div>
    </div>
  );
}
