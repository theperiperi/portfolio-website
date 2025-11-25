import { Experience } from '../types';

export const experiences: Experience[] = [
    {
        slug: 'google-swe-intern',
        company: 'Google',
        role: 'SWE Intern',
        duration: 'May 2025 - August 2025',
        location: 'Bangalore, Onsite',
        description: 'Designed, implemented and tested an intelligent user sentiment escalation system as part of an upcoming feature on the YouTube Creator Support Quality team.',
        responsibilities: [
            'Designed and implemented an intelligent user sentiment escalation system for YouTube',
            'Worked on the YouTube Creator Support Quality team',
            'Developed features to improve creator support experience',
            'Collaborated with cross-functional teams to deliver high-quality solutions',
            'Tested and validated the escalation system for production deployment',
        ],
        achievements: [
            'Reduced existing user dissatisfaction metrics on SAM by 90% through this tool',
            'Runner-up at YouTube Build Day - Internal Hackathon',
            'Successfully delivered a production-ready feature for YouTube Creator Support',
        ],
        technologies: ['Python', 'Machine Learning', 'Natural Language Processing', 'YouTube APIs', 'Google Cloud Platform'],
        color: '#a78bfa',
    },
    {
        slug: 'archways-ai',
        company: 'Archways AI',
        role: 'SWE Intern',
        duration: 'July 2024 - September 2024',
        location: 'Remote',
        description: 'Worked with co-founders to develop the product MVP using Next.js, TypeScript, and Python.',
        responsibilities: [
            'Developed the product MVP using Next.js, TypeScript, and Python',
            'Worked directly with co-founders on product development',
            'Implemented full stack features for personalized software recommendations',
            'Integrated Claude via DSPy and LangChain for AI-powered features',
            'Improved product value through intelligent recommendation systems',
        ],
        achievements: [
            'Successfully delivered MVP for the startup',
            'Implemented AI-powered personalized software recommendations',
            'Contributed to core product features that defined the company\'s value proposition',
        ],
        technologies: ['Next.js', 'TypeScript', 'Python', 'DSPy', 'LangChain', 'Claude AI', 'React'],
        color: '#98ff98',
    },
    {
        slug: 'codincity',
        company: 'Codincity',
        role: 'AI/ML Intern',
        duration: 'June 2024 - July 2024',
        location: 'Hybrid',
        description: 'Collaborated with senior engineers and data scientists on a project to develop an AI analysis tool for company logs.',
        responsibilities: [
            'Collaborated with senior engineers and data scientists on AI/ML projects',
            'Developed an AI analysis tool for company logs',
            'Implemented RAG pipelines with Azure OpenAI',
            'Worked with llama-index for context document upload and processing',
            'Analyzed and processed large-scale log data',
        ],
        achievements: [
            'Successfully implemented RAG pipelines with Azure OpenAI on llama-index',
            'Delivered a functional AI analysis tool for log processing',
            'Gained hands-on experience with enterprise-level AI/ML systems',
        ],
        technologies: ['Python', 'Azure OpenAI', 'LlamaIndex', 'RAG', 'Machine Learning', 'Data Analysis'],
        color: '#ffdab9',
    },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
    return experiences.find(exp => exp.slug === slug);
}
