import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Original Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <h2 className="hero-tagline">GLOBAL DOCTORAL EXCELLENCE</h2>
                    <h1 className="hero-title">MyDoctorate.org</h1>
                </div>
            </section>

            {/* New Content Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="content-hero-title">DCUKs Research Community Platform</h1>
                    <p className="hero-subtitle">
                        A single membership unlocking accredited training, supervisor development, internships and community for doctoral researchers worldwide.
                    </p>
                    <button className="btn-primary">Join - Become a Member</button>
                </div>
            </section>

            {/* Membership Section */}
            <section className="membership-section">
                <div className="container">
                    <h2 className="section-title">Global membership for doctoral practice</h2>
                    <div className="membership-content">
                        <div className="membership-image">
                            <img src="/flags.png" alt="Flags Against Sky" className="membership-img" />
                        </div>
                        <div className="membership-details">
                            <h3>Membership built to accelerate doctoral journeys</h3>
                            <ul className="feature-list">
                                <li>£120 annual membership grants member discounted pricing across all programmes, events and services.</li>
                                <li>Priority access to curated cohorts, mentor office hours, internship shortlists and partnership opportunities.</li>
                                <li>Portfolio, CPD tracker and digital credentials wallet to evidence outputs and supervisor engagement.</li>
                                <li>Non-members participate at full price rates without preferential access or verified references.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders & Governance Section */}
            <section className="governance-section">
                <div className="container">
                    <div className="governance-block">
                        <h3>Founders & governance</h3>
                        <p>Owned by DCUK, MyDoctorate.org operates with a transparent structure that prioritizes speed and user value.</p>
                        <p>Governance is anchored by DCUK quality systems, SQA/SCQF alignment and a dedicated Academic Board overseeing standards, integrity and learner outcomes.</p>
                    </div>
                    <div className="ecosystem-block">
                        <h3>Designed for every voice in the doctoral ecosystem</h3>
                        <p>MyDoctorate.org convenes researchers, supervisors, institutions and employers into one high-trust network.</p>
                    </div>
                </div>
            </section>

            {/* Tiered Membership Section */}
            <section id="tiered-membership" className="tiered-membership-section">
                <div className="container">
                    <h2 className="section-title">MyDoctorate.org — Tiered Membership Model</h2>
                    <div className="tiers-list">
                        <div className="tier-item">Tier 1: BASIC — Research Community Access</div>
                        <div className="tier-item">Tier 2: PRO — Individual Research & Supervision</div>
                        <div className="tier-item">Tier 3: INSTITUTIONAL — Doctoral Infrastructure Licence</div>
                        <div className="tier-item">Tier 4: PARTNER — Employer & Strategic Collaboration</div>
                    </div>
                    <div className="cohort-cta">
                        <h3>Secure your founding cohort place</h3>
                        <p>Share your details to receive the MyDoctorate.org onboarding pack, preview demos and partner intake timing.</p>
                    </div>
                </div>
            </section>

            {/* Study Portfolio Section */}
            <section id="study-portfolio" className="study-portfolio-section">
                <div className="container">
                    <h2 className="section-title">Study portfolio mapped to DCUK milestones</h2>
                    <p className="section-description">
                        At DCUK, your learning for all areas of study is through microcredentials which are short, flexible, and highly focused qualifications designed to help learners quickly develop in-demand skills. Each microcredential provides targeted learning that can be completed in weeks rather than years, making them ideal for upskilling, reskilling, or exploring new professional pathways. Recognised by employers and aligned with industry needs, microcredentials offer practical, career-boosting knowledge with the option to stack into larger qualifications.
                    </p>
                    <div className="portfolio-container">
                        {/* Access to Doctorate */}
                        <div className="portfolio-group">
                            <h3 className="portfolio-category-title">Access to Doctorate</h3>
                            <div className="course-grid">
                                <div className="course-item">Access to Doctorate</div>
                            </div>
                        </div>

                        {/* Doctoral Pathways */}
                        <div className="portfolio-group">
                            <h3 className="portfolio-category-title">Doctoral Pathways</h3>
                            <div className="pathway-subgroups">
                                <div className="pathway-col">
                                    <h4 className="pathway-subtitle">1) By Thesis Pathway</h4>
                                    <div className="course-list">
                                        <div className="course-item-sm">PhD Year 1 (Thesis Pathway)</div>
                                        <div className="course-item-sm">PhD Year 2 (Thesis Pathway)</div>
                                        <div className="course-item-sm">PhD Year 3 (Thesis Pathway)</div>
                                    </div>
                                </div>
                                <div className="pathway-col">
                                    <h4 className="pathway-subtitle">2) Publication Mentor Pathway</h4>
                                    <div className="course-list">
                                        <div className="course-item-sm">PhD Year 1 (Publication Mentor Path)</div>
                                        <div className="course-item-sm">PhD Year 2 (Publication Mentor Path)</div>
                                    </div>
                                </div>
                                <div className="pathway-col">
                                    <h4 className="pathway-subtitle">3) Publication Fast Track</h4>
                                    <div className="course-list">
                                        <div className="course-item-sm">PhD Year 1 (Publication Fast Track)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional Training & CPD */}
                        <div className="portfolio-group">
                            <h3 className="portfolio-category-title">Training CPD Tracks & Trainings</h3>
                            <div className="course-grid">
                                <div className="course-item">Research Training CPD</div>
                                <div className="course-item">Management Training CPD</div>
                                <div className="course-item">The AI Engineer’s Playbook: From Models to Agents</div>
                                <div className="course-item">Teaching Practice Training</div>
                                <div className="course-item">PhD Supervisor Training</div>
                                <div className="course-item">Research Fellowship Training</div>
                                <div className="course-item">Chartered Accountant Training</div>
                                <div className="course-item">Entrepreneurship Training</div>
                                <div className="course-item">Digital Marketeer (Social Media) Training</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internships Marketplace Section */}
            <section id="internship-marketplace" className="internships-section">
                <div className="container">
                    <h2 className="section-title">Internships marketplace with end-to-end assurance</h2>
                    <p className="section-subtitle">A curated placements engine joining doctoral talent with employers, backed by quality templates and mentor support.</p>
                    <ul className="feature-list">
                        <li>Curated marketplace with 16–48 week placements aligned to candidate expertise and employer projects.</li>
                        <li>Structured learning contracts, dual-supervision model and transparent deliverables for every placement.</li>
                        <li>Digital credentials wallet emitting references, badges and deliverables back into the MyDoctorate.org portfolio.</li>
                        <li>Template legal toolkit covering NDA, IP, data protection and internship agreements to de-risk adoption.</li>
                    </ul>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="fees-pricing" className="pricing-section">
                <div className="container">
                    <h2 className="section-title">Transparent and discounted pricing structure for members and non-members</h2>
                    <p>Members benefit from a single £120 annual subscription, unlocking 50% or greater savings across flagship pathways.</p>
                </div>
            </section>

            {/* Compliance Section */}
            <section id="compliance" className="compliance-section">
                <div className="container">
                    <h2 className="section-title">Platform compliance and readiness</h2>
                    <p>MyDoctorate.org integrates learning, community and commerce infrastructure with rigorous governance.</p>
                </div>
            </section>

            {/* Roadmap Section */}
            <section id="roadmap" className="roadmap-section">
                <div className="container">
                    <h2 className="section-title">Founding roadmap</h2>
                    <p>A focused rollout enabling early cohort testing ahead of full commercial launch.</p>
                </div>
            </section>

            {/* Measurement Section */}
            <section id="measure" className="measurement-section">
                <div className="container">
                    <h2 className="section-title">What we will measure</h2>
                    <p>Clear performance telemetry keeps the MyDoctorate.org launch accountable to learners, partners and investors.</p>
                </div>
            </section>


        </div>
    );
};

export default Home;
