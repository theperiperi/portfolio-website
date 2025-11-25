'use client';

import { useEffect, useRef, useState } from 'react';

export function Hero() {
    const cloudsRef = useRef<HTMLDivElement>(null);
    const clusterRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Generate MASSIVE cloud coverage that persists through entire page
        if (clusterRef.current) {
            // Create 30 layers to cover entire page scroll
            const layers = 30;
            const cloudsPerLayer = 15; // Heavy cloud density
            
            // Randomly assign each layer to move left or right
            const layerDirections: ('left' | 'right')[] = [];
            for (let l = 0; l < layers; l++) {
                layerDirections.push(Math.random() < 0.5 ? 'left' : 'right');
            }
            
            // Assign staggered scroll distances - layers clear throughout entire page scroll
            const layerScrollDistances: number[] = [];
            for (let l = 0; l < layers; l++) {
                // Each layer clears at different scroll points from 80px to 3000px
                layerScrollDistances.push(80 + (l * 100));
            }
            
            for (let layer = 0; layer < layers; layer++) {
                const layerDirection = layerDirections[layer];
                const scrollDistance = layerScrollDistances[layer];
                
                for (let i = 0; i < cloudsPerLayer; i++) {
                    const cloud = document.createElement('div');
                    cloud.className = 'cloud cluster-cloud';
                    
                    // Random size variation with more bias toward larger clouds
                    const sizeVariant = Math.floor(Math.random() * 4);
                    if (sizeVariant === 0) {
                        cloud.classList.add('cloud-small');
                    } else if (sizeVariant === 1) {
                        cloud.classList.add('cloud-medium');
                    } else if (sizeVariant === 2) {
                        cloud.classList.add('cloud-large');
                    } else {
                        cloud.classList.add('cloud-xlarge');
                    }
                    
                    // Position clouds with massive vertical and horizontal coverage
                    const topPosition = layer * 60 - 150 + (Math.random() * 100 - 50);
                    const leftPosition = (i * 8) - 18 + (Math.random() * 14 - 7);
                    
                    cloud.style.top = topPosition + 'px';
                    cloud.style.left = leftPosition + '%';
                    
                    // Store layer info for animation
                    cloud.dataset.layer = layer.toString();
                    cloud.dataset.direction = layerDirection;
                    cloud.dataset.scrollDistance = scrollDistance.toString();
                    
                    clusterRef.current.appendChild(cloud);
                }
            }
        }

        // Handle scroll to clear clouds layer by layer
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

    useEffect(() => {
        // Staggered layer clearing: each layer moves at different scroll points
        if (clusterRef.current) {
            const clouds = clusterRef.current.querySelectorAll('.cluster-cloud');
            
            clouds.forEach((cloud) => {
                const layer = parseInt((cloud as HTMLElement).dataset.layer || '0');
                const direction = (cloud as HTMLElement).dataset.direction;
                const scrollDistance = parseFloat((cloud as HTMLElement).dataset.scrollDistance || '200');
                
                // Calculate if this layer should be moving yet
                const layerStartScroll = layer * 30; // Each layer starts moving 30px apart
                
                if (scrollY < layerStartScroll) {
                    // Layer hasn't started moving yet
                    (cloud as HTMLElement).style.transform = 'translate(0, 0)';
                    (cloud as HTMLElement).style.opacity = '1';
                } else {
                    // Calculate progress for this specific layer
                    const progress = Math.min((scrollY - layerStartScroll) / scrollDistance, 1);
                    
                    // Horizontal movement: entire layer moves together
                    const horizontalMove = progress * 120; // Move 120vw to side for complete clearing
                    
                    // Vertical movement: move up
                    const verticalMove = progress * 100; // Move 100vh up
                    
                    // Fade out as layer clears
                    const opacity = Math.max(1 - progress, 0);
                    (cloud as HTMLElement).style.opacity = opacity.toString();
                    
                    // Apply transform based on layer's assigned direction
                    if (direction === 'left') {
                        (cloud as HTMLElement).style.transform = 
                            `translate(-${horizontalMove}vw, -${verticalMove}vh)`;
                    } else {
                        (cloud as HTMLElement).style.transform = 
                            `translate(${horizontalMove}vw, -${verticalMove}vh)`;
                    }
                }
            });
        }
    }, [scrollY]);

    return (
        <section id="home" className="hero section">
            {/* Full white overlay that fades on scroll */}
            <div 
                className="hero-white-overlay"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#ffffff',
                    zIndex: 2,
                    opacity: scrollY === 0 ? 1 : Math.max(1 - (scrollY / 150), 0),
                    transition: 'opacity 0.1s ease-out',
                    pointerEvents: 'none',
                }}
            />
            {/* Dense cloud layers that clear horizontally on scroll */}
            <div className="cloud-cluster" ref={clusterRef}></div>
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
                        color: 'var(--color-mario-green)',
                        marginBottom: 'var(--space-6)',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 0 #000000',
                    }}
                >
                    Software Engineer | AI/ML Enthusiast | Full-Stack Developer
                </p>
                <div className="hero-cta" style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn btn-3d" style={{ backgroundColor: 'var(--color-accent)', color: '#ffffff' }}>
                        View Work
                    </a>
                    <a href="#contact" className="btn btn-outline btn-3d">
                        Get in Touch
                    </a>
                </div>
                <style jsx>{`
                    .hero-subtitle-enhanced {
                        animation: glow-pulse 2s ease-in-out infinite;
                    }
                    
                    @keyframes glow-pulse {
                        0%, 100% {
                            filter: drop-shadow(0 0 8px rgba(0, 166, 81, 0.6));
                        }
                        50% {
                            filter: drop-shadow(0 0 20px rgba(0, 166, 81, 1));
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
