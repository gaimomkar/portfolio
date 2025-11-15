import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Inline SVG components for icons used on this page
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);


const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // IMPORTANT: Replace this URL with your actual Formspree form endpoint.
      // Go to https://formspree.io/ to create a form and get your endpoint.
      const response = await fetch('https://formspree.io/f/xgvryvbn', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset to idle after a few seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };


  const inputClasses = "block w-full px-4 py-3 rounded-md bg-theme-bg-subtle border-2 border-transparent focus:border-theme-primary focus:bg-white focus:ring-0 transition-all duration-300 placeholder-slate-400";
  const buttonClasses = "w-full bg-theme-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-theme-primary-hover transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary disabled:bg-slate-400 disabled:cursor-not-allowed";
  
  return (
    <div className="bg-theme-bg-main min-h-full animate-fadeIn">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-xl text-theme-text-main">
            Let's Get In Touch
          </p>
        </div>

        <div className="bg-theme-bg-white rounded-xl shadow-lg p-8 mb-16 max-w-4xl mx-auto text-center border border-theme-border">
          <h2 className="text-2xl font-bold text-theme-secondary font-heading mb-3">Want to book an appointment?</h2>
          <p className="text-theme-text-main mb-6 max-w-2xl mx-auto">Book a session with me for personalized advice and mentorship.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/appointment" className="inline-block w-full sm:w-auto bg-theme-bg-subtle text-theme-secondary font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-300">
              Services
            </Link>
            <Link to="/booking" className="inline-block w-full sm:w-auto bg-theme-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-theme-primary-hover transition-colors duration-300 shadow-md hover:shadow-lg">
              Pick a Time
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-16 bg-theme-bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-6xl mx-auto mb-16 border border-theme-border">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-theme-secondary font-heading mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" className={inputClasses} placeholder="Enter Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className={inputClasses} placeholder="Enter Email Address" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={5} className={inputClasses} placeholder="Enter Your Message" required></textarea>
              </div>
              <div>
                <button type="submit" className={buttonClasses} disabled={formStatus === 'submitting'}>
                   {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
               {formStatus === 'success' && (
                <p className="text-green-600 font-medium text-center">Thank you for your message! I'll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 font-medium text-center">Oops! There was a problem. Please try again later.</p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-theme-secondary font-heading mb-6">Message Me</h3>
            <div className="text-theme-text-main leading-relaxed space-y-4">
                <p>Have a question, feedback, or just want to get in touch? I’d love to hear from you.</p>
                <p>Whether you’re looking for more information, potential collaboration, or just want to say hello — feel free to reach out using the form. I’ll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-theme-bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-theme-border">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 text-theme-primary p-4 rounded-full">
                <PhoneIcon />
              </div>
            </div>
            <h4 className="text-xl font-bold text-theme-secondary font-heading">+91 8608384567</h4>
            <p className="text-theme-text-light mt-1">Mon-Fri 7am - 5pm</p>
          </div>

          <div className="bg-theme-bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-theme-border">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 text-theme-primary p-4 rounded-full">
                <LocationIcon />
              </div>
            </div>
            <h4 className="text-xl font-bold text-theme-secondary font-heading">Bengaluru, India</h4>
            <p className="text-theme-text-light mt-1">560087</p>
          </div>

          <div className="bg-theme-bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-theme-border">
            <div className="flex justify-center mb-4">
                <div className="bg-red-100 text-theme-primary p-4 rounded-full">
                    <EmailIcon />
                </div>
            </div>
            <h4 className="text-xl font-bold text-theme-secondary font-heading">omkarbd01@gmail.com</h4>
            <p className="text-theme-text-light mt-1">Contact me every time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;