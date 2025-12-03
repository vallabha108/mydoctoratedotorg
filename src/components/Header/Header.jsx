import React from 'react';
import Logo from '../Logo/Logo';
import ShoppingCart from '../Cart/ShoppingCart';
import DropdownMenu from './DropdownMenu';
import './Header.css';

const Header = () => {
    const navigationData = {
        researchers: [
            { label: 'Tiered Membership', path: '/researchers/tiered-membership' },
            { label: 'Study Portfolio', path: '/researchers/study-portfolio' },
            { label: 'Internship Marketplace', path: '/researchers/internship-marketplace' },
            { label: 'Fees & Pricing Structure', path: '/researchers/fees-pricing' },
            { label: 'Platform Compliance and Readiness', path: '/researchers/compliance' },
            { label: 'Founding Roadmap', path: '/researchers/roadmap' },
            { label: 'What we will measure', path: '/researchers/measure' },
        ],
        supervisors: [
            { label: 'Access to Doctorate', path: '/supervisors/access-doctorate' },
            { label: 'PhD (Thesis Pathway)', path: '/supervisors/phd-thesis' },
            { label: 'Management Training Courses', path: '/supervisors/management-training' },
            { label: 'Teacher Training Course', path: '/supervisors/teacher-training' },
            { label: 'PhD Supervisor Training', path: '/supervisors/supervisor-training' },
            { label: 'PhD (Publication Pathway)', path: '/supervisors/phd-publication' },
            { label: 'Research Fellowship Training', path: '/supervisors/research-fellowship' },
            { label: 'Chartered Accountant Training', path: '/supervisors/accountant-training' },
            { label: 'Entrepreneurship Training', path: '/supervisors/entrepreneurship' },
            { label: 'Digital Marketeer Training', path: '/supervisors/digital-marketing' },
        ],
        membersArea: [
            { label: 'Members Community Hub', path: '/members/community-hub' },
            { label: 'Virtual Learning Environment (VLE)', path: '/members/vle' },
        ],
    };

    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo-link">
                    <Logo />
                </a>

                <nav className="navigation">
                    <a href="/" className="nav-item">HOME</a>
                    <DropdownMenu label="RESEARCHERS" items={navigationData.researchers} />
                    <DropdownMenu label="SUPERVISORS" items={navigationData.supervisors} />
                    <a href="/institutions" className="nav-item">INSTITUTIONS</a>
                    <a href="/employers" className="nav-item">EMPLOYERS</a>
                    <a href="/apply" className="nav-item">APPLY</a>
                    <DropdownMenu label="MEMBERS AREA" items={navigationData.membersArea} />
                    <a href="/faqs" className="nav-item">FAQs</a>
                    <a href="/contact" className="nav-item">CONTACT US</a>
                </nav>

                <ShoppingCart itemCount={0} />
            </div>
        </header>
    );
};

export default Header;
