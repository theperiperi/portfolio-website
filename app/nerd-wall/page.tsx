'use client';

export default function NerdWallPage() {
    const posts = [
        {
            id: 1,
            date: 'November 25, 2024',
            title: 'Welcome to the Nerd Wall',
            content: `Hey there! I'm Priya, a final-year student at Shiv Nadar University studying AI & Data Science. 

I'm that person who gets excited about elegant algorithms, debates tabs vs spaces at 2 AM, and thinks debugging is basically detective work (minus the trench coat, unfortunately).

This space is my digital corner for late-night musings, tech rants, random shower thoughts, and everything in between. Expect posts about AI/ML experiments, coding adventures, hackathon stories, and probably some hot takes on tech trends.

If something here sparks your interest or you want to debate why Python is superior (kidding... or am I?), slide into my DMs. Always down for a good tech conversation or collaboration!

Stay curious,
Priya ✨`,
        },
    ];

    return (
        <main>
            {/* Nerd Wall Hero Section */}
            <section className="section" style={{ paddingTop: '140px' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                            <h1 className="nerd-wall-title">
                                Nerd Wall
                            </h1>
                            <p className="text-muted" style={{ fontSize: 'var(--text-lg)' }}>
                                Late-night thoughts, tech musings, and digital scribbles
                            </p>
                        </div>

                        {/* Blog Posts */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                            {posts.map((post) => (
                                <article key={post.id} className="card blog-post">
                                    <div style={{ marginBottom: 'var(--space-3)' }}>
                                        <time 
                                            className="text-muted" 
                                            style={{ 
                                                fontSize: 'var(--text-xs)', 
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            {post.date}
                                        </time>
                                    </div>
                                    <h2 style={{ 
                                        marginBottom: 'var(--space-4)', 
                                        fontSize: 'var(--text-2xl)',
                                        color: 'var(--color-mario-green)',
                                        textShadow: '2px 2px 0 #000000'
                                    }}>
                                        {post.title}
                                    </h2>
                                    <div 
                                        style={{ 
                                            fontSize: 'var(--text-sm)', 
                                            lineHeight: '1.8',
                                            whiteSpace: 'pre-line',
                                            color: 'var(--color-text)'
                                        }}
                                    >
                                        {post.content}
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Coming Soon Notice */}
                        <div 
                            className="card" 
                            style={{ 
                                marginTop: 'var(--space-8)',
                                textAlign: 'center',
                                padding: 'var(--space-6)',
                                backgroundColor: 'var(--color-bg)',
                                border: '2px dashed var(--color-border)'
                            }}
                        >
                            <p style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-2)' }}>
                                💭 More thoughts coming soon...
                            </p>
                            <p className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>
                                This wall will be filled with tech adventures, project breakdowns, and 3 AM epiphanies
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .nerd-wall-title {
                    margin-bottom: var(--space-3);
                    color: #ffffff;
                    text-shadow: 
                        4px 4px 0 #000000,
                        6px 6px 0 rgba(0, 0, 0, 0.5),
                        8px 8px 0 rgba(0, 0, 0, 0.3);
                    letter-spacing: 2px;
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    cursor: pointer;
                    display: inline-block;
                }

                .nerd-wall-title:hover {
                    text-shadow: 
                        1px 1px 0 #000000,
                        2px 2px 0 rgba(0, 0, 0, 0.2);
                    transform: translate(3px, 3px) scale(0.98);
                }

                .blog-post {
                    transition: all var(--duration-normal) var(--ease-smooth);
                }

                .blog-post:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--color-accent);
                }
            `}</style>
        </main>
    );
}
