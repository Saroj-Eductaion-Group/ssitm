import React, { useState } from 'react';
import Layout from '../../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    college: 'SSITM',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle');

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);
    setSubmissionStatus('submitting');

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmissionStatus('success');
      setFormData({
        college: 'SSITM',
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmissionStatus('error');
    }
  };

  const contactInfo = {
    address: '10th KM Stone, Aligarh-Mathura Road, Aligarh, Uttar Pradesh, India, 202001',
    phone1: '+91- 9555699988',
    phone2: '+91- 09810054878',
    tollFree: '1800-180-7686',
    admissionsEmail: 'admission.cell@seglko.org',
  };

  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.367399847364!2d78.020294!3d27.8092116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a48b1dc2b28f%3A0x23c4fb820ec1cf4!2sShivdan%20Singh%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1717060000000!5m2!1sen!2sin";

  return (
    <Layout>
      {/* Hero Section with light orange theme */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
            <span className='border-l-4 border-orange-500 pl-4'>CONTACT</span> <span className='text-orange-600'>US</span>
          </h1>
          <p className="text-lg">
            We are here to assist you. Please reach out with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Main Content with card styling */}
      <section className="bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100 transition-transform hover:shadow-xl hover:-translate-y-1">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-200">Contact Information</h2>
              
              <div className="mb-6 flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">College Campus</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="mb-6 flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Phone Numbers</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${contactInfo.phone1}`} className="hover:underline block">{contactInfo.phone1}</a>
                    <a href={`tel:${contactInfo.phone2}`} className="hover:underline block">{contactInfo.phone2}</a>
                    <span className="font-medium block">Toll Free: {contactInfo.tollFree}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${contactInfo.admissionsEmail}`} className="hover:underline">{contactInfo.admissionsEmail}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100 transition-transform hover:shadow-xl hover:-translate-y-1">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-200">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition disabled:opacity-50 font-medium shadow-md"
                >
                  {submissionStatus === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                {submissionStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
                    Thank you for your message! We will get back to you shortly.
                  </div>
                )}
                {submissionStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
                    Error sending message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Card */}
      <section className="bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center pb-2 border-b-2 border-orange-200">Find Us On Map</h2>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SSITM Location on Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;