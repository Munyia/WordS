import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  PenTool, 
  FileText, 
  Edit, 
  Search, 
  BookOpen, 
  Briefcase, 
  ArrowRight,
  CheckCircle ,
  Image,
  Heart,
  GraduationCap,
  MessageSquareText,
  PencilLine,
  Mail,
  Megaphone,
} from 'lucide-react';

const Services: React.FC = () => {


const services = [
  {
    icon: PenTool,
    title: 'Ghostwriting',
    description: 'Transform your ideas into compelling narratives with our expert ghostwriting services.',
    features: ['Fiction (novels, short stories)', 'Non-fiction (memoirs, biographies, self-help books)', 'Speeches & Presentations', 'Thought Leadership'],
    color: 'pry',
  },
  {
    icon: BookOpen,
    title: 'Book Writing',
    description: 'From concept to completion, we help bring your book ideas to life.',
    features: ['Non-fiction Books', 'Business Books', 'Autobiographies', 'Industry Guides'],
    color: 'sec',
  },
  {
    icon: Image,
    title: 'Graphic and Visual Storytelling',
    description: 'Bring your stories to life visually with our graphic novel and manga creation services.',
    features: ['Graphic Novels', 'Manga', 'Comic Strips'],
    color: 'sec1',
  },
  {
    icon: Heart,
    title: 'Heartfelt Features',
    description: 'Capture emotions with bespoke poetic and visual keepsakes for special occasions.',
    features: ['Custom Poems with Photos', 'Uniquely Titled Books', 'Wedding Brochures', 'Celebration Keepsakes'],
    color: 'pry',
  },
  {
    icon: Briefcase,
    title: 'Corporate Writing',
    description: 'Professional writing that reflects your brand’s voice and supports business goals.',
    features: ['Business Plans', 'Reports & Whitepapers', 'Corporate Profiles', 'Branding Content'],
    color: 'sec',
  },
  {
    icon: FileText,
    title: 'Content Writing',
    description: 'Engaging content that connects with your audience and drives meaningful results.',
    features: ['Articles and Blogs', 'Website Copywriting', 'Product Descriptions', 'Newsletters'],
    color: 'sec1',
  },
  {
    icon: MessageSquareText,
    title: 'Speechwriting',
    description: 'Deliver powerful speeches tailored for any occasion with our expert writing support.',
    features: ['Keynote Addresses', 'Wedding & Special Occasion Speeches', 'Political & Corporate Speeches'],
    color: 'pry',
  },
  {
    icon: GraduationCap,
    title: 'Academic and Research Writing',
    description: 'Well-researched academic content that meets institutional standards and requirements.',
    features: ['Research Papers', 'Theses', 'Case Studies', 'Educational Materials'],
    color: 'sec',
  },
  {
    icon: Edit,
    title: 'Editing & Proofreading',
    description: 'Polish your content to perfection with detailed editing and professional review.',
    features: ['Manuscripts', 'Resumes & Cover Letters', 'Academic Papers', 'Content Consistency'],
    color: 'sec1',
  },
  {
    icon: PencilLine,
    title: 'Creative Writing',
    description: 'Original creative work crafted with imagination and flair for various formats.',
    features: ['Screenplays & Scripts', 'Poetry & Song Lyrics', 'Advertisements & Jingles'],
    color: 'pry',
  },
  {
    icon: Mail,
    title: 'Personal Content',
    description: 'Meaningful writing for personal use that reflects your voice and intentions.',
    features: ['Letters & Emails', 'Obituaries & Tributes', 'Personal Essays'],
    color: 'sec',
  },
  {
    icon: Megaphone,
    title: 'Marketing and Copywriting',
    description: 'Conversion-focused content that drives engagement and business growth.',
    features: ['Sales Copy', 'Social Media Content', 'Email Campaigns & Newsletters'],
    color: 'sec1',
  },
  {
    icon: Search,
    title: 'SEO Writing',
    description: 'Content optimized for search engines without compromising on quality and readability.',
    features: ['SEO Articles', 'Keyword Research', 'Meta Descriptions', 'Content Strategy'],
    color: 'pry',
  },
];


  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'An in-depth session where we explore your ideas, clarify objectives, and align on tone, voice, and audience expectations to lay a strong foundation for your project.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive content strategy tailored to your specific needs and objectives.'
    },
    {
      step: '03',
      title: 'Creation',
      description: 'Our expert writers craft compelling content that captures your unique voice and message.'
    },
    {
      step: '04',
      title: 'Refinement',
      description: 'We collaborate with you to refine and perfect the content until it exceeds your expectations.'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'pry':
        return 'text-pry bg-pry/10 border-pry/20';
      case 'sec':
        return 'text-sec bg-sec/10 border-sec/20';
      case 'sec1':
        return 'text-sec1 bg-sec1/10 border-sec1/20';
      default:
        return 'text-pry bg-pry/10 border-pry/20';
    }
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
              Our <span className="text-pry">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From ghostwriting to content creation, we offer comprehensive writing services 
              that help you communicate your message with clarity, impact, and authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-sec/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white my-5 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border "
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-sec">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures every project delivers exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-sec1 text-black rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Transparent <span className="text-sec1">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in clear, honest pricing with no hidden fees. Every project is quoted based on your specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pry/10 to-sec/10 p-8 md:p-12 rounded-2xl text-center"
          >
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">Custom Project Quotes</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Each project is unique, and so is our pricing. We provide detailed quotes based on scope, 
              timeline, and complexity to ensure you get the best value for your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-sec1 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pry/90 transition-all duration-200 group"
              >
                <span>Get Your Quote</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sec/5 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project and create content that truly represents your vision and voice.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-pry text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;