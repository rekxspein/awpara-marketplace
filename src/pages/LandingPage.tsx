import { Box } from '@mui/material';
import { FC } from 'react';

const LandingPage: FC = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="text-3xl font-bold underline">Awpara Marketplace !!!</div>
    </Box>
  );
};

export default LandingPage;
