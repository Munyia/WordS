import { Link } from "react-router-dom";
import Header from "../components/Header";

const ServicesPage = () => {
  const services = [
    {
      title: "Ghostwriting",
      details: [
        "Fiction (novels, short stories)",
        "Non-fiction (memoirs, biographies, self-help books)",
      ],
    },
    {
      title: "Graphic and Visual Storytelling",
      details: ["Graphic Novels", "Manga", "Comic Strips"],
    },
    {
      title: "Corporate Writing",
      details: [
        "Business plans and proposals",
        "Reports and whitepapers",
        "Corporate profiles and branding content",
      ],
    },
    {
      title: "Content Writing",
      details: ["Articles and blogs", "Website copywriting", "Product descriptions"],
    },
    {
      title: "Speechwriting",
      details: [
        "Keynote addresses",
        "Wedding and special occasion speeches",
        "Political and corporate speeches",
      ],
    },
    {
      title: "Academic and Research Writing",
      details: [
        "Research papers and theses",
        "Case studies",
        "Educational materials",
      ],
    },
    {
      title: "Editing and Proofreading",
      details: [
        "Manuscripts",
        "Resumes and cover letters",
        "Academic papers",
      ],
    },
    {
      title: "Creative Writing",
      details: ["Screenplays and scripts", "Poetry and song lyrics", "Advertisements and jingles"],
    },
    {
      title: "Personal Content",
      details: ["Letters and emails", "Obituaries and tributes", "Personal essays"],
    },
    {
      title: "Marketing and Copywriting",
      details: [
        "Advertisements and sales copy",
        "Social media content",
        "Email campaigns and newsletters",
      ],
    },
  ];

  return (
    <section className="font-merri p-6 mt-24 sm:mt-18 min-h-screen">
    <Header />
    <div className="max-w-screen-xl justify-center mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold text-sec1">Our Writing Services</h1>
        <p className="text-sm sm:text-lg mt-2 text-gray-600">
          Discover a wide range of professional writing services tailored to meet your needs.
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-sec1 mb-4">{service.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {service.details.map((detail, idx) => (
                <li key={idx} className="text-sm sm:text-base text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  
      <div className="text-center mt-6">
        <Link
          to={"/contact"}
          className="inline-block bg-sec1 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-pry"
        >
          Connect with Us
        </Link>
      </div>
    </div>
  </section>
  
  );
};

export default ServicesPage;
