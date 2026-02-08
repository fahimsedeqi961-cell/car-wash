import { Link } from 'react-router-dom';
import logo from '../../assets/Logo3.jpeg';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen]);

  return (
    <header className=' relative z-50 px-4 md:px-6 py-2 w-full h-auto bg-slate-900  border-b-2 border-white flex flex-row justify-between items-center text-white'>

      <div className='flex justify-start items-center max-w-200 '>
        <Link to="/">
          <img src={logo} alt="car-wash-logo" className='w-8 h-8 md:w-16 md:h-16 mr-4 hover: transform-stroke object-contain' />
        </Link>

        <div >
          <h1 className='text-2xl md:text-4xl text-orange-400 font-serif font-bold'>Geel</h1>
        </div>

      </div>

      <div className=''>
        <button onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-2xl z-50 w-4 h-4 md:w-6 md:h-6 hover:cursor-pointer   '>
          {isOpen ?
            <FiX className='text-white' /> :
            <FiMenu className='text-white' />}
        </button>
      </div>


      <nav className='relative hidden md:flex  justify-between items-center  gap-6 '>

        <Link to="/" className='font-bold text-white text-lg  px-2 py-1 hover:text-orange-400 hover:transition-colors duration-200 '>Home</Link>
        <Link to="/services" className='font-bold text-white text-lg px-2 py-1  hover:text-orange-400 hover:transition-colors  duration-200 '>Services</Link>
        <Link to="/book" className='font-bold text-white text-lg px-2 py-1 hover:text-orange-400  hover:transition-colors  duration-200'>Book</Link>
        <Link to="/contact" className='font-bold text-white tex-lg px-2 py-1  hover:text-orange-400 hover:transition-colors  duration-200 '>Contact</Link>
        <Link to="/book"
          className=' hidden md:inline-flex ml-6 font-semibold px-4 py-2 text-white bg-orange-400 rounded-md  hover:bg-orange-600 transition-colors  duration-200 '>
          Book Now
        </Link>

      </nav>

      {/** Hamburger Menue */}

      <div
        className={`absolute z-50 top-full left-0 w-full  md:hiden transition-all duration-300 ease-in-out overflow-hidden 
           p-5 bg-slate-900  text-white flex flex-col gap-6
           ${isOpen ? "max-h-96 opacity-100 border-t-2 border-white translate-y-0" : "max-h-0 opacity-0 -translate-y-3 pointer-events-auto "
          }`}>

        <Link to="/" onClick={() => setIsOpen(false)}
          className='hover:bg-gray-500 p-1 rounded font-semibold cursor-pointer'
        >
          Home
        </Link>

        <Link to="/services" onClick={() => setIsOpen(false)} className='hover:bg-slate-500 p-1 rounded font-semibold cursor-pointer'>Services</Link>
        <Link to="/book" onClick={() => setIsOpen(false)} className='hover:bg-gray-500 p-1 rounded font-semibold cursor-pointer'>Book</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)} className='hover:bg-gray-500 p-1 rounded  font-semibold cursor-pointer'>Contact</Link>

        <Link to="/book" onClick={() => setIsOpen(false)} className='rounded-md px-4 text-center py-2 font-semibold mt-2 bg-orange-400  '>Book Now</Link>

      </div>

    </header>


  )
} 