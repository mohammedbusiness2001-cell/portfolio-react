import React from 'react';

const Skills = () => {
    const skills = [
        { name: "C#", level: "Intermediate" },
        { name: "ASP.NET Core", level: "Junior" },
        { name: "Entity Framework", level: "Junior" },
        { name: "SQL Server", level: "Intermediate" },
        { name: "RESTful APIs", level: "Junior" },
        { name: "Git & GitHub", level: "Basic" },
        { name: "React (Basic)", level: "Beginner" },
        { name: "HTML/CSS", level: "Basic" }
    ];

    return (
        <section id="skills" className="skills" style={{ background: 'var(--bg-color)' }}>
            <div className="container">
                <h2>Technical Skills</h2>
                <p>Here are the technologies I work with:</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '30px'
                }}>
                    {skills.map((skill, index) => (
                        <div key={index} style={{
                            background: 'var(--white)',
                            padding: '20px',
                            borderRadius: 'var(--radius)',
                            boxShadow: 'var(--shadow)',
                            borderLeft: '5px solid var(--secondary-color)'
                        }}>
                            <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{skill.name}</h3>
                            <p style={{ margin: 0, color: 'var(--gray)', fontSize: '0.9rem' }}>{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
