import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header" style={{
            background: 'var(--white)',
            boxShadow: 'var(--shadow)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 20px'
            }}>
                <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-color)' }}>
                    Mohammed Zaid
                </div>

                <nav>
                    <ul style={{ display: 'flex', gap: '20px' }}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Simple mobile responsive check would be nice, but keeping it simple as requested.
// We'll rely on global CSS for some responsiveness later if needed, but for now flex works.

export default Header;
