import car from '../assets/car6.jpg';
import { FaStar, FaBolt, FaLeaf, FaGem, FaSmile } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'

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

      <section className='p-10 pt-15 bg-white border-b border-gray-800'>
        <div className=' mx-auto flex flex-col md:flex-row justify-between gap-6 items-center text-center '>

          <div className='flex flex-col items-center pt-3 p-5 shadow-md rounded w-72 h-auto
             hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition duration-300 cursor-pointer '
          >
            <FaStar className='text-5xl text-yellow-700 ' />
            <h3 className='font-bold text-orange-500 text-lg mt-5 mb-5'>
              5+ Years Experience
            </h3>
            <p className='text-md  text-center text-gray-800 '>
              Trusted by hundreds of clients.
              Delivering consistent quality every day.
              Skilled team with years of experience.
              We care about every car we wash.
            </p>
          </div>

          <div className='flex flex-col items-center p-5 pt-3 shadow-md rounded w-72 h-auto 
            hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition duration-300 cursor-pointer'
          >

            <FaBolt className='text-5xl mb-5 text-blue-800' />
            <h3 className='text-lg text-orange-500 font-bold mb-5'>Fast & Reliable</h3>

            <p className='text-md text-center  text-gray-800'>
              Quick service without cutting corners.
              On-time appointments every time.
              Efficient team, maximum convenience.
              Your car shines, fast and reliably.
            </p>

          </div>

          <div className='flex flex-col items-center p-5 pt-3 rounded shadow-md w-72 h-auto
            hover:scale-105 hover:shadow-xl hover:-translate-y-1 transform transition duration-300 cursor-pointer'
          >
            <FaLeaf className='text-5xl mb-5 text-green-600' />
            <h3 className='text-lg text-orange-500 mb-5 font-bold'>Eco - Friendly</h3>
            <p className='text-md text-center text-gray-800'>
              Safe for your car and the planet.
              Using green, eco-friendly products.
              Minimizing water waste and impact.
              Caring for nature while cleaning cars.
            </p>
          </div>
          <div className='flex flex-col items-center p-5 pt-3 rounded shadow-md w-72 h-auto
           hover:scale-105 hover:-translate-y-1 hover:shadow-xl transform transition duration-300 cursor-pointer'
          >
            <FaGem className='text-5xl mb-5 text-purple-500' />
            <h3 className='text-lg text-orange-500 mb-5 font-bold'>Premium - Quality</h3>
            <p className='text-md text-center text-gray-800 pb-5'>
              Professional-grade car cleaning.
              Attention to every detail.
              High-quality products and tools.
              Your car looks flawless every time.
            </p>
          </div>
        </div>
        <div className='text-center bg-lightgray flex flex-col gap-4  justify-between items-center rounded p-5 mt-8  '>
          <div>
            <FaSmile className='text-5xl text-yellow-400 hover:scale-105 hover: transform transition duration-300 cursor-pointer ' />
          </div>
          <div>
            <h3 className='font-bold text-xl text-gray-700 '>1,000+ Happy Customers</h3>

          </div>
        </div>

      </section>

      <section className='p-5 bg-white mt-6'>

        <div className='text-center'>

          <h1 className='text-3xl font-bold text-orange-500 mb-3 '> Our Services</h1>
          <p className='text-lg font-semibold '>
            Professional car care services designed to keep your vehicle clean, protected, and shining.
          </p>

          <div className='flex flex-col lg:flex-row gap-6 justify-between mt-5 p-3  text-center items-center '>

            <div className="flex flex-col text-center rounded shadow-md gap-3 p-4 w-72 h-auto hover:scale-105 hover:-translate-y-1 transform transition duration-300 cursor-pointer">
              <h2 className='text-2xl font-semibold'>Exterior Wash</h2>
              <p className="text-md  text-gray-800">Thorough exterior cleaning to remove dirt, grime, and road residue.</p>
            </div>

            <div className="flex flex-col text-center rounded shadow-md  gap-3 p-4 w-72 h-auto hover:scale-105 hover:-translate-y-1 transform transition duration-300 cursor-pointer">
              <h2 className='text-2xl font-semibold '> Interior Cleaning</h2>
              <p className="text-md pb-5  text-gray-800">Deep cleaning of seats, carpets, dashboard, and interior surfaces.</p>
            </div>

            <div className="flex flex-col gap-3 text-center rounded-md shadow-md p-4 w-72 h-auto hover:scale-105 hover:-translate-y-1 transform transition duration-300 cursor-pointer">
              <h2 className='text-2xl font-semibold'>Full Car Detailing</h2>
              <p className="text-md pb-5 text-gray-800">Complete inside-and-out detailing for a fresh, showroom-ready finish.</p>
            </div>
            <div className="flex flex-col gap-3 text-center rounded-md shadow-md p-4 w-72 h-auto hover:scale-105 hover:-translate-y-1 transform transition duration-300 cursor-pointer">
              <h2 className='text-2xl font-semibold '>Engine Premium Care</h2>
              <p className="text-md  text-gray-800">Careful engine bay and premium treatments for enhanced performance and protection.</p>
            </div>
          </div>

          <Link to="/services" className="text-orange-500 mt-8 inline-block text-lg hover:text-orange-600 hover:underline cursor-pointer">View Services</Link>

        </div>
      </section>
      <section className='p-5 mt-6 bg-white'>

        <div className='max-w-6xl mx-auto'>

          <h2 className='text-3xl font-bold text-center mb-4 text-orange-500'>Our Location</h2>
          <p className='text-xl text-center text-gray-700 mb-6'>
            Visit our car wash or Find us easily on the map
          </p>

          <div className="w-full h-[400px] rounded-md  shadow-lg border overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d640795.2577214325!2d4.951332056242475!3d51.143387600194885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14f1c32f57d41%3A0x3a5dbd4599d869f4!2sHand%20Car%20Wash%20Geel!5e0!3m2!1sen!2s!4v1769023775021!5m2!1sen!2s"
              className='w-full h-full '
              loading='lazy'
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>

      </section>

      <footer className='mt-10 p-8 bg-gray-900 text-white items-center'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8   '>

          <div>
            <div className='flex flex-row items-center gap-4'>
              <img src={logo} alt="not found" className='w-18 h-18 ' />
              <div className=''>
                <h2 className='text-xl font-bold text-orange-500  font-serif'>Hand Car Wash Geel</h2>
              </div>
            </div>
            <p className='text-gray-400 mt-2 '>Professional car cleaning services with quality and care.</p>
          </div>

          {/**Contact info */}

          <div>
            <h3 className='text-xl text-semibold mb-4'>Contact</h3>
            <p className='text-gray-400 '> Antwerpseweg 112i, 2440 Geel, Belgium</p>
            <p className='text-gray-400'> Phone: +32 465 52 46 11</p>
            <p className='text-gray-400'> geel@carwash.com</p>
          </div>

          <div className=' '>

            <h3 className='text-xl font-semibold mb-4 '>Follow us</h3>

            <div className='flex gap-6 text-2xl items-center  '>
              <a href="#" className='hover:text-orange-500 hover:scale-105 hover:-translate-y-1 transform transition duration-300'>
                <FaFacebook className='text-3x text-blue-600' />
              </a>

              <a href="#" className='hover:text-orange-500 hover:scale-105 hover:-translate-y-1 transform transition duration-300'>
                <FaInstagram className='text-3xl text-red-400  ' />
              </a>
              <a href="#" className='hover:text-orange-500  hover:scale-105 hover:-translate-y-1 transform transition duration-300'>
                <FaTwitter className='text-3xl text-blue-400 ' />
              </a>
              <a href="#" className='hover:text-orange-500  hover:scale-105 hover:-translate-y-1 transform transition duration-300'>
                <FaWhatsapp className='text-3xl text-green-400 ' />
              </a>
            </div>

          </div>

        </div>

        <div className='text-center text-gray-500  border-t border-gray-700 mt-8 pt-4 '>
          © 2026 car wash , All rights reserved
        </div>

      </footer>
    </div>
  )
}