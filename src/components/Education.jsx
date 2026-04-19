import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timeline, TimelineItem } from './Timeline';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { getIcon } from '../utils/iconMap';
import education from '../content/education.json';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>

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
            {education.sectionLabel}
          </span>
          <h2 className="section-title gradient-text">{education.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{education.subtitle}</p>
        </motion.div>

        <Timeline>
          {education.items.map((item, index) => {
            const hasAchievement = item.achievementText && item.achievementText.trim() !== '';
            const achievementIcon = item.achievementText?.toLowerCase().includes('rank')
              ? <FaTrophy className="text-accent-400" />
              : <FaMedal className="text-amber-400" />;

            return (
              <TimelineItem
                key={index}
                date={item.year}
                icon={getIcon(item.icon)}
                iconColor={item.color}
                position={index % 2 === 0 ? 'left' : 'right'}
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                <h4 className="text-primary-400 font-medium mb-3">{item.institution}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>

                {hasAchievement && (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-4 p-3 rounded-lg bg-gradient-to-r from-accent-500/10 to-amber-500/10 border border-accent-500/30"
                  >
                    <div className="flex items-center gap-2">
                      {achievementIcon}
                      <span className="text-accent-400 font-semibold text-sm">
                        {item.achievementText}
                      </span>
                    </div>
                    <div className="text-white font-bold mt-1">
                      {item.achievementScore}
                    </div>
                  </motion.div>
                )}
              </TimelineItem>
            );
          })}
        </Timeline>
      </motion.div>
    </section>
  );
};

export default Education;
