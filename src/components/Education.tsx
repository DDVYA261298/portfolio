import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Software Engineering Systems',
      school: 'Northeastern University',
      location: 'Boston, USA',
      period: 'Sep 2022 - Dec 2024',
      description: 'Advanced coursework in software engineering, system design, and emerging technologies.',
      highlights: [
        'Specialized in AI/ML and Cloud Computing',
        'Advanced Software Engineering Principles',
        'Distributed Systems and Microservices Architecture',
        'Data Structures and Algorithm Optimization'
      ]
    },
    {
      degree: 'Bachelor of Science, Information Technology',
      school: 'Mumbai University',
      location: 'Mumbai, India',
      period: 'Jul 2016 - Jun 2019',
      description: 'Foundation in computer science, programming, and information systems.',
      highlights: [
        'Core Computer Science Fundamentals',
        'Database Management Systems',
        'Web Development and Programming',
        'Software Development Life Cycle'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering with focus on modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 p-6"
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">{edu.degree}</h3>
                  <h4 className="text-gray-300 font-medium mb-2">{edu.school}</h4>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-4">{edu.description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-300">Key Areas:</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {edu.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex} className="text-sm text-gray-400 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Development</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-700 text-center">
              <h4 className="text-cyan-400 font-semibold mb-2">AWS Certified</h4>
              <p className="text-gray-400 text-sm">Cloud Architecture & DevOps</p>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-700 text-center">
              <h4 className="text-cyan-400 font-semibold mb-2">OpenAI Certified</h4>
              <p className="text-gray-400 text-sm">AI/ML Integration Specialist</p>
            </div>
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-700 text-center">
              <h4 className="text-cyan-400 font-semibold mb-2">Agile Practitioner</h4>
              <p className="text-gray-400 text-sm">Scrum & DevOps Methodologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;