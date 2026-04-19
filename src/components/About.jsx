import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getIcon } from '../utils/iconMap';
import about from '../content/about.json';

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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            {about.sectionLabel}
          </span>
          <h2 className="section-title gradient-text">{about.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {about.heading}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{about.paragraph1}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">{about.paragraph2}</p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {about.quickInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${info.color}-500/20 flex items-center justify-center text-${info.color}-400`}>
                      {getIcon(info.icon)}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{info.label}</div>
                      <div className="text-sm text-white">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 hover-card cursor-default"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center text-white mb-4 text-2xl`}>
                  {getIcon(area.icon)}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-sm text-gray-400">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {about.metrics.map((metric, index) => (
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
