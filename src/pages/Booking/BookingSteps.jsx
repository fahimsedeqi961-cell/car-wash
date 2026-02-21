
export default function BookingSteps() {
  const links = ["Service", "Date & Time", "Details", "Confirm"];

  return (
    <section className="">
      <div className='flex flex-row  md:gap-12 items-center justify-start md:justify-center p-4 md:p-8 bg-slate-100 border-b'>
        <hr className='text-2xl text-blue-500' />
        {links.map((link, index) => (

          <a href='#'
            key={index}
            className='group hover:text-orange-500 md:text-lg text-base '
          >
            {link}

            {index !== links.length - 1 && (
              <i className='fa-solid fa-angle-right mx-2 md:pl-8 group-hover:translate-x-1 transition-transform duration-300 '></i>
            )}
          </a>
        ))}

      </div>
    </section>
  )
}