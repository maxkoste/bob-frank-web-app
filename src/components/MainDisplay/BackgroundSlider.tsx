// import React, { useEffect, useState } from 'react';

// const images = [
//   '/background/city_street.JPG',
//   '/background/acid fisheye.jpg',
//   '/background/acid fisheye 2.jpg'
// ];

// const transitionDuration = 1000; // in ms
// const displayDuration = 5000; // in ms

// function BackgroundSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, displayDuration);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute inset-0">
//       {images.map((img, index) => (
//         <div
//           key={img}
//           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[${transitionDuration}ms]`}
//           style={{
//             backgroundImage: `url(${img})`,
//             opacity: index === current ? 1 : 0
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// export default BackgroundSlider;