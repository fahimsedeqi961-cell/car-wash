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
import EditBooking from "./EditBooking";


export default function Booking() {

  const [bookingData, setBookingData] = useState({
    service: "",
    price: "",
    vehicle: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  const [editBooking, setEditBooking] = useState(false);


  return (
    <div>
      <BookingHero />
      <BookingSteps />

      {/* Booking form and summary grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:gap-12 m-8">
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
          {editBooking && (

            <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
              <div className="p-8 bg-white rounded w-180">
                <EditBooking
                  bookingData={bookingData}
                  setEditBooking={setEditBooking}
                  setBookingData={setBookingData}
                  onClose={() => setBookingData(false)}
                />

              </div>
            </div>
          )}

          <BookingSummary
            bookingData={bookingData}
            setBookingData={setBookingData}
            editBooking={editBooking}
            setEditBooking={setEditBooking}
            onEdit={() => setBookingData(true)}
          />



        </div>
      </div>

      <CustomerInformation
        setBookingData={setBookingData}
        bookingData={bookingData}
      />

      <div>
        <h2 className="text-lg font-semibold px-6 py-4 text-black bg-slate-100 border border-gray-200">
          Payment Methods
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 py-8 border-b-2  bg-gray-50 border-white  ">
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