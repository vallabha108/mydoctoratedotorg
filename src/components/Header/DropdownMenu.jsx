import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="dropdown-menu"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span className="dropdown-label">{label}</span>
            {isOpen && (
                <div className="dropdown-content">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.path}
                            className="dropdown-item"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
