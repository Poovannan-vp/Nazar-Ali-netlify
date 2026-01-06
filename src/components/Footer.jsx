import { motion } from 'framer-motion';
import { FaGraduationCap, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-300 py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <div>
              <div className="text-white font-display font-bold">Dr. A. Nazar Ali</div>
              <div className="text-gray-500 text-sm">Professor | Researcher</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            {['About', 'Research', 'Awards', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500 transition-all"
          >
            <HiArrowUp size={20} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-gray-500">
            © {new Date().getFullYear()} Dr. A. Nazar Ali. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            Made with <FaHeart className="text-red-500 mx-1" /> for academic excellence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
