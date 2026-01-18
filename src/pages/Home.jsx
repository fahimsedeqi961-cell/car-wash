import car from '../assets/car6.jpg';
import { FaStar, FaBolt, FaLeaf, FaGem, FaSmile } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='' >
      <section className='relative w-full h-[80vh]  border-b'>

        <img src={car} alt="background"
          className='w-full h-[80vh] absolute inset-0 z-0  object-cover '
        />

        <div className='absolute inset-0 bg-black/50'></div>

        <div className='relative z-20 flex flex-col gap-5 pb-10 md:pb-0 md:gap-6  items-center h-full justify-center text-center px-6 text-white'>
          <h2 className='text-3xl md:text-5xl lg:text-5xl font-bold'>
            Experience The Ultimate Car Detailing Service
          </h2>

          <p className=' text-base  leading:relaxed md:text-xl max-w-3xl font-serif mb-10'>At Hand Carwash Geel, we are dedicated to providing
            top-notch car detailing services that will leave your vehicle looking as good as new.
            With our attention to detail and commitment to customer satisfaction,
            you can trust us to take care of your car.
          </p>
          <button className=' px-4 py-2 text-sm md:text-base rounded bg-orange-400 text-white font-semibold  hover:bg-orange-600 transition-colors duration-200 cursor-pointer '>
            Book Now
          </button>
        </div>

      </section>

      <section className='p-10 pt-15 bg-gray-300'>
        <div className=' mx-auto flex flex-col md:flex-row justify-between gap-6 items-center text-center '>

          <div className='flex flex-col items-center pt-3 p-5 shadow-md rounded w-72 h-auto
             hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition duration-300 cursor-pointer '
          >
            <FaStar className='text-5xl text-yellow-700 ' />
            <h3 className='font-bold text-orange-500 text-lg mt-5 mb-5'>
              5+ Years Experience
            </h3>
            <p className='text-md  text-left text-black '>
              Trusted by hundreds of clients.
              Delivering consistent quality every day.
              Skilled team with years of experience.
              We care about every car we wash.
            </p>
          </div>

          <div className='flex flex-col items-center p-5 pt-3 shadow-xl rounded w-72 h-auto 
            hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition duration-300 cursor-pointer'
          >

            <FaBolt className='text-5xl mb-5 text-blue-800' />
            <h3 className='text-lg text-orange-500 font-bold mb-5'>Fast & Reliable</h3>

            <p className='text-md text-left  text-black'>
              Quick service without cutting corners.
              On-time appointments every time.
              Efficient team, maximum convenience.
              Your car shines, fast and reliably.
            </p>

          </div>

          <div className='flex flex-col items-center p-5 pt-3 rounded shadow-xl w-72 h-auto
            hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform-transition duration-300 cursor-pointer'
          >
            <FaLeaf className='text-5xl mb-5 text-green-600' />
            <h3 className='text-lg text-orange-500 mb-5 font-bold'>Eco - Friendly</h3>
            <p className='text-md text-left text-black'>
              Safe for your car and the planet.
              Using green, eco-friendly products.
              Minimizing water waste and impact.
              Caring for nature while cleaning cars.
            </p>
          </div>
          <div className='flex flex-col items-center p-5 pt-3 rounded shadow-xl w-72 h-auto
           hover:scale-105 hover:-translate-y-1 hover:shadow-xl transform-transition duration-300 cursor-pointer'
          >
            <FaGem className='text-5xl mb-5 text-purple-500' />
            <h3 className='text-lg text-orange-500 mb-5 font-bold'>Premium - Quality</h3>
            <p className='text-md text-left text-black'>
              Professional-grade car cleaning.
              Attention to every detail.
              High-quality products and tools.
              Your car looks flawless every time.
            </p>
          </div>
        </div>
        <div className='text-center bg-gray-300 flex flex-col gap-4  justify-between items-center rounded p-5 mt-8 shadow-md hover:scale-100 hover:shadow-xl transform transition duration-300 cursor-pointer '>
          <div>
            <FaSmile className='text-5xl' />
          </div>
          <div>
            <h3 className='font-bold text-2xl text-orange-500 '>1,000+ Happy Customers</h3>

          </div>
        </div>

      </section>

      <section className='p-5 bg-gray-200'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-orange-500 mb-3 '> Our Services</h1>
          <p className='text-lg font-semibold '>
            Professional car care services designed to keep your vehicle clean, protected, and shining.
          </p>
          <div className='flex flex-col md:flex-row justify-between mt-5 p-3 gap-6 text-center items-center '>
            <div>
              <h2 className='text-2xl font-semibold rounded shadow-md p-2 '>Extirior Wash</h2>
            </div>

            <div>
              <h2 className='text-2xl font-semibold rounded shadow-md p-2 '> Interior Cleaing</h2>
            </div>

            <div>
              <h2 className='text-2xl font-semibold rounded shadow-md p-2 '>Full Car Detailing</h2>
            </div>
            <div>
              <h2 className='text-2xl font-semibold rounded shadow-md p-2 '>Engine Premimum</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}