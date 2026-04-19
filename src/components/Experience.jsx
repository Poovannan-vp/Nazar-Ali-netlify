import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timeline, TimelineItem } from './Timeline';
import { getIcon } from '../utils/iconMap';
import experience from '../content/experience.json';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-dark-200/50">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>

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
          <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            {experience.sectionLabel}
          </span>
          <h2 className="section-title gradient-text">{experience.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{experience.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {experience.summaryCards.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center hover-card"
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-xs text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <Timeline>
          {experience.items.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.duration}
              icon={getIcon(item.icon)}
              iconColor={item.color}
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              {item.current && (
                <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-2">
                  Current Position
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
              <h4 className="text-primary-400 font-medium mb-2">{item.organization}</h4>
              <span className="inline-block px-2 py-1 rounded bg-primary-500/10 text-primary-300 text-xs mb-3">
                {item.type}
              </span>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>

              <div className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                    {resp}
                  </div>
                ))}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </section>
  );
};

export default Experience;
