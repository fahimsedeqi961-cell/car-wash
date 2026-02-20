import ExteriorWash from '../../assets/ExteriorWash1.jpg';
import InteriorWash from '../../assets/InteriorWash2.webp';
import FullDetailing from '../../assets/FullDetailing3.jpg';
import waxing from '../../assets/waxing2.jpg'


export default function CoreServices() {

  const services = [
    { serviceName: "Exterior ", title: "Wash the out side with care", description: "Hand wash and rinse for a perfect finish", image: ExteriorWash },
    { serviceName: "Interior ", title: "Clean the inside thoroughly", description: "Voccum,wipe and restore every surface", image: InteriorWash },
    { serviceName: "Detailing", title: "Polish every inch to perfection", description: "Deep clean and restore shine to paint", image: FullDetailing },
    { serviceName: "Waxing ", title: "Protect what mattes the most", description: "Apply protective coat for lasting defense", image: waxing }
  ];


  return (
    <>

      {/**Services Section*/}

      <section className='bg-slate-50 py-12 p-4 md:p-6 '>
        <div className=''>

          <div className='flex flex-col items-center text-orange-400 gap-4 justify-center'>
            <h1 className='text-base md:text-2xl text-center'>Services</h1>
            <h1 className='text-2xl font-bold md:text-3xl text-center'>What we do best</h1>
            <p className='text-lg text-center'>Four ways to keep your car looking sharp</p>
          </div>

          <div className='grid grid-row md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 items-center justify-center '>
            {services.map((service, index) => (

              <div key={index} className='flex flex-col border border-gray-300 text-black bg-slate-100 rounded-md gap-6 justify-center items-start hover:scale-105 hover:-translate-y-1 transform transition duration-300  '>
                <img
                  src={service.image} alt={service.serviceName}
                  className='w-full h-48 rounded-t-lg object-cover transform transition  duration-300 cursor-pointer '
                />

                <div className='px-4 text-black'>
                  <h2 className='text-base mb-4  '>{service.serviceName}</h2>
                  <h3 className='text-lg font-semibold  w-48 mb-4'>{service.title}</h3>
                  <p className='text-base w-62 '>{service.description}</p>
                </div>

                <a href="/services" className='px-4 pb-4'>
                  Learn
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-800 text-semibold  inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

            ))}
          </div>

        </div>
      </section>
    </>
  )
}