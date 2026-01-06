import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBolt, FaSolarPanel, FaMicrochip, FaRobot } from 'react-icons/fa';
import { HiLightningBolt, HiChip, HiCube } from 'react-icons/hi';

const expertiseAreas = [
  {
    icon: <FaBolt className="text-2xl" />,
    title: 'Power Electronics',
    description: 'DC-DC converters, inverters, and power factor correction systems',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <FaSolarPanel className="text-2xl" />,
    title: 'Renewable Energy',
    description: 'Solar PV systems, MPPT algorithms, and energy storage',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: <FaMicrochip className="text-2xl" />,
    title: 'Electric Drives',
    description: 'Motor control, BLDC drives, and variable speed systems',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <FaRobot className="text-2xl" />,
    title: 'IoT & Automation',
    description: 'Smart systems, home automation, and embedded solutions',
    color: 'from-green-500 to-emerald-500',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 circuit-pattern opacity-50"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title gradient-text">Know Me Better</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A dedicated academician with nearly two decades of experience in teaching,
            research, and mentoring students in the field of Electrical Engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Content */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Professor at Rajalakshmi Engineering College
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With a Ph.D. in Power Electronics and Drives from Anna University, Chennai,
                I have dedicated my career to advancing the field of electrical engineering
                through research and teaching. My work focuses on developing innovative
                solutions in renewable energy systems, power converters, and smart grid
                technologies.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I secured <span className="text-primary-400 font-semibold">University Second Rank</span> in
                M.E (Power Electronics and Drives) with 9.21 CGPA. My research has resulted in
                <span className="text-accent-400 font-semibold"> 34 journal publications</span>,
                <span className="text-accent-400 font-semibold"> 4 patents</span>, and
                <span className="text-accent-400 font-semibold"> 3 books</span>.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <HiLightningBolt className="text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Specialization</div>
                    <div className="text-sm text-white">Power Electronics</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <HiChip className="text-accent-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Research Area</div>
                    <div className="text-sm text-white">Renewable Energy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <HiCube className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Current Role</div>
                    <div className="text-sm text-white">Professor</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <FaRobot className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Interest</div>
                    <div className="text-sm text-white">IoT Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Expertise Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 hover-card cursor-default"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-4`}>
                  {area.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-sm text-gray-400">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Research Metrics */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'SCI Publications', value: '04', color: 'primary' },
            { label: 'Scopus Indexed', value: '30', color: 'accent' },
            { label: 'h-index', value: '16', color: 'purple' },
            { label: 'i10-index', value: '20', color: 'green' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass rounded-xl p-6 text-center"
            >
              <div className={`text-3xl font-bold text-${metric.color}-400 mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
