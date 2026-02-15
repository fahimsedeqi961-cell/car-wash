

export default function VehicleInformation({ bookingData, setBookingData }) {

  const handleOnChange = (e) => {
    setBookingData(
      { ...bookingData, [e.target.name]: e.target.value }
    )
  };


  return (
    <section>

      {/* Vehivle Information */}
      <form action="" className="border space-y-6 mb-8">
        <h2 className="text-lg font-semibold bg-slate-100 p-4 border-b ">Vehicle Information</h2>

        <div className="flex items-center gap-4 m-6">
          <label htmlFor="" className="text-lg w-30 text-semibold">Vehicle Type</label>

          <select
            name="vehicle"
            value={bookingData.vehicle}
            onChange={handleOnChange}
            className="w-100 border p-2 rounded-sm focus:outline-none focus:ring-0"
          >
            <option value="" className="">Select vehicle</option>
            <option value="saden">saden</option>
            <option value="vue">Vue</option>
            <option value="truck">Truck</option>
          </select>

        </div>

        <div className="flex items-center gap-4 mx-6">
          <label htmlFor="" className="w-30">License Plate</label>
          <input
            type="text"
            name="license_plate"
            value={bookingData.license_plate}
            onChange={handleOnChange}
            className="w-100 border rounded-sm  p-2 focus:outline-none" />
        </div>

        <div className="flex items-center gap-4 m-6 ">
          <label htmlFor="" className="w-30">Special Note</label>
          <textarea name="Notes" className="border rounded flex-1 p-2 focus:outline-none" />
        </div>
      </form>
    </section>
  );
}