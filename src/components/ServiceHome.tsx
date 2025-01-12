import {
  coach,
  edit,
  full,
  ghost,
  marketing,
  publish,
  review,
} from "../assets/res";

const ServiceHome: React.FC = () => (
  <section className="pb-6 bg-sec font-merri no-scrollbar overflow-y-scroll text-center">
    <div className="py-7 flex justify-center">
      <div className="relative w-[80vw] py-6 border-b-[3px] border-white">
        <h2 className="text-4xl md:text-5xl text-sec1 font-bold font-merri text-center">
          WordSmitters Services
        </h2>
      </div>
    </div>

  

    <div className="grid grid-cols-1 gap-8">
      {/* Writing-Only Services */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[40vw] mb-5 flex justify-center">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={full}
              alt=""
            />
          </div>
          <div className="w-full md:w-[60vw] px-4 md:px-6 text-left md:text-right">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5">
              Full-Service (Writing to Publishing)
            </h3>
            <ul className="list-inside text-white list-disc space-y-3 text-sm md:text-lg">
              <li>Complete writing and content creation.</li>
              <li> Editing, formatting, and proofreading.</li>
              <li> ISBN registration and cover design.</li>
              <li>
                Publishing and distribution through various channels (e.g.{" "}
                <br />
                Book Stores, Amazon Kindle or other platforms).
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Writing-Only Services */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          {/* Text Section */}
          <div className="w-full md:w-[60vw] px-4 md:px-6 order-last md:order-none">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5 text-left">
              Writing-Only Services
            </h3>
            <ul className="list-inside list-disc text-white space-y-3 text-sm md:text-lg text-left">
              <li>Content creation and ghostwriting.</li>
              <li>
                Tailored writing services for novels, articles, and scripts.
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[40vw] mb-5 flex justify-center md:justify-end">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={ghost}
              alt="Book Marketing & Promotion"
            />
          </div>
        </div>
      </div>

      {/* Publishing Services */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[40vw] mb-5 flex justify-center">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={publish}
              alt=""
            />
          </div>
          <div className="w-full md:w-[60vw] px-4 md:px-6 text-left md:text-right">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5">
              Publishing-Only Services
            </h3>
            <ul className="list-inside list-disc text-white space-y-3 text-sm md:text-lg">
              <li>Manuscript formatting, editing, and proofreading.</li>
              <li>ISBN generation (if applicable).</li>
              <li>Cover design and layout.</li>
              <li>Distribution and platform management.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Book Marketing */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          {/* Text Section */}
          <div className="w-full md:w-[60vw] px-4 md:px-6 order-last md:order-none">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5 text-left">
              Book Marketing & Promotion
            </h3>
            <ul className="list-inside list-disc text-white space-y-3 text-sm md:text-lg text-left">
              <li>Social media promotion strategies for authors.</li>
              <li>Press release writing and media outreach.</li>
              <li>Book launch planning and event management.</li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[40vw] mb-5 flex justify-center md:justify-end">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={marketing}
              alt="Book Marketing & Promotion"
            />
          </div>
        </div>
      </div>

      {/* Editing & Proofreading */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[40vw] mb-5 flex justify-center">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={edit}
              alt=""
            />
          </div>
          <div className="w-full md:w-[60vw] px-4 md:px-6 text-left md:text-right">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5">
              Editing & Proofreading
            </h3>
            <ul className="list-inside list-disc text-white space-y-3 text-sm md:text-lg text-right">
              <li>
                In-depth structural editing (e.g., pacing, character
                development).
              </li>
              <li>Copyediting (grammar, punctuation, consistency).</li>
              <li>Proofreading for final polish.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coaching Services */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          {/* Text Section */}
          <div className="w-full md:w-[60vw] px-4 md:px-6 order-last md:order-none">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5 text-left">
              Coaching & Consultation
            </h3>
            <ul className="list-inside list-disc space-y-3 text-white text-sm md:text-lg text-left">
              <li>One-on-one coaching for aspiring writers.</li>
              <li>Writing workshops and mentorship.</li>
              <li>Publishing guidance and industry insight.</li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[40vw] mb-5 flex justify-center md:justify-end">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={coach}
              alt="Book Marketing & Promotion"
            />
          </div>
        </div>
      </div>

      {/* Book Review */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[40vw] mb-5 flex justify-center">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={review}
              alt=""
            />
          </div>
          <div className="w-full md:w-[60vw] px-4 md:px-6 text-left md:text-right">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5">
              Book Reviews & Critiques
            </h3>
            <ul className="list-inside list-disc text-white space-y-3 text-sm md:text-lg text-right">
              <li>
                Offering professional book reviews or critiques for authors to{" "}
                <br /> improve their work before submission or publishing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Formatting Services */}
      <div className="flex justify-center">
        <div className="w-[95vw] border-b-[3px] border-white sm:p-5 flex flex-col md:flex-row justify-between">
          {/* Text Section */}
          <div className="w-full md:w-[60vw] px-4 md:px-6 order-last md:order-none">
            <h3 className="text-xl md:text-2xl font-semibold text-black pb-4 md:pb-5 text-left">
              Formatting for E-books and Print
            </h3>
            <ul className="list-inside list-disc space-y-3 text-white text-lg md:text-lg text-left">
              <li>
                {" "}
                Offering specialized formatting for Kindle, EPUB, and other
                e-book formats, <br />
                as well as print formatting for physical books.
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-[40vw] mb-5 flex justify-center md:justify-end">
            <img
              className="w-[50%] md:w-[60%] aspect-square rounded-full"
              src={coach}
              alt="Book Marketing & Promotion"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHome;
