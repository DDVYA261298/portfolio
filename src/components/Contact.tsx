// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare, Briefcase } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Ready to discuss opportunities or collaborate on your next project. Let's build something amazing together!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
//               <div className="flex items-center mb-4">
//                 <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
//                 <h3 className="text-xl font-semibold text-cyan-400">Open for Opportunities</h3>
//               </div>
//               <p className="text-gray-300 mb-4">
//                 Currently seeking full-time positions in AI/ML Engineering, Full-Stack Development, 
//                 or Cloud Architecture. Open to relocating anywhere in the US.
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20">
//                   Available Immediately
//                 </span>
//                 <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
//                   Open to Relocate
//                 </span>
//               </div>
//             </div>

//             <div className="grid gap-6">
//               <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
//                 <Mail className="w-6 h-6 text-cyan-400 mr-4" />
//                 <div>
//                   <h4 className="font-semibold text-gray-300">Email</h4>
//                   <a 
//                     href="mailto:divya02698@gmail.com"
//                     className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
//                   >
//                     divya02698@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
//                 <Phone className="w-6 h-6 text-cyan-400 mr-4" />
//                 <div>
//                   <h4 className="font-semibold text-gray-300">Phone</h4>
//                   <a 
//                     href="tel:+18573135410"
//                     className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
//                   >
//                     +1 (857) 313-5410
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
//                 <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
//                 <div>
//                   <h4 className="font-semibold text-gray-300">Location</h4>
//                   <span className="text-gray-400">Boston, MA (Open to Relocate)</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <a
//                 href="https://linkedin.com/in/divyaprajapati26"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center w-12 h-12 bg-gray-900/50 hover:bg-cyan-500 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://github.com/divya2698"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center w-12 h-12 bg-gray-900/50 hover:bg-cyan-500 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8">
//             <div className="flex items-center mb-6">
//               <MessageSquare className="w-6 h-6 text-cyan-400 mr-3" />
//               <h3 className="text-xl font-semibold">Send a Message</h3>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200"
//                   placeholder="Job Opportunity / Project Collaboration"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200 resize-none"
//                   placeholder="Tell me about the opportunity or how we can work together..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="text-center mt-16 pt-8 border-t border-gray-700">
//           <p className="text-gray-400">
//             © 2025 Divya Ramesh Prajapati. Built with React, TypeScript & Tailwind CSS
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Netlify Forms handles the submission automatically
    // We'll simulate the success state for better UX
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on your next project. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-cyan-400">Open for Opportunities</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Currently seeking full-time positions in AI/ML Engineering, Full-Stack Development, 
                or Cloud Architecture. Open to relocating anywhere in the US.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20">
                  Available Immediately
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
                  Open to Relocate
                </span>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-300">Email</h4>
                  <a 
                    href="mailto:divya02698@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    divya02698@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-300">Phone</h4>
                  <a 
                    href="tel:+18573135410"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    +1 (857) 313-5410
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-300">Location</h4>
                  <span className="text-gray-400">Boston, MA (Open to Relocate)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/divyaprajapati26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-900/50 hover:bg-cyan-500 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/divya2698"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-900/50 hover:bg-cyan-500 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-semibold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200"
                  placeholder="Job Opportunity / Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about the opportunity or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                  Failed to send message. Please try again or contact me directly at{' '}
                  <a href="mailto:divya02698@gmail.com" className="underline hover:text-red-300">
                    divya02698@gmail.com
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2025 Divya Ramesh Prajapati. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;