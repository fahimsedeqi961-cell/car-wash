import { useState } from "react";

export default function FAskedQuestions() {
  const faQuestions = [
    { question: "Can I cancle my booking ?", answer: "Yes you can cancle it." },
    { question: "How long does the wash take ?", answer: "It depends on the condition of the car." },
    { question: "Do you provide a home service ?", answer: "Yes we provide home service as well." },
    { question: "Can I cancle my booking ?", answer: "Yes you can cancle it." }
  ];

  const trustSignals = ["Secure Booking", "100 % Satisfication Guarantee", "Professional Equipment"];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    // Frequently Asked Questions section.
    <section>
      <div className="px-8 py-4">

        <div className="flex flex-col md:flex-row  gap-4 md:gap-8 md:justify-center mb-16 border-b border-gray-300 pb-8">

          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className="flex gap-4 items-center text-gray-700 "
            >
              <input type="checkbox" className="w-5 h-5" />
              <label className="text-bases md:text-lg ">{signal}</label>
            </div>
          ))}

        </div>

        {/* Frequently asked questions */}
        <div className="flex flex-col space-y-6  border border-gray-400">

          <h2 className="text-lg font-semibold text-white bg-orange-400 px-4 py-2 border-b">
            Frequently Asked Question
          </h2>

          {faQuestions.map((fasq, index) => (
            <div
              key={index}
              className="border border-gray-400 m-4 rounded overflow-hidden">

              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex itmes-center gap-4">
                  <input type="checkbox" />
                  <p className="text-lg">{fasq.question}</p>
                </div>

                <i className={`fa-solid 
                  ${activeIndex === index ? "fa-angle-up" : "fa-angle-down"} text-base text-gray-600`}>

                </i>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden
                ${activeIndex === index ? "max-h-40 p-4 top-0" : "max-h-0 "}`}
              >
                <p className="text-lg">{fasq.answer}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}