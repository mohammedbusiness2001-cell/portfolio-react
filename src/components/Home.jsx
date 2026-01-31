import React from 'react';

const Home = () => {
    return (
        <section id="home" className="home fade-in" style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
            color: 'var(--white)'
        }}>
            <div className="container">
                <h1 style={{ color: 'var(--white)', fontSize: '3.5rem', marginBottom: '20px' }}>
                    Hi, I'm Mohammed Zaid
                </h1>
                <p style={{ fontSize: '1.5rem', margin: '0 auto 30px auto', maxWidth: '600px' }}>
                    Junior Backend Developer | C# & ASP.NET Core
                </p>
                <p style={{ fontSize: '1.2rem', margin: '0 auto 40px auto', maxWidth: '600px', fontStyle: 'italic' }}>
                    Passionate about building robust APIs and efficient database solutions.
                </p>
                <a href="#projects" className="btn" style={{
                    background: 'var(--white)',
                    color: 'var(--primary-color)',
                    fontWeight: 'bold'
                }}>
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Home;
