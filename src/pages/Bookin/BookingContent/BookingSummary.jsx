
export default function BookingSummary({ bookingData }) {
  return (
    <div className="border max-w-sm rounded-md">
      <h1 className="text-lg font-semibold bg-slate-100 p-4 border-b rounded-t">Booking summary</h1>
      <div className="flex flex-col justify-center p-6 ">

        <div className="flex flex-col space-y-4">
          <div className="flex flex-row gap-4">
            <h3 className="text-lg font-semibold  ">Service:</h3>
            <p className="text-base font-semibold flex-1">{bookingData.service}</p>
          </div>

          <div className="flex flex-row gap-4">
            <h3 className="text-lg font-semibold">Vehicle:</h3>
            <p className="text-base font-semibold"> {bookingData.vehicle}</p>
          </div>

          <div className="flex flex-row gap-4 mb-2 ">
            <h3 className="text-lg font-semibold w-15">Date:</h3>
            <p className="text-lg font-semibold flex-1 ">{bookingData.date}</p>
          </div>

        </div>

        <div className="flex flex-row gap-4 border-t py-2 ">
          <h3 className="text-lg font-semibold w-15">Time:</h3>
          <p className="text-lg font-semibold flex-1 ">{bookingData.time}</p>
        </div>

        <div className="flex flex-row gap-6 border-t py-2">
          <h3 className="text-lg font-semibold w-15">Subtotal:</h3>
          <p className="text-lg font-semibold flex-1">{bookingData.price}</p>
        </div>

        <div className="flex flex-row gap-4 border-t py-2">
          <h3 className="text-lg font-semibold w-15">Tax:</h3>
          <p className="text-lg font-semibold flex-1 ">10%</p>
        </div>

        <div className="flex flex-row gap-4 mb-4 border-t py-2">
          <h3 className="text-lg font-bold w-15 ">Total:</h3>
          <p className="text-lg font-semibold flex-1">{bookingData.price}</p>
        </div>

        <button className="px-4 py-2 text-white font-semibold bg-orange-400 hover:bg-orange-500 cursor-pointer">Edit Selection</button>
      </div>
    </div>
  )
}