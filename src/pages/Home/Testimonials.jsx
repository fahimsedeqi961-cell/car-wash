import myImage from '../../assets/myImage.png';
import Marcus from '../../assets/Marcus.png';
import james from '../../assets/james.png';


const Profiles = [
  {
    comment: "My car looks better than the day I bought it. that is not an exaggeration.",
    image: myImage,
    name: "Fahim khan",
    info: "Car owner, Seattel"
  },
  {
    comment: "They treat yor car like it is their own. You can feel the difference in the work.",
    image: james,
    name: "James Mitchell",
    info: "Business owner, Portiand"
  },
  {
    comment: "My car looks better than the day I bought it. that is not an exaggeration.",
    image: Marcus,
    name: "Marcus rodriguez",
    info: "Mechanic, Tacoma"
  },

]


export default function Testimonials() {
  return (
    <>
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

                <a href="#" className='flex gap-1 group items-center  hover:text-orange-400 transition-colors duration-300 '>
                  View full story
                  <i className='fa-solid fa-angle-right text-sm mt-2'></i>
                </a>
              </div>

            ))}

          </div>
        </div>
      </section>

    </>
  )
}