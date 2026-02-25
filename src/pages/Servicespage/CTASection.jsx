import { useNavigate } from "react-router-dom"
export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <div className="py-16 text-center bg-slate-100">
      <h2 className="text-2xl font-bold text-orange-400 mb-4">Ready To Make Your Car Shine</h2>
      <button
        onClick={() => navigate("/book")}
        className="px-6 py-2 font-bold text-lg bg-orange-400 border text-white hover:bg-orange-300 transition-colors duration-300 cursor-pointer">
        Book Appointment
      </button>
    </div>
  )
}