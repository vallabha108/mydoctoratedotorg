import React from 'react';
import { FaCheck, FaCheckDouble, FaMinus } from 'react-icons/fa';
import './TieredMembership.css';

const TieredMembership = () => {
    return (
        <div className="tiered-membership-page">
            <div className="tiered-content-container">
                {/* Hero Image */}
                <div className="tm-image-container">
                    <img src="/images/tiered/img0.png" alt="Doctoral Ecosystem" className="tm-img" />
                </div>

                {/* Ecosystem Section */}
                <section className="tm-section ecosystem-section">
                    <div className="tm-text-content">
                        <h2 className="tm-title">Designed for every voice in the doctoral ecosystem</h2>
                        <p className="tm-subtitle">MyDoctorate.org convenes researchers, supervisors, institutions and employers into one high-trust network.</p>

                        <div className="ecosystem-grid">
                            <div className="ecosystem-item">
                                <h3>Researchers</h3>
                                <p>Current PhD candidates and prospective applicants seeking credible, modular development mapped to key doctoral milestones.</p>
                            </div>
                            <div className="ecosystem-item">
                                <h3>Supervisors</h3>
                                <p>Supervisors and doctoral tutors who need CPD, community practice exchange and recognised supervisor training pathways.</p>
                            </div>
                            <div className="ecosystem-item">
                                <h3>Institutions</h3>
                                <p>Universities and research organisations scaling research skills provision under DCUK quality assurance.</p>
                            </div>
                            <div className="ecosystem-item">
                                <h3>Employers</h3>
                                <p>Companies, public bodies and laboratories partnering on PhD-level internship projects and research collaborations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <h2 className="tm-title text-center mb-5">MyDoctorate.org — Tiered Membership Model</h2>

                {/* Tier 1: FREE */}
                <section className="tm-section tier-section">
                    <div className="tm-text-content">
                        <h2 className="tm-title">Tier 1: FREE — Research Community Access</h2>
                        <p><strong>Target users:</strong> Prospective researchers · Early-stage candidates · Supervisors exploring the platform · Employers observing doctoral engagement</p>

                        <div className="tier-details-grid">
                            <div>
                                <h4>Core Purpose</h4>
                                <ul>
                                    <li>Pipeline building</li>
                                    <li>Community engagement</li>
                                    <li>Lead generation</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Key Benefits</h4>
                                <ul>
                                    <li>Community forums (read + limited post)</li>
                                    <li>Open research webinars & taster workshops</li>
                                    <li>Research career pathways explorer</li>
                                    <li>Ethics, AI & integrity guidance (core)</li>
                                    <li>Public research events & symposia access</li>
                                    <li>Limited Open Research Portfolio (ORP)</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Restrictions</h4>
                                <ul>
                                    <li>No dashboards or analytics</li>
                                    <li>No supervisor CPD accreditation</li>
                                    <li>No institutional branding</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tier 2: PRO */}
                <section className="tm-section tier-section">
                    <div className="tm-text-content">
                        <h2 className="tm-title">Tier 2: PRO — Individual Research & Supervision</h2>
                        <p><strong>Target users:</strong> Registered doctoral researchers · Independent supervisors · Industry supervisors · Postdoctoral researchers</p>

                        <div className="tier-details-grid">
                            <div>
                                <h4>Core Purpose</h4>
                                <ul>
                                    <li>Progression & completion</li>
                                    <li>Individual professional development</li>
                                    <li>Tool-enabled research practice</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Included</h4>
                                <ul>
                                    <li>Full MDOS user dashboard</li>
                                    <li>Digital Credential System (DCS)</li>
                                    <li>Research Analytics Dashboard (RAD)</li>
                                    <li>Priority research events & clinics</li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="mt-4">PRO Benefits by Role</h4>
                        <table className="tm-table">
                            <thead>
                                <tr>
                                    <th>Feature Area</th>
                                    <th>Researchers (PRO-R)</th>
                                    <th>Supervisors (PRO-S)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Research Planning</td><td>Proposal builder, IRP, RDP</td><td>Supervision planner (SAP)</td></tr>
                                <tr><td>Progress Tracking</td><td>MPD, milestone alerts</td><td>Candidate Risk Monitor</td></tr>
                                <tr><td>Ethics & Integrity</td><td>Full ERP access</td><td>Ethics supervision toolkit</td></tr>
                                <tr><td>Writing & Outputs</td><td>Writing retreats, JSP</td><td>Co-author matchmaking</td></tr>
                                <tr><td>Analytics</td><td>Personal RAD</td><td>Supervision analytics</td></tr>
                                <tr><td>CPD & Credentials</td><td>Micro-credentials</td><td>Certificated CPD (CPD-S)</td></tr>
                                <tr><td>Community</td><td>Peer circles</td><td>Supervisor CoP</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tier 3: INSTITUTIONAL */}
                <section className="tm-section tier-section">
                    <div className="tm-text-content">
                        <h2 className="tm-title">Tier 3: INSTITUTIONAL — Doctoral Infrastructure Licence</h2>
                        <p><strong>Target organisations:</strong> Universities · Colleges · Research Institutes · TNE partners</p>

                        <div className="tier-details-grid">
                            <div>
                                <h4>Core Purpose</h4>
                                <ul>
                                    <li>Scale & consistency</li>
                                    <li>Quality assurance</li>
                                    <li>Cost-efficient doctoral support</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Included</h4>
                                <ul>
                                    <li>Supervisor Load Analytics (SLA-D)</li>
                                    <li>Completion & Benchmarking Metrics (CBM)</li>
                                    <li>Quality Assurance – Doctoral Research (QA-DR)</li>
                                    <li>API access for LMS integration</li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="mt-4">Institutional Benefits</h4>
                        <table className="tm-table">
                            <thead>
                                <tr>
                                    <th>Capability Area</th>
                                    <th>Institutional Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Platform Licence</td><td>Multi-user access (staff & candidates)</td></tr>
                                <tr><td>White-Label Hub</td><td>Branded institutional space</td></tr>
                                <tr><td>QA & Compliance</td><td>Audit-ready evidence & dashboards</td></tr>
                                <tr><td>Supervisor Development</td><td>Bulk CPD & accreditation</td></tr>
                                <tr><td>Progress Monitoring</td><td>Completion & benchmarking metrics</td></tr>
                                <tr><td>Doctoral Training</td><td>Modular DTP content</td></tr>
                                <tr><td>Collaboration</td><td>Inter-institutional cohorts</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tier 4: PARTNER */}
                <section className="tm-section tier-section">
                    <div className="tm-text-content">
                        <h2 className="tm-title">Tier 4: PARTNER — Employer & Strategic Collaboration</h2>
                        <p><strong>Target partners:</strong> Employers · Public sector · NGOs · Professional bodies · Innovators</p>

                        <div className="tier-details-grid">
                            <div>
                                <h4>Core Purpose</h4>
                                <ul>
                                    <li>Industry-driven research</li>
                                    <li>Talent development</li>
                                    <li>Income & impact generation</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Included</h4>
                                <ul>
                                    <li>Research Challenge Lab (RCL)</li>
                                    <li>Knowledge Exchange Marketplace Hub</li>
                                    <li>Employer Research Impact (ERI) reporting</li>
                                    <li>Partner co-branding & case studies</li>
                                </ul>
                            </div>
                        </div>

                        <h4 className="mt-4">Partner Benefits</h4>
                        <table className="tm-table">
                            <thead>
                                <tr>
                                    <th>Capability Area</th>
                                    <th>Partner Access</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Research Challenges</td><td>Define industry problem statements</td></tr>
                                <tr><td>Sponsored Doctorates</td><td>Project sponsorship & oversight</td></tr>
                                <tr><td>Talent Pipeline</td><td>Early access to doctoral researchers</td></tr>
                                <tr><td>Co-Supervision</td><td>Industry + academic alignment</td></tr>
                                <tr><td>Knowledge Exchange</td><td>Insight briefs & applied outputs</td></tr>
                                <tr><td>Brand Recognition</td><td>Research-Engaged Employer status</td></tr>
                                <tr><td>Impact Reporting</td><td>ESG & innovation dashboards</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Comparison Summary */}
                <section className="tm-section summary-section">
                    <h2 className="tm-title">Tier Comparison Summary</h2>
                    <div className="table-responsive">
                        <table className="tm-table comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>FREE</th>
                                    <th>PRO</th>
                                    <th>INSTITUTIONAL</th>
                                    <th>PARTNER</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Community & Events</td><td><FaCheck className="icon-check" /></td><td><FaCheckDouble className="icon-double" /></td><td><FaCheckDouble className="icon-double" /></td><td><FaCheckDouble className="icon-double" /></td></tr>
                                <tr><td>Research Tools</td><td><FaMinus className="icon-minus" /></td><td><FaCheck className="icon-check" /></td><td><FaCheck className="icon-check" /></td><td><FaCheck className="icon-check" /></td></tr>
                                <tr><td>Analytics & Dashboards</td><td><FaMinus className="icon-minus" /></td><td><FaCheck className="icon-check" /></td><td><FaCheckDouble className="icon-double" /></td><td><FaCheckDouble className="icon-double" /></td></tr>
                                <tr><td>CPD & Credentials</td><td><FaMinus className="icon-minus" /></td><td><FaCheck className="icon-check" /></td><td><FaCheckDouble className="icon-double" /></td><td><FaCheck className="icon-check" /></td></tr>
                                <tr><td>QA & Compliance</td><td><FaMinus className="icon-minus" /></td><td><FaMinus className="icon-minus" /></td><td><FaCheckDouble className="icon-double" /></td><td><FaCheck className="icon-check" /></td></tr>
                                <tr><td>White-Labelling</td><td><FaMinus className="icon-minus" /></td><td><FaMinus className="icon-minus" /></td><td><FaCheck className="icon-check" /></td><td><FaCheck className="icon-check" /> (co-brand)</td></tr>
                                <tr><td>Revenue Share</td><td><FaMinus className="icon-minus" /></td><td><FaMinus className="icon-minus" /></td><td><FaMinus className="icon-minus" /></td><td><FaCheck className="icon-check" /></td></tr>
                                <tr><td>Talent Access</td><td><FaMinus className="icon-minus" /></td><td><FaMinus className="icon-minus" /></td><td><FaCheck className="icon-check" /></td><td><FaCheckDouble className="icon-double" /></td></tr>
                            </tbody>
                        </table>
                        <p className="legend"><FaCheck className="icon-check" /> = included | <FaCheckDouble className="icon-double" /> = enhanced / premium</p>
                    </div>
                </section>

                {/* Strategic Logic */}
                <section className="tm-section logic-section">
                    <h2 className="tm-title">Strategic Commercial Logic</h2>
                    <table className="tm-table">
                        <thead>
                            <tr>
                                <th>Tier</th>
                                <th>Revenue Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>FREE</td><td>Acquisition & pipeline</td></tr>
                            <tr><td>PRO</td><td>Subscription (monthly / annual)</td></tr>
                            <tr><td>INSTITUTIONAL</td><td>Annual licence (volume-based)</td></tr>
                            <tr><td>PARTNER</td><td>Sponsorship, projects & revenue share</td></tr>
                        </tbody>
                    </table>
                </section>

                {/* Bottom Line */}
                <section className="tm-section bottom-line-section">
                    <h2 className="tm-title">Bottom Line</h2>
                    <p>This structure:</p>
                    <ul>
                        <li>Encourages upward migration</li>
                        <li>Aligns user value with income</li>
                        <li>Supports academic credibility</li>
                        <li>Scales across individuals and organisations.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default TieredMembership;
