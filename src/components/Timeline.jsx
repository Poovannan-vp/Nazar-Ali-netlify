import { motion } from 'framer-motion';

export const Timeline = ({ children }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-accent-500 transform md:-translate-x-1/2"></div>
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
};

export const TimelineItem = ({
  date,
  icon,
  iconColor = '#3b82f6',
  children,
  position = 'left'
}) => {
  const isLeft = position === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`relative flex items-start gap-4 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Mobile: Icon on left */}
      <div className="md:hidden flex-shrink-0 z-10">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
          style={{ backgroundColor: iconColor, boxShadow: `0 0 20px ${iconColor}50` }}
        >
          {icon}
        </div>
      </div>

      {/* Desktop: Content */}
      <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        {isLeft && (
          <div className="glass rounded-xl p-6 hover-card inline-block text-left">
            {children}
          </div>
        )}
        {!isLeft && <div className="text-gray-400 font-semibold pt-2">{date}</div>}
      </div>

      {/* Desktop: Center icon */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: iconColor, boxShadow: `0 0 20px ${iconColor}50` }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Desktop: Date or Content */}
      <div className={`hidden md:block md:w-1/2 ${!isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        {!isLeft && (
          <div className="glass rounded-xl p-6 hover-card inline-block text-left">
            {children}
          </div>
        )}
        {isLeft && <div className="text-gray-400 font-semibold pt-2">{date}</div>}
      </div>

      {/* Mobile: Content */}
      <div className="md:hidden flex-1">
        <div className="text-gray-400 text-sm mb-2">{date}</div>
        <div className="glass rounded-xl p-4">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
