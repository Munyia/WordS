import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import Services from "../components/ServiceHome";
import Carousel from "../components/Carousel";

const words = ["Ghostwriting", "Publishing", "Editing", "Book Review"];
const testimonials = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-k83MyoiH43lpI6Y-TY17A2JCPudD_7Av9A&s",
    quote: `"I wanted to publish my first novel, and WORDSMITTERS made it possible. The coaching, ghostwriting, and publishing support were beyond my expectations."`,
    name: "Dan-Sada T",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-k83MyoiH43lpI6Y-TY17A2JCPudD_7Av9A&s",
    quote: `"WORDSMITTERS' editing and proofreading services took my manuscript to the next level. Their attention to detail is exceptional!"`,
    name: "Halima A ",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-k83MyoiH43lpI6Y-TY17A2JCPudD_7Av9A&s",
    quote: `"The marketing strategies from WORDSMITTERS helped me promote my book effectively. The press release writing and social media strategies were spot on."`,
    name: "Tosin A",
  },
];
const Home: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-merri">
      <Header />
      <header className="p-6 sm:p-8 mt-24 sm:mt-18 text-center">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold">
          <div className="mb-4">Professional</div>
          <div className="relative text-sec1 h-[60px] sm:h-[80px] md:h-[100px] ">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[currentWordIndex]}
                className="absolute left-0 text-sec1 w-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="">Services</div>
        </h1>
        <p className="mt-4 text-base sm:text-xl md:text-2xl">
          Transform your ideas into compelling stories and impactful content
          with Wordsmitters. <br />
          We specialize in crafting words that resonate, <br />
          ensuring your message is both powerful and memorable. <br />
        </p>
        <a
          href="#footer"
          className="inline-block mt-6 bg-sec1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-pry"
        >
          Connect with us
        </a>
      </header>

      <Services />

      <section className="p-4 sm:p-6 text-center mt-8 mx-auto max-w-screen-xl border-b-[3px] border-t-[3px] border-sec1">
        <h2 className="text-2xl text-sec1 sm:text-2xl font-bold">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">Expert Writers</h3>
            <p>
              Seasoned professionals in various writing domains, delivering
              high-quality content.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">
              Affordable Pricing
            </h3>
            <p>
              Top-notch services tailored to your budget, without compromising
              quality.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">
              Timely Delivery
            </h3>
            <p>
              Your projects delivered when you need them, with strict adherence
              to deadlines.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">
              Confidentiality Guaranteed
            </h3>
            <p>
              Your privacy is our priority. We ensure all projects are handled
              with strict confidentiality.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">
              Tailored to Your Voice
            </h3>
            <p>
              We craft every project to reflect your unique style and tone,
              making it truly yours.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">Proven Results</h3>
            <p>
              Our expert writers have a track record of delivering exceptional
              content that achieves results.
            </p>
          </div>
        </div>
        <a
          href="#footer"
          className="inline-block mt-6 bg-sec1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-pry"
        >
          Connect with us
        </a>
      </section>

      <section className="p-4 sm:p-6 text-center mx-auto max-w-screen-xl border-b-[3px] border-sec1">
        <h2 className="text-2xl text-sec1 sm:text-2xl font-bold">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">Consultation</h3>
            <p>
              Share your vision and let us understand your unique needs and
              goals.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">Proposal</h3>
            <p>
              Receive a customized plan that outlines how we’ll bring your
              vision to life.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">Creation</h3>
            <p>
              We bring your project to life with creativity, expertise, and
              attention to detail.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg sm:text-lg font-semibold">Delivery</h3>
            <p>
              Receive work ready to inspire and make an impact in your field.
            </p>
          </div>
        </div>
        <a
          href="#footer"
          className="inline-block mt-6 bg-sec1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-pry"
        >
          Connect with us
        </a>
      </section>
      <section className=" pb-12 my-8 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl text-sec font-[verdana] font-bold  mb-8">
            What Our Clients Say
          </h2>

          {/* Carousel for testimonials */}
          <div className="w-full py-5 rounded-3xl ">
            <Carousel autoslide={true} autoslideinterval={5000}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col items-center"
                >
                  <img
                    src={testimonial.image}
                    alt={`Customer ${testimonial.name}`}
                    className="w-16 h-16 object-cover overflow-hidden rounded-full mb-4 shadow-md" // Customer image
                  />
                  <p className="text-base text-sec italic  ">
                    "{testimonial.quote}"
                  </p>{" "}
                  {/* Customer quote */}
                  <p className="font-semibold pb-10 text-sec1">
                    {testimonial.name}
                  </p>{" "}
                  {/* Customer name and location */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
