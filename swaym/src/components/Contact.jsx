import React from 'react'

const Contact = () => {
  return (
    <section
      className="bg-bg-custom h-screen w-full flex justify-center items-center px-8 pt-2 pb-8 sm:pb-4 "
      name="contact"
    >
      <form
        action="https://getform.io/f/nbdoxova"
        method="post"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-text-custom text-gray-300 ">
            Contact
          </p>
          <p className="py-4">
            !! Submit the form below to connect with me. or email:
            <a href="mailto:swaymdeep352@gmail.com">swaymdeep352@gmail.com </a>
          </p>
        </div>
        <input
          className="border-2 bg-[#e1e7fb]  mb-3 p-3 rounded "
          type="text"
          placeholder="Name"
          name="username"
          id="username"
        />
        <input
          className="bg-[#ccd6f6] mb-3 p-3 rounded"
          type="email"
          placeholder="Email"
          name="useremail"
          id="useremail"
        />
        <textarea
          className="w-full rounded h-[180px] p-3 mb-3 bg-[#ccd6f6]  "
          name="message"
          placeholder="Enter your message.."
        ></textarea>

        <button className="border-2 w-full text-white mx-auto p-2 md:w-[50%] hover:bg-text-custom hover:border-text-custom ">
          Let's connect
        </button>
      </form>
    </section>
  );
}

export default Contact