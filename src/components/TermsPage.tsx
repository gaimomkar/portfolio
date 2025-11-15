
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-theme-bg-main min-h-full animate-fadeIn py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-theme-bg-white rounded-xl shadow-lg p-8 sm:p-12 border border-theme-border">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-lg text-theme-text-main">
              These Terms and Conditions govern your use of our website and services, outlining your responsibilities, our liabilities, and the legal framework for all interactions.
            </p>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-theme-primary font-semibold">Last updated on Jun 25th 2025</p>
            
            <p>
              For the purpose of these Terms and Conditions, The term “we”, “us”, “our” used anywhere on this page shall mean KUMAR OMKAR HUF, whose registered/operational office is Indis One City Hyderabad TELANGANA 500072 . “you”, “your”, “user”, “visitor” shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
            </p>

            <h3 className="font-heading text-theme-secondary">Your use of the website and/or purchase from us are governed by following Terms and Conditions:</h3>
            
            <ul>
              <li>We, shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.</li>
              <li>The content of the pages of this website is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
              <li>Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.</li>
              <li>Our website contains material which is owned by or licensed to us. This material includes, but are not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
              <li>All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
              <li>Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.</li>
              <li>From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
              <li>You may not create a link to our website from another website or document without KUMAR OMKAR HUF’s prior written consent.</li>
              <li>Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
