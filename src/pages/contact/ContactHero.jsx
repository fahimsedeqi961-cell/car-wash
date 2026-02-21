import HeroImage from "../../assets/contactImage4.jfif"

export default function ContactHero() {
  return (
    <>
      <main className="">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center p-8 bg-slate-50">
          {/* Content  */}

          <div className="flex flex-col space-y-6 p-4 items-center bg-slate-50 justify-center">
            <h1 className="text-2xl font-bold text-orange-400 md:text-5xl">Contact Us</h1>
            <p className="text-base font-semibold text-gray-800 md:text-lg">We are here to help Reach out anytime.</p>
          </div>

          {/* Hero Image */}

          <div>
            <img
              src={HeroImage}
              alt="Not avialable"
              className="w-full object-cover"
            />
          </div>


        </div>


      </main>

    </>
  )
}