

export default function VehicleInformation({ bookingData, setBookingData }) {

  const handleOnChange = (e) => {
    setBookingData(
      { ...bookingData, [e.target.name]: e.target.value }
    )
  };


  return (
    <section>

      {/* Vehivle Information */}
      <form action="" className="border rounded-md  mb-8">

        <h2 className="text-lg font-semibold bg-orange-400 text-white p-4 border-b rounded-t-md ">Vehicle Information</h2>

        <div className="flex flex-col md:gap-6 md:m-6 p-4">

          <div className="flex flex-col md:flex-row gap-4 mb-4 ">

            <label htmlFor="" className="text-base md:text-lg md:w-30 md:font-semibold">Vehicle Type</label>

            <div className="relative  md:w-100">
              <select
                name="vehicle"
                value={bookingData.vehicle}
                onChange={handleOnChange}
                className="md:w-full w-full border appearance-none p-2 rounded-sm focus:outline-none focus:ring-0"
              >
                <option value="" className="">Select vehicle</option>
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
            <label htmlFor="" className="md:w-30 md:text-lg md:font-semibold">License Plate</label>
            <input
              type="text"
              name="license_plate"
              value={bookingData.license_plate}
              onChange={handleOnChange}
              className="md:w-100 border rounded-sm p-2 focus:outline-none" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:justify-end ">
            <label htmlFor="" className="md:w-30 md:font-semibold md:text-lg">Special Note</label>
            <textarea name="Notes" className="border rounded md:flex-1 p-2 focus:outline-none" />
          </div>


        </div>

      </form>
    </section>
  );
}