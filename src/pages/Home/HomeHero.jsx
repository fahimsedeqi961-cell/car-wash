import HeroImage from '../../assets/Booking2.avif'


export default function HomeHero() {
  return (
    <div>
      {/**Hero section */}

      <section className='md:min-h-[80vh] border-b border-gray-300 md:mb-16 '>

        <div className="relative grid md:grid-cols-2 gap-8 overflow-hidden md:py-8 ">

          {/* Text column */}

          <div
            className="relative z-20 flex flex-col gap-4 md:gap-8 p-6 md:px-12 mt-12 lg:py-16 
                text-center items-center md:items-start
                 md:text-left  md:bg-slate-50 
                text-white md:text-black"
          >

            <h1 className="text-2xl font-sans md:text-5xl text-orange-400 font-bold font-inter lg:leading-snug">
              Your car deserves better than machines
            </h1>

            <p className="text-base md:text-xl md:text-black max-w-md md:max-w-xl">
              We wash by hand, the way it should be done. Every detail matters when
              it comes to protecting what you own.
            </p>

            <div className='flex flex-row gap-8'>

              <a href='/book'
                className="px-6 py-2 mt-4 ml-2 rounded-3xl bg-orange-400 hover:bg-orange-300 transition-colors duration-300  text-white font-bold cursor-pointer">
                Book Now
              </a>

              <a href='/book'
                className="px-6 py-2 mt-4 hidden md:inline-block rounded-3xl border hover:bg-orange-300  hover:text-white  text-black font-semibold cursor-pointer transition-colors duration-300">
                Learn More
              </a>

            </div>
          </div>



          <div className='absolute inset-0 md:relative z-10 md:z-0 md:mr-6 p-4'>

            <img
              src={HeroImage}
              alt="Hero Image"
              className=' z-0 w-full h-full md:h-[90vh] object-cover md:rounded-md md'
            />

            <div className='absolute inset-0 bg-slate-900/60 md:hidden '></div>

          </div>
        </div>
      </section>
    </div>
  )
}