import React from 'react';
import { Link } from 'react-router-dom';

interface ExploreCardProps {
  imageSrc: string;
  title: string;
  text: string;
  buttonText: string;
  linkTo: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ imageSrc, title, text, buttonText, linkTo }) => (
  <div className="flex flex-col text-center">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-theme-secondary font-heading mb-2">{title}</h3>
      <p className="text-theme-text-main flex-grow">{text}</p>
      <div className="mt-6">
        <Link to={linkTo} className="inline-block bg-theme-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-theme-primary-hover transition-colors duration-300 shadow-md hover:shadow-lg">
          {buttonText}
        </Link>
      </div>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Section 1: Intro */}
      <section>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl md:text-6xl">
                Kumar Omkar
              </h1>
              <p className="mt-6 text-lg text-theme-text-main max-w-xl mx-auto md:mx-0">
                Hey there! I’m Omkar—a builder at heart and a problem-solver by profession. Over the past 8 years, I’ve worked across industries from aerospace to EdTech to SaaS, and now I’m helping shape platform safety and data systems at LinkedIn. I love turning complex challenges into clear, actionable programs, and I’m always up for a good brainstorming session. When I’m not working, you will find me learning new stuff, reading about tech and finance.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://picsum.photos/seed/omkar/500/500" 
                alt="Kumar Omkar" 
                className="rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Explore More */}
      <section>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-theme-secondary font-heading mb-12">
            Explore More About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExploreCard
              imageSrc="https://picsum.photos/seed/about/500/300"
              title="Want to learn more about me and my experience?"
              text="Discover my journey, professional background, and projects."
              buttonText="About"
              linkTo="/about"
            />
            <ExploreCard
              imageSrc="https://picsum.photos/seed/blog/500/300"
              title="Curious about what I write?"
              text="Dive into my blog where I share insights on Tech, Product, Management, Strategy, and General Gyan."
              buttonText="Blog"
              linkTo="/blog"
            />
            <ExploreCard
              imageSrc="https://picsum.photos/seed/contact/500/300"
              title="Interested in the work that I do?"
              text="Let’s connect and explore how we can collaborate."
              buttonText="Contact"
              linkTo="/contact"
            />
            <ExploreCard
              imageSrc="https://picsum.photos/seed/appoint/500/300"
              title="Looking for guidance and mentorship?"
              text="Book a session with me for personalized advice and mentorship."
              buttonText="Appointment"
              linkTo="/appointment"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
