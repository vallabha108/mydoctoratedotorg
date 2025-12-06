import React from 'react';
import './PhDThesis.css';

const PhDThesis = () => {
    return (
        <div className="phd-thesis-page">
            {/* Hero Section */}
            <section className="phd-hero-section">
                <div className="phd-hero-background">
                    <img src="/images/phd-thesis-hero-final.png" alt="PhD Thesis Pathway" className="phd-hero-bg-img" />
                    <div className="phd-hero-overlay">
                        <h1 className="phd-hero-title">PhD (Thesis Pathway)</h1>
                    </div>
                </div>
            </section>

            {/* Doctor Year 1 Section */}
            <section className="phd-year1-section">
                <div className="container phd-grid">
                    <div className="phd-text-col">
                        <h2 className="section-title">Doctor Year 1</h2>
                        <h3 className="section-subtitle">Start your Doctoral Journey with a structured, flexible, and globally recognised qualification</h3>
                        <p className="phd-text">
                            At Doctoral College UK, our doctorate pathway offers an innovative, accessible route to doctoral study that begins with a robust foundation at Year 1 and progresses seamlessly with same supervisor Team to Doctorate Year 2 and Year 3 with our UK Partner Universities or with one of over 100 other UK and Global universities.
                        </p>
                    </div>
                    <div className="phd-image-col">
                        <img src="/images/phd-thesis-students.jpg" alt="Students collaborating" className="content-img" />
                    </div>
                </div>
            </section>

            {/* Programme Details Section */}
            <section className="phd-programme-section">
                <div className="container phd-grid">
                    <div className="phd-chart-col">
                        <img src="/images/phd-thesis-chart.png" alt="PhD Pathway Chart" className="chart-img" />
                    </div>
                    <div className="phd-text-col programme-details">
                        <h2 className="section-title">Programme: Normally 3 Years Full-Time Study</h2>

                        <div className="programme-block">
                            <h3 className="programme-year-title">Year 1: SQA Level 11 Advanced Diploma in Applied Research</h3>
                            <p className="phd-text">
                                Equivalent to Year 1 of all UK University PhDs and DBAs, this format equips learners with advanced research skills, critical analysis, and academic writing expertise.
                            </p>
                        </div>

                        <div className="programme-block">
                            <h4 className="programme-label">Key Modules:</h4>
                            <ul className="programme-list">
                                <li>Research Methodologies & Research Design</li>
                                <li>Literature Review & Theoretical Frameworks</li>
                                <li>Research Ethics & Data Management</li>
                                <li>Pilot Study & Methodological Justification</li>
                                <li>Applied Research Report (Evidence for Progression to PhD Year 2)</li>
                            </ul>
                        </div>

                        <div className="programme-block">
                            <h4 className="programme-label">Award:</h4>
                            <p className="phd-text">
                                SQA Level 11 Extended Advanced Diploma (180 SCQF credits) for Year 1
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Years 2 & 3 Completion Section */}
            <section className="phd-completion-section">
                {/* Row 1: Header (Title + Intro) & Empty Space */}
                <div className="completion-row">
                    <div className="phd-text-col completion-text-panel panel-top">
                        <h2 className="section-title white-text">Years 2 and 3: PhD Completion at a Partner University</h2>
                        <p className="phd-text white-text">
                            On successful completion of the Advanced Diploma, you will progress to the final 2 years of the PhD - DBA with our preferred partner, University of Greater Manchester, or select from over 100 SQA-affiliated UK universities.
                        </p>
                    </div>
                    <div className="phd-image-col placeholder-col">
                        {/* Empty right column for top section */}
                    </div>
                </div>

                {/* Row 2: Content Body & Image */}
                <div className="completion-row">
                    <div className="phd-text-col completion-text-panel panel-bottom">
                        <div className="completion-block">
                            <h4 className="programme-label white-text">You will:</h4>
                            <ol className="programme-list white-text">
                                <li>Complete your full doctoral thesis</li>
                                <li>Receive continued supervision through Doctoral College UK</li>
                                <li>Undertake your viva voce examination</li>
                                <li>Be awarded the PhD - DBA by your chosen partner university</li>
                            </ol>
                        </div>

                        <div className="completion-block">
                            <h3 className="programme-year-title white-text">Programme Highlights</h3>
                            <ol className="programme-list white-text">
                                <li>Flexible Entry & Supportive Progression</li>
                                <li>Recognised Qualification at Level 11 - Year 1 (PhD - DBA)</li>
                                <li>Pathway to PhD - DBA with Leading UK Universities</li>
                                <li>Affordable Fees with Scholarship Opportunities</li>
                                <li>Online Delivery with Expert Supervision</li>
                            </ol>
                        </div>

                        <div className="completion-block">
                            <h3 className="programme-year-title white-text">Entry Requirements</h3>
                            <ol className="programme-list white-text">
                                <li>UK Honours Degree (2:1 or above) or equivalent</li>
                                <li>Evidence of research capability or relevant postgraduate study</li>
                                <li>English language proficiency (IELTS 6.5 or equivalent, if applicable)</li>
                            </ol>
                        </div>

                        <div className="completion-block">
                            <h3 className="programme-year-title white-text">Where Can This Take You?</h3>
                            <p className="phd-text white-text">Graduates go on to become:</p>
                            <ol className="programme-list white-text">
                                <li>University Lecturers & Industry Researchers</li>
                                <li>Innovation & Knowledge Managers</li>
                                <li>Public Policy Analysts</li>
                                <li>Industry Consultants & Business Entrepreneurs</li>
                            </ol>
                        </div>
                    </div>
                    <div className="phd-image-col">
                        <img src="/images/phd-thesis-stairs.jpg" alt="Students walking up stairs" className="content-img full-height-img" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PhDThesis;
