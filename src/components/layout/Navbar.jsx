import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

export default function Navbar() {
  return (
    <header className='p-5 w-full h-auto bg-slate-900 flex flex-row justify-between items-center text-white'>
      <div className='flex  justify-start items-center '>
        <a href="/">
          <img src={logo} alt="car-wash-logo" className='w-16 h-16 mr-5 hover: transform-stroke object-contain' />
        </a>
        <div >
          <h1 className='text-4xl font-bold'>Hnad Car Wash Geel</h1>
        </div>
      </div>

      <nav className='flex gap-6 '>
        <Link to="/home" className='font-bold  px-2 py-1 hover:text-orange-400  transition-colors duration-200 '>Home</Link>
        <Link to="/services" className='font-bold px-2 py-1  hover:text-orange-400 transition-colors duration-200 '>Services</Link>
        <Link to="/book" className='font-bold px-2 py-1 hover:text-orange-400  transition-colors duration-200'>Book</Link>
        <Link to="/contact" className='font-bold px-2 py-1  hover:text-orange-400 transition-colors duration-200 '>Contact</Link>
      </nav>
    </header>
  )
} 