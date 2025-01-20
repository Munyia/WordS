import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
    return (
      <section id="contact" className="  lg:h-full h-screen text-white">
        <Header />
        <div className="max-w-lg mx-auto mt-28 mb-4 py-8 border-sec shadow-2xl rounded-2xl border-2 ">
          <form
            action="https://formspree.io/f/mrbbdzol" 
            method="POST"
            className="flex flex-col gap-5 max-w-md mx-auto"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sec text-xs font-semibold">
                Your Email
              </label>
              <input
                type="email" 
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-lg text-black placeholder-black bg-transparent border border-[#414141] focus:outline-none focus:border-[#F28908]"
                placeholder="Your Email"
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <label
                htmlFor="textarea"
                className="text-sec text-xs font-semibold"
              >
                Send me a message
              </label>
              <textarea
                name="message" // Match Formspree's naming convention
                id="textarea"
                rows={5}
                className="w-full p-3 rounded-lg text-black placeholder-black bg-transparent border border-[#414141] focus:outline-none focus:border-[#F28908]"
                placeholder="Send me a message"
                required
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full sm:w-40 self-start mt-2 bg-sec text-white font-semibold p-3 rounded-md border hover:bg-sec1 hover:text-black hover:border-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer/>
      </section>
    );
  };
  
  export default Contact;
  