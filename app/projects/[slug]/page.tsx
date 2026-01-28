import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/lib/data/projects';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: project.title,
        description: `${project.description} — A project by Priyadharshini Sridhar.`,
        alternates: {
            canonical: `/projects/${slug}`,
        },
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    return (
        <main style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    {/* Header */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h1 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-accent)' }}>
                            {project.title}
                        </h1>
                        <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                            {project.description}
                        </p>
                        {(project.demoUrl || project.githubUrl) && (
                            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-3d">
                                        View Demo
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-3d">
                                        View Code
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Full Description */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>About This Project</h2>
                        <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8 }}>
                            {project.fullDescription}
                        </p>
                    </div>

                    {/* Features */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>Key Features</h2>
                        <ul style={{ paddingLeft: 'var(--space-6)', fontSize: 'var(--text-sm)', lineHeight: 2 }}>
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>Technologies Used</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                            {project.technologies.map((tech) => (
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
                        {prevProject ? (
                            <Link href={`/projects/${prevProject.slug}`} className="btn btn-outline btn-3d">
                                ← {prevProject.title}
                            </Link>
                        ) : (
                            <div></div>
                        )}
                        {nextProject && (
                            <Link href={`/projects/${nextProject.slug}`} className="btn btn-outline btn-3d">
                                {nextProject.title} →
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
