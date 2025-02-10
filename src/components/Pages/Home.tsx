import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="bg-white bg-clip-text text-5xl font-extrabold text-transparent border-4 p-4">
        EP DERECHO OUT NOW
      </p>
      <div className="mt-12 flex flex-col items-center">
        <button
          className="w-20 h-20 rounded-full bg-gray-400/70 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          onClick={() =>
            window.open(
              "https://open.spotify.com/album/21YdZwzgUhpT3gRFoQOCuG?si=JNC1eheoRBu0ZFWoyMaNIw",
              "_blank"
            )
          }
        >
          <svg
            className="w-10 h-20 text-white"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <span className="mt-10 text-white font-bold text-lg">Listen to our music!</span>
      </div>
    </div>
  );
};

export default Home;