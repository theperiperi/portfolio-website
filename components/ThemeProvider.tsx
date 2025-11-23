'use client';

import { useState, useEffect, ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <>
            {children}
            <button
                className="theme-toggle"
                id="themeToggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                    position: 'fixed',
                    top: 'var(--space-4)',
                    right: 'var(--space-6)',
                    zIndex: 1001,
                }}
            >
                <svg className="theme-icon" viewBox="0 0 24 24">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </button>
        </>
    );
}
