import { styles } from '../styles';
import LandingCanvas from './canvas/LandingCanvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            The Leading 3D Marketplace of{' '}
            <span className="text-[#915EFF]">Manipur!!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Buy and Sell 3D Visuals, Objects
            <br className="sm:block hidden" />
            Download and use it anywhere on Native and Web applications
          </p>
        </div>
      </div>
      <LandingCanvas />
    </section>
  );
};

export default Hero;
