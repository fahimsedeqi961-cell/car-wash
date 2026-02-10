
export default function WashingPro() {
  const proccesses = [
    { icon: "fa-magnifying-glass", title: "Inspect", description: "Thorough vehicle condition assessment." },
    { icon: "fa-spray-can", title: "Pre-Wash", description: "Initial rinse to remove dirt." },
    { icon: "fa-soap", title: "Deep Cleaning", description: "Intensive interior and exterior cleaning." },
    { icon: "fa-star", title: "Final shine", description: "Polished finish for lasting shine." }

  ];

  return (
    <div>
      <section className="py-16 px-8">
        <div>
          <h2 className="text-4xl text-orange-400 font-bold text-center  mb-12">Our Washing Proccess</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  px-4 bg-slate-100 ">
            {proccesses.map((process, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-md  ">
                <div className="flex flex-row gap-4 items-center justify-start py-4">
                  <i className={`fa-solid ${process.icon} text-4xl text-blue-500 
                    transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6
                  `}></i>
                  <h3 className="text-xl font-semibold">{process.title}</h3>
                </div>
                <hr className="max-w-56 " />
                {index !== proccesses.length - 1 && (
                  <i className={`absolute top-1/2 -right-0.5 
                    fa-solid fa-angle-right text-2xl text-blue-600
                    transition-transform group-hover:translate-x-1 
                    hidden lg:block`
                  }
                  ></i>

                )}
                <p className="text-base text-gray-700">{process.description}</p>

              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}