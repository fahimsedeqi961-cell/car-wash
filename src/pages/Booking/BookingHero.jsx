import BookingImage from '../../assets/Booking2.avif'
export default function BookingHero() {
  return (
    <div>
      <section className="">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center mx-8 md:py-0 py-8">

            <div className='md:px-8 p-4 text-left'>
              <h1 className="text-2xl md:text-5xl font-bold text-orange-400 mb-4 ">Book Yor Car a Wash </h1>
              <p className="md:text-lg md:mb-16 mb-6 ">
                Book your car wash in just a few clicks and let our experts bring back your vehicle’s spotless shine.
              </p>
              <a href='#serviceSelection' className='p-2 md:px-4 py-2 rounded-3xl  bg-orange-400 text-base text-white font-semibold cursor-pointer hover:bg-orange-300'>
                Book Now
              </a >
            </div>

            <div>
              <img src={BookingImage} alt="Not found" className='w-full md:h-[90vh] h-[40vh]  md:pt-12 object-cover ' />
            </div>

          </div>
        </div>


      </section>
    </div>
  )
}