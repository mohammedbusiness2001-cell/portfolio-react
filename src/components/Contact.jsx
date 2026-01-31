import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact" style={{ background: 'var(--bg-color)', textAlign: 'center' }}>
            <div className="container">
                <h2>Get In Touch</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 30px auto' }}>
                    I am currently looking for opportunities as a Junior Backend Developer.
                    If you have any questions or just want to say hi, feel free to reach out!
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    <a href="mailto:mohammed.zaid@example.com" className="btn">
                        Send Email
                    </a>
                    <a href="https://github.com/mohammedbusiness2001-cell" target="_blank" rel="noopener noreferrer" className="btn" style={{
                        background: 'var(--primary-color)'
                    }}>
                        GitHub Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
