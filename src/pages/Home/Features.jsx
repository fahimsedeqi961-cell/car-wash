import review1 from '../../assets/review4.jpg';
import review3 from '../../assets/waxing.jpg';
import review4 from '../../assets/heroImage2.jpg'

export default function Features() {

  const reviews = [
    {
      title: "Nothing gets missed when done by hand",
      description: "We see what machines canno't,Every crevice, every surface, every inch of your car receives attention tha matters.",
      image: review4
    },
    {
      title: "Clean products for a clean conscience",
      description: "Eco-frriendly solutions protect yor car and the earth",
      image: review3
    },
    {
      title: "Experience matters in this business",
      description: "Years of knowledge apploied to every wash.",
      image: review1
    },
  ];

  return (
    <>
      {/* Reviews sections */}

      <section className='py-12 border-b border-gray-400 min-h-[50vh] md:min-h-[80vh]'>

        <div className='px-4 '>
          <div className='flex flex-col gap-4 text-orange-400 items-center text-center justify-center mb-16'>
            <h1 className='text-lg md:text-xl'>Why</h1>
            <h1 className='text-2xl font-bold md:text-3xl '>We do it right</h1>
            <p className='text-base font-semibold md:text-xl '>Hand washing beats machines every time for real results.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 my-8'>

            {reviews.map((review, index) => (

              <div
                key={index}
                className={`relative overflow-hidden rounded-md min-h-90 flex 
                  ${index === 0 ? 'md:col-span-1 lg:col-span-1' : 'md:col-span-1'
                  }`}
              >
                {/* Background Image */}
                <img
                  src={review.image}
                  alt="review.title"
                  className='absolute w-full h-full object-cover inset-0 z-0'
                />

                {/*Overlay  */}
                <div className='absolute inset-0 z-10 bg-black/40'></div>

                {/* Content */}
                <div className='relative z-20 flex flex-col gap-4 md:gap-6 
                  text-white p-4 md:px-6 w-full justify-end 
                    text-center items-center lg:items-start lg:text-left border rounded-md '
                >
                  <h1 className='text-xl md:text-2xl font-bold md:w-60 lg:max-w-72 '>{review.title}</h1>
                  <p className='text-base font-medium opacity-90 mb-4'>{review.description}</p>

                  <a href="#" className='group flex items-center gap-1 text-lg font-semibold mt-8 hover:text-orange-400 transition-colors '>
                    Learn
                    <i className='fa-solid fa-angle-right text-sm mt-1'></i>
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}