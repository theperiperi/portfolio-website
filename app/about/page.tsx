'use client';

export default function AboutPage() {
    return (
        <main>
            {/* About Hero Section */}
            <section className="section" style={{ paddingTop: 'var(--space-10)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
                            About Me
                        </h1>

                        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
                                <div
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        margin: '0 auto var(--space-4)',
                                        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                                        borderRadius: '50%',
                                        border: '4px solid var(--color-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 'var(--text-4xl)',
                                    }}
                                >
                                    👨‍💻
                                </div>
                                <h2 style={{ marginBottom: 'var(--space-3)' }}>Software Developer</h2>
                                <p className="text-muted">Passionate about creating amazing digital experiences</p>
                            </div>

                            <div style={{ fontSize: 'var(--text-sm)', lineHeight: '2' }}>
                                <p style={{ marginBottom: 'var(--space-4)' }}>
                                    Hello! I'm a software developer with a passion for building beautiful, functional,
                                    and user-friendly applications. I love working with modern web technologies and
                                    creating pixel-perfect designs that bring ideas to life.
                                </p>
                                <p style={{ marginBottom: 'var(--space-4)' }}>
                                    My journey in software development has been driven by curiosity and a desire to
                                    solve complex problems. I believe in writing clean, maintainable code and creating
                                    experiences that users love.
                                </p>
                                <p>
                                    When I'm not coding, you can find me exploring new technologies, contributing to
                                    open-source projects, or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                            <h3 style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}>Skills & Technologies</h3>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: 'var(--space-3)',
                                }}
                            >
                                {[
                                    'JavaScript',
                                    'TypeScript',
                                    'React',
                                    'Next.js',
                                    'Node.js',
                                    'CSS/SCSS',
                                    'Git',
                                    'UI/UX Design',
                                ].map((skill) => (
                                    <div
                                        key={skill}
                                        style={{
                                            padding: 'var(--space-3)',
                                            backgroundColor: 'var(--color-bg)',
                                            border: '2px solid var(--color-border)',
                                            borderRadius: 'var(--radius-sm)',
                                            textAlign: 'center',
                                            fontSize: 'var(--text-xs)',
                                            transition: 'all var(--duration-fast) var(--ease-smooth)',
                                        }}
                                        className="skill-tag"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interests Section */}
                        <div className="card">
                            <h3 style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}>Interests</h3>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: 'var(--space-4)',
                                }}
                            >
                                {[
                                    { emoji: '🎮', title: 'Gaming', desc: 'Retro & modern games' },
                                    { emoji: '🎨', title: 'Design', desc: 'UI/UX & pixel art' },
                                    { emoji: '📚', title: 'Learning', desc: 'New tech & frameworks' },
                                    { emoji: '🌐', title: 'Open Source', desc: 'Contributing to projects' },
                                ].map((interest) => (
                                    <div
                                        key={interest.title}
                                        style={{
                                            padding: 'var(--space-4)',
                                            backgroundColor: 'var(--color-bg)',
                                            border: '2px solid var(--color-border)',
                                            borderRadius: 'var(--radius-md)',
                                            textAlign: 'center',
                                            transition: 'all var(--duration-normal) var(--ease-smooth)',
                                        }}
                                        className="interest-card"
                                    >
                                        <div style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
                                            {interest.emoji}
                                        </div>
                                        <h4 style={{ marginBottom: 'var(--space-1)', fontSize: 'var(--text-base)' }}>
                                            {interest.title}
                                        </h4>
                                        <p className="text-muted" style={{ fontSize: 'var(--text-xs)' }}>
                                            {interest.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .skill-tag:hover {
                    border-color: var(--color-accent);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .interest-card:hover {
                    border-color: var(--color-accent);
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                }
            `}</style>
        </main>
    );
}
