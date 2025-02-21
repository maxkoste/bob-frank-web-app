

const callouts = [
    {
    //   name: 'Schedule',
    //   description: 'SHOWS',
      imageSrc: './background/MERCH IG.png',
      href: '#', //insert link to schedule
    },
    {
    //   name: 'Tshirts & prints',
    //   description: 'MERCH',
      imageSrc: './background/march2.JPG',
      href: '#', //insert link to merch store
    },
    {
    //   name: 'Link to our music',
      // description: 'MUSIC',
      imageSrc: './background/Grand Poster A3.jpg',
      href: 'https://open.spotify.com/artist/1zTqJDwJnt5MA4Rvvn21Ap?si=vBSmmNXCRieEJP2RC2RupA', //insert link to music
    }
    // {
    // //   name: 'Link to our music',
    // //   description: 'MUSIC',
    //   imageSrc: 'src/assets/DERECHO POSTER.png',
    //   href: 'https://open.spotify.com/artist/1zTqJDwJnt5MA4Rvvn21Ap?si=vBSmmNXCRieEJP2RC2RupA', //insert link to music
    // },
    // {
    // //   name: 'Link to our music',
    // //   description: 'MUSIC',
    //   imageSrc: 'src/assets/Grand Poster A3.jpg',
    //   href: 'https://open.spotify.com/artist/1zTqJDwJnt5MA4Rvvn21Ap?si=vBSmmNXCRieEJP2RC2RupA', //insert link to music
    // },
  ]

function Store() {
    return (
        <div className="animate-fadeSlideDownSimple">
            <GiantTextImage />
            <Images />
        </div>
    );
}

function GiantTextImage() {
  return (
    <div className="w-full h-screen bg-[url(/background/drums.jpg)] bg-fixed bg-cover bg-center flex justify-center items-center overflow-hidden">
      <img 
        src="./background/Merchdrop.png" 
        alt="Bob Frank" 
        className="animate-fadeSlideDownSimple object-contain max-w-full max-h-screen"
      />
    </div>
  )
}

function Images(){
  
  return (
    <div className="relative bg-white">
      <div className="bg-gray-100">
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Merch</h2>
  
          <div className="mt-6 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {callouts.map((callout) => (
              <div
                className="group relative">
                <img
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:scale-105 transition-transform duration-300 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900"></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
  }

export default Store;