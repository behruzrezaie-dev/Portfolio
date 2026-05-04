import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_jnkr402",
        "template_dtfewmw",
        form,
        "jLRBMUtiVvTXs5XXn",
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section
        id="contact"
        className="relative w-full pb-28 pt-32 px-8 sm:px-20 md:px-24 lg:px-10  bg-[#FCDB74] dark:bg-[#22242d] "
      >
        <h1 className=" absolute inset-0 top-10 sm:top-5  flex justify-center  font-extrabold text-7xl  sm:text-8xl lg:text-9xl text-black/10 dark:text-white/10 pointer-events-none">
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 lg:mt-10">
          <div className="  order-1 lg:order-2">
            <img
              src="./images/contact-img.svg"
              alt="contact image"
              loading="lazy"
              className="  w-full   "
            />
          </div>
          <form onSubmit={handleSubmit} className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:mt-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="flex text-xs md:text-base font-bold tracking-[18%] uppercase text-[#22242d] dark:text-[#FCDB74]"
                >
                  Name <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="h-10 px-4 text-xs font-normal md:text-base rounded-md outline-none bg-white text-[#22242d]  "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="flex text-xs md:text-base font-bold tracking-[18%] uppercase  text-[#22242d] dark:text-[#FCDB74]"
                >
                  Email <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="h-10 px-4  text-xs font-normal md:text-base rounded-md outline-none bg-white text-[#22242d]  "
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label
                  htmlFor="subject"
                  className=" text-xs md:text-base  font-bold tracking-[18%] uppercase mt-2 text-[#22242d] dark:text-[#FCDB74]"
                >
                  subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Your Subject"
                  className=" h-10 px-4 text-xs  font-normal md:text-base rounded-md outline-none bg-white text-[#22242d]  "
                />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label
                  htmlFor="message"
                  className=" flex text-xs md:text-base  font-bold tracking-[18%] uppercase mt-2 text-[#22242d] dark:text-[#FCDB74]"
                >
                  {" "}
                  Message <span className="text-red-500 ">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message..."
                  type="text"
                  className="min-h-36 resize-none px-4 py-3 text-sm md:text-base font-normal rounded-md outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`  cursor-pointer h-10 w-28 flex gap-2 bg-white hover:text-[#584B8C] dark:hover:text-[#FCDB74] text-sm md:text-base font-semibold px-6 py-2 rounded-full ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <img src="./icons/arrow-right.svg" alt="right arrow" />
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
