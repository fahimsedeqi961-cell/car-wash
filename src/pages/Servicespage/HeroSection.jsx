import Navbar from "../../components/layout/Navbar";
import heroImage from "../../assets/heroImage.png";
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section className=" bg-slate-900 border-t-2 border-white">
      <div className="relative py-6 w-full h-[80vh] flex items-center justify-center ">

        <motion.img src={heroImage} alt="Hero Image"
          className="object-cover inset-0 w-full h-full z-0 "
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.0 }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute text-center px-4 z-10 ">

          <motion.h1
            className=" text-2xl md:text-5xl font-serif text-orange-400 font-bold mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opecity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Services
          </motion.h1>

          <motion.p
            className="text-base md:text-2xl text-gray-200 max-w-xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-orange-400 font-semibold">Premium</span> car wash and detailing services that restore your car’s
            shine and protect its beauty with professional care.
          </motion.p>

          <motion.button
            className="rounded-md px-4 mt-10 py-2 text-white font-bold bg-orange-400 cursor-pointer  hover:bg-orange-500 transition duration-200 "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.button>
        </div>


      </div>

    </section>
  )
}