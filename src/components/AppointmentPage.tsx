import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard: React.FC<{ imgSrc: string; title: string; text: string; }> = ({ imgSrc, title, text }) => (
    <div className="flex flex-col items-center">
        <img src={imgSrc} alt={title} className="h-12 w-12 mb-4" />
        <h3 className="text-xl font-bold text-theme-secondary font-heading mb-2">{title}</h3>
        <p className="text-theme-text-main">{text}</p>
    </div>
);


const AppointmentPage: React.FC = () => {
  return (
    <div className="bg-theme-bg-main animate-fadeIn">
      <div className="pt-16 sm:pt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
            Book an Appointment
          </h1>
          <p className="mt-4 text-xl text-theme-text-main max-w-3xl mx-auto">
            Get personalized advice and guidance directly from me. Book a session for tailored support and actionable insights!
          </p>
          <div className="w-24 h-1 bg-theme-primary mx-auto mt-6"></div>
        </header>

        <section className="bg-theme-bg-white rounded-xl shadow-lg border border-theme-border p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                <InfoCard 
                    imgSrc="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219582/computer-1_ejuudl.png"
                    title="Quick Consults"
                    text="Fast, focused answers to your questions about tech careers, program management, or industry trends."
                />
                <InfoCard 
                    imgSrc="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219577/ads-1_z5rr6c.png"
                    title="Career Guidance"
                    text="Personalized feedback on your resume and actionable advice to elevate your career trajectory."
                />
                <InfoCard 
                    imgSrc="https://res.cloudinary.com/dk0uj1jry/image/upload/v1763219586/settings-1_vlqjrt.png"
                    title="Mentorship"
                    text="Realistic interview simulations and deep-dive mentorship sessions tailored to your goals."
                />
            </div>
        </section>

        <section className="text-center">
            <Link 
                to="/booking" 
                className="inline-block bg-theme-primary text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-theme-primary-hover transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Book Your 30-Min Session Now
            </Link>
             <p className="text-theme-text-light mt-4">
                Need a longer, more in-depth discussion? <Link to="/contact" className="text-theme-secondary font-semibold hover:underline">Contact me</Link> directly.
            </p>
        </section>
      </div>
      <div className="pb-16 sm:pb-24" />
    </div>
  );
};

export default AppointmentPage;