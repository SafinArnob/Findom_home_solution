import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import '../styles/FAQ.css'; // Import your custom CSS file
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../pages/Footer';

const FAQPage = () => {
    const [activeTab, setActiveTab] = useState('selling'); // State for active tab
    const [activeQuestion, setActiveQuestion] = useState(null); // State for active question

    const faqData = {
        selling: [
            {
                question: 'How can we help?',
                answer:
                    'Lorem ipsum dolor sit amet, consectetur cing elit. Suspendisse suscipit sagittis leo sit met condimentum est i dolciux bulum iscipit sagittis leo sit met connoisse suLorem ipsum dolor sit amet, consectetur cing elit. Suspendisse suscipit sagittis leo sit met condimentum est i dolciux bulum iscipit sagittis leo sit met connoisse su.',
            },
            {
                question: 'How do I delete my account?',
                answer:
                    'Lorem ipsum dolor sit amet, consectetur cing elit. Suspendisse suscipit sagittis leo sit met condimentum est i dolciux bulum iscipit. ',
            },
            {
                question: 'What is cloud backup?',
                answer: 'Cloud backup is a service that automatically saves your data to secure servers.',
            },
            {
                question: 'Do you store any of my information?',
                answer: 'We maintain strict privacy standards and only store essential information.',
            },
            {
                question: 'Do you store any of my information?',
                answer: 'We maintain strict privacy standards and only store essential information.',
            },
        ],
        renting: [
            {
                question: 'How do I list my property for rent?',
                answer: 'You can easily list your property by following these steps...',
            },
            {
                question: 'What are the rental terms?',
                answer: 'Our rental terms are flexible and can be customized to your needs.',
            },
        ],
        other: [
            {
                question: 'How do I contact support?',
                answer: 'You can reach our support team 24/7 through various channels.',
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers.',
            },
        ],
    };

    return (
        <div className="min-vh-100 bg-light">
            {/* Navbar */}
            <Navbar />

            {/* FAQ Page Content */}
            <div className="container py-5">
                {/* Breadcrumb */}
                <div className="d-flex align-items-center text-muted mb-4">
                    <span>Home</span>
                    <ChevronRight className="mx-2" size={16} />
                    <span>FAQs</span>
                </div>

                {/* Page Title */}
                <h1 className="display-4 fw-bold text-dark mb-5">Frequently asked questions</h1>

                <div className="row">
                    {/* FAQ Section */}
                    <div className="col-lg-8">
                        {/* Buttons for Tabs */}
                        <div className="d-flex gap-3 mb-4">
                            <button
                                onClick={() => setActiveTab('selling')}
                                className={`btn faq-tab-btn ${activeTab === 'selling' ? 'active' : ''
                                    }`}
                            >
                                Question about Renting
                            </button>
                            <button
                                onClick={() => setActiveTab('renting')}
                                className={`btn faq-tab-btn ${activeTab === 'renting' ? 'active' : ''
                                    }`}
                            >
                                Question about Servicees
                            </button>
                            <button
                                onClick={() => setActiveTab('other')}
                                className={`btn faq-tab-btn ${activeTab === 'other' ? 'active' : ''
                                    }`}
                            >
                                Other question
                            </button>
                        </div>

                        {/* FAQ Questions */}
                        <div className="mb-5">
                            <h2 className="h4 fw-bold mb-4">
                                {activeTab === 'selling'
                                    ? 'Question about selling'
                                    : activeTab === 'renting'
                                        ? 'Question about renting'
                                        : 'Other question'}
                            </h2>
                            <div className="list-group">
                                {faqData[activeTab].map((item, index) => (
                                    <div key={index} className="list-group-item border-0 p-0 mb-3">
                                        <button
                                            className="d-flex justify-content-between align-items-center w-100 p-3 bg-white border rounded text-start faq-question-btn"
                                            onClick={() =>
                                                setActiveQuestion(activeQuestion === index ? null : index)
                                            }
                                        >
                                            <span className="fw-medium">{item.question}</span>
                                            <ChevronDown
                                                className={`ms-2 transition-transform ${activeQuestion === index ? 'rotate-180' : ''
                                                    }`}
                                                size={20}
                                            />
                                        </button>
                                        {activeQuestion === index && (
                                            <div className="p-3 bg-light border rounded mt-2">
                                                <p className="mb-0">{item.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="col-lg-4">
                        <div className="sticky-top">
                            <div className="card shadow">
                                <div className="card-body">
                                  
                                    <div className="ratio ratio-16x9 mb-3">
                                        <iframe
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            title="FAQ Video"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer page */}
         <Footer />
        </div>
     

        
    );
};

export default FAQPage;