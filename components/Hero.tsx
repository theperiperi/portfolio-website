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
                    className="hero-subtitle"
                    style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--space-6)',
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
                    .hero-title-3d {
                        text-shadow: 
                            3px 3px 0 var(--color-accent),
                            6px 6px 0 rgba(167, 139, 250, 0.5);
                        transition: all 0.3s ease;
                    }
                    
                    .hero-title-3d:hover {
                        text-shadow: 
                            5px 5px 0 var(--color-accent),
                            10px 10px 0 rgba(167, 139, 250, 0.5);
                        transform: translate(-2px, -2px);
                    }
                    
                    .btn-3d {
                        position: relative;
                        transition: all 0.2s ease;
                        box-shadow: 
                            3px 3px 0 var(--color-border),
                            6px 6px 0 rgba(0, 0, 0, 0.1);
                    }
                    
                    .btn-3d:hover {
                        transform: translate(3px, 3px);
                        box-shadow: 
                            0px 0px 0 var(--color-border),
                            0px 0px 0 rgba(0, 0, 0, 0.1);
                    }
                    
                    .btn-3d:active {
                        transform: translate(6px, 6px);
                        box-shadow: none;
                    }
                `}</style>
            </div>
        </section>
    );
}
