import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="bg-white bg-clip-text text-4xl font-mono font-extrabold text-transparent border-4 p-4">
        EP 'DERECHO' OUT NOW
      </p>
      <div className="mt-12 flex flex-col items-center">
        <button
          className="group relative w-20 h-20 rounded-full bg-gray-400/70 flex items-center 
          justify-center overflow-hidden hover:scale-110 transition-transform duration-300"
          onClick={() =>
            window.open(
              "https://open.spotify.com/album/21YdZwzgUhpT3gRFoQOCuG?si=JNC1eheoRBu0ZFWoyMaNIw",
              "_blank"
            )
          }
        >
          {/* Gradient overlay: translates in from left on hover */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 transform
             -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
             transition-all duration-300 ease-in-out filter blur-sm"
          />
          <svg
            className="relative w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;