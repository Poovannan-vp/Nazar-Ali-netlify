import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getIcon } from '../utils/iconMap';
import awards from '../content/awards.json';

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            {awards.sectionLabel}
          </span>
          <h2 className="section-title gradient-text">{awards.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{awards.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {awards.items.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-6 hover-card relative overflow-hidden group"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${award.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-500`}></div>

              <div className="relative">
                {award.image && (
                  <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-dark-200/50">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}
                >
                  {getIcon(award.icon)}
                </motion.div>

                <span className="absolute top-0 right-0 px-3 py-1 rounded-full bg-white/10 text-xs text-white font-medium">
                  {award.year}
                </span>

                <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                <p className="text-primary-400 text-sm mb-3">{award.organization}</p>
                <p className="text-gray-400 text-sm">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Professional Memberships
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {awards.memberships.map((membership, index) => (
              <motion.div
                key={membership.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 rounded-xl bg-dark-200/50 hover:bg-primary-500/10 transition-all cursor-default"
              >
                <span className="text-2xl mb-2">{membership.icon}</span>
                <span className="text-white font-semibold text-sm">{membership.name}</span>
                <span className={`text-xs mt-1 ${
                  membership.status === 'Senior Member'
                    ? 'text-accent-400'
                    : 'text-gray-400'
                }`}>
                  {membership.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 glass rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">{awards.highlights.guestLectures}</div>
              <div className="text-xs text-gray-400">Guest Lectures</div>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{awards.highlights.fdpsOrganized}</div>
              <div className="text-xs text-gray-400">FDPs Organized</div>
            </div>
            <div className="w-px h-10 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">{awards.highlights.fdpsAttended}</div>
              <div className="text-xs text-gray-400">FDPs Attended</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Awards;
