import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaOrcid } from 'react-icons/fa';
import { SiGooglescholar, SiScopus, SiClarivate } from 'react-icons/si';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import profileImage from '../assets/nazarali.jpeg';

const stats = [
  { value: 19, suffix: '+', label: 'Years Experience' },
  { value: 674, suffix: '', label: 'Citations' },
  { value: 34, suffix: '', label: 'Publications' },
  { value: 140, suffix: '+', label: 'Guest Lectures' },
];

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-pattern"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                Professor | Researcher | Power Electronics Expert
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Dr. A. <span className="gradient-text">Nazar Ali</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-6 max-w-xl mx-auto lg:mx-0"
            >
              PhD in Power Electronics & Drives from Anna University. Currently serving as
              Professor at Rajalakshmi Engineering College, Chennai with expertise in
              renewable energy systems, power converters, and IoT applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#research" className="btn-secondary">
                View Research
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400"
            >
              <a href="mailto:naza.annai@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <HiMail /> naza.annai@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <HiLocationMarker /> Chennai, India
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 mt-6 justify-center lg:justify-start"
            >
              <a
                href="https://scholar.google.co.in/citations?hl=en&user=_jaO6n0AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500 transition-all"
                title="Google Scholar"
              >
                <SiGooglescholar size={20} />
              </a>
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=56196401100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all"
                title="Scopus"
              >
                <SiScopus size={20} />
              </a>
              <a
                href="https://www.webofscience.com/wos/author/record/AAQ-4716-2021"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all"
                title="Web of Science"
              >
                <SiClarivate size={20} />
              </a>
              <a
                href="https://orcid.org/0000-0003-3278-5482"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500 transition-all"
                title="ORCID"
              >
                <FaOrcid size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div variants={itemVariants} className="relative">
            {/* Profile Image Container */}
            <div className="relative mx-auto w-72 h-72 lg:w-80 lg:h-80">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 animate-spin-slow p-1" style={{ animationDuration: '8s' }}>
                <div className="w-full h-full rounded-full bg-dark-200"></div>
              </div>

              {/* Profile Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-dark-200">
                <img
                  src={profileImage}
                  alt="Dr. A. Nazar Ali"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-lg glass text-xs font-medium"
              >
                <span className="text-primary-400">IEEE</span> Senior Member
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-lg glass text-xs font-medium"
              >
                <span className="text-accent-400">h-index:</span> 16
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover-card"
                >
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">
                    {inView && (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-primary-500 rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
