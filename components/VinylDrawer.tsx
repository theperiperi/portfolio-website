'use client';

import { useRouter } from 'next/navigation';
import { getFeaturedProjects } from '@/lib/data/projects';

export function VinylDrawer() {
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
                <div className="vinyl-drawer">
                    <div className="vinyl-stack">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.slug}
                                className="vinyl-record"
                                onClick={() => handleClick(project.slug)}
                                style={{
                                    // @ts-ignore
                                    '--vinyl-color': project.color,
                                    '--vinyl-color-dark': project.color + 'dd',
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {/* Vinyl Sleeve (Side View) */}
                                <div className="vinyl-sleeve">
                                    <span className="vinyl-spine-label">{project.title}</span>
                                </div>

                                {/* Vinyl Disc (Top View - shown on hover) */}
                                <div className="vinyl-disc">
                                    <div className="vinyl-center">
                                        <span className="vinyl-label">{project.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
