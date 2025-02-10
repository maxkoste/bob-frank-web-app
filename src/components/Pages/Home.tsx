import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="bg-white bg-clip-text text-5xl font-extrabold text-transparent border-4 p-4">
        EP DERECHO OUT NOW
      </p>
      <button
        className="mt-12 bg-gradient-to-r from-green-500 to-orange-500 text-white font-bold py-4 px-4 hover:scale-120 rounded-full"
        onClick={() =>
          window.open(
            "https://open.spotify.com/album/21YdZwzgUhpT3gRFoQOCuG?si=JNC1eheoRBu0ZFWoyMaNIw",
            "_blank"
          )
        }
      >
        Listen to our music
      </button>
    </div>
  );
};

export default Home;