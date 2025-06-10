import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Shield,
  Users,
  TrendingUp,
  Mail,
  PencilLine,
  BookOpenCheck,
  PenTool,
  Heart,
} from "lucide-react";

const Portfolio: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Working with Wordsmitters transformed my business communication. They captured my voice perfectly and helped me articulate complex ideas with clarity and impact.",
      author: "Nafisa R.",
    },
    {
      quote:
        "The quality of writing and attention to detail was outstanding. They helped me publish content I'm truly proud to put my name on.",
      author: "Prince D.",
    },
    {
      quote:
        "The ghostwriting service exceeded all expectations. They turned my scattered ideas into a cohesive, compelling narrative that truly represents my expertise.",
      author: "chief Rotimi.",
    },
    {
      quote:
        "Professional, creative, and incredibly efficient. They delivered content that not only met our brand voice but elevated it to new heights.",
      author: "Nkechi R.",
    },
    {
      quote:
        "Exceptional service from start to finish. They understood our vision and delivered content that perfectly aligned with our goals.",
      author: "Bassey A.",
    },
  ];

 const projectTypes = [
  {
    title: "Executive Thought Leadership",
    category: "Ghostwriting",
        color: 'bg-orange-200',
    iconColor: 'text-orange-600',
    description:
      "C-suite executives sharing industry insights and strategic perspectives through articles and speeches.",
    metrics: "Published in 15+ major publications",
    icon: Users,
  },
  {
    title: "Business Book Projects",
       color: 'bg-green-200',
    iconColor: 'text-green-600',
    category: "Book Writing",
    description:
      "Complete book manuscripts for entrepreneurs and business leaders sharing their expertise.",
    metrics: "3 bestseller achievements",
    icon: TrendingUp,
  },
  {
    title: "Industry White Papers",
     color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
    category: "Business Writing",
    description:
      "In-depth research and analysis pieces for companies establishing thought leadership.",
    metrics: "3,000+ downloads across projects",
    icon: Shield,
  },
  {
    title: "Personal Memoirs",
        color: 'bg-orange-200',
    iconColor: 'text-orange-600',
    category: "Ghostwriting",
    description:
      "Life stories and personal journeys crafted with sensitivity and authenticity.",
    metrics: "100% client satisfaction",
    icon: Users,
  },
  {
    title: "Content Marketing Series",
       color: 'bg-green-200',
    iconColor: 'text-green-600',
    category: "Content Creation",
    description:
      "Comprehensive content strategies including blogs, articles, and social media campaigns.",
    metrics: "Average 200% engagement increase",
    icon: TrendingUp,
  },
  {
    title: "Corporate Communications",
     color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
    category: "Business Writing",
    description:
      "Internal and external communications that align with brand voice and corporate values.",
    metrics: "Improved stakeholder engagement",
    icon: Shield,
  },
  {
    title: "Heartfelt Poetry & Keepsakes",
         color: 'bg-orange-200',
    iconColor: 'text-orange-600',
    category: "Heartfelt Features",
    description:
      "Custom poems, photo books, and couple narratives that capture deep emotions and special occasions.",
    metrics: "Over 200 personalized features delivered",
    icon: Heart,
  },
  {
    title: "Creative Campaign Copy",
     color: 'bg-green-200',
       iconColor: 'text-green-600',
    category: "Marketing and Copywriting",
    description:
      "Persuasive ad copy, social media blurbs, and newsletter content tailored to drive conversions.",
    metrics: "3x average CTR increase for clients",
    icon: PenTool,
  },
  {
    title: "Scripted Storytelling",
   color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
    category: "Creative Writing",
    description:
      "Scripts, jingles, and poetic compositions designed for multimedia storytelling and entertainment.",
    metrics: "Featured in 3+ short films & productions",
    icon: BookOpenCheck,
  },
  {
    title: "Academic Research Projects",
      color: 'bg-orange-200',
    iconColor: 'text-orange-600',
    category: "Academic and Research Writing",
    description:
      "Well-cited research papers, case studies, and educational content for academic and institutional use.",
    metrics: "Used in 12+ universities ",
    icon: PencilLine,
  },
  {
    title: "Personal Tributes & Letters",
      color: 'bg-green-200',
    iconColor: 'text-green-600',
    category: "Personal Content",
    description:
      "Meaningful letters, obituaries, and essays crafted to express personal sentiments and reflections.",
    metrics: "100% approval rate from clients",
    icon: Mail,
  }
];

const industries = [
  { name: "Technology", bg: "bg-blue-100", text: "text-blue-700" },
  { name: "Healthcare", bg: "bg-pink-100", text: "text-pink-700" },
  { name: "Finance", bg: "bg-green-100", text: "text-green-700" },
  { name: "Education", bg: "bg-yellow-100", text: "text-yellow-800" },
  { name: "Real Estate", bg: "bg-indigo-100", text: "text-indigo-700" },
  { name: "Consulting", bg: "bg-purple-100", text: "text-purple-700" },
  { name: "Legal", bg: "bg-gray-200", text: "text-gray-800" },
  { name: "Marketing", bg: "bg-orange-100", text: "text-orange-700" },
  { name: "Nonprofit", bg: "bg-emerald-100", text: "text-emerald-700" },
  { name: "Manufacturing", bg: "bg-red-100", text: "text-red-700" },
  { name: "Retail", bg: "bg-teal-100", text: "text-teal-700" },
  { name: "Hospitality", bg: "bg-rose-100", text: "text-rose-700" },
];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-pry">Impact</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              While we can't share the actual content due to the confidential
              nature of ghostwriting, we can showcase the types of projects
              we've completed and the results we've achieved for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pry/10 to-sec/10 p-8 rounded-2xl text-center"
          >
            <Shield className="w-16 h-16 text-sec1 mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Confidentiality is Our <span className="text-pry">Promise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As professional ghostwriters, we maintain strict confidentiality
              agreements with all our clients. The work we create becomes
              entirely theirs, published under their name and voice. Below, we
              share project types and outcomes while respecting our clients'
              privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project <span className="text-sec">Types</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse into the diverse range of projects we've successfully
              completed across industries.
            </p>
          </motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projectTypes.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
    >
      {/* Badge + Icon */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-block ${project.color} text-gray-900 px-3 py-1 rounded-full text-sm font-medium`}
        >
          {project.category}
        </span>
        <project.icon className={`w-6 h-6 ${project.iconColor}`} />
      </div>

      {/* Title & Description */}
      <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

      {/* Metric */}
      <div className="border-t pt-4">
        <p className="text-sm font-medium text-sec1">{project.metrics}</p>
      </div>
    </motion.div>
  ))}
</div>
    </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client <span className="text-sec1">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our clients about their experience working with
              Wordsmitters.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center"
              >
                <Quote className="w-12 h-12 text-sec1 mx-auto mb-6" />
                <p className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="border-t pt-6">
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonials[activeTestimonial].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-pry"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 hover:text-pry"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial
                      ? "bg-sec1"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Measurable <span className="text-pry">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work delivers tangible outcomes that matter to your business
              and personal goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Projects Delivered",
                description: "Across all industries and content types",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                description: "Based on project completion surveys",
              },
              {
                number: "17M+",
                label: "Words Written",
                description: "Of high-quality, engaging content",
              },
              {
                number: "150%",
                label: "Avg. Engagement Increase",
                description: "For client content performance",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-sec1 mb-2">
                  {stat.number}
                </div>
                <p className="font-semibold text-gray-900 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries <span className="text-sec">We Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across diverse sectors, allowing us to
              understand and write for any industry.
            </p>
          </motion.div>

   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
  {industries.map((industry, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`${industry.bg} ${industry.text} p-4 rounded-lg text-center font-medium transition-all duration-200 hover:brightness-110`}
    >
      <span>{industry.name}</span>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our growing list of satisfied clients and transform your
              ideas into compelling content.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-sec1 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200"
            >
              Start Your Project Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
