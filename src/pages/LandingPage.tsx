import { Box } from '@mui/material';
import { FC } from 'react';
import Hero from '../component/Hero';

const LandingPage: FC = () => {
  return (
    <Box className="relative z-0 bg-primary">
      <Box className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </Box>
    </Box>
  );
};

export default LandingPage;
