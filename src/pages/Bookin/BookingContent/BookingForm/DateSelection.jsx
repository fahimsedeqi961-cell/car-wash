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

  return (
    <section>
      <div className="border mb-8 rounded-md">
        <h2 className="text-lg font-semibold p-4 bg-orange-400 text-white border-b">Select Date & Time</h2>
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

          <div className="flex flex-col md:gap-8 justify-center py-8 bg-slate-50 ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 md:mb-6">
              <label htmlFor="" className=" text-base font-semibold">Select Time :</label>
              <input
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleTime}
                className="rounded border p-2 w-60  "
              />

            </div>
            <div className="hidden md:flex flex-row gap-8  justify-between text-white font-semibold items-center">
              <button className="px-4 py-2 rounded-md bg-orange-400 cursor-pointer hover:bg-orange-500">
                10 : 00
              </button>
              <button className="px-4 py-2 rounded-md bg-orange-400 cursor-pointer hover:bg-orange-500">
                11 : 00
              </button>
              <button className="px-4 py-2 rounded-md bg-orange-400 cursor-pointer hover:bg-orange-500">
                12 : 00
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}