import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getExperienceBySlug, experiences } from '@/lib/data/experiences';

export async function generateStaticParams() {
    return experiences.map((exp) => ({
        slug: exp.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const experience = getExperienceBySlug(slug);

    if (!experience) {
        return {
            title: 'Experience Not Found',
        };
    }

    return {
        title: `${experience.role} at ${experience.company}`,
        description: `${experience.description} — Priyadharshini Sridhar's work experience.`,
        alternates: {
            canonical: `/experience/${slug}`,
        },
    };
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const experience = getExperienceBySlug(slug);

    if (!experience) {
        notFound();
    }

    const currentIndex = experiences.findIndex((e) => e.slug === slug);
    const prevExperience = currentIndex > 0 ? experiences[currentIndex - 1] : null;
    const nextExperience = currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null;

    return (
        <main style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    {/* Header */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h1 style={{ marginBottom: 'var(--space-3)', color: 'var(--color-accent)' }}>
                            {experience.company}
                        </h1>
                        <h2 style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-xl)', color: 'var(--color-accent)' }}>
                            {experience.role}
                        </h2>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                            <span>{experience.duration}</span>
                            <span>•</span>
                            <span>{experience.location}</span>
                        </div>
                        <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.8 }}>
                            {experience.description}
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>Responsibilities</h2>
                        <ul style={{ paddingLeft: 'var(--space-6)', fontSize: 'var(--text-sm)', lineHeight: 2 }}>
                            {experience.responsibilities.map((responsibility, index) => (
                                <li key={index} style={{ marginBottom: 'var(--space-2)' }}>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>Key Achievements</h2>
                        <ul style={{ paddingLeft: 'var(--space-6)', fontSize: 'var(--text-sm)', lineHeight: 2 }}>
                            {experience.achievements.map((achievement, index) => (
                                <li key={index} style={{ marginBottom: 'var(--space-2)' }}>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>Technologies Used</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                            {experience.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="tech-tag"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 'var(--space-8)', borderTop: '2px solid var(--color-border)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                        {prevExperience ? (
                            <Link href={`/experience/${prevExperience.slug}`} className="btn btn-outline btn-3d">
                                ← {prevExperience.company}
                            </Link>
                        ) : (
                            <div></div>
                        )}
                        {nextExperience && (
                            <Link href={`/experience/${nextExperience.slug}`} className="btn btn-outline btn-3d">
                                {nextExperience.company} →
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
