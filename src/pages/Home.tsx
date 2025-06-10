import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
// import AnimatedText from '../components/AnimatedText';

const words = ["Ghost Writing", "Publishing", "Editing", "Book Review"];
const colorClasses = ["text-pry",  "text-sec1", "text-sec", "text-sec1", ];


const HomePage: React.FC = () => {
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000); // Change word every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '12', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Professional Ghostwriting',
      description: 'Transform your ideas into compelling narratives with our expert ghostwriting services.'
    },
    {
      icon: Users,
      title: 'Collaborative Process',
      description: 'We work closely with you to ensure your voice shines through every word.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every piece is crafted with meticulous attention to detail and professional standards.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-sec1/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-sec/20 rounded-full"
          />
        </div>

          <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   
        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-6 font-bold">
          <div className="mb-4">Professional</div>
          <div className="relative text-sec1 h-[60px] sm:h-[80px] md:h-[100px] ">
            <AnimatePresence mode="wait">
            <motion.span
  key={words[currentWordIndex]}
  className={`absolute left-0 w-full text-center ${colorClasses[currentWordIndex % colorClasses.length]}`}
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
      </header>

        {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
              Your Voice.
              <br />
              <span className="text-pry">Our Words.</span>
              <br />
              <AnimatedText text="Shared with the World." className="text-sec" />
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Premium ghostwriting and content creation services that transform your ideas into compelling narratives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-sec1  text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pry/90 transition-all duration-200 group"
            >
              <span>Start Your Story</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 border-2 border-pry text-sec px-8 py-4 rounded-full text-lg font-medium hover:bg-sec hover:text-white transition-all duration-200"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>
        </div> */}

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
 <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-20 gap-y-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center min-w-[140px]"
          >
            <div className="text-4xl md:text-5xl font-serif font-bold text-sec1 mb-3">
              {stat.number}
            </div>
            <p className="text-gray-600 text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-sec/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-pry">Wordsmitters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, expertise, and collaboration to deliver exceptional content that resonates with your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-pry/40 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-sec" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Services Preview Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Explore Our <span className="text-pry">Creative Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
        From ghostwriting to corporate branding, we deliver personalized content that connects, compels, and converts.
      </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto opacity-90">
              Let's work together to create compelling content that captures your unique voice and engages your audience.
            </p>
      <Link
        to="/services"
        className="inline-flex items-center space-x-2 bg-sec1 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pry/90 transition-all duration-200 group"
      >
        <span>View All Services</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  </div>
</section>


    </div>
  );
};

export default HomePage;