'use client';

import { useRouter } from 'next/navigation';
import { getFeaturedProjects } from '@/lib/data/projects';

export function FeaturedProjects() {
    const router = useRouter();
    const featuredProjects = getFeaturedProjects();

    const handleClick = (slug: string) => {
        router.push(`/projects/${slug}`);
    };

    return (
        <section className="section" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
                    Featured Projects
                </h2>
                <div className="featured-projects-grid">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            className="featured-project-card"
                            onClick={() => handleClick(project.slug)}
                            style={{
                                // @ts-ignore
                                '--project-color': project.color,
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            <div className="featured-project-glow"></div>
                            <div className="featured-project-content">
                                <div className="featured-project-header">
                                    <div
                                        className="featured-project-icon"
                                        style={{
                                            backgroundColor: project.color,
                                        }}
                                    >
                                        <span style={{ fontSize: 'var(--text-2xl)' }}>
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className="featured-project-title">{project.title}</h3>
                                </div>
                                <p className="featured-project-description">{project.description}</p>
                                <div className="featured-project-tags">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="featured-project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="featured-project-arrow">→</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
                    <a href="/projects" className="btn">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
