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

export const metadata: Metadata = {
    title: 'Priya Sridhar',
    description: 'Developer Portfolio of Priyadharshini Sridhar- Showcasing projects, experience, and creative work',
    keywords: 'priya sridhar, software developer, portfolio, web development, projects',
    authors: [{ name: 'Priya Sridhar' }],
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
    },
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
