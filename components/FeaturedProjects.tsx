'use client';

import { useRouter } from 'next/navigation';
import { getFeaturedProjects } from '@/lib/data/projects';

export function FeaturedProjects() {
    const router = useRouter();
    const featuredProjects = getFeaturedProjects();

    const handleClick = (slug: string) => {
        router.push(`/projects/${slug}`);
    };

    const getProjectIcon = (slug: string) => {
        switch (slug) {
            case 'tholirchalai':
                return <div className="pixel-coin"></div>;
            case 'interview-buddy':
                return <div className="pixel-computer"></div>;
            case 'course-gpt':
                return <div className="pixel-book"></div>;
            default:
                return null;
        }
    };

    const getTitleFontSize = (title: string) => {
        const length = title.length;
        if (length <= 10) return 'var(--text-xl)';
        if (length <= 15) return 'var(--text-lg)';
        if (length <= 20) return 'var(--text-base)';
        return 'var(--text-sm)';
    };

    return (
        <section id="projects" className="section" style={{ paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: 'var(--space-8)' }}>
                    Projects
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
                                            backgroundColor: 'transparent',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {getProjectIcon(project.slug)}
                                    </div>
                                    <h3 
                                        className="featured-project-title"
                                        style={{ fontSize: getTitleFontSize(project.title) }}
                                    >
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="featured-project-description">{project.description} ...read more</p>
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
            </div>
        </section>
    );
}
