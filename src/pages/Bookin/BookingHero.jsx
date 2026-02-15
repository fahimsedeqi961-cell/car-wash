import BookingImage from '../../assets/Booking2.avif'
export default function BookingHero() {
  return (
    <div>
      <section className="">
        <div className="">
          <div className="grid grid-cols-2 gap-8 items-center mx-8">

            <div>
              <img src={BookingImage} alt="Not found" className='w-full pt-12 object-cover ' />
            </div>

            <div className='px-8'>
              <h1 className="text-4xl font-bold text-orange-400 mb-4 ">Book Yor Car a Wash </h1>
              <p className="text-lg max-w-xl ">
                Book your car wash in just a few clicks and let our experts bring back your vehicle’s spotless shine.
              </p>
            </div>

          </div>
        </div>


      </section>
    </div>
  )
}