import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaOrcid } from 'react-icons/fa';
import { SiGooglescholar, SiScopus, SiClarivate } from 'react-icons/si';

const contactInfo = [
  {
    icon: <HiMail className="text-2xl" />,
    label: 'Email',
    value: 'naza.annai@gmail.com',
    link: 'mailto:naza.annai@gmail.com',
    color: 'primary',
  },
  {
    icon: <HiPhone className="text-2xl" />,
    label: 'Phone',
    value: '+91 9843625854',
    link: 'tel:+919843625854',
    color: 'green',
  },
  {
    icon: <HiLocationMarker className="text-2xl" />,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    link: null,
    color: 'accent',
  },
];

const socialLinks = [
  {
    name: 'Google Scholar',
    icon: <SiGooglescholar size={24} />,
    url: 'https://scholar.google.co.in/citations?hl=en&user=_jaO6n0AAAAJ',
    color: 'hover:text-blue-400 hover:border-blue-400',
  },
  {
    name: 'Scopus',
    icon: <SiScopus size={24} />,
    url: 'https://www.scopus.com/authid/detail.uri?authorId=56196401100',
    color: 'hover:text-orange-400 hover:border-orange-400',
  },
  {
    name: 'Web of Science',
    icon: <SiClarivate size={24} />,
    url: 'https://www.webofscience.com/wos/author/record/AAQ-4716-2021',
    color: 'hover:text-purple-400 hover:border-purple-400',
  },
  {
    name: 'ORCID',
    icon: <FaOrcid size={24} />,
    url: 'https://orcid.org/0000-0003-3278-5482',
    color: 'hover:text-green-400 hover:border-green-400',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-dark-200/50">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

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
            Get In Touch
          </span>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, research opportunities,
            or any academic inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new research collaborations, academic
              opportunities, or simply connecting with fellow researchers and students
              in the field of power electronics and renewable energy.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 glass rounded-xl hover-card ${
                    info.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-${info.color}-500/20 flex items-center justify-center text-${info.color}-400`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm text-gray-400 mb-4">Academic Profiles</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 transition-all ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Current Position */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 p-6 glass rounded-xl"
            >
              <div className="text-sm text-gray-400 mb-2">Current Position</div>
              <div className="text-white font-semibold">Professor</div>
              <div className="text-primary-400">Rajalakshmi Engineering College</div>
              <div className="text-gray-400 text-sm mt-2">
                Department of Electrical & Electronics Engineering
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-gray-700 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-gray-700 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-gray-700 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-200/50 border border-gray-700 text-white focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitted ? (
                    <>
                      <span>Message Sent!</span>
                      <span>✓</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <HiPaperAirplane className="rotate-90" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
