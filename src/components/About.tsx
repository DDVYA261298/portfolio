import React from 'react';
import { Code, Database, Cloud, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Expert in React, Node.js, Spring Boot, and .NET'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Mastery',
      description: 'SQL and NoSQL databases with optimal performance'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Architecture',
      description: 'AWS, GCP, Docker, Kubernetes, and CI/CD'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI Integration',
      description: 'LLM integration, RAG systems, and ML pipelines'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about building cutting-edge solutions that bridge the gap between 
            traditional software engineering and modern AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 4 years of experience in full-stack development, I specialize in creating 
              secure, scalable platforms that leverage the power of artificial intelligence. My 
              journey has taken me from traditional enterprise systems to cutting-edge AI-powered 
              applications.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I've successfully led end-to-end development of complex systems, from ERP solutions 
              handling 20,000+ records to AI-powered interview bots that boost user engagement by 60%. 
              My expertise spans from backend architecture to responsive frontend design.
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Currently Seeking</h3>
              <p className="text-gray-300">
                Full-time opportunities in AI/ML Engineering, Full-Stack Development, 
                or Cloud Architecture roles. Open to relocating anywhere in the US.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-right">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-3">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;