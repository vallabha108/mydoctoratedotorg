import React from 'react';
import { FaBook, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';
import './StudyPortfolio.css';

const StudyPortfolio = () => {
    return (
        <div className="study-portfolio-page">
            <section className="study-portfolio-section">
                <div className="portfolio-banner-container">
                    <img src="/images/portfolio/banner.png" alt="Students studying" className="portfolio-banner" />
                </div>
                <div className="container">
                    <h2 className="section-title">Study portfolio mapped to DCUK milestones</h2>
                    <p className="section-description">
                        At DCUK, your learning for all areas of study is through microcredentials which are short, flexible, and highly focused qualifications designed to help learners quickly develop in-demand skills. Each microcredential provides targeted learning that can be completed in weeks rather than years, making them ideal for upskilling, reskilling, or exploring new professional pathways. Recognised by employers and aligned with industry needs, microcredentials offer practical, career-boosting knowledge with the option to stack into larger qualifications.
                    </p>
                    <div className="portfolio-container">

                        {/* New Layout: Cards Row 1 */}
                        <div className="portfolio-cards-row">
                            {/* Access to Doctorate */}
                            <div className="portfolio-card">
                                <img src="/images/portfolio/computer-student.png" alt="Access to Doctorate" className="card-img" />
                                <div className="card-body">
                                    <h4 className="card-title">Access to Doctorate</h4>
                                </div>
                            </div>

                            {/* PhD Year 1 (Thesis) */}
                            <div className="portfolio-card">
                                <img src="/images/portfolio/group-students.png" alt="PhD Year 1" className="card-img" />
                                <div className="card-body">
                                    <h4 className="card-title">PhD Year 1 (Thesis Pathway)</h4>
                                </div>
                            </div>

                            {/* PhD Year 2 (Thesis) */}
                            <div className="portfolio-card">
                                <img src="/images/portfolio/group-students.png" alt="PhD Year 2" className="card-img" />
                                <div className="card-body">
                                    <h4 className="card-title">PhD Year 2 (Thesis Pathway)</h4>
                                </div>
                            </div>

                            {/* PhD Year 1 (Mentor Path) */}
                            <div className="portfolio-card">
                                <img src="/images/portfolio/library-pair.png" alt="PhD Year 1 Mentor" className="card-img" />
                                <div className="card-body">
                                    <h4 className="card-title">PhD Year 1 (Publication Mentor Path)</h4>
                                </div>
                            </div>

                            {/* PhD Year 2 (Mentor Path) */}
                            <div className="portfolio-card">
                                <img src="/images/portfolio/library-pair.png" alt="PhD Year 2 Mentor" className="card-img" />
                                <div className="card-body">
                                    <h4 className="card-title">PhD Year 2 (Publication Mentor Path)</h4>
                                </div>
                            </div>

                            {/* PhD Year 1 (Fast Track) */}
                            <div className="portfolio-card">
                                <img src="/images/portfolio/student-pillar.png" alt="PhD Year 1 Fast Track" className="card-img" />
                                <div className="card-body">
                                    <h4 className="card-title">PhD 1 Year (Publication Fast Track)</h4>
                                </div>
                            </div>
                        </div>

                        {/* Professional Training & CPD */}
                        <div className="portfolio-group">
                            <h3 className="portfolio-category-title">Training CPD Tracks & Trainings</h3>
                            <div className="portfolio-cards-row">
                                {/* Row 1 */}
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/research-training.png" alt="Research Training CPD" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Research Training CPD</h4>
                                    </div>
                                </div>
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/management-training.png" alt="Management Training CPD" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Management Training CPD</h4>
                                    </div>
                                </div>
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/ai-playbook.png" alt="The AI Engineer’s Playbook" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">The AI Engineer’s Playbook: From Models to Agents</h4>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/teaching-practice.png" alt="Teaching Practice Training" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Teaching Practice Training</h4>
                                    </div>
                                </div>
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/supervisor-training.png" alt="PhD Supervisor Training" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">PhD Supervisor Training</h4>
                                    </div>
                                </div>
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/fellowship-training.png" alt="Research Fellowship Training" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Research Fellowship Training</h4>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/accountant-training.png" alt="Chartered Accountant Training" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Chartered Accountant Training</h4>
                                    </div>
                                </div>
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/cpd/entrepreneurship-training.png" alt="Entrepreneurship Training" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Entrepreneurship Training</h4>
                                    </div>
                                </div>
                                <div className="portfolio-card">
                                    <img src="/images/portfolio/computer-student.png" alt="Digital Marketeer (Social Media) Training" className="card-img" />
                                    <div className="card-body">
                                        <h4 className="card-title">Digital Marketeer (Social Media) Training</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudyPortfolio;
