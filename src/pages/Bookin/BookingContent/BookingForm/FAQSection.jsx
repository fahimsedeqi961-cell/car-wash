
export default function FAskedQuestions() {
  return (
    // Frequently Asked Questions section.
    <section>
      <div className="px-8 py-4">
        <div className="flex flex-row gap-8 justify-center mb-16 border-b pb-8">
          <div className="flex gap-4 items-center ">
            <input type="checkbox" className="w-5 h-5" />
            <label className="text-lg font-semibold">Secure Booking</label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="w-5 h-5 " />
            <label className="text-lg font-semibold">100 % Satisfication Guarantee</label>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="w-5 h-5" />
            <label className="text-lg font-semibold">Professional Equipment</label>
          </div>
        </div>

        <div className="border">
          <h2 className="text-lg font-semibold text-white bg-orange-400 px-4 py-2 border-b">Frequently Asked Question</h2>
          <div className="flex gap-4 items-center m-4 border rounded-sm p-2">
            <input type="checkbox" />
            <p className="text-base ">Can I cancle my booking ?</p>
          </div>

          <div className="flex gap-4 items-center m-4 border rounded-sm p-2 ">
            <input type="checkbox" />
            <p className="text-base ">How long does the wash take ?</p>
          </div>

          <div className="flex gap-4 items-center m-4 border rounded-sm p-2">
            <input type="checkbox" />
            <p className="text-base ">Do you provide home service ?</p>
          </div>

        </div>
      </div>
    </section>
  );
}