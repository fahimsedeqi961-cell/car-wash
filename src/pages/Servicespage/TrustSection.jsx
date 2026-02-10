
export default function TrustSection() {

  const trustSignals = [
    {
      icon: "fa-award",
      title: "Quality Service",
      description: "Delivering top-tier car care with attention to every detail for a flawless finish."
    },
    {
      icon: "fa-leaf",
      title: "Eco-Friendly",
      description: "We use environmentally safe products that protect your car and the planet."
    },
    {
      icon: "fa-user-tie",
      title: "Experience Stuff",
      description: "Our skilled professionals ensure expert cleaning with precision and care."
    },
    {
      icon: "fa-tags",
      title: "Affordable Pricing",
      description: "Premium car wash services at competitive prices that fit your budget."
    }

  ]

  return (
    <div>
      <section className="py-16 px-8  border-t">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-orange-400 mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">

            {trustSignals.map((item, index) => (
              <div
                key={index}
                className="relative group text-center p-4 border border-gray-300 rounded-md text-white bg-slate-800
                    shadow-lg 
                    hover:-translate-y-2 
                    hover:shadow-2xl 
                    transition duration-300 ease-in-out
                    "
              >
                <div className="flex flex-row gap-4 items-center justify-center mb-4 border-b pb-4">
                  <i className={`fa-solid ${item.icon} text-4xl text-cyan-500
                      transition-transform duration-300
                      group-hover:scale-110
                      group-hover:rotate-6`}
                  ></i>
                  <h3 className="text-lg font-semibold inline-block">{item.title}</h3>
                </div>
                <p className="text-base text-gray-100">{item.description}</p>

              </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}