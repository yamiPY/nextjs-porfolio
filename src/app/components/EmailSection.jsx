"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const EmailSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة المنطق لمعالجة البيانات (مثل إرسالها إلى خادم)
    handelsumit(); // استدعاء دالة تفعيل رسالة التأكيد
    alert("Email sent!"); // مثال للتنبيه بعد الإرسال
  };

  const [Emailsubmit, setEmailsumit] = useState(false);
  
  function handelsumit() {
    setEmailsumit(true); // ضبط حالة عرض رسالة التأكيد بعد الإرسال
  }

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 md:gap-0 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div>
        <h1 className="text-2xl mb-4 text-orange-500 font-bold ">
          Let's Connect
        </h1>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="socials flex flex-row gap-4 mb-4">
          <div
            onClick={() =>
              window.open("https://github.com", "_blank", "noopener noreferrer")
            }
          >
            <FaGithub
              size={30}
              className="text-white hover:text-gray-400 cursor-pointer"
            />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://linkedin.com",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <FaLinkedin
              size={30}
              className="text-white hover:text-blue-500 cursor-pointer"
            />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://twitter.com",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
            <FaTwitter
              size={30}
              className="text-white hover:text-blue-400 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:gap-6 gap-4 md:ml-6 mt-10 md:mt-0 w-full md:mr-40"
      >
        <label htmlFor="Email" className="text-white">
          Your Email
        </label>
        <input
          type="email"
          id="Email"
          required
          placeholder="Mousa@gmail.com"
          className="px-3 py-2 text-white border border-orange-500 rounded-lg h-9 bg-[#191919] focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <label htmlFor="subject" className="text-white">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          required
          placeholder="Just Say Hi"
          className="px-3 py-2 text-white border border-orange-500 rounded-lg h-9 bg-[#191919] focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea placeholder="message me" name="textarea" id="textarea" className="px-3 py-2 text-white border border-orange-500 rounded-lg h-20 bg-[#191919] focus:outline-none focus:ring-2 focus:ring-orange-500"> 
           
        </textarea>

        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Send
        </button>

        {/* رسالة تأكيد */}
        {Emailsubmit && <h1 className="text-green-500 mt-4">Email sent successfully!</h1>}
      </form>
    </section>
  );
};

export default EmailSection;
