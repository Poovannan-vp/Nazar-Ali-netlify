import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaCheckCircle, FaClock } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';

const patents = [
  {
    title: 'Peltier Cooled Lunch Bag',
    applicationNo: '399116-001',
    status: 'Certified',
    date: '16.05.2024',
    type: 'Design Patent',
    inventors: ['Dr. A. Nazar Ali', 'M. Amith M', 'Hemachandran S K'],
    description: 'Innovative lunch bag design incorporating Peltier cooling technology for temperature control.',
    icon: '🧊',
  },
  {
    title: 'Visualization of Logic Gates for Education',
    applicationNo: '385994-001',
    status: 'Certified',
    date: '11.05.2024',
    type: 'Design Patent',
    inventors: ['Dr. A. Nazar Ali', 'Madhu Priya S', 'Kaavya Agith'],
    description: 'Educational tool for visualizing logic gates to enhance learning experience.',
    icon: '🔌',
  },
  {
    title: 'Detachable Strap Belt for Fitness Monitoring and Personal Safety',
    applicationNo: '386227-001',
    status: 'Certified',
    date: '2024',
    type: 'Design Patent',
    inventors: ['Dr. D. Shyam', 'Dr. A. Nazar Ali', 'Nithin V H'],
    description: 'Wearable device combining fitness tracking with personal safety features.',
    icon: '⌚',
  },
  {
    title: 'Transducer Based MIPS Tester for Microcontroller',
    applicationNo: '202341005307 A',
    status: 'Published',
    date: '03.02.2023',
    type: 'Patent',
    inventors: ['Dr. A. Nazar Ali', 'D. Shyam', 'T. Madhavan'],
    description: 'Testing device for measuring microcontroller performance using transducer technology.',
    icon: '🔬',
  },
];

const Patents = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden bg-dark-200/50">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-300/50 to-transparent"></div>

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
          <span className="inline-block px-4 py-2 rounded-full glass text-accent-400 text-sm font-medium mb-4">
            Innovation
          </span>
          <h2 className="section-title gradient-text">Patents & Inventions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming innovative ideas into patented solutions that address real-world challenges.
          </p>
        </motion.div>

        {/* Patents Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <motion.div
              key={patent.applicationNo}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 hover-card relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-500"></div>

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{patent.icon}</div>
                  <div className="flex items-center gap-2">
                    {patent.status === 'Certified' ? (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                        <FaCheckCircle size={10} /> Certified
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                        <FaClock size={10} /> Published
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {patent.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {patent.description}
                </p>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <HiDocument className="text-primary-400" />
                    <span className="text-gray-500">Application No:</span>
                    <span className="text-gray-300 font-mono">{patent.applicationNo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLightbulb className="text-accent-400" />
                    <span className="text-gray-500">Type:</span>
                    <span className="text-accent-400">{patent.type}</span>
                  </div>
                </div>

                {/* Inventors */}
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="text-xs text-gray-500 mb-2">Inventors</div>
                  <div className="flex flex-wrap gap-2">
                    {patent.inventors.map((inventor, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full text-xs ${
                          inventor.includes('Nazar')
                            ? 'bg-primary-500/20 text-primary-400'
                            : 'bg-gray-700/50 text-gray-400'
                        }`}
                      >
                        {inventor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="absolute top-0 right-0 text-xs text-gray-500">
                  {patent.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-white font-semibold">3</span>
              <span className="text-gray-400 text-sm">Certified</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-400" />
              <span className="text-white font-semibold">1</span>
              <span className="text-gray-400 text-sm">Published</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Patents;
