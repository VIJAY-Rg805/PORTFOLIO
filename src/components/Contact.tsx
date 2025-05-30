import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Youtube, Linkedin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
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

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'VIJAY RG',
        subject: formData.subject,
        message: formData.message,
      };

      // Replace these values with your actual EmailJS configuration
      const serviceId = 'service_kizeq5p'; // Your EmailJS service ID
      const templateId = 'template_x9myi5w'; // Your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Your EmailJS public key

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Mail size={20} />, label: 'Email', url: 'mailto:vijayrg2003@gmail.com' },
    { icon: <Instagram size={20} />, label: 'Instagram', url: 'https://instagram.com' },
    { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://youtube.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="section-container">
        <h2 className="section-title text-white">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-md ${
                    status.type === 'success' ? 'bg-green-900 text-green-100' : 'bg-red-900 text-red-100'
                  }`}
                >
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-white text-black hover:bg-gray-200 transition-colors rounded-md flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2\" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium mb-6 text-white">Connect</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out through any of these platforms. I typically respond within 24-48 hours.
            </p>
            
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center group py-3 border-b border-gray-800"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-900 group-hover:bg-white text-white group-hover:text-black transition-colors rounded-md">
                    {link.icon}
                  </div>
                  <span className="ml-4 text-gray-300 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gray-900 rounded-md">
              <h4 className="text-lg font-medium text-white mb-4">Location</h4>
              <p className="text-gray-300">New York, NY</p>
              <p className="text-gray-300 mt-2">Available for remote work worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;