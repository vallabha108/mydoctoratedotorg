import React from 'react';
import './FeesAndPricing.css';

const FeesAndPricing = () => {
    return (
        <div className="fees-page">
            {/* Hero Section */}
            <section className="fees-hero-section">
                <div className="fees-hero-image-container">
                    <img src="/images/fees-hero.png" alt="Fees and Pricing" className="fees-hero-img" />
                </div>
                <div className="container fees-intro">
                    <h1 className="fees-title">Transparent and discounted pricing structure for members and non-members</h1>
                    <p className="fees-subtitle">
                        Members benefit from a single £120 annual subscription, unlocking 50% or greater savings across flagship pathways.
                    </p>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="pricing-table-section">
                <div className="container">
                    <div className="pricing-table">
                        {/* Header Row */}
                        <div className="pricing-row header-row">
                            <div className="col-portfolio">
                                <h3>STUDY PORTFOLIO</h3>
                                <p>All the education qualifications and training awards offered in the portfolio.</p>
                            </div>
                            <div className="col-member">
                                <h3>MEMBER FEE</h3>
                                <p>This is the discounted fee to associate members of MyDoctorate.org research community.</p>
                            </div>
                            <div className="col-non-member">
                                <h3>NON-MEMBER FEE</h3>
                                <p>This is the full-cost fee for qualifications and awards on offer.</p>
                            </div>
                        </div>

                        {/* Row 1: Access to Doctorate */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Access to Doctorate (SQA)</h4>
                                <p>An SCQF award designed for learners to develop an in-depth doctoral research proposal.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£500</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,000</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* Row 2: PhD Year 1 Thesis */}
                        <div className="pricing-row blue-row">
                            <div className="col-portfolio">
                                <h4>PhD Year 1 - Thesis Pathway</h4>
                                <p>This SCQF extended advanced diploma is equivalent to Year 1 of a UK University PhD.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£10,000 per annum</h4>
                                <p>Year 1 (Foundation) Focus on Problem, Literature Review and Research Methodology.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£20,000</h4>
                                <p>Fee for year with 3 staged payment available, all at the start of each trimester study session.</p>
                            </div>
                        </div>

                        {/* Row 3: PhD Year 2 Thesis */}
                        <div className="pricing-row blue-row">
                            <div className="col-portfolio">
                                <h4>PhD Year 2 - Thesis Pathway</h4>
                                <p>This is a progression to Year 2 of a PhD at a UK University that is an SQA Recognised Partner.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£10,000</h4>
                                <p>Year 2 (Execution): Implementation of methodology / data collection and data analysis.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£20,000</h4>
                                <p>Fee for year with 3 staged payment available, all at the start of each trimester study session.</p>
                            </div>
                        </div>

                        {/* Row 4: PhD Year 3 Thesis */}
                        <div className="pricing-row blue-row">
                            <div className="col-portfolio">
                                <h4>PhD Year 3 - Thesis Pathway</h4>
                                <p>This is a progression to year 3 of a PhD at the same UK University that is an SQA Recognised Partner.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£10,000</h4>
                                <p>Year 3 (Completion): Conclusion and thesis submission, Mock defense and Viva Voce Exam.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£20,000</h4>
                                <p>Fee for year with 3 staged payment available, all at the start of each trimester study session.</p>
                            </div>
                        </div>

                        {/* Row 5: PhD Year 1 Pub Mentor */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>PhD Year 1 (Publication Mentor Path)</h4>
                                <p>This SCQF advanced Diploma is equivalent to a Post Graduate Diploma at a UK University.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£10,000</h4>
                                <p>Year 1 Intensive mentoring on academic writing and publishing standards.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£20,000</h4>
                                <p>Fee for year with 3 staged payment available, all at the start of each trimester study session.</p>
                            </div>
                        </div>

                        {/* Row 6: PhD Year 2 Pub Mentor */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>PhD Year 2 (Publication Mentor Path)</h4>
                                <p>This is a progression to Year 2 of a PhD by Publication at a UK University.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£10,000</h4>
                                <p>Year 2 Compiling publications into a coherent doctoral thesis (PhD by Publication).</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£20,000</h4>
                                <p>Fee for year with 3 staged payment available, all at the start of each trimester study session.</p>
                            </div>
                        </div>

                        {/* Row 7: PhD Year 1 Pub Fast Track */}
                        <div className="pricing-row blue-row">
                            <div className="col-portfolio">
                                <h4>PhD Year 1 (Publication Fast Track)</h4>
                                <p>Prerequisite: Existing publication record in high-impact journals (verified upon application).</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£10,000</h4>
                                <p>Directed Learning - guided milestones - VLE support and supervisor guidance.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£18,000</h4>
                                <p>Fee for year with 3 staged payment available, all at the start of each trimester study session.</p>
                            </div>
                        </div>

                        {/* CPD Rows (Grey) */}
                        {/* 8 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Research Training CPD</h4>
                                <p>Structured, practice-focused development for researchers at all levels.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 9 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Management Training CPD</h4>
                                <p>Management development to equip professionals with the skills to lead, innovate, and perform effectively.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 10 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>The AI Engineer’s Playbook</h4>
                                <p>From Models to Agents - Equips learners with industry ready skills to understand, apply, & innovate with AI tools</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 11 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Teaching Practice Training</h4>
                                <p>Builds practical, research-informed teaching skills to help educators design, deliver and assess effectively.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 12 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>PhD Supervisor Training</h4>
                                <p>Develops skills, frameworks, confidence needed to guide PhDs effectively from enrolment to completion.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 13 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Research Fellowship Training RFDCUK</h4>
                                <p>Development for emerging research leaders, strengthening their expertise in research practice.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 14 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Chartered Accountant Training</h4>
                                <p>Financial and accounting development to prepare learners for expert professional accreditation.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 15 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Entrepreneurship Training</h4>
                                <p>Empowers learners with the skills, tools, and mindset to design, launch, and grow innovative ventures.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* 16 */}
                        <div className="pricing-row grey-row">
                            <div className="col-portfolio">
                                <h4>Digital Marketeer Training</h4>
                                <p>Equips learners with practices & tools to plan, create & manage high-impact digital marketing campaigns.</p>
                            </div>
                            <div className="col-member center-text">
                                <h4>£900</h4>
                                <p>Study Fee.</p>
                            </div>
                            <div className="col-non-member center-text">
                                <h4>£1,800</h4>
                                <p>Study Fee.</p>
                            </div>
                        </div>

                        {/* Footer Row (Repeated Header) */}
                        <div className="pricing-row header-row">
                            <div className="col-portfolio">
                                <h3>STUDY PORTFOLIO</h3>
                                <p>All the education qualifications and training awards offered in the portfolio.</p>
                            </div>
                            <div className="col-member">
                                <h3>MEMBER FEE</h3>
                                <p>This is the discounted fee to associate members of MyDoctorate.org research community.</p>
                            </div>
                            <div className="col-non-member">
                                <h3>NON-MEMBER FEE</h3>
                                <p>This is the full-cost fee for qualifications and awards on offer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeesAndPricing;
