import { useState } from "react";

const servicePrices = { "besic-wash": 15, "standard-wash": 30, "premium": 50 };

export default function EditBooking({ bookingData, setBookingData, setEditBooking }) {

  const [localData, setLocalData] = useState(bookingData);
  console.log(localData.service);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);

    if (name === "service") {
      setLocalData({
        ...localData,
        service: value,
        price: servicePrices[value]

      })
    }
    else {

      setLocalData(
        {
          ...localData,
          [name]: value,
        }
      )
    }
  }

  const handleSave = () => {
    setBookingData(localData);

    setEditBooking(false);

  }

  const handleClose = () => {
    setEditBooking(false);
  }

  return (
    <>
      <form action=""
        className="p-4 border rounded"
      >
        <div className="flex flex-col space-y-6 overflow-hidden">

          <div className="relative flex flex-row gap-4 items-center justify-center">

            <label htmlFor="service" className="text-lg w-16">Service</label>
            <select
              name="service"
              value={localData.service}
              onChange={handleChange}
              className="text-base text-gray-600 p-2 border flex-1 rounded appearance-none focus:outline-none ">
              <option value="select">Select service</option>
              <option value="besic-wash">Besic wash</option>

              <option value="standard-wash">Standard wash</option>

              <option value="premium">Premium</option>

            </select>

            <div className="absolute inset-y-2 right-0 px-4 items-center pointer-events-none">
              <i className="fa-solid fa-angle-down text-sm text-gray-700 "></i>
            </div>
          </div>

          <div className="relative flex flex-row gap-4 items-center justify-center">
            {/* select vehicle */}
            <label htmlFor="service" className="w-16 text-lg">Vehicle</label>
            <select
              name="vehicle"
              value={localData.vehicle}
              onChange={handleChange}
              className="text-base text-gray-600 p-2 border flex-1 rounded appearance-none focus:outline-none">
              <option value="select">Select Vehicle</option>
              <option value="saden">Saden</option>

              <option value="Vue">Vue</option>

              <option value="truck">Truck</option>

            </select>
            <div className="absolute inset-y-2 right-0 items-center">
              <i className="fa-solid fa-angle-down text-sm text-gray-700 px-4 items-center"></i>

            </div>
          </div>


          <div className="flex flex-row gap-4 items-center justify-center ">

            {/* select Date */}
            <label htmlFor="date" className="text-lg w-16">Date</label>
            <input
              type="date"
              name="date"
              value={localData.date}
              onChange={handleChange}
              className="text-base text-gray-600 p-2 border rounded flex-1 focus:outline-none"
            />
          </div>


          <div className="flex flex-row gap-4 items-center justify-center">

            {/* select time */}

            <label htmlFor="time" className="w-16 text-lg">Time</label>
            <input
              type="time"
              name="time"
              value={localData.time}
              onChange={handleChange}
              className="border rounded p-2 flex-1 focus:outline-none"
            />

          </div>

          <div className="flex flex-row gap-4 items-end justify-end ">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 font-semibold border rounded-md bg-orange-400 text-white">
              Cancle
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 font-semibold border bg-orange-400 text-white rounded-md">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  )
}