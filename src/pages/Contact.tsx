import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, MessageCircle, FileText, PenLine, BookOpen, Edit3, Search, Briefcase, Layers, Image, Heart, Building, MessageSquareText, GraduationCap, Megaphone, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'info@wordsmitters.com.ng',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '  +234 704 722 3731',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Open 24 hours',
      subtext: 'Weekend consultations available'
    },
    {
      icon: MessageCircle,
      title: 'Response Time',
      description: 'Initial consultation within 24 hours',
    }
  ];

const serviceCategories = [
  {
    title: 'Writing & Editing',
    color: 'bg-green-200',
    iconColor: 'text-green-600',
    services: [
      { icon: PenLine, name: 'Ghostwriting', description: 'Professionally writing books, articles, or stories credited to you.' },
      { icon: BookOpen, name: 'Book Writing', description: 'Complete book writing services from ideation to final manuscript.' },
      { icon: Edit3, name: 'Editing & Proofreading', description: 'Refine grammar, clarity, and formatting in your texts.' },
      { icon: Search, name: 'SEO Writing', description: 'Optimize content to rank higher on search engines.' },
      { icon: PenLine, name: 'Creative Writing', description: 'Original scripts, lyrics, poetry, and storytelling content.' },
      { icon: MessageSquareText, name: 'Speechwriting', description: 'Compelling speeches for weddings, politics, or events.' },
      { icon: FileText, name: 'Content Writing', description: 'Blog posts, website copy, and articles tailored to your brand.' },
      { icon: GraduationCap, name: 'Academic and Research Writing', description: 'Papers, theses, and research documents for academic needs.' },
    ],
  },
  {
    title: 'Corporate & Marketing',
     color: 'bg-orange-100',
    iconColor: 'text-orange-600',
    services: [
      { icon: Briefcase, name: 'Business Writing', description: 'Plans, proposals, and formal business documents.' },
      { icon: Building, name: 'Corporate Writing', description: 'Company profiles, internal communications, and reports.' },
      { icon: Megaphone, name: 'Marketing and Copywriting', description: 'Ad copy, social media, and marketing campaign content.' },
    ],
  },
  {
    title: 'Creative & Visual',
   color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
    services: [
      { icon: Layers, name: 'Content Creation', description: 'Strategy and production of engaging multimedia content.' },
      { icon: Image, name: 'Graphic and Visual Storytelling', description: 'Manga, comic strips, and visual narratives.' },
      { icon: Heart, name: 'Heartfelt Features', description: 'Poems, wedding brochures, and special event features.' },
    ],
  },
  {
    title: 'Personal & Miscellaneous',
     color: 'bg-green-200',
    iconColor: 'text-green-600',
    services: [
      { icon: Mail, name: 'Personal Content', description: 'Tributes, letters, and personalized written pieces.' },
    ],
  },
];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-5 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's <span className="text-pry">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your ideas into compelling content? We're here to help you tell your story 
              in a way that resonates with your audience and achieves your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Start Your Project
              </h2>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we'll provide a custom quote tailored to your specific needs.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pry/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-pry" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                   {info.title === 'Call Us' ? (
  <a href={`tel:${info.description.trim()}`} className="text-gray-700 hover:underline hover:text-blue-600">
    {info.description}
  </a>
) : info.title === 'Email Us' ? (
  <a href={`mailto:${info.description.trim()}`} className="text-gray-700 hover:underline ">
    {info.description}
  </a>
) : (
  <p className="text-gray-700">{info.description}</p>
)}

                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pry rounded-full mt-2 flex-shrink-0"></div>
                    <span>Initial consultation to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pry rounded-full mt-2 flex-shrink-0"></div>
                    <span>Detailed project proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pry rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborative content creation process</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-pry rounded-full mt-2 flex-shrink-0"></div>
                    <span>Revisions and refinements until you're satisfied</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-pry">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Select the service you're interested in, or tell us about multiple needs in your message.
            </p>
          </motion.div>

     <div className="space-y-12">
      {serviceCategories.map((category, catIdx) => (
        <div key={catIdx}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
               className={`group relative px-5 py-8 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300
  ${category.title === 'Writing & Editing' ? 'bg-green-100' :
    category.title === 'Corporate & Marketing' ? 'bg-orange-100' :
    category.title === 'Creative & Visual' ? 'bg-yellow-100' :
    category.title === 'Personal & Miscellaneous' ? 'bg-green-100' : ''
  }`}
        >
           <div className="flex items-center gap-4 mb-3">
                  <div className={`p-2 rounded-full ${
  category.title === 'Writing & Editing' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' :
  category.title === 'Corporate & Marketing' ? 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' :
  category.title === 'Creative & Visual' ? 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white' :
  category.title === 'Personal & Miscellaneous' ? 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' : ''
}`}>
  <service.icon className="w-6 h-6" />
</div>

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sb">
                    {service.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 min-h-[48px]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently <span className="text-sec1">Asked Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "How do you ensure confidentiality?",
                answer: "We take confidentiality seriously. All client projects are protected by comprehensive NDAs, and we never share or discuss your content with third parties."
              },
              {
                question: "What's the typical project timeline?",
                answer: "Timeline varies based on project scope. We provide detailed timelines with every proposal."
              },
              {
                question: "Do you work with clients internationally?",
                answer: "Yes! We work with clients worldwide. We accommodate different time zones and communication preferences to ensure smooth collaboration."
              },
              {
                question: "How do you capture my unique voice?",
                answer: "We start with detailed consultations, review your existing content, and often conduct interviews to understand your perspective, style, and messaging goals."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;