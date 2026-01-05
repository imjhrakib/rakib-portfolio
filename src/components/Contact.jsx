import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Check for success parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setSubmitStatus('success');
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using a simple approach that works immediately
      const emailBody = `
Hello Rakib,

You have received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
      `.trim();

      const subject = `Portfolio Contact from ${formData.name}`;
      const mailtoLink = `mailto:jhrakib.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-[#1a1625] relative z-10 overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full mix-blend-screen filter blur-[60px] animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-pink-600/10 rounded-full mix-blend-screen filter blur-[60px] animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient-animated">Connect</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind or want to hire me? Send me a message!
          </p>
        </div>
        <div className="bg-dark-card/60 p-8 md:p-12 rounded-3xl border border-primary/20 shadow-neon relative overflow-hidden backdrop-blur-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-shadow duration-500">
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  className="floating-input w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-transparent transition-all hover:border-white/20 peer"
                  id="name"
                  placeholder="Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 pointer-events-none"
                  htmlFor="name"
                >
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  className="floating-input w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-transparent transition-all hover:border-white/20 peer"
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  className="absolute left-5 top-4 text-gray-500 transition-all duration-300 pointer-events-none"
                  htmlFor="email"
                >
                  Your Email
                </label>
              </div>
            </div>
            <div className="relative">
              <textarea
                className="floating-input w-full px-5 py-4 bg-dark/50 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-transparent resize-none transition-all hover:border-white/20 peer"
                id="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label
                className="absolute left-5 top-4 text-gray-500 transition-all duration-300 pointer-events-none"
                htmlFor="message"
              >
                Your Message
              </label>
            </div>
            
            {submitStatus === 'success' && (
              <div className="text-green-400 text-center p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                ✅ Message prepared! Your email client will open to send the message.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-400 text-center p-4 bg-red-400/10 rounded-lg border border-red-400/20">
                ❌ Something went wrong. Please email me directly at jhrakib.dev@gmail.com
              </div>
            )}
            
            <div className="pt-4 text-center md:text-right">
              <button
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-neon-hover transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;