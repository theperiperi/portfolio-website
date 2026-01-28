import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MarioHUD } from '@/components/MarioHUD';
import { Analytics } from '@vercel/analytics/next';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const siteUrl = 'https://priyadharshini-sridhar.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Priyadharshini Sridhar | Software Engineer & AI/ML Developer',
        template: '%s | Priyadharshini Sridhar',
    },
    description:
        'Priyadharshini Sridhar — Software Engineer, AI/ML Enthusiast, and Full-Stack Developer. Google SWE Intern. Explore projects, work experience, and technical skills.',
    keywords: [
        'Priyadharshini Sridhar',
        'Priya Sridhar',
        'software engineer',
        'AI ML developer',
        'full stack developer',
        'Google intern',
        'portfolio',
        'web developer',
        'machine learning',
        'Shiv Nadar University',
    ],
    authors: [{ name: 'Priyadharshini Sridhar' }],
    creator: 'Priyadharshini Sridhar',
    verification: {
        google: '4MdM1M8WRD52eI0GMc264ILlwpftrAKo6a8kT_B09HU',
    },
    icons: {
        icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Priyadharshini Sridhar — Portfolio',
        title: 'Priyadharshini Sridhar | Software Engineer & AI/ML Developer',
        description:
            'Priyadharshini Sridhar — Software Engineer, AI/ML Enthusiast, and Full-Stack Developer. Google SWE Intern. Explore projects, work experience, and technical skills.',
    },
    twitter: {
        card: 'summary',
        title: 'Priyadharshini Sridhar | Software Engineer & AI/ML Developer',
        description:
            'Priyadharshini Sridhar — Software Engineer, AI/ML Enthusiast, and Full-Stack Developer. Google SWE Intern.',
    },
    alternates: {
        canonical: siteUrl,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Priyadharshini Sridhar',
    alternateName: 'Priya Sridhar',
    url: siteUrl,
    jobTitle: 'Software Engineer',
    description:
        'Software Engineer, AI/ML Enthusiast, and Full-Stack Developer. Google SWE Intern.',
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Shiv Nadar University',
    },
    knowsAbout: [
        'Software Engineering',
        'Artificial Intelligence',
        'Machine Learning',
        'Full-Stack Development',
        'Python',
        'TypeScript',
        'Next.js',
        'React',
    ],
    sameAs: [
        'https://github.com/theperiperi',
        'https://www.linkedin.com/in/priyadharshini-sridhar/',
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={pressStart2P.className}>
                <Navigation />
                <MarioHUD />
                <ThemeProvider>{children}</ThemeProvider>
                <Footer />
                <div className="top-pipe"></div>
                <div className="bottom-pipe"></div>
                <Analytics />
            </body>
        </html>
    );
}
