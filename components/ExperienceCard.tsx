'use client';

import { useRouter } from 'next/navigation';
import { Experience } from '@/lib/types';

interface ExperienceCardProps {
    experience: Experience;
    index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
    const router = useRouter();

    return (
        <div
            className="timeline-item"
            onClick={() => router.push(`/experience/${experience.slug}`)}
            style={{ animationDelay: `${index * 0.15}s`, cursor: 'pointer' }}
        >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                {experience.logo ? (
                    <div style={{ marginBottom: 'var(--space-3)' }}>
                        <img 
                            src={experience.logo} 
                            alt={`${experience.company} logo`}
                            style={{
                                height: '60px',
                                maxWidth: '250px',
                                objectFit: 'contain',
                                objectPosition: 'left center',
                            }}
                        />
                    </div>
                ) : (
                    <h3
                        style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-accent)',
                            marginBottom: 'var(--space-2)',
                        }}
                    >
                        {experience.company}
                    </h3>
                )}
                <h4
                    style={{
                        fontSize: 'var(--text-base)',
                        marginBottom: 'var(--space-2)',
                    }}
                >
                    {experience.role}
                </h4>
                <p
                    style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--space-3)',
                    }}
                >
                    {experience.duration}
                </p>
                <p
                    style={{
                        fontSize: 'var(--text-xs)',
                        lineHeight: 1.6,
                    }}
                >
                    {experience.description}
                </p>
            </div>
        </div>
    );
}
