import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Laptop, ShieldCheck, BarChart3,   } from 'lucide-react';
// import AnimatedText from '../components/AnimatedText';

const words = ["Ghost Writing", "Publishing", "Editing", "Book Review"];
const colorClasses = ["text-pry",  "text-sec1", "text-pry", "text-sec",  ];

const techServices = [
  { label: 'Web Development', icon: '💻' },
  { label: 'Mobile App Development', icon: '📱' },
  { label: 'UI/UX Design', icon: '🎨' },
  { label: 'E-commerce Solutions', icon: '🛒' },
  { label: 'Custom Dashboards', icon: '📊' },
  { label: 'SEO Optimization', icon: '🔍' },
  { label: 'Graphics Design', icon: '🖼️' },
  { label: 'Video Editing', icon: '🎬' },
  { label: 'Performance Optimization', icon: '🚀' }
];



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
    description: 'Transform your ideas into compelling narratives with our expert ghostwriting services.',
    color: 'bg-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: Users,
    title: 'Collaborative Process',
    description: 'We work closely with you to ensure your voice shines through every word.',
    color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every piece is crafted with meticulous attention to detail and professional standards.',
    color: 'bg-green-200',
    iconColor: 'text-green-600',
  },
  {
    icon: Laptop, 
    title: 'Modern Web & App Development',
    description: 'We build responsive, high-performance web and mobile apps tailored to your goals.',
    color: 'bg-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: ShieldCheck, 
    title: 'Built-In Security',
    description: 'Our platforms come secured with authentication, encryption, and best-practice protections.',
    color: 'bg-yellow-200',
    iconColor: 'text-yellow-600',
  },
  {
    icon: BarChart3, 
    title: 'Optimized for Performance & SEO',
    description: 'Fast load times, clean code, and SEO best practices — all built into every project.',
    color: 'bg-green-200',
    iconColor: 'text-green-600',
  }
];

  return (
    <div>
      {/* Hero Section */}

<section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  {/* Background Blobs */}
  <div className="absolute inset-0 z-0">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="absolute -top-32 -right-32 w-72 h-72 sm:w-80 sm:h-80 bg-sec1/20 rounded-full"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-sec/20 rounded-full"
    />
  </div>

  {/* Header Content */}
  <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* <h2 className="absolute text-[80px] sm:text-[120px] font-bold text-gray-200 z-0 top-20 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
    wordsmitters
  </h2> */}
    <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-bold leading-tight mb-6">
      <div className="mb-2 sm:mb-4">Professional</div>

      {/* Animated Word */}
      <div className="relative h-[50px] sm:h-[70px] md:h-[90px] text-sec1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentWordIndex]}
            className={`absolute left-0 right-0 w-full text-center text-4xl sm:text-4xl md:text-5xl font-bold ${colorClasses[currentWordIndex % colorClasses.length]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden py-2 sm:py-4">
        <div className="animate-marquee-alt flex w-max space-x-10 sm:space-x-16 px-4">
          {[...techServices, ...techServices].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 sm:gap-3 text-2xl sm:text-2xl md:text-2xl font-semibold min-w-max ${colorClasses[idx % colorClasses.length]}`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Services</div>
    </h1>

    {/* Description Paragraph */}
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto leading-relaxed">
      Transform your ideas into compelling stories, powerful visuals, and functional digital products with Wordsmitters.
      <br className="hidden sm:block" />
      From ghostwriting and publishing to web development and mobile apps,
      <br className="hidden sm:block" />
      we craft words, designs, and code that resonate — ensuring your message is clear, engaging, and unforgettable.
    </p>
  </header>
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

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Title with icon inline */}
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`font-serif text-base text-gray-900 px-3 py-1 rounded-full ${feature.color} text-gray-900`}
        >
          {feature.title}
        </h3>
        <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
      </div>

      {/* Description */}
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
        Explore Our <span className="text-pry">Creative & Tech Services</span>
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
        From ghostwriting and publishing to corporate branding, <br className="hidden sm:block" />
        we craft words, designs, and strategies that connect, compel, and convert.
      </p>

      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto opacity-90">
        We also build sleek, responsive web and mobile apps, deliver seamless UI/UX, performance-optimized platforms,
        and SEO-friendly websites — all tailored to help you grow.
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