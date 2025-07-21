import React from 'react';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'OpenAI Model Evaluation Tool',
      period: 'Sep 2024 - Dec 2024',
      description: 'Automated benchmarking platform for evaluating LLM performance with comprehensive ETL pipeline and secure API access.',
      achievements: [
        'Automated 80% of manual benchmarking tasks by building an Airflow ETL pipeline to process GAIA dataset PDFs',
        'Achieved 35% higher text extraction accuracy by combining PyMuPDF, Adobe PDF Extract API, and Azure AI Document Intelligence',
        'Enabled secure API access and async processing by building a FastAPI backend with JWT authentication',
        'Improved scalability and cloud cost control by deploying services on GCP (GCS, BigQuery) with Terraform IaC'
      ],
      technologies: ['Python', 'Airflow', 'AWS RDS', 'GCS', 'Docker', 'FastAPI', 'JWT', 'Terraform'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI-Powered Interview Bot',
      period: 'Jan 2024 - Aug 2024',
      description: 'Intelligent interview assistant using OpenAI LLM with RAG-based validation and real-time analytics dashboard.',
      achievements: [
        'Boosted user engagement by 60% with enhanced interview analysis and insights',
        'Integrated RAG-based factuality validation pipeline reducing hallucination by 80%',
        'Constructed interactive progress tracking for 1,000+ users',
        'Developed analytics dashboard with AWS Lambda integration'
      ],
      technologies: ['OpenAI', 'Node.js', 'MongoDB', 'Pinecone', 'Next.js', 'AWS Lambda', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'WCAG-Compliant E-commerce Platform',
      period: 'Feb 2022 - Aug 2022',
      description: 'Accessible e-commerce website with comprehensive React components and scalable backend infrastructure.',
      achievements: [
        'Built 30+ WCAG-compliant React components with Redux state management',
        'Architected REST APIs supporting 5,000 concurrent sessions with 99.9% uptime',
        'Integrated comprehensive monitoring reducing reported bugs by 22%',
        'Implemented auto-scaling infrastructure on AWS'
      ],
      technologies: ['React', 'Redux', 'Spring Boot', 'MongoDB', 'AWS', 'CloudWatch', 'Kibana'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Custom ERP System',
      period: 'Jul 2019 - Feb 2022',
      description: 'End-to-end pharmaceutical inventory and order management system with clean architecture principles.',
      achievements: [
        'Streamlined operations for 20,000+ records improving efficiency by 70%',
        'Built 25+ RESTful APIs following clean architecture principles',
        'Implemented comprehensive inventory, order tracking, and billing processes',
        'Enhanced marketing campaign efficiency through automated coupon system'
      ],
      technologies: ['C#', '.NET MVC', 'SQL Server', 'REST APIs', 'Clean Architecture'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate expertise in AI, full-stack development, and cloud architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Featured
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;