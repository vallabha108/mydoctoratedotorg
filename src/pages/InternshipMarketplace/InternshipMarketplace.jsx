import React from 'react';
import './InternshipMarketplace.css';

const InternshipMarketplace = () => {
    return (
        <div className="internship-page">
            {/* Header / Intro Section */}
            <section className="internship-hero-section">
                <div className="container">
                    {/* Meeting Image */}
                    <div className="internship-image-container">
                        <img src="/images/internship-meeting.png" alt="Internship Strategy Meeting" className="internship-hero-img" />
                    </div>

                    <h1 className="internship-title">Internships marketplace with end-to-end assurance</h1>
                    <p className="internship-subtitle">
                        A curated placements engine joining doctoral talent with employers, backed by quality templates and mentor support.
                    </p>

                    <ul className="internship-feature-list">
                        <li>Curated marketplace with 16–48 week placements aligned to candidate expertise and employer projects.</li>
                        <li>Structured learning contracts, dual-supervision model and transparent deliverables for every placement.</li>
                        <li>Digital credentials wallet emitting references, badges and deliverables back into the MyDoctorate.org portfolio.</li>
                        <li>Template legal toolkit covering NDA, IP, data protection and internship agreements to de-risk adoption.</li>
                    </ul>
                </div>
            </section>

            {/* Partner Plan Section */}
            <section className="partner-plan-section">
                <div className="container">
                    <h2 className="section-title">Corporate (Employer) Internship partner plan</h2>

                    <div className="partner-content-block">
                        <h3 className="subsection-title">Benefits for PhD Interns</h3>
                        <ul className="partner-benefits-list">
                            <li>Interns are seconded to the corporate partner during the internship and are learners at DCUK, cost per year is to sponsor the intern for supervision fees and living costs which is £35,000 per year with the option to employ at end of internship. This plan supports brand storytelling, cohort events and dedicated talent success reporting.</li>
                            <li>Partners gain visibility to member talent, structured supervisor input and DCUK-backed assurance on supervision quality.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Employers Benefits Section */}
            <section className="employer-benefits-section">
                <div className="container">
                    <h2 className="section-title">Benefits for Employers Taking PhD Interns</h2>

                    <div className="benefits-list">
                        {/* 1 */}
                        <div className="benefit-item">
                            <h4>1. Access to Advanced Expertise</h4>
                            <p>PhD interns bring specialist knowledge, analytical ability, and research skills that can address complex problems, support innovation, and offer fresh insights that typical interns may not provide.</p>
                        </div>

                        {/* 2 */}
                        <div className="benefit-item">
                            <h4>2. Low-Risk Innovation</h4>
                            <p>PhD internships allow employers to explore new ideas, pilot research, or test early-stage concepts without committing to long-term hiring. Interns can contribute to R&D, data analysis, product testing, or market studies.</p>
                        </div>

                        {/* 3 */}
                        <div className="benefit-item">
                            <h4>3. Enhanced Organisational Capability</h4>
                            <p>Interns often introduce:</p>
                            <ul className="benefit-sublist">
                                <li>New methodologies</li>
                                <li>Academic frameworks</li>
                                <li>Advanced software or analytical techniques</li>
                                <li>Current knowledge from their field</li>
                            </ul>
                            <p>This strengthens the organisation’s existing workforce and processes.</p>
                        </div>

                        {/* 4 */}
                        <div className="benefit-item">
                            <h4>4. Cost-Effective Talent Pipeline</h4>
                            <p>Internships provide employers with the opportunity to identify high-potential future employees. Hiring someone who has already demonstrated capability reduces recruitment risk and onboarding costs.</p>
                        </div>

                        {/* 5 */}
                        <div className="benefit-item">
                            <h4>5. Increased Productivity</h4>
                            <p>PhD interns can take ownership of short-term or specialist projects, freeing up senior staff time and accelerating project delivery.</p>
                        </div>

                        {/* 6 */}
                        <div className="benefit-item">
                            <h4>6. Improved Knowledge Exchange</h4>
                            <p>Internships create a two-way learning channel between academia and industry, enabling:</p>
                            <ul className="benefit-sublist">
                                <li>Access to university networks</li>
                                <li>Collaboration on future projects</li>
                                <li>Potential joint publications</li>
                                <li>Opportunities for research funding partnerships</li>
                            </ul>
                        </div>

                        {/* 7 */}
                        <div className="benefit-item">
                            <h4>7. Fresh Perspectives and Creativity</h4>
                            <p>Coming from outside the organisation, PhD interns offer new viewpoints and challenge assumptions, supporting innovation, problem-solving, and continuous improvement.</p>
                        </div>

                        {/* 8 */}
                        <div className="benefit-item">
                            <h4>8. Enhanced Reputation and CSR</h4>
                            <p>Hosting PhD interns demonstrates a commitment to:</p>
                            <ul className="benefit-sublist">
                                <li>Supporting higher education</li>
                                <li>Developing future researchers</li>
                                <li>Contributing to national workforce development</li>
                            </ul>
                            <p>This supports corporate social responsibility and strengthens employer brand.</p>
                        </div>

                        {/* 9 */}
                        <div className="benefit-item">
                            <h4>9. Flexibility and Minimal Overheads</h4>
                            <p>Internships can be structured:</p>
                            <ul className="benefit-sublist">
                                <li>Full-time or part-time</li>
                                <li>On-site, hybrid, or fully remote</li>
                                <li>Short-term (12 weeks) or long-term (12 months to 36 months)</li>
                            </ul>
                            <p>This flexibility means employers get specialist input without significant overhead.</p>
                        </div>

                        {/* 10 */}
                        <div className="benefit-item">
                            <h4>10. Potential for Long-Term Partnerships</h4>
                            <p>An internship can lead to:</p>
                            <ul className="benefit-sublist">
                                <li>Collaborative research</li>
                                <li>Funded studentships</li>
                                <li>Consultancy</li>
                                <li>Access to DCUK research community and staff</li>
                            </ul>
                            <p>These create ongoing value beyond the internship period.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InternshipMarketplace;
