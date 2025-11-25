'use client';

import { useEffect, useState } from 'react';

export function MarioHUD() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [coinFalling, setCoinFalling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        style={{ width: `${100 - scrollProgress}%` }}
                    ></div>
                </div>
            </div>

            {/* Score and Coin - Top Right */}
            <div className="mario-score-hud">
                <div className="mario-score-text">
                    SCORE: {Math.floor(scrollProgress * 10)}
                </div>
                <div 
                    className={`mario-hover-coin ${coinFalling ? 'falling' : ''}`}
                    title="Collected coins"
                ></div>
            </div>

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

