
export default function BookingSummary({ bookingData }) {
  const servicePrice = Number(bookingData.price);
  console.log(servicePrice);
  const taxRate = 0.10;
  const taxAmount = servicePrice * taxRate;
  console.log(taxAmount);
  const totalPrice = (servicePrice + taxAmount);
  console.log(totalPrice.toFixed(2));

  return (
    <div className="border  rounded-md">
      <h1 className="text-lg font-semibold bg-slate-800 p-4 text-white border-b rounded-t">Booking summary</h1>
      <div className="flex flex-col justify-center p-6 bg-slate-800 text-white ">

        <div className="flex flex-col space-y-4 py-2">
          <div className="flex flex-row gap-4 textbase md:text-lg">
            <h3 className="font-semibold">Service:</h3>
            <p className="font-semibold flex-1">{bookingData.service}</p>
          </div>

          <div className="flex flex-row gap-4">
            <h3 className="md:text-lg font-semibold">Vehicle:</h3>
            <p className="md:text-base font-semibold"> {bookingData.vehicle}</p>
          </div>

          <div className="flex flex-row gap-4 mb-2 text-base md:taxt-lg ">
            <h3 className="font-semibold w-15">Date:</h3>
            <p className="font-semibold flex-1 ">{bookingData.date}</p>
          </div>

        </div>

        <div className="flex flex-row gap-4 border-t py-2 ">
          <h3 className="md:text-lg font-semibold w-15">Time:</h3>
          <p className="md:text-lg font-semibold flex-1 ">{bookingData.time}</p>
        </div>

        <div className="flex flex-row gap-6 border-t justify-between py-2 ">
          <h3 className="md:text-lg font-semibold w-15">Subtotal:</h3>
          <p className="md:text-lg font-semibold ">${bookingData.price}</p>
        </div>

        <div className="flex flex-row gap-4 justify-between border-t py-2">
          <h3 className="md:text-lg font-semibold w-15">Tax(10%):</h3>
          <p className="text-lg font-semibold">${servicePrice * taxRate}</p>
        </div>

        <div className="flex flex-row gap-4 mb-4 justify-between border-t py-2">
          <h3 className="text-lg font-bold w-15 ">Total:</h3>
          <p className="text-lg font-semibold ">${totalPrice.toFixed(2)}</p>
        </div>

        <button className="px-4 py-2 text-white font-semibold bg-orange-400 hover:bg-orange-500 cursor-pointer">Edit Selection</button>
      </div>
    </div>
  )
}