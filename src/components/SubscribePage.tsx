
import React, { useState } from 'react';

const SubscribePage: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
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
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                 setTimeout(() => setFormStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };
    
    const inputClasses = "block w-full px-4 py-3 rounded-md bg-theme-bg-subtle border-2 border-transparent focus:border-theme-primary focus:bg-white focus:ring-0 transition-all duration-300 placeholder-slate-400";
    const buttonClasses = "w-full sm:w-auto bg-theme-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-theme-primary-hover transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary disabled:bg-slate-400 disabled:cursor-not-allowed";

    return (
        <div className="animate-fadeIn py-16 sm:py-24 bg-theme-bg-main">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
                        Subscribe
                    </h1>
                </header>

                <div className="bg-white rounded-xl shadow-lg border border-theme-border p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                             <h2 className="text-2xl font-bold text-theme-secondary font-heading mb-3">Join My Community Newsletter</h2>
                             <p className="text-theme-text-main mb-6">
                                Subscribe now to get thoughtful insights, practical tips, and curated resources delivered straight to your inbox.
                             </p>
                             <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="subscribe-name" className="sr-only">Name</label>
                                    <input type="text" name="name" id="subscribe-name" className={inputClasses} placeholder="Name" required />
                                </div>
                                <div>
                                    <label htmlFor="subscribe-email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="subscribe-email" className={inputClasses} placeholder="Enter Email Address" required />
                                </div>
                                <div className="pt-2">
                                    <button type="submit" className={buttonClasses} disabled={formStatus === 'submitting'}>
                                        {formStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                                    </button>
                                </div>
                                {formStatus === 'success' && (
                                    <p className="text-green-600 font-medium pt-2">Thank you for subscribing! Check your inbox to confirm.</p>
                                )}
                                {formStatus === 'error' && (
                                    <p className="text-red-600 font-medium pt-2">Oops! Something went wrong. Please try again.</p>
                                )}
                             </form>
                        </div>
                        <div className="prose">
                             <p className="font-semibold">Subscribe if you’re curious about:</p>
                             <ul>
                                <li>🚀 Program Management</li>
                                <li>💻 Tech</li>
                                <li>🧠 Strategy</li>
                                <li>📦 Product</li>
                                <li>🤔 General Gyan</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribePage;
