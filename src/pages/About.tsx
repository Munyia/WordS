import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower individuals and businesses by transforming their ideas into compelling, authentic narratives that resonate with their target audience.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the premier ghostwriting service that bridges the gap between brilliant ideas and exceptional written content.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, ensuring each piece reflects professionalism and creativity.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our writers have decades of combined experience across various industries and writing styles.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every piece undergoes rigorous editing and quality checks to ensure perfection.'
    },
    {
      icon: BookOpen,
      title: 'Diverse Expertise',
      description: 'From business content to creative writing, we cover all genres with equal expertise.'
    }
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
              We are passionate storytellers and skilled craftspeople who believe that every voice deserves to be heard. 
              Founded on the principle that great writing can transform ideas into impact, we've dedicated ourselves to 
              helping individuals and businesses share their stories with the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-10 bg-sec/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {values.map((value, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="text-center border border-gray-200 rounded-2xl shadow-xl bg-white p-6  hover:shadow-md transition-all duration-300"
  >
    <div className="w-20 h-20 bg-pry/40 rounded-full flex items-center justify-center mx-auto mb-6">
      <value.icon className="w-10 h-10 text-sec" />
    </div>
    <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
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
                Wordsmitters was born from a simple observation: many brilliant minds have incredible stories to tell, 
                but not everyone has the time, skill, or confidence to put those stories into words that truly captivate.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our founding team of seasoned writers, editors, and content strategists came together with a shared 
                mission: to bridge the gap between great ideas and exceptional written content. We've worked with 
                everyone from Fortune 500 executives to first-time authors, helping them find their voice and 
                share their message with the world.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be trusted partners to clients across industries, helping them create content 
                that not only informs and engages but also inspires action and builds lasting connections.
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
                <div className="text-6xl text-sec1 mb-4">"</div>
                <p className="text-lg text-gray-700 italic my-2">
                  Great writing is not about perfect grammar or fancy words. It's about connecting with people, 
                  sharing authentic stories, and creating content that matters.
                </p>
                <div className="text-6xl text-right text-sec1 mt-4">"</div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">The Wordsmitters Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-pry/40 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-sec" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
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
              Let's discuss how we can help you transform your ideas into compelling content that engages and inspires.
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