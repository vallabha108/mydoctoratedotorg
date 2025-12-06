import React from 'react';
import './WhatWeWillMeasure.css';

const WhatWeWillMeasure = () => {
    return (
        <div className="measure-page">
            {/* Hero Section */}
            <section className="measure-hero-section">
                <div className="measure-hero-image-container">
                    <img src="/images/measure-hero.png" alt="Measurement" className="measure-hero-img" />
                </div>
            </section>

            {/* Content Section */}
            <section className="measure-content-section">
                <div className="container">
                    <h1 className="section-title">What we will measure</h1>
                    <p className="section-subtitle">
                        Clear performance telemetry keeps the MyDoctorate.org launch accountable to learners, partners and investors.
                    </p>

                    <div className="metrics-grid">
                        {/* Membership */}
                        <div className="metric-column">
                            <h3 className="metric-title">Membership</h3>
                            <ul className="metric-list">
                                <li>Active members</li>
                                <li>Renewal rate</li>
                                <li>Customer Acquisition Cost (CAC) payback</li>
                            </ul>
                        </div>

                        {/* Learning */}
                        <div className="metric-column">
                            <h3 className="metric-title">Learning</h3>
                            <ul className="metric-list">
                                <li>Completion rate</li>
                                <li>Net Promoter Score (NPS) (Learning recommendations)</li>
                                <li>First-time pass rate</li>
                            </ul>
                        </div>

                        {/* Internships */}
                        <div className="metric-column">
                            <h3 className="metric-title">Internships</h3>
                            <ul className="metric-list">
                                <li>Placement rate</li>
                                <li>Time-to-fill</li>
                                <li>Employer repeat rate</li>
                            </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="metric-column">
                            <h3 className="metric-title">Outcomes</h3>
                            <ul className="metric-list">
                                <li>Progression to PhD</li>
                                <li>On-time submission</li>
                                <li>Publications & posters</li>
                            </ul>
                        </div>

                        {/* Financial */}
                        <div className="metric-column">
                            <h3 className="metric-title">Financial</h3>
                            <ul className="metric-list">
                                <li>Monthly Recurring Revenue (MRR)</li>
                                <li>Gross margin</li>
                                <li>Cash runway</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatWeWillMeasure;
