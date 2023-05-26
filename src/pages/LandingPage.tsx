import { FC } from 'react';
import Hero from '../component/Hero';
import Navbar from '../component/NavBar';

const LandingPage: FC = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
