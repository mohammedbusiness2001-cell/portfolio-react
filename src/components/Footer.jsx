import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--primary-color)',
            color: 'var(--white)',
            padding: '20px 0',
            textAlign: 'center',
            marginTop: 'auto'
        }}>
            <div className="container">
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Mohammed Zaid. Built with React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
