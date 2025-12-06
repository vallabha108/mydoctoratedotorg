import React from 'react';
import './AccessToDoctorate.css';

const AccessToDoctorate = () => {
    return (
        <div className="access-page">
            {/* Hero Section */}
            <section className="access-hero-section">
                <div className="access-hero-background">
                    <img src="/images/access-hero-book-final.png" alt="Access to Doctorate Background" className="access-hero-bg-img" />
                    <div className="access-hero-overlay">
                        <h1 className="access-hero-title">Access to Doctorate</h1>
                    </div>
                </div>
            </section>

            {/* Access to Year 1 Section */}
            <section className="access-info-section">
                <div className="container access-grid">
                    <div className="access-text-col">
                        <h2 className="section-title">Access to Year 1 of PhD or DBA</h2>
                        <ul className="info-list">
                            <li><strong>Unit Specification:</strong> Access to Doctorate for Master’s Qualified Candidates</li>
                            <li><strong>Unit Title:</strong> Access to PhD for master’s qualified candidates</li>
                            <li><strong>SCQF Level:</strong> 11</li>
                            <li><strong>SCQF Credit Points:</strong> 20</li>
                            <li><strong>Delivery Duration:</strong> 8 Weeks</li>
                            <li><strong>Assessment:</strong> PhD Research Proposal in Business and Management</li>
                        </ul>
                    </div>
                    <div className="access-image-col">
                        <img src="/images/access-students.jpg" alt="Students studying" className="content-img" />
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="access-purpose-section">
                <div className="container access-grid reverse-mobile">
                    <div className="access-image-col">
                        <img src="/images/access-purpose-new.jpg" alt="Writing notes" className="content-img" />
                    </div>
                    <div className="access-text-col centered-vertical">
                        <h2 className="section-title">Purpose</h2>
                        <p className="purpose-text">
                            This unit is designed as a standalone award for individuals holding a master’s degree who aspire to pursue doctoral studies in Business and Management. It provides structured guidance to develop a viable and academically rigorous doctorate research proposal, aligning with the expectations of doctoral programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Indicative Content Section (Blue) */}
            <section className="access-indicative-section">
                <div className="container access-grid">
                    <div className="access-text-col indicative-text">
                        <h2 className="section-title white-text">Indicative Content</h2>

                        <div className="week-item">
                            <h3>Week 1: Introduction to Doctoral Research in Business and Management</h3>
                            <ul>
                                <li>Understanding the nature and scope of doctoral research</li>
                                <li>Exploring current trends and research areas in Business and Management</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 2: Literature Review and Identifying Research Gaps</h3>
                            <ul>
                                <li>Techniques for conducting a systematic literature review</li>
                                <li>Strategies for identifying and articulating research gaps</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 3: Developing Research Questions and Objectives</h3>
                            <ul>
                                <li>Crafting clear and focused research questions</li>
                                <li>Aligning objectives with research aims</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 4: Research Methodology</h3>
                            <ul>
                                <li>Overview of qualitative, quantitative, and mixed-methods approaches</li>
                                <li>Selecting appropriate research designs and methods</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 5: Ethical Considerations and Research Planning</h3>
                            <ul>
                                <li>Understanding ethical issues in research</li>
                                <li>Planning for ethical approval processes</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 6: Data Collection and Analysis Techniques</h3>
                            <ul>
                                <li>Exploring data collection methods (e.g., surveys, interviews)</li>
                                <li>Introduction to data analysis tools and techniques</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 7: Structuring the Research Proposal</h3>
                            <ul>
                                <li>Components of a doctoral research proposal</li>
                                <li>Writing strategies for clarity and coherence</li>
                            </ul>
                        </div>

                        <div className="week-item">
                            <h3>Week 8: Finalising and Presenting the Proposal</h3>
                            <ul>
                                <li>Refining the proposal based on feedback</li>
                                <li>Preparing for potential interviews or presentations</li>
                            </ul>
                        </div>

                    </div>
                    <div className="access-image-col crop-container">
                        <img src="/images/access-indicative-stairs.png" alt="Stairs" className="content-img crop-right" />
                    </div>
                </div>
            </section>

            {/* Delivery and Support Section */}
            <section className="access-delivery-section">
                <div className="container access-grid">
                    <div className="access-text-col">
                        <div className="delivery-block">
                            <h2 className="section-title">Delivery and Support</h2>
                            <ul className="info-list">
                                <li><strong>Mode of Delivery:</strong> Online learning combining lectures, workshops, and online resources.</li>
                                <li><strong>Learning Resources:</strong> Access to academic journals, research databases, and proposal writing guides.</li>
                                <li><strong>Support:</strong> Regular tutorials and feedback sessions with academic supervisors.</li>
                            </ul>
                        </div>

                        <div className="delivery-block">
                            <h2 className="section-title">Recommended Entry Requirements</h2>
                            <ul className="info-list">
                                <li>A master’s degree in business, management, or a related discipline.</li>
                            </ul>
                        </div>

                        <div className="delivery-block">
                            <h2 className="section-title">Progression Opportunities</h2>
                            <p className="purpose-text">Successful completion of this unit will prepare learners to:</p>
                            <p className="purpose-text">Apply for Doctorate programmes in Business and Management.</p>
                            <ul className="info-list">
                                <li>Engage in advanced research projects within academic or professional settings.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="access-image-col delivery-images-stack">
                        <img src="/images/access-delivery-students.png" alt="Students collaboration" className="content-img stack-img" />
                        <img src="/images/access-delivery-courtyard.jpg" alt="University Courtyard" className="content-img stack-img" />
                    </div>
                </div>
            </section>


            {/* Learning Outcomes Section */}
            <section className="access-outcomes-section">
                <div className="access-full-image">
                    <img src="/images/access-outcomes-campus-final.png" alt="University Campus" className="campus-img" />
                </div>
                <div className="container outcomes-content">
                    <h2 className="section-title center-text">Learning Outcomes</h2>
                    <p className="outcomes-intro center-text">By the end of this unit, learners will be able to:</p>
                    <ol className="outcomes-list">
                        <li>Critically evaluate existing literature to identify research gaps in a chosen area of Business and Management.</li>
                        <li>Formulate a coherent and researchable problem statement and corresponding research questions, aims and Objectives.</li>
                        <li>Design an appropriate research methodology, including data collection and analysis strategies, suitable for doctoral-level research.</li>
                        <li>Develop a comprehensive doctorate research proposal that meets academic standards and makes original contribution to knowledge.</li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default AccessToDoctorate;
