import React from 'react'

const callouts = [
  {
    name: 'Schedule',
    description: 'SHOWS',
    imageSrc: 'src/assets/live.JPG',
    href: '#', //insert link to schedule
  },
  {
    name: 'Tshirts & prints',
    description: 'MERCH',
    imageSrc: 'src/assets/march2.JPG',
    href: '#', //insert link to merch store
  },
  {
    name: 'Link to our music',
    description: 'MUSIC',
    imageSrc: 'src/assets/hjalmar.JPG',
    href: 'https://open.spotify.com/artist/1zTqJDwJnt5MA4Rvvn21Ap?si=vBSmmNXCRieEJP2RC2RupA', //insert link to music
  },
]

const links = [
  { name: 'Contact us', href: '#' },
]

function About() {
  return (
    <>
    <Description />
    <Collections />
    <Example />
    </>
  )
}

function Description(){
  return (
    <div className="relative bg-white opacity-90">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-16 sm:py-24 lg:py-32">
            <div className="max-w-md p-12 bg-white rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About us</h2>
              <p className="text-base text-gray-800">
                Bob Frank & the Lemon Curds embody the genuine and organic creative spirit that
                characterised the psychedelic music scene of the 1960s, while also drawing inspiration from
                their contemporaries such as Tame Impala, L’éclair, King Gizzard and the Lizard Wizard and Dungen.
                <br /><br />
                The band started playing together early 2022. Oskar Albertsson, Hjalmar Åhren (Jernstaden), Wa'el, and Max Koste put
                their heads and sounds together and have since then challenged the fire safety capacity at venues in Malmö, Sweden
                where they are based.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Collections(){
  return (
    <div className = "relative bg-white opacity-90">
      <div className="bg-gray-100">
    </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name}
               className="group relative">
                <img
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:scale-110 transition-transform duration-300 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <img
        alt=""
        src="src/assets/band_pic.JPG"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-red-50 sm:text-7xl">Book us!</h2>
          <p className="mt-8 text-lg font-medium text-pretty white sm:text-xl/8">
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a 
                key={link.name}
                href={"mailto:maxkoste@gmail.com"}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About