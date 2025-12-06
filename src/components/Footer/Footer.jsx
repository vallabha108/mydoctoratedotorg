import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* CTA Section (Global) */}
            <section className="footer-cta-section">
                <div className="container">
                    <h2 className="section-title">Pilot "MyDoctorate.org" with us</h2>
                    <p>Approve the MyDoctorate.org proposition, authorise the membership engine build and help shape the early cohorts with partner universities and employers.</p>
                    <div className="cta-buttons">
                        <button className="btn-primary-footer">Talk to the team</button>
                        <button className="btn-secondary-footer">View the roadmap</button>
                    </div>
                </div>
            </section>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
                <div className="footer-content-wrapper">
                    {/* Left: Policies */}
                    <div className="footer-left">
                        <a href="#" className="footer-link">Policies & Governance</a>
                    </div>

                    {/* Center: Brand */}
                    <div className="footer-center">
                        <div className="footer-logo-group">
                            <FaGraduationCap className="footer-icon" />
                            <span className="footer-brand-name">MyDoctorate</span>
                        </div>
                        <a href="https://mydoctorate.org" className="footer-link" style={{ fontSize: '0.9rem' }}>MyDoctorate.org</a>
                    </div>

                    {/* Right: Info & Copyright */}
                    <div className="footer-right">
                        <div className="contact-info">
                            For more information email: info@mydoctorate.org
                        </div>
                        <div className="copyright">
                            © 2025 DCUK, All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
