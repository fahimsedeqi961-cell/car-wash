import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";


export default function ContactForm() {

  const [formData, setFormData] = useState({});
  console.log(formData);


  const schema = yup.object({
    name: yup.string()
      .required("Full name is Required."),
    email: yup.string()
      .email().required("email is required."),
    phone: yup.string().required("Phone is required"),
    subject: yup.string().optional(),
    message: yup.string()
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit"
  })

  const onSubmit = (data) => {
    setFormData(data);
    reset();

  }


  return (
    <>
      <section id="contact-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border rounded-md border-gray-400">

          <h2
            className="text-lg font-semibold text-gray-800 bg-slate-200 text-center p-4 mb-4 border-b border-gray-400 rounded-t-md ">
            Send us Message
          </h2>

          <div className="flex flex-col space-y-4 p-6 justify-center">
            <label htmlFor="full name" className="text-base md:font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full name"
              {...register("name")}
              className="border border-gray-400 rounded p-2 w-full focus:outline-none"
            />

            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <label htmlFor="full name" className="text-base md:font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              {...register("email")}
              className="border border-gray-400 rounded p-2 w-full focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <label htmlFor="full name" className="text-base md:font-semibold">Phone Number</label>

            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              {...register("phone")}
              className="border border-gray-400 rounded-md p-2 w-full focus:outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}


            <label htmlFor="full name" className="text-base md:font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              {...register("subject")}
              className="border border-gray-400 rounded p-2 w-full focus:outline-none"
            />
            {errors.subject && (<p className="text-red-500 text-sm">{errors.subject.message}</p>)}


            <label htmlFor="message" className="text-base md:font-semibold">Message</label>
            <textarea
              id="message"
              {...register("message")}
              className="p-2 w-full border border-gray-400 rounded-md focus:outline-none"
            >

            </textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}


            <button
              type="submit"
              className="px-4 py-2 w-full text-white font-semibold cursor-pointer rounded-md bg-orange-400 hover:bg-orange-300 transition-colors duration-300">
              Submit
            </button>

          </div>
        </form>
      </section>

    </>
  )
}