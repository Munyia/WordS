import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <section className="no-scrollbar overflow-y-scroll">
      <Header />
      <div className="max-w-screen-xl font-merri p-6 mt-24 sm:mt-18 text-center mx-auto sm:p-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl text-sec1  sm:text-4xl font-bold ">
            About Wordsmitters
          </h1>
          <p className="text-sm sm:text-lg mt-2">
            Empowering your stories, ideas, and narratives to inspire the world.
          </p>
        </div>

        {/* About Section */}
        <div className="rounded-lg p-4 sm:p-8 shadow mb-10">
          <h2 className="text-2xl sm:text-3xl text-sec1 font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-sm sm:text-lg">
            At Wordsmitters, we are storytellers, wordsmiths, and creators
            passionate about helping you share your voice with the world. With a
            deep understanding of diverse industries and genres, we specialize
            in crafting content that resonates and inspires.
          </p>
          <a
            href="#footer"
            className="inline-block mt-6 bg-sec1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-pry"
          >
            Connect with us
          </a>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-lg p-4 sm:p-8 shadow">
            <h2 className="text-2xl sm:text-3xl text-sec1 font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-lg">
              To provide expert ghostwriting and content creation services that
              transform ideas into powerful narratives, fostering connection and
              impact.
            </p>
          </div>
          <div className="rounded-lg p-4 sm:p-8 shadow">
            <h2 className="text-2xl sm:text-3xl text-sec1 font-bold mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-lg">
              To be the trusted partner for individuals and organizations
              seeking authentic, high-quality written works that leave a lasting
              impression.
            </p>
          </div>
        </div>

        {/* Why We Stand Out */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-sec p-4 rounded-lg inline-block">
            Why We Stand Out
          </h2>
          <ul className="space-y-4 text-sm sm:text-lg">
            <li className="flex items-start space-x-4">
              <span className="text-sec1 text-lg sm:text-2xl font-bold">•</span>
              <p>
                Personalized Approach: Every project reflects your unique voice
                and vision.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-sec1 text-lg sm:text-2xl font-bold">•</span>
              <p>Confidentiality: Your ideas remain entirely yours.</p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-sec1 text-lg sm:text-2xl font-bold">•</span>
              <p>
                Proven Expertise: A team of skilled writers dedicated to
                excellence.
              </p>
            </li>
          </ul>
        </div>

        {/* Meet the Team */}
        <div className="rounded-lg p-4 sm:p-8 shadow mb-10">
          <h2 className="text-2xl sm:text-3xl text-sec1 font-bold mb-4">
            Meet the Wordsmitters Team
          </h2>
          <p className="text-sm sm:text-lg">
            At Wordsmitters, we take pride in our team of professional writers
            who are dedicated to delivering excellence. Our writers undergo an
            extensive selection process, ensuring they possess not only talent
            but a deep understanding of your project’s needs. We don’t assign
            just any writer to your work—only those with a specialized passion
            and expertise in your subject matter. Our goal is to deliver
            impactful, results-driven content that aligns with your vision and
            exceeds expectations.
          </p>
          <a
            href="#footer"
            className="inline-block mt-6 bg-sec1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-pry"
          >
            Connect with us
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-sm sm:text-xl font-semibold">
            Let <span className="text-sec1">Wordsmitters</span> shape your story
            today.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AboutPage;
