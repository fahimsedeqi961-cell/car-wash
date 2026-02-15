
const services = [
  {
    serviceName: "Besic wash",
    price: "15",
    description: "Exterior hand wash and rinse with quick dry for a fresh, clean finish."
  },

  {
    serviceName: "Standard wash",
    price: "30",
    description: "Complete exterior wash with interior vacuum and surface wipe for everyday comfort."
  },
  {
    serviceName: "Premium",
    price: "50",
    description: " Full interior and exterior detailing with wax protection and premium finish.",
  }
];

export default function ServiceSelection({ setBookingData }) {

  const handleOnClick = (plan) => {
    setBookingData((prev) => (
      {
        ...prev,
        service: plan.serviceName,
        price: plan.price
      }
    ))
  }
  return (
    <section>
      <div className="border mb-8 rounded-md">
        <h2 className="text-lg font-semibold mb-8 bg-slate-100 p-4 border-b rounded-t ">Choose your service</h2>
        <div className="grid grid-cols-3 gap-6 m-4">
          {services.map((plan, index) => (
            <div
              key={index}
              className="border flex flex-col space-y-2 p-4 text-center bg-slate-100"
            >
              <h3 className="text-lg font-semibold">{plan.serviceName}</h3>
              <h3 className="text-lg font-semibold">${plan.price}</h3>
              <p className="text-base mb-4 ">{plan.description}</p>
              <button
                onClick={() => handleOnClick(plan)}
                className="border px-4 text-white font-semibold cursor-pointer bg-orange-400 hover:bg-orange-500 ">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}