import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa"
export default function ContactInfo() {
  return (
    <>
      <div className="border border-gray-400 rounded-md">
        <h2
          className="text-lg font-semibold text-gray-800 text-center p-4 bg-slate-200 rounded-t-md border-b border-gray-400">
          Contact Information
        </h2>

        <div className="flex flex-col space-y-6 justify-center p-6">

          <div className="flex flex-row gap-4 items-center border-b border-gray-500 pb-4">
            <FaMapMarkerAlt className="text-lg md:text-2xl text-gray-800" />
            <div className="">
              <h3 className="text-base md:text-lg ">Address</h3>
              <p className="text-sm md:text-base text-gray-600">Antwerpseweg 112i, 2440 Geel, Belgium</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center border-b border-gray-500 pb-4">
            <FaPhone className="text-lg md:text-2xl text-gray-800" />
            <div>
              <h3 className="text-base  md:text-lg ">Phone</h3>
              <p className="text-sm text-gray-600">+32 465 52 46 11</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center border-b border-gray-500 pb-4">
            <FaEnvelope className="text-lg md:text-2xl text-gray-800" />
            <div>
              <h3 className="text-base  md:text-lg ">Email</h3>
              <p className="text-sm text-gray-600">gellcarwash@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center ">
            <FaClock className="text-lg md:text-2xl text-gray-800 " />
            <div>
              <h3 className="text-base md:text-lg">Working hours</h3>
              <p className="text-sm text-gray-600">Mon - Sat : 8 am - 6 pm</p>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}