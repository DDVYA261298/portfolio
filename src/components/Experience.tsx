import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
            {
        title: 'Software Developer',
        company: 'Aurus',
        location: 'Norwood, MA',
        period: 'Aug 2025 - Present',
        description:
          'Leading AI-driven platform development focused on conversational AI, multimodal pipelines, and scalable knowledge systems to improve developer self-service.',
        achievements: [
          'Led an AI transformation by architecting and developing a conversational AI chatbot using Python, FastAPI, MongoDB, and Drupal (PHP), improving self-service resolution by 40%',
          'Built a multimodal AI pipeline using Qwen3-VL (vLLM) to extract and interpret visual process diagrams, improving response accuracy by 25%',
          'Designed a scalable RAG-based knowledge system using Qdrant vector embeddings and session-aware intent detection, improving multi-turn query accuracy by 30%',
          'Integrated OpenAPI (Swagger) workflows to auto-generate request/response templates and code samples, reducing manual API validation time by 35%',
          'Applied LoRA fine-tuning on LLMs to reduce irrelevant responses and fallback answers by 20%, delivering more consistent AI-driven interactions'
        ],
        tags: [
          'Python',
          'FastAPI',
          'MongoDB',
          'Drupal',
          'RAG',
          'Qdrant',
          'LLMs',
          'vLLM',
          'OpenAPI',
          'LoRA'
        ]
      },
    {
      title: 'Software Developer',
      company: 'JerseyStem',
      location: 'New Jersey, USA',
      period: 'Jan 2025 - Present',
      description: 'Creating automation tools and ETL pipelines to streamline operations and improve efficiency.',
      achievements: [
        'Created automation tools with Google Apps Script, MySQL, and Python to handle onboarding for 100+ volunteers, cutting monthly manual processing time by ~15 hours',
        'Engineered ETL pipelines in Python and SQL to extract Jira metadata into structured relational models, reducing manual tracking by 70%',
        'Authored calendar automation scripts in TypeScript using Google Calendar API to streamline 200+ recurring meetings/month'
      ],
      tags: ['Python', 'MySQL', 'TypeScript', 'Google APIs', 'ETL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Reveal AI',
      location: 'San Francisco, USA',
      period: 'Jan 2024 - Aug 2024',
      description: 'Developed AI-powered solutions and analytics dashboards with focus on LLM integration and performance optimization.',
      achievements: [
        'Engineered an AI-powered Interview Bot using OpenAI\'s LLM, Node.js, and MongoDB, boosting user engagement by 60%',
        'Integrated a RAG-based factuality validation pipeline using Pinecone for vector search, boosting LLM response accuracy by 35%',
        'Developed a Next.js analytics dashboard integrated with AWS Lambda and EC2, securing access for 500+ users/month',
        'Automated CI/CD pipelines using Jenkins, JUnit, and GitHub Actions, reducing deployment time by 40%'
      ],
      tags: ['OpenAI', 'Node.js', 'MongoDB', 'Next.js', 'AWS', 'CI/CD']
    },
    {
      title: 'Software Developer',
      company: 'Barrier Break',
      location: 'Mumbai, IN',
      period: 'Feb 2022 - Aug 2022',
      description: 'Focused on accessibility compliance and scalable backend architecture for e-commerce platforms.',
      achievements: [
        'Crafted 30+ accessible and WCAG-compliant React components with Redux for an e-commerce website',
        'Architected scalable REST APIs using Java Spring Boot and MongoDB, supporting up to 5,000 concurrent sessions',
        'Integrated monitoring tools like CloudWatch and Kibana with automated alerting, reducing reported bugs by 22%'
      ],
      tags: ['React', 'Redux', 'Spring Boot', 'MongoDB', 'AWS', 'WCAG']
    },
    {
      title: 'Software Engineer',
      company: 'Atmik Bharat LLP',
      location: 'Mumbai, IN',
      period: 'Jul 2019 - Feb 2022',
      description: 'Led end-to-end development of custom ERP systems and RESTful APIs for pharmaceutical industry.',
      achievements: [
        'Led the end-to-end development of a custom ERP system using C# and SQL Server for 20,000+ records',
        'Built 25+ RESTful APIs using .NET MVC and C#, following clean architecture principles',
        'Improved operational efficiency by 70% through streamlined inventory, order tracking, and billing processes'
      ],
      tags: ['C#', '.NET', 'SQL Server', 'ERP', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            4+ years of experience building scalable solutions across various industries and technologies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}>
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-400">{exp.title}</h3>
                        <div className="flex items-center text-gray-300 mt-1">
                          <Building className="w-4 h-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
