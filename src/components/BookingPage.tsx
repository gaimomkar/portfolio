import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            const calendlyScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (calendlyScript) {
                document.body.removeChild(calendlyScript);
            }
        };
    }, []);

  return (
    <div className="bg-theme-bg-main animate-fadeIn">
      <div className="pt-16 sm:pt-24" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
            Schedule Your Session
          </h1>
        </header>

        <section className="bg-theme-bg-white rounded-xl shadow-lg border border-theme-border p-6 md:p-8 mb-8 text-center">
            <p className="text-theme-text-main">
                This is only for a 30-minute engagement. If you need a longer engagement, you can{' '}
                <Link to="/contact" className="text-theme-primary font-semibold hover:underline">
                    directly connect with me
                </Link>.
            </p>
        </section>

        {/* Calendly inline widget begin */}
        <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/gaimomkar?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=fefafa&text_color=000000&primary_color=ec5b53" 
            style={{ minWidth: '320px', height: '900px' }}>
        </div>
      </div>
      <div className="pb-16 sm:pb-24" />
    </div>
  );
};

export default BookingPage;
