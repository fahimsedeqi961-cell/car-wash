

const testiMonials = [
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

  return (
    <>

      {/* Customers somments */}
      <section className='py-16 '>
        <div className='w-full'>

          <div className='flex flex-col gap-4 items-center text-center'>

            <p className='text-lg md:text-xl text-orange-400 font-semibold'> Numbers</p>

            <h1 className='text-lg md:text-3xl font-bold text-orange-400 '>
              Built on trust and results
            </h1>

            <p className='text-base md:text-xl mb-4 text-center max-w-xl '>
              We have washed thousands of cars,
              our customers come back because they see the different.
              that is what the numbers tells us.
            </p>

          </div>

          <div className='text-center mb-16'>
            <a href="#" className='text-lg font-semibold text-gray-600 mr-6 hover:text-orange-500'>
              Book
            </a>

            <a href="#" className='text-lg font-semibold text-gray-600 hover:text-orange-400 '>
              Learn
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black text-semibold  inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3  text-center items-end text-black px-8'>
            {testiMonials.map((test, index) => (
              <div key={index} className=' bg-slate-200 text-black  p-4'>
                <div className='flex flex-row gap-4 justify-center items-center'>
                  <i className={`fa-solid ${test.icon} text-4xl text-blue-500`}></i>
                  <h1 className='text-lg md:text-3xl font-bold leading-relaxed'>{test.numbers}</h1>
                </div>
                <p className='text-base md:text-lg '>{test.decription}</p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  )
}