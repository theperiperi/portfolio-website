import { MetadataRoute } from 'next';
import { projects } from '@/lib/data/projects';
import { experiences } from '@/lib/data/experiences';

const siteUrl = 'https://priyadharshini-sridhar.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectRoutes = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        priority: 0.7 as const,
    }));

    const experienceRoutes = experiences.map((exp) => ({
        url: `${siteUrl}/experience/${exp.slug}`,
        lastModified: new Date(),
        priority: 0.7 as const,
    }));

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteUrl}/nerd-wall`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...projectRoutes,
        ...experienceRoutes,
    ];
}
