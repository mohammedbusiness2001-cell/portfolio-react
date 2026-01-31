import React from 'react';

const About = () => {
    return (
        <section id="about" className="about" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2>About Me</h2>
                <div style={{ maxWidth: '800px' }}>
                    <p>
                        Hello! My name is Mohammed Zaid, and I am a Junior Backend Developer with a strong passion for building scalable and efficient server-side applications.
                        My journey into programming started with a curiosity for how systems work behind the scenes, which led me to specialize in backend development using Microsoft technologies.
                    </p>
                    <p>
                        I mainly work with <strong>C#</strong> and the <strong>ASP.NET Core</strong> framework to create RESTful APIs and web services.
                        I also have experience working with databases using <strong>SQL Server</strong> and <strong>Entity Framework</strong>.
                    </p>
                    <p>
                        Currently, I am focused on mastering backend logic, optimizing database queries, and understanding software architecture patterns.
                        I believe in continuous learning and hands-on practice, which is why I am constantly building small projects to refine my skills.
                        My goal is to contribute to meaningful projects where I can grow as a developer and solve real-world problems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
