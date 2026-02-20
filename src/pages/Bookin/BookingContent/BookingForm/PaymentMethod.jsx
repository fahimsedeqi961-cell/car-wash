export default function PaymentMethod({ bookingData, setBookingData }) {

  const handelOnChange = (e) => {
    const { value } = e.target;

    setBookingData((prev) => (
      {
        ...prev,
        payment: value

      }
    ))
    console.log(bookingData.payment)
  };

  return (
    <div>
      <section>
        <div className="space-y-6  px-8">
          <div className="flex gap-4 items-center">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={bookingData.payment === "cash"}
              onChange={handelOnChange}
              className="w-5 h-5"
            />
            <label htmlFor="" className="text-base font-semibold text-gray-900">Pay at Loacation</label>
          </div>

          <div className="flex gap-4 items-center">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={bookingData.payment === "card"}
              onChange={handelOnChange}
              className="w-5 h-5"
            />
            <label htmlFor="" className="text-base font-semibold text-gray-900">Credit / Debit card</label>
          </div>

          <div className="flex gap-4 items-center mb-6">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={bookingData.payment === "online"}
              onChange={handelOnChange}
              className="w-5 h-5"
            />
            <label htmlFor="" className="text-base font-semibold text-gray-900">Online Transfer</label>
          </div>

          <button className="px-4 py-2 w-full text-white font-semibold bg-orange-400 hover:bg-orange-500 cursor-pointer">
            Confirm Booking
          </button>
        </div>

      </section>
    </div>
  )
}