import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Developer Portfolio',
    description: 'Software Developer Portfolio - Showcasing projects, experience, and creative work',
    keywords: 'software developer, portfolio, web development, projects',
    authors: [{ name: 'Developer Portfolio' }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={pressStart2P.className}>
                <Navigation />
                <ThemeProvider>{children}</ThemeProvider>
                <Footer />
                <div className="bottom-pipe"></div>
            </body>
        </html>
    );
}
