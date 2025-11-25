import { Project } from '../types';

export const projects: Project[] = [
    {
        slug: 'tholirchalai',
        title: 'TholirchalAI',
        description: 'Real-time credit risk assessment system combining traditional financial data with alternative sources. Winner of 2nd place at IIT Madras Shaastra.',
        fullDescription: 'Built a real-time credit risk assessment system by combining traditional financial data with alternative sources such as social media, utility payments, and spending patterns. Developed an audio agent for automated data collection. Successfully demonstrated the solution, earning 2nd place in Shaastra at IIT Madras.',
        tags: ['JavaScript', 'Next.js', 'Python', 'Twilio', 'React Native'],
        thumbnail: 'https://via.placeholder.com/400x300/a78bfa/ffffff?text=TholirchalAI',
        images: [
            'https://via.placeholder.com/800x600/a78bfa/ffffff?text=TholirchalAI+Dashboard',
            'https://via.placeholder.com/800x600/a78bfa/ffffff?text=Credit+Assessment',
            'https://via.placeholder.com/800x600/a78bfa/ffffff?text=Audio+Agent',
        ],
        features: [
            'Real-time credit risk assessment',
            'Alternative data source integration (social media, utility payments)',
            'Audio agent for automated data collection',
            'Traditional financial data analysis',
            'Spending pattern analysis',
            'Risk scoring algorithm',
            'Mobile-responsive interface',
        ],
        technologies: ['JavaScript', 'Next.js', 'Python', 'Twilio', 'React Native', 'Machine Learning', 'Data Analysis'],
        demoUrl: '',
        githubUrl: 'https://github.com/BlitzJB/industry-ai-hackathon',
        color: '#a78bfa',
    },
    {
        slug: 'interview-buddy',
        title: 'Interview Buddy',
        description: 'Virtual technical coding interview preparation tool centered on LLMs using live text-to-speech models.',
        fullDescription: 'Developed a tool for virtual technical coding interview preparation centered on LLMs using live text to speech models. Integrated Python and JavaScript to create an algorithm providing real-time feedback on code typing efficiency, syntax correctness, and speed.',
        tags: ['TypeScript', 'Python', 'Gemini', 'TTS', 'Flask'],
        thumbnail: 'https://via.placeholder.com/400x300/98ff98/333333?text=Interview+Buddy',
        images: [
            'https://via.placeholder.com/800x600/98ff98/333333?text=Interview+Interface',
            'https://via.placeholder.com/800x600/98ff98/333333?text=Code+Analysis',
            'https://via.placeholder.com/800x600/98ff98/333333?text=Real-time+Feedback',
        ],
        features: [
            'Virtual technical coding interview simulation',
            'LLM-powered interview questions (Gemini)',
            'Live text-to-speech interaction',
            'Real-time feedback on code typing efficiency',
            'Syntax correctness validation',
            'Typing speed analysis',
            'Interview performance metrics',
            'Practice mode with various difficulty levels',
        ],
        technologies: ['TypeScript', 'Python', 'Gemini LLM', 'Text to Speech', 'Reverse Engineering', 'Flask', 'JavaScript'],
        demoUrl: '',
        githubUrl: 'https://github.com/theperiperi/Interview-Buddy',
        color: '#98ff98',
    },
    {
        slug: 'course-gpt',
        title: 'Course GPT',
        description: 'Award-winning AI course generator that creates comprehensive courses from any topic.',
        fullDescription: 'Contributed significantly to the backend for CourseGPT, an award-winning AI course generator in a collaborative project with three SNUC peers. Created key features and developed tools that contributed to the success of the project in a hackathon.',
        tags: ['TypeScript', 'Python', 'OpenAI', 'Next.js', 'SQLite'],
        thumbnail: 'https://via.placeholder.com/400x300/ffdab9/333333?text=Course+GPT',
        images: [
            'https://via.placeholder.com/800x600/ffdab9/333333?text=Course+Generator',
            'https://via.placeholder.com/800x600/ffdab9/333333?text=Course+Content',
            'https://via.placeholder.com/800x600/ffdab9/333333?text=Learning+Path',
        ],
        features: [
            'AI-powered course generation',
            'Automatic curriculum creation',
            'Content extraction from documents using Tesseract OCR',
            'Course structure optimization',
            'Learning path recommendations',
            'Database storage with SQLite',
            'Modern web interface',
            'Collaborative learning features',
        ],
        technologies: ['TypeScript', 'Python', 'OpenAI', 'Llama', 'Next.js', 'Tesseract', 'SQLite', 'Flask'],
        demoUrl: 'https://coursegpt.vercel.app/',
        githubUrl: '',
        color: '#ffdab9',
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.slice(0, 3);
}
