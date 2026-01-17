import car from '../assets/car6.jpg';
export default function Home() {
  return (
    <div className='' >
      <section className='relative w-full h-[80vh]  border-b'>

        <img src={car} alt="background"
          className='w-full h-[80vh] absolute inset-0  object-cover '
        />

        <div className='absolute inset-0 bg-black/50'></div>

        <div className='relative flex flex-col gap-6 z-10 items-center h-full justify-center text-center px-6 text-white'>
          <h2 className='  text-5xl font-bold'>
            Experience The Ultimate Car Detailing Service
          </h2>

          <p className=' text-xl font-serif '>At Hand Carwash Geel, we are dedicated to providing
            top-notch car detailing services that will leave your vehicle looking as good as new.
            With our attention to detail and commitment to customer satisfaction,
            you can trust us to take care of your car.
          </p>
          <button className='  px-4 py-2 rounded bg-orange-400 text-white font-semibold  hover:bg-orange-600 transition-colors duration-200 cursor-pointer '>
            Book Now
          </button>
        </div>

      </section>
    </div>
  )
}