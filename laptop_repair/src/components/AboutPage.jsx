import AboutHero from './about/AboutHero';
import WhoWeAre from './about/WhoWeAre';
import CoreValues from './about/CoreValues';
import AboutWhyChooseUs from './about/AboutWhyChooseUs';
import AboutProcess from './about/AboutProcess';
import AboutTeam from './about/AboutTeam';
import Brands from './about/Brands';

export default function AboutPage() {
  return (
    <div className="font-sans text-repair-dark antialiased bg-repair-light selection:bg-repair-gray selection:text-white">
      <AboutHero />
      <WhoWeAre />
      <CoreValues />
      <AboutWhyChooseUs />
      <AboutProcess />
      <AboutTeam />
      <Brands />
    </div>
  );
}
