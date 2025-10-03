import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from 'figma:asset/92e61dfdf78711e1988b6a17151fd76b65f8d996.png';

export function HomePage() {
  const socialLinks = [
    {
      icon: Github,
      text: 'GitHub',
      url: 'https://github.com/HaoranLi2001'
    },
    {
      icon: Linkedin,
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/haoranli-lth'
    },
    {
      icon: Mail,
      text: 'ha5083li-s@student.lu.se',
      url: 'mailto:ha5083li-s@student.lu.se'
    }
  ];

  const activities = [
    'LU Student Ambassador',
    'Mentor in LU Mentor Group',
    'Volunteer at European Go Congress',
    'Lund University Global Scholarship Recipient'
  ];

  const interests = [
    'Go',
    'Football',
    'Traveling',
    'Manga'
  ];

  return (
    <div className="min-h-screen pt-36 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-16">
          {/* Profile Image */}
          <div className="mb-6">
            <img
              src={profileImage}
              alt="Haoran Li"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
              style={{ objectPosition: '50% 25%' }}
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Haoran Li
          </h1>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Currently pursuing a Master's degree in Machine Learning at Lund University. 
              My research interests focus on AI and Large Language Models (LLMs), with a 
              passion for applying LLM-based agents to solve real-world problems.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am seeking a collaborator for potential master's thesis projects.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-muted-foreground" />
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-600 transition-colors duration-200 hover:underline"
                  >
                    {link.text}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Activities & Achievements
          </h2>
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-muted-foreground">{activity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Interests & Hobbies
          </h2>
          <div className="space-y-2">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-muted-foreground">{interest}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}