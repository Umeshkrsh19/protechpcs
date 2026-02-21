import { laptopImages } from '../data/images';

export default function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row-reverse bg-gray-50" id="about">
      <div className="md:w-1/2 h-[700px] relative">
        <img 
          src={laptopImages[2].url} 
          alt="About Us" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
        <div className="flex gap-2 mb-8">
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
          <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
        </div>
        <p className="text-gray-500 italic mb-8">
          Our certified technicians will make your laptops, desktops, and devices run like new again.
        </p>
        <p className="text-gray-800 font-bold text-sm mb-6 leading-relaxed">
          Our experts work hard so that you get the highest quality repair. Thanks to the vast experience of our team, we successfully cope with any tasks and please our customers with devices that work perfectly after repair.
        </p>
        <p className="text-gray-600 text-sm mb-10 leading-relaxed">
          Since 2010, we have been providing expert computer repair services to tens of thousands of citizens. We can repair almost everything, from work laptops to gaming rigs, as well as MacBooks, consoles, and more.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors">
            Send a Request
          </button>
          <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
