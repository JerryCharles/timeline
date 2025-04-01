import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8 relative">
          <Link href="/en" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">Terms of Service</h1>
          <div className="w-20"></div> {/* This empty div helps balance the layout */}
        </div>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the 3ja.com service (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). 
              If you do not agree to these Terms, please do not use the Service.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the Service following the posting of changes 
              constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use the Service. By agreeing to these Terms, you represent and warrant that 
              you are at least 13 years of age.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">3. Service Description</h2>
            <p className="mb-4">
            3ja.com is an informational service that allows users to browse topics and events in a timeline format. 
              The Service does not require you to create an account to access its content.
            </p>
            <p>
              We strive to provide accurate and reliable information, but we cannot guarantee the accuracy, completeness, 
              or reliability of any content presented on the Service. The content is provided for general information purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">4. Advertising</h2>
            <p className="mb-4">
              The Service displays advertisements. These advertisements are clearly marked and are provided by third-party advertising networks. 
              By using our Service, you agree to view these advertisements as part of your experience.
            </p>
            <p>
              We are not responsible for the content of these advertisements, and the presence of an advertisement does not constitute 
              an endorsement of the advertised product or service by 3ja.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">5. Cookies and Tracking</h2>
            <p className="mb-4">
              Our Service uses cookies and similar tracking technologies to enhance your experience, remember your language preferences (English or Traditional Chinese), 
              analyze site usage through Google Analytics, and deliver relevant advertisements. By using our Service, you consent to our use of these technologies as 
              described in our Privacy Policy.
            </p>
            <p>
              You can manage your cookie preferences through your browser settings, but please note that disabling certain cookies may affect the functionality of the Service, 
              including your language preference settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">6. Prohibited Activities</h2>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service for any illegal purpose or in violation of any laws.</li>
              <li>Attempt to gain unauthorized access to any portion of the Service or any systems or networks connected to the Service.</li>
              <li>Use any robot, spider, scraper, or other automated means to access the Service for any purpose.</li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
              <li>Upload, post, or otherwise transmit any viruses or other malicious code.</li>
              <li>Attempt to modify, reverse-engineer, decompile, or disassemble any portion of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">7. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by 3ja.com and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">8. Limitation of Liability</h2>
            <p>
              In no event shall Timeline, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, 
              use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its 
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material 
              change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at terms@3ja.com.
            </p>
          </section>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-700">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
    </>
  );
} 