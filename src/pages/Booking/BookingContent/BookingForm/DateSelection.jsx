import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function DateSelection({ bookingData, setBookingData }) {

  const handleDate = (date) => {
    setBookingData(prev => (
      {
        ...prev,
        date: date.toISOString().split("T")[0],
      }
    ))
  };

  const handleTime = (e) => {
    setBookingData((prev) => (
      {
        ...prev,
        time: e.target.value
      }
    ))
  }

  const handleClick = (time) => {
    setBookingData(prev => (
      {
        ...prev,
        time: time
      }
    ))
  }

  return (
    <section id="dateTime">
      <div className="border border-gray-300 mb-8 rounded-md bg-gray-50">
        <h2 className="text-lg font-semibold p-4 bg-slate-100 text-gray-900 border-b border-gray-400">Select Date & Time</h2>
        <div className="m-8 flex flex-col md:flex-row md:gap-12">

          <div className="w-full max-w-sm ">
            <Calendar
              name="date"
              value={bookingData.date}
              minDate={new Date()} // disables the past dates
              onChange={(date) => handleDate(date)}
              className="p-6 shadow rounded bg-orange-500 "
            />
          </div>

          <div className="flex flex-col md:gap-8 justify-center py-8  ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 md:mb-6">
              <label htmlFor="" className=" text-base font-semibold">Select Time :</label>
              <input
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleTime}
                className="rounded border border-gray-400 focus:outline-none p-2 w-60  "
              />

            </div>
            <div className="hidden md:flex flex-row gap-8  justify-between text-white font-semibold items-center">
              <button
                onClick={() => handleClick('10 : 00')}
                className="px-4 py-2 rounded-md border border-gray-400 text-gray-800 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
                10 : 00
              </button>
              <button
                onClick={() => handleClick('11 : 00')}

                className="px-4 py-2 rounded-md border border-gray-400 text-gray-800 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
                11 : 00
              </button>
              <button
                onClick={() => handleClick('12 : 00')}

                className="px-4 py-2 rounded-md border border-gray-400 text-gray-800 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-300">
                12 : 00
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}