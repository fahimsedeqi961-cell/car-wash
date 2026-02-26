import HeroImage from '../../assets/heroImage5.jpg'
export default function BookingHero() {
  return (
    <div>
      <section className="mb-12 bg-slate-100 mt-8 md:mt-20">
        <div className="">
          <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center  md:py-0 py-8">

            <div>
              <img src={HeroImage} alt="Not found" className='absolute inset-0 z-0 md:relative w-full md:h-[90vh] h-[40vh] object-cover ' />
            </div>

            <div className='absolute inset-0 z-10 md:hidden bg-black/40'></div>

            <div className='relative md:px-8 p-4 text-center md:text-left z-20'>
              <h1 className="text-2xl md:text-5xl font-bold text-orange-400 mb-4 ">Book Yor Car a Wash </h1>
              <p className="md:text-lg md:mb-16 mb-6 text-base md:text-black text-white">
                Book your car wash in just a few clicks and let our experts bring back your vehicle’s spotless shine.
              </p>
              <a
                href='#serviceSelection'
                className='p-2 md:px-4 py-2 rounded-3xl  bg-orange-400 text-sm md:text-base text-white font-semibold cursor-pointer hover:bg-orange-300'>
                Book Now
              </a >
            </div>

          </div>
        </div>


      </section>
    </div>
  )
}