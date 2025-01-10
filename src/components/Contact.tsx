import { motion } from "framer-motion";

const words = ["Ghostwriting", "Publish", "Editing", "Book Review"];

const Contact: React.FC = () => {
  return (
    <div className="font-merri">

      <header className="p-8 mt-14 text-center">
        <h1 className="text-9xl font-bold">
          Professional{" "}
          <motion.div
            className="inline-block text-accent"
            key="word-sequence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 5 * words.length, // Total duration for all words (including delays)
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Loop through each word */}
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0], // Fade in and fade out
                }}
                transition={{
                  duration: 5, // Duration for each word to fade in and out
                  delay: index * 6, // Delay each word by 6 seconds (5 seconds visible + 1 second fade)
                  repeatDelay: 5 * words.length, // Pause after all words have been shown
                  repeat: Infinity, // Repeat infinitely
                  repeatType: "loop",
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <br />
          Services
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-3xl">
          Bringing your words to life, one project at a time.
          <br />
          <span className="block my-2">
            Your ideas, our words — together, a masterpiece.
          </span>
          Elevate your content with expert writing tailored for you.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 bg-accent text-white px-6 py-3 rounded-lg shadow hover:bg-secondary"
        >
          Connect with Me
        </a>
      </header>
     
      <section className="p-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">Expert Writers</h3>
            <p>Seasoned professionals in various writing domains.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">Affordable Pricing</h3>
            <p>Top-notch services tailored to your budget.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">Timely Delivery</h3>
            <p>Your projects delivered when you need them.</p>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Contact;
