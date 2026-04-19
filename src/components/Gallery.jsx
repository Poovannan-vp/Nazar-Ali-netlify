import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiX, HiPhotograph } from 'react-icons/hi';
import gallery from '../content/gallery.json';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const visibleItems = gallery.items.filter(item => item.image && item.image.trim() !== '');

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

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
          <span className="inline-block px-4 py-2 rounded-full glass text-pink-400 text-sm font-medium mb-4">
            {gallery.sectionLabel}
          </span>
          <h2 className="section-title gradient-text">{gallery.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{gallery.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(item)}
              className="group glass rounded-2xl overflow-hidden cursor-pointer hover-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-dark-200/50">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <HiPhotograph className="text-white text-xl" />
                </div>
                {item.category && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-primary-500/80 text-white text-xs font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                )}
              </div>

              <div className="p-4">
                <p className="text-white font-medium leading-tight mb-1">{item.caption}</p>
                {item.date && <p className="text-gray-400 text-sm">{item.date}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full cursor-auto"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
                >
                  <HiX size={28} />
                </button>

                <div className="glass rounded-2xl overflow-hidden">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.caption}
                    className="w-full max-h-[75vh] object-contain bg-dark-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {selectedImage.category && (
                        <span className="px-2 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium">
                          {selectedImage.category}
                        </span>
                      )}
                      {selectedImage.date && (
                        <span className="text-gray-400 text-sm">{selectedImage.date}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white">{selectedImage.caption}</h3>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Gallery;
