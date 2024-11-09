import React from 'react';
import { Button, Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open("https://open.spotify.com/album/21YdZwzgUhpT3gRFoQOCuG?si=JNC1eheoRBu0ZFWoyMaNIw", "_blank")}
        >
          New EP Out Now!
        </Button>
      </Box>
    </div>
  );
};

export default Home;
