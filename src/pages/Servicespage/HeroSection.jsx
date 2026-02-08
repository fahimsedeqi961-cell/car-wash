import Navbar from "../../components/layout/Navbar";
import serviceHimage from '../../assets/SHImage3.jpeg'

export default function HeroSection() {
  return (
    <div>
      {/*Services Hero Section*/}
      <section className=" md:min-h-[80vh] border-b md:py-12 md:px-8">
        <div className="">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {/* contents container */}

            <div className=" relative z-20 text-center md:text-left py-12 md:py-16 px-8 ">
              <h1 className="text-2xl md:text-5xl max-w-7xl font-bold  text-orange-400 mb-4 md:mb-6 leading-snug ">Professional car wash services</h1>
              <p className="text-base md:text-lg max-w-md md:max-w-lg text-white md:text-gray-900 mb-8 md:mb-12 ">
                Experience top-notch car care  that revitalizes
                your vehicle while prioritizing eco-friendly practices.
              </p>

              <div className="z-20">
                <a href="#"
                  className="px-6 py-2 mr-4 rounded-3xl bg-orange-400 font-bold text-white hover:bg-orange-500 ">
                  Book now
                </a>

                <a href="#"
                  className="px-6 py-2 rounded-3xl hidden md:inline-block border font-bold text-black hover:bg-orange-500 hover:text-white  ">
                  Learn
                </a>
              </div>
            </div>


            {/* Image container */}
            <div className="absolute inset-0 md:relative z-10 md:z-0 ">
              <img src={serviceHimage} alt="Hero Image" className="w-full h-full object-cover " />

              <div className="absolute inset-0 bg-black/60 md:hidden"></div>
            </div>

          </div>
        </div>
      </section>

    </div>


  )
}