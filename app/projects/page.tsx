import { projects } from '@/lib/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata = {
    title: 'Projects | Developer Portfolio',
    description: 'Browse all my projects and work',
};

export default function ProjectsPage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container">
                    <h1 className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
                        All Projects
                    </h1>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
