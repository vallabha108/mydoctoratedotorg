import React from 'react';
import Logo from '../Logo/Logo';
import ShoppingCart from '../Cart/ShoppingCart';
import DropdownMenu from './DropdownMenu';
import './Header.css';

const Header = () => {
    const navigationData = {
        home: [
            { label: 'Tiered Membership', path: '/tiered-membership' },
            { label: 'Study Portfolio', path: '/#study-portfolio' },
            { label: 'Internship Marketplace', path: '/#internship-marketplace' },
            { label: 'Fees & Pricing Structure', path: '/#fees-pricing' },
            { label: 'Platform Compliance and Readiness', path: '/#compliance' },
            { label: 'Founding Roadmap', path: '/#roadmap' },
            { label: 'What we will measure', path: '/#measure' },
        ],
        researchers: [
            { label: 'Access to Doctorate', path: '/researchers/access-doctorate' },
            { label: 'PhD (Thesis Pathway)', path: '/researchers/phd-thesis' },
            { label: 'Management Training Courses', path: '/researchers/management-training' },
            { label: 'Teacher Training Course', path: '/researchers/teacher-training' },
            { label: 'PhD Supervisor Training', path: '/researchers/supervisor-training' },
            { label: 'PhD (Publication Pathway)', path: '/researchers/phd-publication' },
            { label: 'Research Fellowship Training', path: '/researchers/research-fellowship' },
            { label: 'Chartered Accountant Training', path: '/researchers/accountant-training' },
            { label: 'Entrepreneurship Training', path: '/researchers/entrepreneurship' },
            { label: 'Digital Marketeer Training', path: '/researchers/digital-marketing' },
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
                    <DropdownMenu label="HOME" items={navigationData.home} />
                    <DropdownMenu label="RESEARCHERS" items={navigationData.researchers} />
                    <a href="/supervisors" className="nav-item">SUPERVISORS</a>
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
