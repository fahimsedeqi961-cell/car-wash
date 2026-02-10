import logo from '../../assets/Logo3.jpeg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className='px-12 py-16'>

        <h2 className='text-xl md:text-3xl font-bold mb-4'>Stay Informed always</h2>
        <p className='text-lg'>Get updates on our latest offers and cleaning tips.</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-16 ">
          <div className='col-span-2 md:col-span-1 flex flex-row gap-4 '>
            <a href="/" >
              <img src={logo} alt="Logo" className='w-16 h-16  ' />
            </a>
            <h1 className='text-4xl font-bold text-orange-400'>Geel</h1>
          </div>


          <div className='flex flex-col space-y-3 items-start justify-between'>
            <h2 className='text-lg mf:text-2xl font-bold mb-4'>
              Services
            </h2>
            <a href="" className='hover:text-orange-400 transition-colors'>
              Interior wash
            </a>
            <a href="">Exterior wash</a>
            <a href="">Full Detailing</a>
            <a href="">Waxing</a>
            <a href="">Service details</a>
          </div>

          <div className='flex flex-col space-y-3 items-start justify-between'>
            <h2 className='text-lg mf:text-2xl font-bold mb-4'>Company</h2>
            <a href="">About us</a>
            <a href="">Our process</a>
            <a href="">Why choose us</a>
            <a href="">Contact us</a>
            <a href="">Get in touch</a>
          </div>

          <div className='flex flex-col space-y-3 items-start justify-between'>
            <h2 className='text-lg mf:text-2xl font-bold mb-4'>Suport</h2>
            <a href="">Help center</a>
            <a href="">FAQ</a>
            <a href="">Booking help</a>
            <a href="">Pricing info</a>
            <a href="">Track your order</a>
          </div>

          <div className='flex flex-col spac-y-3 items-start justify-between'>
            <h2 className='text-lg mf:text-2xl font-bold mb-4'>Contact</h2>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">LinkedIn </a>
            <a href="">Contact Suport</a>
          </div>

        </div>

        <div className='py-6 border-t grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <h2 className='text-center md:text-start'>© 2026 Hand Car Wash Geel</h2>

          <div className='flex flex-row gap-6 justify-center md:justify-end px-12 '>
            <a href="" className=''>
              <FaFacebook className='text-2xl hover:text-blue-500 ' />
            </a>

            <a href="">
              <FaInstagram className='text-2xl  hover:text-red-400' />
            </a>

            <a href="">
              <FaTwitter className='text-2xl hover:text-sky-300 ' />
            </a>

            <a href="">
              <FaLinkedin className='text-2xl hover:text-blue-400 ' />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}