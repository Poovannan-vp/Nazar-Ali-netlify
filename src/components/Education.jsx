import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timeline, TimelineItem } from './Timeline';
import { FaGraduationCap, FaUniversity, FaTrophy, FaMedal } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Ph.D. in Power Electronics and Drives',
    institution: 'Anna University, Chennai',
    year: '2017',
    description: 'Specialized research in power electronics, converters, and drive systems.',
    icon: <FaGraduationCap />,
    color: '#3b82f6',
    achievement: null,
  },
  {
    degree: 'M.E. in Power Electronics and Drives',
    institution: 'Anna University, Chennai',
    year: '2009',
    description: 'Advanced studies in power systems and electronic drives.',
    icon: <FaUniversity />,
    color: '#8b5cf6',
    achievement: {
      text: 'University Second Rank',
      score: '9.21 CGPA',
      icon: <FaTrophy className="text-accent-400" />,
    },
  },
  {
    degree: 'B.E. in Electrical and Electronics Engineering',
    institution: 'Madurai Kamaraj University',
    year: '2003',
    description: 'Foundation in electrical engineering principles and applications.',
    icon: <FaUniversity />,
    color: '#f59e0b',
    achievement: {
      text: 'First Class with Distinction',
      score: '76.9%',
      icon: <FaMedal className="text-amber-400" />,
    },
  },
];

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="section-title gradient-text">Academic Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A strong academic foundation built through prestigious institutions
            and recognized with distinguished achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline>
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.year}
              icon={item.icon}
              iconColor={item.color}
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
              <h4 className="text-primary-400 font-medium mb-3">{item.institution}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>

              {item.achievement && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="mt-4 p-3 rounded-lg bg-gradient-to-r from-accent-500/10 to-amber-500/10 border border-accent-500/30"
                >
                  <div className="flex items-center gap-2">
                    {item.achievement.icon}
                    <span className="text-accent-400 font-semibold text-sm">
                      {item.achievement.text}
                    </span>
                  </div>
                  <div className="text-white font-bold mt-1">
                    {item.achievement.score}
                  </div>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </section>
  );
};

export default Education;
