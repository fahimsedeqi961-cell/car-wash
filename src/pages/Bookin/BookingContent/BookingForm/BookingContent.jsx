import ServiceSelection from "./ServiceSelection";
import BookingHero from "../../BookingHero";
import BookingSteps from "../../BookingSteps";
import BookingSummary from "../BookingSummary"
import VehicleInformation from "./VehicleInformation";
import DateSelection from "./DateSelection";
import CustomerInformation from "./CustomerInformation";
import PaymentMethod from "./PaymentMethod";
import FAskedQuestions from "./FAQSection";
import { useState } from "react";
export default function Booking() {

  const [bookingData, setBookingData] = useState({
    service: "",
    vehicle: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    payment: "",
  })

  return (
    <div>
      <BookingHero />
      <BookingSteps />
      <div className="grid grid-cols-[2fr_1fr] gap-12 m-8">
        <div>
          <ServiceSelection
            setBookingData={setBookingData}
          />

          <VehicleInformation
            setBookingData={setBookingData}
            bookingData={bookingData}
          />

          <DateSelection
            setBookingData={setBookingData}
            bookingData={bookingData}
          />

        </div>

        <div>
          <BookingSummary
            bookingData={bookingData}
          />
        </div>
      </div>

      <CustomerInformation
        setBookingData={setBookingData}
        bookingData={bookingData}
      />

      <div>
        <h2 className="text-lg font-semibold px-6 py-2 bg-gray-200 border">
          Payment Methods
        </h2>

        <div className="grid grid-cols-[1fr_2fr] gap-8 py-8 border-b-2 border-white  ">
          <PaymentMethod
            setBookingData={setBookingData}
            bookingData={bookingData}
          />

          <FAskedQuestions />
        </div>
      </div>

    </div>
  )
}