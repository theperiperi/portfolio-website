import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { experiences } from '@/lib/data/experiences';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
    return (
        <main>
            <Hero />

            <div className="position-relative">
                <FeaturedProjects />
                <div className="mario-star star-projects"></div>
            </div>

            <section id="experience" className="section">
                <div className="mario-star star-exp-top"></div>
                <div className="mario-star star-exp-bottom"></div>
                <div className="container">
                    <h2 className="text-center section-heading">Work Experience</h2>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.slug} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />
        </main>
    );
}
