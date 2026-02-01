'use client';

import { useEffect, useState, useCallback } from 'react';

export function MarioHUD() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [coinFalling, setCoinFalling] = useState(false);

    // Measure nav height and set CSS variable so HUD positions adapt
    const updateNavHeight = useCallback(() => {
        const nav = document.querySelector('.nav') as HTMLElement | null;
        if (nav) {
            // Include box-shadow (4px visual extension below border)
            const height = nav.offsetHeight + 4;
            document.documentElement.style.setProperty('--nav-total-height', `${height}px`);
        }
    }, []);

    useEffect(() => {
        // Measure once on mount, and on resize (nav may reflow)
        updateNavHeight();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateNavHeight, 200);
        };

        window.addEventListener('resize', handleResize);

        let rafId: number | null = null;
        const handleScroll = () => {
            if (rafId !== null) return;
            rafId = requestAnimationFrame(() => {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(Math.min(progress, 100));
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
    }, [updateNavHeight]);

    const handleScrollToTop = () => {
        setCoinFalling(true);
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset coin after animation
        setTimeout(() => {
            setCoinFalling(false);
        }, 1000);
    };

    return (
        <>
            {/* Lives Counter - Top Left */}
            <div className="mario-lives-hud">
                <div className="mario-life-icon"></div>
                <div className="mario-life-icon"></div>
                <div className="mario-life-icon"></div>
            </div>

            {/* XP/Progress Bar - Top Center */}
            <div className="mario-xp-bar-hud">
                <div className="mario-xp-label">XP</div>
                <div className="mario-xp-track">
                    <div 
                        className="mario-xp-fill"
                        style={{ width: `${scrollProgress}%` }}
                    ></div>
                </div>
            </div>

            {/* Score and Coin - Top Right */}
            <div className="mario-score-hud">
                <div className="mario-score-text">
                    SCORE: {Math.floor(scrollProgress * 10)}
                </div>
            </div>
            
            {/* Coin below the top pipe */}
            <div
                className={`mario-hover-coin ${coinFalling ? 'falling' : ''}`}
                title="Collected coins"
            ></div>

            {/* Mystery Box Scroll Button - Bottom Left */}
            <div 
                className="mario-mystery-scroll-box"
                onClick={handleScrollToTop}
                title="Back to top"
            >
                <div className="mystery-box-arrow">↑</div>
            </div>
        </>
    );
}

