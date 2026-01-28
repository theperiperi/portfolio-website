import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nerd Wall',
    description:
        'Tech musings, late-night thoughts, and digital scribbles by Priyadharshini Sridhar.',
    alternates: {
        canonical: '/nerd-wall',
    },
};

export default function NerdWallLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
