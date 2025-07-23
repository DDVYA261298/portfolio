import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack AI Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="gradient-bg absolute inset-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-slide-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Divya
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
              {displayText}<span className="animate-pulse">|</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              4+ years building secure, scalable, and AI-powered platforms with expertise in 
              React, Spring Boot, AWS, and LLM integration.
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 pulse-glow">
                <Briefcase className="inline-block w-5 h-5 mr-2" />
                Open for Opportunities
              </button>
              <a
              href="/DRP.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                <Download className="inline-block w-5 h-5 mr-2" />
                Download Resume
              </button>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm mt-4">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <span>divya02698@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <span>+1 (857) 313-5410</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Boston, MA</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="text-green-400 mr-2">●</span>
                <span>Open to Relocate</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/in/divyaprajapati26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/divya2698"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-right">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                <div className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  <img
                    src="/DP1.jpg"  
                    alt="Divya Prajapati"
                    className="w-72 h-72 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;