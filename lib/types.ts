export interface Project {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    thumbnail: string;
    images: string[];
    features: string[];
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    color: string;
}

export interface Experience {
    slug: string;
    company: string;
    logo?: string;
    role: string;
    duration: string;
    location: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
    color: string;
}
