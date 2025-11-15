
import React from 'react';

const RefundPage: React.FC = () => {
  return (
    <div className="bg-theme-bg-main min-h-full animate-fadeIn py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-theme-bg-white rounded-xl shadow-lg p-8 sm:p-12 border border-theme-border">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
              Cancellation & Refund Policy
            </h1>
            <p className="mt-4 text-lg text-theme-text-main">
              This page outlines our cancellation and refund policy, including eligibility, timelines, and the process for requesting cancellations or refunds for your orders.
            </p>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-theme-primary font-semibold">Last updated on Jun 25th 2025</p>
            
            <p>
              KUMAR OMKAR HUF believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
            </p>
            
            <ul>
              <li>In case of any Refunds approved by the KUMAR OMKAR HUF, it’ll take 6-8 days for the refund to be processed to the end customer.</li>
              <li>Cancellations will be considered only if the request is made within 2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.</li>
              <li>KUMAR OMKAR HUF does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.</li>
              <li>In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 2 days of receipt of the products.</li>
              <li>In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</li>
              <li>In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPage;
