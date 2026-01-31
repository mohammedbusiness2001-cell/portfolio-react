import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Simple CRUD API",
            tech: "C#, ASP.NET Core, SQL Server",
            description: "A basic REST API that performs Create, Read, Update, and Delete operations on a resource (e.g., Products). This project helped me understand the HTTP methods and routing.",
        },
        {
            title: "Authentication API",
            tech: "ASP.NET Core, JWT, Identity",
            description: "An API implementation focusing on user registration and login. I learned how to issue and validate JWT tokens for secure access to protected endpoints.",
        },
        {
            title: "Task Management Backend",
            tech: "C#, Entity Framework Core",
            description: "A small backend service for a todo application. Focuses on data modeling with EF Core code-first approach and relationship mapping.",
        }
    ];

    return (
        <section id="projects" className="projects" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2>My Projects</h2>
                <p>Small practical projects tailored to learn specific backend concepts.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginTop: '30px'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            background: 'var(--bg-color)',
                            padding: '25px',
                            borderRadius: 'var(--radius)',
                            border: '1px solid var(--light-gray)',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ color: 'var(--primary-color)' }}>{project.title}</h3>
                            <p style={{
                                color: 'var(--secondary-color)',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                marginBottom: '10px'
                            }}>
                                {project.tech}
                            </p>
                            <p style={{ fontSize: '0.95rem' }}>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
