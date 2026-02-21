import Navbar from './Navbar';
import Hero from './Hero';
import EmergencyCall from './EmergencyCall';
import WhyChooseUs from './WhyChooseUs';
import AboutUs from './AboutUs';
import Services from './Services';
import AdditionalServices from './AdditionalServices';
import Pricing from './Pricing';
import VideoSection from './VideoSection';
import Team from './Team';
import Maintenance from './Maintenance';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      <Navbar />
      <Hero />
     
      <WhyChooseUs />
      <AboutUs /> 
      <EmergencyCall />
      <Services />
      <AdditionalServices />
       <EmergencyCall />
      <Pricing />
      
      <VideoSection />
      <Team />
      <Maintenance />
      <Footer />
    </div>
  );
}
