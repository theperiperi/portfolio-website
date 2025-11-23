import { experiences } from '@/lib/data/experiences';
import { ExperienceCard } from '@/components/ExperienceCard';

export const metadata = {
    title: 'Experience | Developer Portfolio',
    description: 'My professional work experience and career history',
};

export default function ExperiencePage() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container">
                    <h1 className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
                        Work Experience
                    </h1>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.slug} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
