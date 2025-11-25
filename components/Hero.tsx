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
        const target = e.currentTarget;
        if (target && target.style) {
            target.style.animation = 'none';
            setTimeout(() => {
                if (target && target.style) {
                    target.style.animation = 'glitch 0.3s ease-in-out';
                }
            }, 10);
        }
    };

    return (
        <section id="home" className="hero section">
            <div className="particles" ref={particlesRef}></div>
            <div className="hero-content" style={{ zIndex: 10, textAlign: 'center' }}>
                <h1
                    className="hero-title hero-title-3d"
                    onMouseEnter={handleTitleHover}
                    data-text="PRIYA SRIDHAR"
                    style={{
                        fontSize: 'clamp(var(--text-2xl), 5vw, var(--text-4xl))',
                        marginBottom: 'var(--space-4)',
                        position: 'relative',
                    }}
                >
                    PRIYA SRIDHAR
                </h1>
                <p
                    className="hero-subtitle hero-subtitle-enhanced"
                    style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text)',
                        marginBottom: 'var(--space-6)',
                        fontWeight: 'bold',
                    }}
                >
                    Software Engineer | AI/ML Enthusiast | Full-Stack Developer
                </p>
                <div className="hero-cta" style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                    <a href="#projects" className="btn btn-3d">
                        View Work
                    </a>
                    <a href="#contact" className="btn btn-outline btn-3d">
                        Get in Touch
                    </a>
                </div>
                <style jsx>{`
                    .hero-subtitle-enhanced {
                        text-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
                        animation: glow-pulse 2s ease-in-out infinite;
                    }
                    
                    @keyframes glow-pulse {
                        0%, 100% {
                            text-shadow: 0 0 10px rgba(124, 58, 237, 0.3);
                        }
                        50% {
                            text-shadow: 0 0 20px rgba(124, 58, 237, 0.6);
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
