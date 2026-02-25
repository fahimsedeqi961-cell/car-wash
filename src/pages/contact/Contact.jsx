import ContactHero from "./ContactHero"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import GoogleMap from "./googleMap"


export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 p-6">

        <div>
          <ContactForm />
        </div>

        <div>
          <ContactInfo />
        </div>

      </div>
      <GoogleMap />
    </>
  )
}