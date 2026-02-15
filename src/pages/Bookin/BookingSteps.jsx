
export default function BookingSteps() {
  const links = ["Service", "Date & Time", "Details", "Confirm"];

  return (
    <section className="mb-12">
      <div className='flex flex-row gap-12 items-center justify-center p-8 bg-slate-100 border-b'>
        <hr className='text-2xl text-blue-500' />
        {links.map((link, index) => (

          <a href='#'
            key={index}
            className='group hover:text-orange-500 text-lg'
          >
            {link}

            {index !== links.length - 1 && (
              <i className='fa-solid fa-angle-right  pl-8 group-hover:translate-x-1 transition-transform duration-300 '></i>
            )}
          </a>
        ))}

      </div>
    </section>
  )
}