import React from 'react';
import { FaBook, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';
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









        </div>
    );
};

export default Home;
