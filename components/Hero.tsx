'use client';

import { useEffect, useRef, useCallback } from 'react';

export function Hero() {
    const cloudsRef = useRef<HTMLDivElement>(null);
    const clusterRef = useRef<HTMLDivElement>(null);
    const coinsRef = useRef<HTMLDivElement>(null);
    const lastWidthRef = useRef(0);

    // Apply scroll-based transforms directly to DOM (no React state, no re-renders)
    const applyScrollEffects = useCallback((sy: number) => {
        // Coins: fade the container, hide entirely once invisible
        if (coinsRef.current) {
            const fadeProgress = Math.min(sy / 150, 1);
            const opacity = Math.max(1 - fadeProgress, 0);
            coinsRef.current.style.opacity = opacity.toString();
            coinsRef.current.style.visibility = opacity === 0 ? 'hidden' : 'visible';
        }

        // Clouds: per-element transform + hide fully-cleared clouds
        if (clusterRef.current) {
            const clouds = clusterRef.current.children;
            for (let idx = 0; idx < clouds.length; idx++) {
                const cloud = clouds[idx] as HTMLElement;
                const layer = parseInt(cloud.dataset.layer || '0');
                const direction = cloud.dataset.direction;
                const scrollDistance = parseFloat(cloud.dataset.scrollDistance || '200');
                const layerStartScroll = layer * 30;

                if (sy < layerStartScroll) {
                    cloud.style.transform = 'translate(0, 0)';
                    cloud.style.opacity = '1';
                    cloud.style.visibility = 'visible';
                } else {
                    const progress = Math.min((sy - layerStartScroll) / scrollDistance, 1);

                    if (progress >= 1) {
                        // Fully cleared — remove from GPU composition entirely
                        cloud.style.visibility = 'hidden';
                    } else {
                        const horizontalMove = progress * 120;
                        const verticalMove = progress * 100;
                        const opacity = Math.max(1 - progress, 0);

                        cloud.style.opacity = opacity.toString();
                        cloud.style.visibility = 'visible';
                        cloud.style.transform = direction === 'left'
                            ? `translate(-${horizontalMove}vw, -${verticalMove}vh)`
                            : `translate(${horizontalMove}vw, -${verticalMove}vh)`;
                    }
                }
            }
        }

        // Hero overlay
        const overlay = document.querySelector('.hero-overlay') as HTMLElement | null;
        if (overlay) {
            const overlayOpacity = sy === 0 ? 1 : Math.max(1 - (sy / 150), 0);
            overlay.style.opacity = overlayOpacity.toString();
            overlay.style.visibility = overlayOpacity === 0 ? 'hidden' : 'visible';
        }
    }, []);

    useEffect(() => {
        function generateCoins() {
            if (!coinsRef.current) return;
            coinsRef.current.innerHTML = '';

            const heroWidth = window.innerWidth;
            const heroHeight = window.innerHeight;
            const isMobile = heroWidth < 768;

            const spacing = isMobile ? 120 : 80;
            const cols = Math.ceil(heroWidth / spacing) + 1;
            const rows = Math.ceil(heroHeight / spacing) + 1;

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const coin = document.createElement('div');
                    coin.className = 'spinning-coin';

                    const offsetX = (row % 2) * (spacing / 2);
                    const x = (col * spacing) + offsetX;
                    const y = row * spacing;

                    coin.style.left = x + 'px';
                    coin.style.top = y + 'px';
                    coin.style.animationDelay = (Math.random() * 1.2) + 's';

                    coinsRef.current.appendChild(coin);
                }
            }
        }

        function generateClouds() {
            if (!clusterRef.current) return;
            clusterRef.current.innerHTML = '';

            const isMobile = window.innerWidth < 768;
            const layers = isMobile ? 10 : 30;
            const cloudsPerLayer = isMobile ? 5 : 15;

            const layerDirections: ('left' | 'right')[] = [];
            for (let l = 0; l < layers; l++) {
                layerDirections.push(Math.random() < 0.5 ? 'left' : 'right');
            }

            const layerScrollDistances: number[] = [];
            for (let l = 0; l < layers; l++) {
                layerScrollDistances.push(80 + (l * (isMobile ? 200 : 100)));
            }

            for (let layer = 0; layer < layers; layer++) {
                const layerDirection = layerDirections[layer];
                const scrollDistance = layerScrollDistances[layer];

                for (let i = 0; i < cloudsPerLayer; i++) {
                    const cloud = document.createElement('div');
                    cloud.className = 'cloud cluster-cloud';

                    const maxVariant = isMobile ? 2 : 4;
                    const sizeVariant = Math.floor(Math.random() * maxVariant);
                    if (sizeVariant === 0) {
                        cloud.classList.add('cloud-small');
                    } else if (sizeVariant === 1) {
                        cloud.classList.add('cloud-medium');
                    } else if (sizeVariant === 2) {
                        cloud.classList.add('cloud-large');
                    } else {
                        cloud.classList.add('cloud-xlarge');
                    }

                    const topPosition = layer * (isMobile ? 100 : 60) - 150 + (Math.random() * 100 - 50);
                    const leftPosition = (i * (isMobile ? 24 : 8)) - 18 + (Math.random() * 14 - 7);

                    cloud.style.top = topPosition + 'px';
                    cloud.style.left = leftPosition + '%';

                    cloud.dataset.layer = layer.toString();
                    cloud.dataset.direction = layerDirection;
                    cloud.dataset.scrollDistance = scrollDistance.toString();

                    clusterRef.current.appendChild(cloud);
                }
            }
        }

        // Generate on mount
        lastWidthRef.current = window.innerWidth;
        generateCoins();
        generateClouds();
        // Immediately apply scroll state so elements match current position
        applyScrollEffects(window.scrollY);

        // Only regenerate on actual width changes (ignore mobile address bar height changes)
        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth === lastWidthRef.current) return;
            lastWidthRef.current = newWidth;

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                generateCoins();
                generateClouds();
                applyScrollEffects(window.scrollY);
            }, 300);
        };

        window.addEventListener('resize', handleResize);

        // Scroll handler — pure DOM updates via rAF, no React state
        let rafId: number | null = null;
        const handleScroll = () => {
            if (rafId !== null) return;
            rafId = requestAnimationFrame(() => {
                applyScrollEffects(window.scrollY);
                rafId = null;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
            window.removeEventListener('scroll', handleScroll);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, [applyScrollEffects]);

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
            {/* Spinning coins background */}
            <div className="hero-coins-container" ref={coinsRef}></div>
            {/* Full overlay that fades on scroll - adapts to theme */}
            <div className="hero-overlay" />
            {/* Dense cloud layers that clear horizontally on scroll */}
            <div className="cloud-cluster" ref={clusterRef}></div>
            <div className="hero-content" style={{ 
                zIndex: 10, 
                textAlign: 'center', 
                padding: '0 var(--space-4)',
                maxWidth: '100%',
            }}>
                <h1
                    className="hero-title hero-title-3d"
                    onMouseEnter={handleTitleHover}
                    data-text="PRIYA SRIDHAR"
                    style={{
                        fontSize: 'clamp(1.5rem, 8vw, var(--text-4xl))',
                        marginBottom: 'var(--space-4)',
                        position: 'relative',
                        wordBreak: 'break-word',
                        lineHeight: '1.2',
                        WebkitTextStroke: '2px #000000',
                    }}
                >
                    PRIYA SRIDHAR
                </h1>
                <p
                    className="hero-subtitle hero-subtitle-enhanced"
                    style={{
                        fontSize: 'clamp(10px, 3vw, var(--text-base))',
                        color: 'var(--color-mario-green)',
                        marginBottom: 'var(--space-6)',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 0 #000000',
                        lineHeight: '1.6',
                        maxWidth: '90%',
                        margin: '0 auto var(--space-6)',
                    }}
                >
                    Software Engineer | AI/ML Enthusiast | Full-Stack Developer
                </p>
                <div className="hero-cta" style={{ 
                    marginTop: 'var(--space-6)', 
                    display: 'flex', 
                    gap: 'var(--space-4)', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap',
                    padding: '0 var(--space-2)',
                }}>
                    <a href="#projects" className="btn btn-3d" style={{ 
                        backgroundColor: 'var(--color-accent)', 
                        color: '#ffffff',
                        minWidth: '140px',
                    }}>
                        View Work
                    </a>
                    <a href="#contact" className="btn btn-outline btn-3d" style={{
                        minWidth: '140px',
                    }}>
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
