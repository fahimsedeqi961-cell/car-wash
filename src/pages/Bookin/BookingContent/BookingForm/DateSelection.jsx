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
      <div className="border mb-8">
        <h2 className="text-lg font-semibold p-2 bg-slate-100 border-b">Select Date & Time</h2>
        <div className="m-8 flex gap-12">

          <Calendar
            name="date"
            value={bookingData.date}
            minDate={new Date()}
            onChange={(date) => handleDate(date)}
            className="bg-slate-100 p-4 shadow rounded "
          />

          <div className="flex items-center justify-between gap-8">
            <label htmlFor="" className=" text-base font-semibold">Select Time :</label>
            <input
              type="time"
              name="time"
              value={bookingData.time}
              onChange={handleTime}
              className="rounded border p-2 w-60  "
            />

          </div>
        </div>

      </div>
    </section>
  )
}