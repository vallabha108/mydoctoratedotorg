import React from 'react';
import './PlatformCompliance.css';

const PlatformCompliance = () => {
    return (
        <div className="compliance-page">
            {/* Hero Section */}
            <section className="compliance-hero-section">
                <div className="compliance-hero-image-container">
                    <img src="/images/compliance-hero.png" alt="Platform Compliance" className="compliance-hero-img" />
                </div>
            </section>

            {/* Content Section */}
            <section className="compliance-content-section">
                <div className="container">
                    <h1 className="section-title">Platform compliance and readiness</h1>
                    <p className="section-subtitle">
                        MyDoctorate.org integrates learning, community and commerce infrastructure with rigorous governance.
                    </p>

                    <div className="compliance-details">
                        {/* Experience & Technology */}
                        <div className="compliance-block">
                            <h2 className="subsection-title">Experience & technology</h2>
                            <ul className="compliance-list">
                                <li>Unified SSO experience across learning, community, internships and events.</li>
                                <li>Membership commerce with subscriptions, vouchers and institutional invoicing.</li>
                                <li>Portfolio and CPD tracker with evidence uploads, supervisor logbook and API credentials integrations.</li>
                                <li>GDPR-aligned data stewardship with secure submissions, role-based permissions and optional proctoring.</li>
                            </ul>
                        </div>

                        {/* Governance & Compliance */}
                        <div className="compliance-block">
                            <h2 className="subsection-title">Governance & compliance</h2>
                            <ul className="compliance-list">
                                <li>DCUK ADS-led quality management system with SQA/SCQF alignment and external moderation.</li>
                                <li>Academic Board oversight covering standards, complaints resolution and doctoral outcomes.</li>
                                <li>Comprehensive policy suite spanning admissions, assessment, safeguarding and data protection.</li>
                                <li>Risk governance via Audit & Risk plus Nominations & Remuneration committees.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlatformCompliance;
