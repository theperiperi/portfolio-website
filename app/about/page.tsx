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
                                    🍄
                                </div>
                                <h2 style={{ marginBottom: 'var(--space-3)' }}>Priya Sridhar</h2>
                                <p className="text-muted">Software Engineer | AI/ML Enthusiast | Full-Stack Developer</p>
                            </div>

                            <div style={{ fontSize: 'var(--text-sm)', lineHeight: '2' }}>
                                <p style={{ marginBottom: 'var(--space-4)' }}>
                                    Hello! I'm Priya Sridhar, a B.Tech student in Artificial Intelligence & Data Science at Shiv Nadar University, Chennai (CGPA: 8.5). I'm passionate about building innovative solutions that combine AI/ML with full-stack development.
                                </p>
                                <p style={{ marginBottom: 'var(--space-4)' }}>
                                    I've had the privilege of working as a Software Engineering Intern at Google on the YouTube Creator Support Quality team, where I reduced user dissatisfaction metrics by 90%. I've also contributed to startups like Archways AI and Codincity, working on cutting-edge AI/ML projects.
                                </p>
                                <p style={{ marginBottom: 'var(--space-4)' }}>
                                    As Vertical Lead of the Coding Club and President of the Competitive Programming team at my university, I'm deeply involved in the tech community. I'm also a founding member of Delta Hackathon Team and have won multiple hackathons including 2nd place at IIT Madras Shaastra.
                                </p>
                                <p>
                                    When I'm not coding, you can find me performing stand-up comedy, playing multiple instruments in my college band, or solving competitive programming challenges. I'm a Knight on LeetCode (Top 5% worldwide) and have completed Advent of Code 2023 & 2024.
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
                                    'Python',
                                    'JavaScript',
                                    'TypeScript',
                                    'React',
                                    'Next.js',
                                    'Node.js',
                                    'Machine Learning',
                                    'LangChain',
                                    'DSPy',
                                    'Django',
                                    'Flask',
                                    'SQL',
                                    'Tailwind CSS',
                                    'Git',
                                    'LlamaIndex',
                                    'Computer Vision',
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
                                    { emoji: '💻', title: 'Competitive Programming', desc: 'LeetCode Knight, CodeChef 3★' },
                                    { emoji: '🎭', title: 'Stand-up Comedy', desc: 'President, Comedy Club' },
                                    { emoji: '🎸', title: 'Music', desc: 'Multi-instrumentalist in college band' },
                                    { emoji: '🏆', title: 'Hackathons', desc: 'Multiple wins & finalist positions' },
                                    { emoji: '👥', title: 'Mentoring', desc: 'CodessCafe, AlgoZenith, GFG' },
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
