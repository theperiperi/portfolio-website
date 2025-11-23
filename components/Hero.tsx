'use client';

import { useEffect, useRef } from 'react';

export function Hero() {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate floating particles
        if (particlesRef.current) {
            const particleCount = 30;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = Math.random() * 4 + 4 + 's';
                particlesRef.current.appendChild(particle);
            }
        }
    }, []);

    const handleTitleHover = (e: React.MouseEvent<HTMLHeadingElement>) => {
        e.currentTarget.style.animation = 'none';
        setTimeout(() => {
            e.currentTarget.style.animation = 'glitch 0.3s ease-in-out';
        }, 10);
    };

    return (
        <section id="home" className="hero section">
            <div className="particles" ref={particlesRef}></div>
            <div className="hero-content" style={{ zIndex: 10, textAlign: 'center' }}>
                <h1
                    className="hero-title"
                    onMouseEnter={handleTitleHover}
                    style={{
                        fontSize: 'clamp(var(--text-2xl), 5vw, var(--text-4xl))',
                        marginBottom: 'var(--space-4)',
                    }}
                >
                    DEVELOPER
                </h1>
                <p
                    className="hero-subtitle"
                    style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--space-6)',
                    }}
                >
                    Building digital experiences
                </p>
                <div className="hero-cta" style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                    <a href="#projects" className="btn">
                        View Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
