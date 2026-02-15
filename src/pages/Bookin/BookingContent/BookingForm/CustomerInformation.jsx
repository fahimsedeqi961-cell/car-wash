export default function CustomerInformation({ bookingData, setBookingData }) {

  const handleOnchange = (e) => {
    setBookingData(
      { ...bookingData, [e.target.name]: e.target.value }
    );
  }

  return (
    <section className="">
      <div className="">
        {/* Customer Information */}

        <h2 className="text-lg font-semibold bg-slate-100 py-2 px-6 border border-gray-600">Your Information</h2>
        <form action=""
          className="m-8 space-y-6 "
        >
          <div className="flex flex-row items-center gap-4">
            <label htmlFor="Name" className="text-base font-semibold w-30">Full Name</label>
            <input
              type="text"
              name="name"
              value={bookingData.name}
              onChange={handleOnchange}
              className="w-86 px-2 border rounded focus:outline-none" />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="Name" className="text-base font-semibold w-30">Email Address</label>
            <input
              type="emial"
              name="email"
              value={bookingData.email}
              onChange={handleOnchange}
              className="w-86 px-2 border rounded focus:outline-none" />
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="phone" className="text-base font-semibold w-30">Phone Number</label>
            <input
              type="tell"
              name="phone"
              value={bookingData.phone}
              onChange={handleOnchange}
              className="w-86 px-2 border rounded focus:outline-none" />
          </div>
        </form>
      </div>
    </section>
  )
}