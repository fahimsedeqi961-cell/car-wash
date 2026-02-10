export default function PackageSection() {
  const PricePackages = [
    { PlanName: "Besic Plan", price: "15", features: { f1: "Exterior Wash", f2: "Rinse & dry", f3: "Window Clean", f4: "Tire Shine", f5: "Light surface detailing" } },
    { PlanName: "Standard Plan", price: "30", features: { f1: "Exterior Wash & soap", f2: "Tire shine & wheel clean", f3: "Interior vacuum", f4: "Window clean (inside & outside)", f5: "Dashboard wipe down" } },
    { PlanName: "Premium Plan", price: "50", features: { f1: "Full exterior Wash + foam", f2: "Tire shine + rim cleaning", f3: "Interior vacuum + mat clean", f4: "Dashboard & console detail", f5: "Light waxing & shine finish" } },
    { PlanName: "Ultimate Detail", price: "120", features: { f1: "Deep exterior Wash + foam ", f2: "Full interior shampoo", f3: "Engine bay clean & protect", f4: "Wax + polish shine", f5: "Protective sealant application" } },

  ]
  return (
    <div>
      <section className="py-16 px-8  bg-slate-100">
        <div>
          <h2 className="text-4xl font-bold text-orange-400 text-center mb-16 ">Pricing Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {PricePackages.map((plan, index) => (
              <div
                key={index}
                className="p-6 border-2 border-white- text-white bg-slate-800">
                <h3 className="text-2xl font-semibold text-center text-white mb-4 bg-slate-800 ">{plan.PlanName}</h3>
                <hr className="w-full mb-4" />
                <h3 className="text-2xl font-bold mb-4">$ {plan.price}</h3>

                <ul className="list-disc list-inside space-y-4 mb-4">
                  {Object.values(plan.features).map((feature, index) => (

                    <li key={index} className="">{feature}</li>

                  ))}
                </ul>

                <a href="#" className="text-orange-400 font-semibold text-center">Select a plan</a>

              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}