import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaCheckCircle, FaClock } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';
import patents from '../content/patents.json';

const Patents = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifiedCount = patents.items.filter(p => p.status === 'Certified').length;
  const publishedCount = patents.items.filter(p => p.status === 'Published').length;

  return (
    <section id="patents" className="py-20 relative overflow-hidden bg-dark-200/50">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-dark-300/50 to-transparent"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-accent-400 text-sm font-medium mb-4">
            {patents.sectionLabel}
          </span>
          <h2 className="section-title gradient-text">{patents.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{patents.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {patents.items.map((patent, index) => (
            <motion.div
              key={patent.applicationNo}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 hover-card relative overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-500"></div>

              <div className="relative">
                {patent.image && (
                  <div className="w-full h-48 mb-4 rounded-xl overflow-hidden bg-dark-200/50">
                    <img
                      src={patent.image}
                      alt={patent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

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

                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {patent.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{patent.description}</p>

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

                <div className="absolute top-0 right-0 text-xs text-gray-500">
                  {patent.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-white font-semibold">{certifiedCount}</span>
              <span className="text-gray-400 text-sm">Certified</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-400" />
              <span className="text-white font-semibold">{publishedCount}</span>
              <span className="text-gray-400 text-sm">Published</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Patents;
