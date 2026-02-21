import { laptopImages } from '../data/images';

export default function Maintenance() {
  return (
    <section className="flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 h-[500px] md:h-auto relative">
        <img 
          src={laptopImages[4].url} 
          alt="Device Care" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Device Maintenance</h2>
        <div className="flex gap-2 mb-8">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-500 italic mb-10">
          We not only repair computers but also help you maintain them. Regular maintenance keeps your data safe and hardware running smooth.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-2">Virus Removal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We remove malware, spyware, and viruses to protect your personal information and speed up your system.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-2">Data Recovery</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lost important files? We offer professional data recovery services for hard drives, SSDs, and USB drives.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-2">System Optimization</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We clean up unnecessary files, update drivers, and optimize settings to ensure maximum performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
