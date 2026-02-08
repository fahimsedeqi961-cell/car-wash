
export default function ServicesGrid() {

  return (
    <div>
      {/* Services grid  */}
      <section className="min-h-[80vh] py-16 bg-slate-900">
        <h2 className="text-2xl md:text-4xl text-orange-400 font-semibold text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-16">

          <div className="p-6 border rounded-lg bg-gray-100 text-black text-center">
            <i className="fa-solid fa-broom text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold text-xl mb-4">Interior cleaning</h3>
            <p className="text-base text-gray-800 mb-4">Voccum,wipe and restore every surface</p>

            <a href="#" className='group flex items-center  gap-1 text-sm text-gray-600 px-20  hover:text-orange-400 transition-colors '>
              Learn More
              <i className="fa-solid text-sm fa-angle-right transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>

          <div className="p-6 border rounded-lg bg-gray-100 text-black text-center">
            <i className="fa-solid fa-car text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold text-xl mb-4">Exterior Wash</h3>
            <p className="text-base text-gray-800 mb-4">Hand wash and rinse for a perfect finish</p>

            <a href="#" className='group flex items-center  gap-1 text-sm text-gray-600 px-20  hover:text-orange-400 transition-colors '>
              Learn More
              <i className="fa-solid text-sm fa-angle-right transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>

          <div className="p-6 border rounded-lg bg-gray-100 text-black text-center">
            <i className="fa-solid fa-spray-can text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold text-xl mb-4">Full Detailing</h3>
            <p className="text-base text-gray-800 mb-4">Deep clean and restore shine to paint</p>

            <a href="#" className='group flex items-center  gap-1 text-sm text-gray-600 px-20  hover:text-orange-400 transition-colors '>
              Learn More
              <i className="fa-solid text-sm fa-angle-right transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>

          <div className="p-6 border rounded-lg bg-gray-100 text-black text-center">
            <i className="fa-solid fa-tools text-4xl text-blue-500 mb-4"></i>
            <h3 className="font-semibold text-xl mb-4">Engine care</h3>
            <p className="text-base text-gray-800 mb-4">Apply protective coat for lasting defense</p>

            <a href="#" className='group flex items-center  gap-1 text-sm text-gray-600 px-20  hover:text-orange-400 transition-colors '>
              Learn More
              <i className="fa-solid text-sm fa-angle-right transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>


        </div>

      </section>
    </div>
  )
}