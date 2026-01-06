import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaBook, FaFileAlt, FaLightbulb, FaMicrophone, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import { HiExternalLink, HiFilter } from 'react-icons/hi';

const researchStats = [
  { icon: <FaFileAlt />, value: 34, label: 'Journal Publications', color: 'primary' },
  { icon: <FaBook />, value: 3, label: 'Books Published', color: 'purple' },
  { icon: <FaLightbulb />, value: 4, label: 'Patents', color: 'accent' },
  { icon: <FaMicrophone />, value: 32, label: 'Conference Papers', color: 'green' },
  { icon: <FaChalkboardTeacher />, value: 140, suffix: '+', label: 'Guest Lectures', color: 'pink' },
  { icon: <FaUsers />, value: 51, label: 'FDPs Organized', color: 'cyan' },
];

const publications = [
  {
    title: 'Design and development of realistic PV emulator adaptable to the maximum power point tracking algorithm and battery charging controller',
    journal: 'Solar Energy',
    year: 2021,
    type: 'SCI',
    citations: 32,
    impactFactor: 6.708,
  },
  {
    title: 'Black widow optimization-based optimal PI-controlled wind turbine emulator',
    journal: 'Sustainability (Switzerland)',
    year: 2020,
    type: 'SCI',
    citations: 27,
    impactFactor: 3.89,
  },
  {
    title: 'Design and Implementation of Integrated Cuk-Synchronous Zeta Converter for Energy Storage Applications',
    journal: '3rd International Conference on Power Electronics and IoT Applications (PARC)',
    year: 2024,
    type: 'Scopus',
    citations: 0,
  },
  {
    title: 'ANN-Based Maximum Power Point Tracking Control Configured Boost Converter for Electric Vehicle Applications',
    journal: 'Optimization Techniques in Engineering',
    year: 2023,
    type: 'Scopus',
    citations: 0,
  },
  {
    title: 'Investigation of Super-Lift Multilevel Inverter Using Water Pump Irrigation System',
    journal: 'Smart Grids and Green Energy Systems',
    year: 2022,
    type: 'Scopus',
    citations: 9,
  },
  {
    title: 'Solar powered air conditioner using BLDC motor',
    journal: 'IOP Conference Series: Materials Science and Engineering',
    year: 2019,
    type: 'Scopus',
    citations: 21,
  },
];

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const filteredPublications = filter === 'all'
    ? publications
    : publications.filter(p => p.type === filter);

  return (
    <section id="research" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            Research
          </span>
          <h2 className="section-title gradient-text">Research & Publications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contributing to the advancement of power electronics and renewable energy
            through impactful research and publications.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {researchStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center hover-card"
            >
              <div className={`text-2xl text-${stat.color}-400 mb-2 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">
                {inView && <CountUp end={stat.value} duration={2} suffix={stat.suffix || ''} />}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Citation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Citation Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text">
                {inView && <CountUp end={674} duration={2.5} />}
              </div>
              <div className="text-sm text-gray-400 mt-2">Total Citations</div>
              <div className="text-xs text-primary-400">Google Scholar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">
                {inView && <CountUp end={16} duration={2} />}
              </div>
              <div className="text-sm text-gray-400 mt-2">h-index</div>
              <div className="text-xs text-purple-400">All time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-400">
                {inView && <CountUp end={20} duration={2} />}
              </div>
              <div className="text-sm text-gray-400 mt-2">i10-index</div>
              <div className="text-xs text-accent-400">All time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">
                {inView && <CountUp end={531} duration={2.5} />}
              </div>
              <div className="text-sm text-gray-400 mt-2">Citations</div>
              <div className="text-xs text-green-400">Since 2019</div>
            </div>
          </div>
        </motion.div>

        {/* Publications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h3 className="text-xl font-bold text-white">Recent Publications</h3>
            <div className="flex items-center gap-2">
              <HiFilter className="text-gray-400" />
              <div className="flex gap-2">
                {['all', 'SCI', 'Scopus'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      filter === f
                        ? 'bg-primary-500 text-white'
                        : 'glass text-gray-400 hover:text-white'
                    }`}
                  >
                    {f === 'all' ? 'All' : f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {filteredPublications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover-card"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          pub.type === 'SCI'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-orange-500/20 text-orange-400'
                        }`}>
                          {pub.type}
                        </span>
                        <span className="text-gray-500 text-sm">{pub.year}</span>
                      </div>
                      <h4 className="text-white font-medium mb-2 leading-tight">
                        {pub.title}
                      </h4>
                      <p className="text-primary-400 text-sm">{pub.journal}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {pub.impactFactor && (
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Impact Factor</div>
                          <div className="text-accent-400 font-bold">{pub.impactFactor}</div>
                        </div>
                      )}
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Citations</div>
                        <div className="text-white font-bold">{pub.citations}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <a
              href="https://scholar.google.co.in/citations?hl=en&user=_jaO6n0AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              View all publications on Google Scholar
              <HiExternalLink />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Research;
