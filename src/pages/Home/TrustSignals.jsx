import { useNavigate } from "react-router-dom";

const trustSignals = [
  {
    icon: "fa-car",
    numbers: "5000+",
    decription: "Cars cleaned annualy"
  },
  {
    icon: "fa-user-tie",
    numbers: "95%",
    decription: "Customer satisfaction rate "
  },
  {
    icon: "fa-tools",
    numbers: "10",
    decription: "Years in the business"
  },
];

export default function TrustSignals() {

  const navigate = useNavigate();

  return (
    <>

      {/* Customers somments */}
      <section className='py-16 '>
        <div className='w-full'>

          <div className='flex flex-col gap-4 items-center text-center mb-8'>

            <p className='text-base md:text-lg text-orange-400 font-semibold'> Numbers</p>

            <h1 className='text-lg md:text-3xl font-bold text-orange-400 '>
              Built on trust and results
            </h1>

            <p className='text-base text-gray-800 md:text-lg mb-4 text-center max-w-xl '>
              We have washed thousands of cars,
              our customers come back because they see the different.
              that is what the numbers tells us.
            </p>

          </div>

          <div className='text-center mb-16'>
            <a
              href="#"
              onClick={() => navigate("/book")}
              className='text-lg font-semibold text-gray-600 mr-6 hover:text-orange-500'>
              Book
            </a>

            <a href="#" className='group text-lg font-semibold text-gray-600 hover:text-orange-400 '>
              Learn
              <i className="fa-solid fa-angle-right text-sm mx-1"></i>
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3  text-center items-end text-black px-8'>
            {trustSignals.map((signal, index) => (
              <div key={index} className=' bg-slate-200 text-black  p-4'>
                <div className='flex flex-row gap-4 justify-center items-center'>
                  <i className={`fa-solid ${signal.icon} text-4xl text-blue-500`}></i>
                  <h1 className='text-lg md:text-3xl font-bold leading-relaxed'>{signal.numbers}</h1>
                </div>
                <p className='text-base md:text-lg '>{signal.decription}</p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  )
}