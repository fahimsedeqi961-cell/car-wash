

export default function VehicleInformation({ bookingData, setBookingData }) {

  const handleOnChange = (e) => {
    setBookingData(
      { ...bookingData, [e.target.name]: e.target.value }
    )
  };


  return (
    <section>

      {/* Vehivle Information */}
      <form action="" className="border border-gray-300 bg-gray-50 rounded-md  mb-8">

        <h2 className="text-lg font-semibold bg-slate-100 text-black p-4 border-b border-gray-400 rounded-t-md ">Vehicle Information</h2>

        <div className="flex flex-col md:gap-6 md:m-6 p-4">

          <div className="flex flex-col md:flex-row gap-4 mb-4 ">

            <label htmlFor="" className="text-base md:w-30 md:font-semibold">Vehicle Type</label>

            <div className="relative  md:w-100">
              <select
                name="vehicle"
                value={bookingData.vehicle}
                onChange={handleOnChange}
                className="md:w-full w-full border border-gray-400 appearance-none p-2 rounded-sm focus:outline-none focus:ring-0"
              >
                <option value="" className="text-gray-600">Select vehicle</option>
                <option value="saden">saden</option>
                <option value="vue">Vue</option>
                <option value="truck">Truck</option>
              </select>

              <div className="absolute inset-y-0 right-0 px-4 flex border-l items-center pointer-events-none ">
                ▼
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <label htmlFor="" className="md:w-30 text-base md:font-semibold">License Plate</label>
            <input
              type="text"
              name="license_plate"
              value={bookingData.license_plate}
              onChange={handleOnChange}
              className="md:w-100 border border-gray-400 rounded-sm p-2 focus:outline-none" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:justify-end ">
            <label htmlFor="" className="md:w-30 md:font-semibold text-base">Special Note</label>
            <textarea name="Notes" className="border border-gray-400 rounded md:flex-1 p-2 focus:outline-none" />
          </div>


        </div>

      </form>
    </section>
  );
}