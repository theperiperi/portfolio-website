'use client';

import { useRouter } from 'next/navigation';
import { Project } from '@/lib/types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const router = useRouter();

    return (
        <div
            className="project-card"
            onClick={() => router.push(`/projects/${project.slug}`)}
            style={{ cursor: 'pointer' }}
        >
            <img
                src={project.thumbnail}
                alt={project.title}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    transition: 'transform var(--duration-slow) var(--ease-smooth)',
                }}
            />
            <div style={{ padding: 'var(--space-5)' }}>
                <h3
                    style={{
                        fontSize: 'var(--text-lg)',
                        marginBottom: 'var(--space-3)',
                        color: 'var(--color-accent)',
                    }}
                >
                    {project.title}
                </h3>
                <p
                    style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--space-4)',
                        lineHeight: 1.6,
                    }}
                >
                    {project.description}
                </p>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 'var(--space-2)',
                    }}
                >
                    {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
