import HeroImage from '../assets/HeroImage.jpg'
import ExteriorWash from '../assets/ExteriorWash1.jpg';
import InteriorWash from '../assets/InteriorWash2.webp';
import FullDetailing from '../assets/FullDetailing3.jpg';
import review1 from '../assets/review4.jpg';
import review3 from '../assets/waxing.jpg';
import review4 from '../assets/heroImage2.jpg'
import waxing from '../assets/waxing2.jpg'
import myImage from '../assets/myImage.png'
import Marcus from '../assets/Marcus.png'
import james from '../assets/james.png'

export default function Home() {

  const services = [
    { serviceName: "Exterior ", title: "Wash the out side with care", description: "Hand wash and rinse for a perfect finish", image: ExteriorWash },
    { serviceName: "Interior ", title: "Clean the inside thoroughly", description: "Voccum,wipe and restore every surface", image: InteriorWash },
    { serviceName: "Detailing", title: "Polish every inch to perfection", description: "Deep clean and restore shine to paint", image: FullDetailing },
    { serviceName: "Waxing ", title: "Protect what mattes the most", description: "Apply protective coat for lasting defense", image: waxing }
  ];

  const reviews = [
    { title: "Nothing gets missed when done by hand", description: "We see what machines canno't,Every crevice, every surface, every inch of your car receives attention tha matters.", image: review4 },
    { title: "Clean products for a clean conscience", description: "Eco-frriendly solutions protect yor car and the earth", image: review3 },
    { title: "Experience matters in this business", description: "Years of knowledge apploied to every wash.", image: review1 },
  ];

  const testiMonials = [
    { icon: "fa-car", numbers: "5000+", decription: "Cars cleaned annualy" },
    { icon: "fa-user-tie", numbers: "95%", decription: "Customer satisfaction rate " },
    { icon: "fa-tools", numbers: "10", decription: "Years in the business" },
  ];
  const Profiles = [
    { comment: "My car looks better than the day I bought it. that is not an exaggeration.", image: myImage, name: "Fahim khan", info: "Car owner, Seattel" },
    { comment: "They treat yor car like it is their own. You can feel the difference in the work.", image: james, name: "James Mitchell", info: "Business owner, Portiand" },
    { comment: "My car looks better than the day I bought it. that is not an exaggeration.", image: Marcus, name: "Marcus rodriguez", info: "Mechanic, Tacoma" },

  ]

  return (
    <div >

      {/**Hero section */}

      <section className='md:min-h-[80vh] border-b border-[#333] md:mb-16 '>

        <div className="relative grid md:grid-cols-2 gap-10 overflow-hidden md:py-8 ">

          {/* Text column */}

          <div
            className="relative z-20 flex flex-col gap-4 md:gap-8 p-6 lg:py-16 
                text-center items-center md:items-start
                 md:text-left  md:bg-white 
                text-white md:text-black"
          >

            <h1 className="text-2xl font-sans md:text-5xl text-orange-400 font-bold lg:leading-snug">
              Your car deserves better than machines
            </h1>

            <p className="text-base md:text-xl  md:text-black max-w-md md:max-w-xl">
              We wash by hand, the way it should be done. Every detail matters when
              it comes to protecting what you own.
            </p>

            <div className='flex flex-row gap-8'>
              <a href='/book'
                className="px-6 py-2 mt-4 ml-2 rounded-3xl bg-orange-400 hover:bg-orange-500  text-white font-bold cursor-pointer">
                Book Now
              </a>
              <a href='/book'
                className="px-6 py-2 mt-4 hidden md:inline-block  rounded-3xl border hover:bg-orange-500 hover:text-white  text-black font-bold cursor-pointer transition-colors duration-300">
                Learn More
              </a>

            </div>
          </div>



          <div className='absolute inset-0 md:relative z-10 md:z-0 md:mr-6 '>

            <img
              src={HeroImage}
              alt="Hero Image"
              className=' z-0 w-full h-full md:h-[70vh] object-cover md:rounded-md md'
            />

            <div className='absolute inset-0 bg-slate-900/60 md:hidden '></div>

          </div>
        </div>
      </section>

      {/**Services Section*/}

      <section className='bg-white py-12 p-4 md:p-6 '>
        <div className=''>

          <div className='flex flex-col items-center text-orange-400 gap-4 justify-center'>
            <h1 className='text-base md:text-2xl text-center'>Services</h1>
            <h1 className='text-2xl font-bold md:text-3xl text-center'>What we do best</h1>
            <p className='text-lg text-center'>Four ways to keep your car looking sharp</p>
          </div>

          <div className='grid grid-row md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 items-center justify-center '>
            {services.map((service, index) => (

              <div key={index} className='flex flex-col border text-black bg-slate-100 rounded-md gap-6 justify-center items-start hover:scale-105 hover:-translate-y-1 transform transition duration-300  '>
                <img
                  src={service.image} alt={service.serviceName}
                  className='w-full h-48 rounded-t-lg object-cover transform transition  duration-300 cursor-pointer '
                />

                <div className='px-4 text-black'>
                  <h2 className='text-base mb-4  '>{service.serviceName}</h2>
                  <h3 className='text-lg font-semibold md:text-xl  w-48 mb-4'>{service.title}</h3>
                  <p className='text-base w-62 '>{service.description}</p>
                </div>

                <a href="/services" className='px-4 pb-4'>
                  Learn
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white text-semibold  inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

            ))}
          </div>

        </div>
      </section>

      {/* Reviews sections */}

      <section className='py-12 border-b min-h-[50vh] md:min-h-[80vh]'>

        <div className='px-4 '>
          <div className='flex flex-col gap-4 text-orange-400 items-center text-center justify-center'>
            <h1 className='text-lg md:text-xl'>Why</h1>
            <h1 className='text-2xl font-bold md:text-3xl '>We do it right</h1>
            <p className='text-base font-semibold md:text-xl '>Hand washing beats machines every time for real results.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 py-8 '>

            {reviews.map((review, index) => (

              <div
                key={index}
                className={`relative overflow-hidden rounded-md min-h-[350px] flex 
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
                  text-white p-4 md:p-6 w-full justify-center 
                    text-center items-center lg:items-start lg:text-left border rounded-md '
                >
                  <h1 className='text-xl md:text-2xl font-bold md:w-60 lg:max-w-[280px] '>{review.title}</h1>
                  <p className='text-base font-medium opacity-90 mb-4'>{review.description}</p>

                  <a href="#" className='group flex items-center gap-1 text-lg font-semibold mt-8 hover:text-orange-400 transition-colors '>
                    Learn
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="size-4 text-semibold text-white transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

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

      {/* testimonials section */}

      <section className='py-16 mb-16 rounded-md text-orange-400'>
        <div>

          <h1 className='text-xl md:text-4xl font-bold mb-4 text-center '>Real Voices</h1>
          <p className='text-lg md:tex-xl font-semibold text-center '>What our customers say about us</p>

          <div className='grid grid-cols-1 md:grid-cols-3 px-6 gap-8 items-center mt-20 '>

            {Profiles.map((profile, index) => (
              <div key={index} className='border rounded-md p-4 bg-slate-900 text-white'>
                <p className='text-base md:w-80 mb-4'>{profile.comment}</p>
                <div className='flex flex-row gap-4 mb-10  '>
                  <div>
                    <img src={profile.image} alt="Profile" className='w-15 h-15 rounded-4xl' />

                  </div>
                  <div >
                    <h2 className='font-bold text-lg '>{profile.name}</h2>
                    <p className='text-base md:text-lg'>{profile.info}</p>
                  </div>
                </div>

                <a href="#" className='hover:underline '>
                  View full story
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="size-4  text-semibold text-white inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

            ))}

          </div>
        </div>
      </section>
    </div>
  )
}