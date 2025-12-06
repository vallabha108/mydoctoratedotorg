import React from 'react';
import './ManagementTraining.css';

const ManagementTraining = () => {
    return (
        <div className="management-training-page">
            <div className="container">
                {/* Header Title */}
                <h1 className="main-page-title">Key Management Training Courses</h1>

                {/* Section (i): Advance Your Leadership */}
                <section className="mt-intro-section">
                    <div className="mt-grid">
                        <div className="mt-text-col">
                            <h2 className="mt-section-title">(i) Advance Your Leadership and Strategic Capabilities</h2>
                            <p className="mt-text">
                                Doctoral College UK offers a suite of specialised management training courses designed for professionals, researchers, and aspiring leaders.
                            </p>
                            <p className="mt-text">
                                These short, focused programmes are ideal for those seeking to enhance their leadership, strategic thinking, and operational effectiveness in today's dynamic work environment.
                            </p>
                        </div>
                        <div className="mt-image-col">
                            <img src="/images/management/management-bench.jpg" alt="Students studying on a bench" className="mt-img hover-scale" />
                        </div>
                    </div>
                </section>

                {/* Section (ii): Strategic Leadership */}
                <section className="mt-intro-section mt-reverse-bg">
                    <div className="mt-grid mt-reverse-grid">
                        <div className="mt-image-col">
                            <img src="/images/management/management-strategic-leadership.jpg" alt="Person writing in notebook" className="mt-img hover-scale" />
                        </div>
                        <div className="mt-text-col">
                            <h2 className="mt-section-title">(ii) Strategic Leadership and Organisational Management</h2>
                            <h3 className="course-subtitle-dark">Lead with Vision and Purpose</h3>
                            <p className="mt-text">
                                Gain insights into high-level leadership models, strategic planning, and managing complex change across sectors.
                            </p>
                            <strong className="key-benefits-label">Key Benefits:</strong>
                            <ul className="mt-list-dark">
                                <li>Enhance executive decision-making</li>
                                <li>Lead high-performing teams</li>
                                <li>Drive innovation and strategic outcomes</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Sections (iii) - (vi): Blue Superimposed Layout */}
                <section className="mt-superimposed-section">
                    {/* Row 1: Header (Title) & Empty Space */}
                    <div className="mt-super-row">
                        <div className="mt-text-col mt-blue-panel panel-top">
                            {/* No single main title for this block in prompt, but we can treat (ii) as implied or just start with (iii) as requested? User asked for (iii)-(vi). 
                                 Wait, User prompt said: "For image 5 put the text as follows: (iii)...". 
                                 It looks like a list of courses. I should probably group them or title them?
                                 I'll just list them inside the panel.
                             */}
                            <h2 className="mt-section-title white-text">Specialised Management Programmes</h2>
                            <hr className="mt-divider" />
                        </div>
                        <div className="mt-image-col placeholder-col"></div>
                    </div>

                    {/* Row 2: Content & Superimposed Image */}
                    <div className="mt-super-row">
                        <div className="mt-text-col mt-blue-panel panel-bottom">
                            {/* Course (iii) */}
                            <div className="mt-course-block">
                                <h3 className="course-title white-text">(iii) Managing People and Performance</h3>
                                <h4 className="course-subtitle white-text">Empower Teams, Inspire Results</h4>
                                <p className="mt-text white-text">Master performance management, talent development, and leadership strategies that elevate employee engagement and productivity.</p>
                                <strong className="key-benefits-label white-text">Key Benefits:</strong>
                                <ul className="mt-list white-text">
                                    <li>Strengthen people management skills</li>
                                    <li>Support inclusive and high-performing cultures</li>
                                    <li>Coach and develop future leaders</li>
                                </ul>
                            </div>

                            {/* Course (iv) */}
                            <div className="mt-course-block">
                                <h3 className="course-title white-text">(iv) Project and Operations Management</h3>
                                <h4 className="course-subtitle white-text">Deliver Projects with Precision</h4>
                                <p className="mt-text white-text">Learn tools and techniques to plan, manage, and evaluate strategic projects and improve operational performance.</p>
                                <strong className="key-benefits-label white-text">Key Benefits:</strong>
                                <ul className="mt-list white-text">
                                    <li>Improve project planning and execution</li>
                                    <li>Manage risk and resources effectively</li>
                                    <li>Enhance operational efficiency and impact</li>
                                </ul>
                            </div>

                            {/* Course (v) */}
                            <div className="mt-course-block">
                                <h3 className="course-title white-text">(v) Global Business and Digital Strategy</h3>
                                <h4 className="course-subtitle white-text">Think Globally, Act Strategically</h4>
                                <p className="mt-text white-text">Understand the dynamics of international markets, digital disruption, and how to build competitive strategies in a global economy.</p>
                                <strong className="key-benefits-label white-text">Key Benefits:</strong>
                                <ul className="mt-list white-text">
                                    <li>Lead in global and digital environments</li>
                                    <li>Develop market-entry and innovation strategies</li>
                                    <li>Stay ahead of emerging business trends</li>
                                </ul>
                            </div>

                            {/* Course (vi) */}
                            <div className="mt-course-block">
                                <h3 className="course-title white-text">(vi) Finance for Non-Financial Managers</h3>
                                <h4 className="course-subtitle white-text">Make Informed, Financially Sound Decisions</h4>
                                <p className="mt-text white-text">Learn to interpret financial data, manage budgets, and support strategic planning—even without a finance background.</p>
                                <strong className="key-benefits-label white-text">Key Benefits:</strong>
                                <ul className="mt-list white-text">
                                    <li>Improve financial decision-making</li>
                                    <li>Understand key financial statements</li>
                                    <li>Plan for sustainability and growth</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-image-col">
                            <img src="/images/management/management-writing.png" alt="Student writing in notebook" className="mt-img superimposed-img" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ManagementTraining;
