import React from 'react';
import './FoundingRoadmap.css';

const FoundingRoadmap = () => {
    return (
        <div className="roadmap-page">
            {/* Hero Section */}
            <section className="roadmap-hero-section">
                <div className="roadmap-hero-image-container">
                    <img src="/images/roadmap-hero.png" alt="Founding Roadmap" className="roadmap-hero-img" />
                </div>
            </section>

            {/* Content Section */}
            <section className="roadmap-content-section">
                <div className="container">
                    <h1 className="section-title">Founding roadmap</h1>
                    <p className="section-subtitle">
                        A focused rollout enabling early cohort testing ahead of full commercial launch.
                    </p>

                    <div className="roadmap-timeline">
                        {/* Phase 1 */}
                        <div className="timeline-item">
                            <h3 className="timeline-date">Now – October 2025</h3>
                            <ul className="timeline-list">
                                <li>Launch MyDoctorate.org landing site, founding member waitlist and employer pipeline for internships.</li>
                            </ul>
                        </div>

                        {/* Phase 2 */}
                        <div className="timeline-item">
                            <h3 className="timeline-date">November – December 2025</h3>
                            <ul className="timeline-list">
                                <li>Deliver research and data analysis bundles while activating the employer founding partner campaign.</li>
                            </ul>
                        </div>

                        {/* Phase 3 */}
                        <div className="timeline-item">
                            <h3 className="timeline-date">January – February 2026</h3>
                            <ul className="timeline-list">
                                <li>Scale community features, scholarships, regional internship tracks and strategic partnerships.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FoundingRoadmap;
