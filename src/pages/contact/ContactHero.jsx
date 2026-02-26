import HeroImage from "../../assets/contact3.jpg"

export default function ContactHero() {

  return (
    <>
      <main className="mb-16 mt-8 md:mt-20">

        <div className="py-16 px-8 bg-slate-200 text-center">

          {/* Content  */}

          <div className="relative flex flex-col space-y-6 md:py-16 px-6 items-center justify-center">
            <h1 className="text-2xl font-bold text-orange-400 md:text-5xl">Get In Touch Now </h1>
            <p className="text-base font-semibold text-black md:text-lg mb-12">We are here to help, Reach out anytime.</p>

            <a href="#contact-form"
              className="text-base font-semibold text-white px-4 py-2 bg-orange-400 hover:bg-orange-300 cursor-pointer"
            >
              Contact Now
            </a >
          </div>
        </div>
      </main>

    </>
  )
}