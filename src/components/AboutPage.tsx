import React from 'react';
import { Link } from 'react-router-dom';
import { SKILLS, SocialIcons } from '../constants';
import { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-theme-text-main">{skill.name}</span>
      <span className="text-sm font-medium text-theme-secondary">{skill.percentage}%</span>
    </div>
    <div className="w-full bg-theme-bg-subtle rounded-full h-2.5">
      <div 
        className="bg-theme-primary h-2.5 rounded-full" 
        style={{ width: `${skill.percentage}%` }}
      ></div>
    </div>
  </div>
);

interface ExperienceCardProps {
  title: string;
  company: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, description }) => (
    <div className="bg-theme-bg-white rounded-lg shadow-md p-6 border border-theme-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <p className="font-bold text-theme-text-main">{title}</p>
        <h4 className="text-xl font-bold text-theme-secondary font-heading mb-2">{company}</h4>
        <p className="text-theme-text-main text-sm mb-4">{description}</p>
        <div className="border-t border-theme-border pt-4 mt-4">
            <Link to="/blog" className="text-theme-secondary font-semibold text-sm hover:text-theme-primary transition-colors">
                Projects & Learnings &rarr;
            </Link>
        </div>
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="bg-theme-bg-main min-h-full animate-fadeIn">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
            About Me
          </h1>
        </div>

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0 lg:w-1/3">
            <img 
              src="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219587/omkar_potrait_nobg-scaled_vbbpzb.png" 
              alt="Kumar Omkar Portrait"
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow text-center lg:text-left">
            <h2 className="text-3xl font-bold text-theme-secondary font-heading mb-4">
              Turning Ideas into Impact—One Program at a Time
            </h2>
            <p className="text-theme-text-main leading-relaxed mb-6">
              From designing aircraft systems to re-architecting login flows at LinkedIn, my journey has been anything but linear—and I wouldn’t have it any other way. I’m Omkar, a Technical Program Manager who thrives at the intersection of engineering, product, and people. Whether it’s building dashboards that drive decisions or leading migrations that scale platforms, I bring curiosity, clarity, and a collaborative spirit to every project. And when I’m not in the thick of a roadmap, I’m probably chasing mountain trails or mentoring the next wave of builders.
            </p>
            <div className="flex justify-center lg:justify-start space-x-5 text-theme-secondary">
               <a href="https://www.linkedin.com/in/omkarbd01/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-colors duration-300">{SocialIcons.linkedin}</a>
               <a href="https://x.com/omkarbd01" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-colors duration-300">{SocialIcons.twitter}</a>
               <a href="https://www.instagram.com/omkarbd01/" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-colors duration-300">{SocialIcons.instagram}</a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-theme-bg-white rounded-xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8 p-8 md:p-12 mb-24 border border-theme-border">
          <div className="lg:self-center">
            <h3 className="text-2xl font-extrabold text-theme-secondary font-heading sm:text-3xl">
              Program Manager
            </h3>
            <p className="mt-4 text-base leading-relaxed text-theme-text-main">
               At LinkedIn, I lead high-impact technical programs focused on platform safety, data infrastructure, and service modernization. My work spans coordinating cross-functional teams, driving OKRs, and delivering scalable solutions that improve performance, security, and user experience. I specialize in aligning engineering and data science efforts, managing complex migrations, and building tools that streamline operations and decision-making.
            </p>
            <a
              href="https://kumaromkar.in/wp-content/uploads/2025/06/kumaromkar_resume_program.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-theme-primary border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-white hover:bg-theme-primary-hover transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="mt-10 lg:mt-0 lg:self-center">
            {SKILLS.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        {/* Work Experience Section */}
        <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-theme-secondary font-heading mb-6">Work Experience</h3>
            <img src="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219587/WorkExp_Timeline_Red_pvkwwj.png" alt="Work Experience Timeline" className="w-[85%] mx-auto h-auto object-cover" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <ExperienceCard 
                title="Technical Program Manager"
                company="LinkedIn Corporation"
                description="Leading platform safety and login re-architecture programs, standardizing data pipelines, and driving security and operational excellence across Trust initiatives."
            />
            <ExperienceCard 
                title="Program Manager"
                company="Exxat Systems Pvt. Ltd."
                description="Directed product and platform enhancements for a B2B EdTech SaaS, improving payment systems, onboarding, and analytics while boosting NPS and operational efficiency."
            />
            <ExperienceCard 
                title="Program Manager"
                company="Eaton India Innovation Center"
                description="Managed a $3.5M+ product portfolio, led new product launches, and developed a custom risk tool that improved decision-making and saved significant costs."
            />
            <ExperienceCard 
                title="Engineer"
                company="Eaton India Innovation Center"
                description="Designed and optimized aircraft systems, automated engineering workflows, and applied DFSS to deliver high-quality, efficient solutions."
            />
        </div>

         {/* Education Section */}
        <div className="text-center mb-24">
            <h3 className="text-3xl font-extrabold text-theme-secondary font-heading mb-6">Education</h3>
            <img src="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219579/Education_Red-scaled_lptwns.png" alt="Education Timeline" className="w-full h-auto rounded-lg object-cover" />
        </div>

        {/* Certifications Section */}
        <div className="text-center">
            <h3 className="text-3xl font-extrabold text-theme-secondary font-heading mb-6">Certifications</h3>
            <img src="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219578/certification_red_t042yv.png" alt="Certifications" className="w-[80%] mx-auto h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;