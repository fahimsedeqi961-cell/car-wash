
export default function ServicesGrid() {

  const services = [
    { icon: "fa-broom", title: "Interior Cleaning Service", description: "Voccum,wipe and restore every surface" },
    { icon: "fa-car", title: "Exterior Wash", description: "Hand wash and rinse for a perfect finish" },
    { icon: "fa-spray-can", title: "Full Detailing", description: "Deep clean and restore shine to paint" },
    { icon: "fa-tools", title: "Engine Care", description: "Apply protective coat for lasting defense" },

  ]

  return (
    <div>
      {/* Services grid  */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl md:text-4xl text-orange-400 font-bold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 ">

          {services.map((service, index) => (
            <div className="">
              <div
                key={index}
                className="relative group p-6 border rounded-lg bg-slate-800 text-white text-center
                    shadow-lg 
                    hover:-translate-y-2 
                    hover:shadow-2xl 
                    transition duration-300 ease-in-out"
              >

                <i className={`fa-solid ${service.icon} text-4xl text-cyan-400 mb-4
                  transition-transform duration-300
                  group-hover:scale-110
                  group-hover:rotate-6`}
                ></i>

                <h3 className="font-semibold text-xl mb-4">{service.title}</h3>
                <p className="text-sm font-semibold text-gray-100 mb-4">{service.description}</p>

                <a href="#" className='group flex items-center gap-1 text-sm text-gray-100 px-20  hover:text-orange-400 transition-colors '>
                  Learn More
                  <i className="fa-solid text-sm fa-angle-right transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>

          ))}

        </div>
      </section>
    </div>
  )
}