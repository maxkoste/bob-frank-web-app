import React from 'react';

type SocialProps = {
  iconClasses?: string;
};

function Social({ iconClasses = '' }: SocialProps) {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.instagram.com/yourInstagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="src/assets/instagram.webp"
          alt="Instagram"
          className={`w-6 h-6 object-contain hover:opacity-80 transition-opacity ${iconClasses}`}
        />
      </a>
      <a
        href="https://www.spotify.com/yourSpotifyLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="src/assets/spotify.png"
          alt="Spotify"
          className={`w-6 h-6 object-contain hover:opacity-80 transition-opacity ${iconClasses}`}
        />
      </a>
    </div>
  );
}

export default Social;