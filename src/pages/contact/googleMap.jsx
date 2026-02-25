
export default function GoogleMap() {
  return (
    <>
      <section className="p-6 mb-12">
        <h2 className="text-3xl font-semibold text-orange-400 mb-8">Find us right now</h2>
        <div className="w-full h-[40vh] md:h-[70vh] border rounded border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d80066.5206267133!2d4.9534607!3d51.1623372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14f1c32f57d41%3A0x3a5dbd4599d869f4!2sHand%20Car%20Wash%20Geel!5e0!3m2!1sen!2s!4v1771870869011!5m2!1sen!2s"
            className="w-full h-full shadow-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">

          </iframe>

        </div>
      </section>
    </>
  )
}
