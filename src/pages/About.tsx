import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower individuals and businesses by transforming their ideas into compelling, authentic narratives that resonate with their target audience.',
    color: 'bg-orange-200',
    iconColor: 'text-orange-600'
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the premier ghostwriting service that bridges the gap between brilliant ideas and exceptional written content.',
    color: 'bg-yellow-200',
    iconColor: 'text-yellow-600'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project, ensuring each piece reflects professionalism and creativity.',
    color: 'bg-green-200',
    iconColor: 'text-green-600'
  }
];


const whyChooseUs = [
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Our writers and developers bring years of experience crafting content and building digital products that make an impact.',
    color: 'bg-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description:
      'From polished manuscripts to well-tested code, everything we deliver goes through rigorous review to ensure it’s top-tier.',
    color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
  },
  {
    icon: BookOpen,
    title: 'Diverse Expertise',
    description:
      'Whether it’s storytelling or software, we handle projects across industries with creative and technical precision.',
    color: 'bg-green-200',
    iconColor: 'text-green-600',
  },
];


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
              About <span className="text-pry">Wordsmitters</span>
            </h1>
         <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
  We’re passionate storytellers and skilled technologists who believe every voice and vision deserves to be heard — and built.  
  Whether it’s a compelling manuscript or a custom web application, we transform ideas into words, visuals, and digital solutions 
  that make an impact. At Wordsmitters, your story doesn’t just get told — it gets experienced.
</p>

          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
     <section className="py-10 bg-sec/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          {/* Title with icon */}
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-serif text-base font-semibold px-3 py-1 rounded-full ${value.color} text-gray-900`}>
              {value.title}
            </h3>
            <value.icon className={`w-6 h-6 ${value.iconColor}`} />
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
             <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
  Our <span className="text-sec1">Story</span>
</h2>

<p className="text-gray-600 mb-6 leading-relaxed">
  Wordsmitters started with a simple observation: brilliant minds often have powerful ideas but not always the time, tools, or voice to bring them to life.
</p>

<p className="text-gray-600 mb-6 leading-relaxed">
  What began as a small team of writers and editors helping individuals shape their narratives has grown into a multidisciplinary studio — combining storytelling, design, and development. Today, we work with clients around the world to craft books, build websites, launch apps, and design digital experiences that speak clearly and work beautifully.
</p>

<p className="text-gray-600 leading-relaxed">
  Whether you're publishing your first book or building your next big product, we’re here to help you share your vision — and make sure it leaves a mark.
</p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
  <p className="text-3xl text-sec1 leading-tight mb-4">“</p>
  <p className="text-lg text-gray-700 italic leading-relaxed">
    Great writing isn't about perfect grammar or fancy words. It's about connection — telling real stories and creating content that actually matters.
  </p>
  
  <p className="text-3xl text-sec1 text-right leading-tight mt-4">”</p>
  <div className="text-right mt-2">
    <p className="font-semibold text-gray-900">The Wordsmitters Team</p>
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20  bg-sec/20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why We <span className="text-pry">Stand Out</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines creative excellence with strategic thinking to deliver content that truly makes an impact.
            </p>
          </motion.div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {whyChooseUs.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Top row with title badge and icon */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`font-serif text-base font-semibold px-3 py-1 rounded-full text-gray-900 ${item.color}`}
        >
          {item.title}
        </h3>
        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
         <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
  Ready to Work Together?
</h2>
<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
  Let’s talk about how we can turn your ideas into compelling content or high-performing digital products — built to engage, inspire, and deliver results.
</p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-sec1 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sec1 transition-all duration-200"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;