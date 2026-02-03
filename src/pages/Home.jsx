import HeroImage from '../assets/HeroImage6.png'
import ExteriorWash from '../assets/ExteriorWash1.jpg';
import InteriorWash from '../assets/InteriorWash2.webp';
import FullDetailing from '../assets/FullDetailing3.jpg';
import review1 from '../assets/heroImage.jpg';
import review3 from '../assets/review5.jpg';
import review4 from '../assets/heroImage2.jpg'
import waxing from '../assets/waxing2.jpg'
import myImage from '../assets/myImage.png'
import Marcus from '../assets/Marcus.png'
import james from '../assets/james.png'
import logo from '../assets/Logo3.jpeg'

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
    { numbers: "5000+", decription: "Cars cleaned annualy" },
    { numbers: "95%", decription: "Customer satisfaction rate " },
    { numbers: "10", decription: "Years in the business" },
  ];
  const Profiles = [
    { comment: "My car looks better than the day I bought it. that is not an exaggeration.", image: myImage, name: "Fahim khan", info: "Car owner, Seattel" },
    { comment: "They treat yor car like it is their own. You can feel the difference in the work.", image: james, name: "James Mitchell", info: "Business owner, Portiand" },
    { comment: "My car looks better than the day I bought it. that is not an exaggeration.", image: Marcus, name: "Marcus rodriguez", info: "Mechanic, Tacoma" },

  ]

  return (
    <div className='bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500' >

      {/**Hero section */}

      <section className=' border-2 border-white'>
        <div className="relative grid grid-cols-2 gap-4  items-center">

          <div className="flex flex-col gap-2 pl-2 md:gap-6 md:pl-4 items-start  ">

            <h1 className="text-2xl font-sans md:text-5xl md:leading-relaxed font-bold text-white">Your cars deserves better than machines</h1>
            <p className="text-lg md:text-xl text-white ">
              We wash by hand, the way it should be done. Every detail matters when
              it comes to protecting what you own.
            </p>
            <button className="px-6 py-2 ml-6 mt-8 rounded bg-orange-400 hover:bg-orange-500  text-white font-bold cursor-pointer">
              Book
            </button >
          </div>

          <img src={HeroImage} alt="Hero Image" className='w-full h-[60vh] md:h-[85vh]  object-cover inset-0' />
        </div>

      </section>

      {/**Services Section*/}

      <section className='bg-gradient-to-r from-blue-500 to-cyan-500  px-6 py-12'>

        <div className=''>
          <div className='flex flex-col items-center text-white gap-2 p-2 justify-center'>
            <h1 className='text-lg md:text-2xl text-center'>Services</h1>
            <h1 className='text-lg font-bold md:text-4xl text-center'>What we do best</h1>
            <p className='text-xl text-center'>Four ways to keep your car looking sharp</p>
          </div>

          <div className='grid grid-row md:grid-cols-4  gap-4 mt-20 items-center justify-center '>
            {services.map((service, index) => (
              <div key={index} className='flex flex-col border text-white rounded-md gap-6 justify-center items-start hover:scale-105 hover:-translate-y-1 transform transition duration-300  '>
                <img src={service.image} alt={service.serviceName} className='w-full h-48 rounded-t-lg object-cover transform transition  duration-300 cursor-pointer ' />
                <div className='px-4 '>
                  <h2 className='text-base mb-2  '>{service.serviceName}</h2>
                  <h3 className='text-lg font-semibold md:text-xl  w-48 mb-2'>{service.title}</h3>
                  <p className='text-base  text-white '>{service.description}</p>
                </div>
                <a href="#" className='px-4 pb-4'>
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

      <section className=' p-6 pt-15 pb-10 bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 border-2 border-purple-700'>
        <div>
          <div className='flex flex-col text-white items-center gap-2 justify-center text-gray-orange-400'>
            <h1 className='text-lg md:text-xl text-center'>Why</h1>
            <h1 className='text-lg font-bold md:text-4xl text-center '>We do it right</h1>
            <p className='text-lg md:text-xl font-semibold text-center'>Hand washing beats machines every time for real results.</p>
          </div>

          <div className='grid grid-row md:grid-cols-[2fr_1fr_1fr] gap-4 mt-20   '>

            {reviews.map((review, index) => (

              <div key={index} className='relative'>
                <img src={review.image} alt="Not found" className='absolute w-full h-full object-cover inset-0 z-0' />

                <div key={index} className='flex flex-col gap-4 text-white pl-8 py-8 text-left border rounded-md '>
                  <div className='absolute inset-0 bg-black/40'></div>
                  <h1 className='text-lg md:text-3xl font-bold w-75 z-30 '>{review.title}</h1>
                  <p className='text-base md:text-lg z-50 font-medium grow max-w-6xl mb-8'>{review.description}</p>

                  <a href="#" className='z-30 text-lg'>
                    Learn
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white text-semibold  inline-block">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className='p-10 bg-gradient-to-r from-purple-500  to-blue-500'>
        <div className='p-10'>
          <div className='flex flex-row gap-8 justify-between text-white items-center'>
            <div>
              <p className='text-lg md:text-xl  font-semibold mb-2'> Numbers</p>
              <h1 className='text-lg md:text-4xl font-bold w-80'>Built on trust and results</h1>
            </div>
            <div>
              <p className='text-lg md:text-xl font-semibold mb-4 w-150 leading-relaxed'> We have washed thousands of cars, our customers come back because they see the different. that is what the numbers tells us.</p>
              <a href="#" className='text-lg font-bold mr-6 hover:text-orange-400 '>Book</a>
              <a href="#" className='text-lg font-bold  hover:text-orange-400 '>
                Learn
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white text-semibold  inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>

            </div>

          </div>

          <div className='grid grid-cols-3 gap-6 items-center mt-20 text-white'>
            {testiMonials.map((test, index) => (
              <div key={index}>
                <h1 className='text-lg md:text-4xl font-bold leading-relaxed mb-2'>{test.numbers}</h1>
                <p className='text-lg md:text-xl font-semibold'>{test.decription}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className='border-b bg-blue-500 text-white'>
        <div className='p-20'>

          <h1 className='text-xl md:text-4xl font-bold mb-4 '>Real Voices</h1>
          <p className='text-lg md:tex-xl font-semibold '>What our customers say about us</p>

          <div className='grid grid-cols-3 gap-8  items-center mt-20 '>

            {Profiles.map((profile, index) => (
              <div key={index} className='border rounded-md p-3'>
                <p className='text-lg w-80 mb-4'>{profile.comment}</p>
                <div className='flex flex-row gap-4 mb-10  '>
                  <div>
                    <img src={profile.image} alt="Profile" className='w-15 h-15 rounded-4xl' />

                  </div>
                  <div >
                    <h2 className='font-bold text-lg '>{profile.name}</h2>
                    <p className='text-lg'>{profile.info}</p>
                  </div>
                </div>
                <a href="#">
                  View full story
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black text-semibold  inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

            ))}

          </div>
        </div>
      </section>

      <footer className='bg-black text-white'>
        <div className='px-20 py-10'>
          <h2 className='text-xl md:text-3xl font-bold mb-2'>Stay Informed always</h2>
          <p className='text-lg'>Get updates on our latest offers and cleaning tips.</p>
          <div className='grid grid-cols-5 gap-8 mt-20 pb-10'>

            <div className='flex flex-row gap-4'>
              <a href="/" >
                <img src={logo} alt="Logo" className='w-15 h-15  ' />
              </a>
              <h1 className='text-4xl font-bold text-orange-400'>Geel</h1>
            </div>

            <div className='flex flex-col gap-2 items-start justify-between'>
              <h2 className='text-lg mf:text-2xl font-bold'>Services</h2>
              <a href="">Interior wash</a>
              <a href="">Exterior wash</a>
              <a href="">Full Detailing</a>
              <a href="">Waxing</a>
              <a href="">Service details</a>
            </div>

            <div className='flex flex-col gap-2 items-start justify-between'>
              <h2 className='text-lg mf:text-2xl font-bold'>Company</h2>
              <a href="">About us</a>
              <a href="">Our process</a>
              <a href="">Why choose us</a>
              <a href="">Contact us</a>
              <a href="">Get in touch</a>
            </div>

            <div className='flex flex-col gap-2 items-start justify-between'>
              <h2 className='text-lg mf:text-2xl font-bold'>Suport</h2>
              <a href="">Help center</a>
              <a href="">FAQ</a>
              <a href="">Booking help</a>
              <a href="">Pricing info</a>
              <a href="">Track your order</a>
            </div>

            <div className='flex flex-col gap-2 items-start justify-between'>
              <h2 className='text-lg mf:text-2xl font-bold'>Contact</h2>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn </a>
              <a href="">Contact Suport</a>
            </div>

          </div>

          <div className='p-2 border-t text-center'>
            <h2>© 2026 Hand Car Wash Geel</h2>
          </div>
        </div>

      </footer>
    </div>
  )
}