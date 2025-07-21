import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C#', level: 80 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'HTML/CSS', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Redux', level: 85 }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js/Express', level: 90 },
        { name: 'Spring Boot', level: 88 },
        { name: '.NET', level: 82 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'AWS', level: 88 },
        { name: 'PostgreSQL/MySQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Docker/Kubernetes', level: 80 },
        { name: 'CI/CD', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies with hands-on experience in building production-ready applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`skill-bar bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full ${
                          isVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;