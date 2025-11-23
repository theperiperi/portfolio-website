import { Experience } from '../types';

export const experiences: Experience[] = [
    {
        slug: 'tech-corp',
        company: 'Tech Corp',
        role: 'Senior Software Engineer',
        duration: '2022 - Present',
        location: 'San Francisco, CA',
        description: 'Leading development of scalable web applications and mentoring junior developers in a fast-paced tech environment.',
        responsibilities: [
            'Lead a team of 5 developers in building and maintaining microservices architecture',
            'Design and implement RESTful APIs serving 1M+ requests per day',
            'Conduct code reviews and establish best practices for the engineering team',
            'Mentor junior developers and conduct technical interviews',
            'Collaborate with product managers to define technical requirements',
            'Optimize application performance resulting in 40% faster load times',
        ],
        achievements: [
            'Reduced API response time by 60% through caching and query optimization',
            'Successfully migrated legacy monolith to microservices architecture',
            'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
            'Led initiative to improve code quality, increasing test coverage from 40% to 85%',
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'GraphQL'],
        color: '#a78bfa',
    },
    {
        slug: 'startup-inc',
        company: 'StartUp Inc',
        role: 'Full Stack Developer',
        duration: '2020 - 2022',
        location: 'New York, NY',
        description: 'Built and maintained multiple client projects using modern frameworks in a dynamic startup environment.',
        responsibilities: [
            'Developed full-stack web applications from concept to deployment',
            'Worked directly with clients to gather requirements and provide technical solutions',
            'Built responsive user interfaces using React and Vue.js',
            'Designed and implemented database schemas and APIs',
            'Maintained and updated existing client applications',
            'Participated in agile development processes and sprint planning',
        ],
        achievements: [
            'Delivered 15+ client projects on time and within budget',
            'Increased user engagement by 50% through UX improvements',
            'Reduced bug reports by 70% through comprehensive testing',
            'Implemented automated testing suite saving 10 hours per week',
        ],
        technologies: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Heroku', 'Git'],
        color: '#98ff98',
    },
    {
        slug: 'digital-agency',
        company: 'Digital Agency',
        role: 'Frontend Developer',
        duration: '2018 - 2020',
        location: 'Austin, TX',
        description: 'Developed responsive websites and interactive user interfaces for various clients across different industries.',
        responsibilities: [
            'Created pixel-perfect responsive websites from design mockups',
            'Implemented interactive UI components and animations',
            'Ensured cross-browser compatibility and accessibility standards',
            'Collaborated with designers and backend developers',
            'Optimized website performance and SEO',
            'Maintained and updated client websites',
        ],
        achievements: [
            'Built 30+ responsive websites for clients in various industries',
            'Improved website load times by 50% through optimization techniques',
            'Achieved 100% accessibility scores on all projects',
            'Received "Developer of the Year" award in 2019',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'SASS', 'Webpack', 'Git', 'Figma'],
        color: '#ffdab9',
    },
    {
        slug: 'freelance',
        company: 'Freelance',
        role: 'Web Developer',
        duration: '2016 - 2018',
        location: 'Remote',
        description: 'Worked with various clients on web development projects and e-commerce solutions as an independent contractor.',
        responsibilities: [
            'Consulted with clients to understand their business needs',
            'Designed and developed custom websites and web applications',
            'Set up and customized e-commerce platforms',
            'Provided ongoing maintenance and support',
            'Managed project timelines and client communications',
            'Handled all aspects of web development from design to deployment',
        ],
        achievements: [
            'Successfully completed 25+ freelance projects',
            'Maintained 5-star rating on freelance platforms',
            'Built long-term relationships with repeat clients',
            'Increased client revenue by an average of 30% through e-commerce solutions',
        ],
        technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Photoshop'],
        color: '#87ceeb',
    },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
    return experiences.find(exp => exp.slug === slug);
}
