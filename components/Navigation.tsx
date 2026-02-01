'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navigation() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        // Close mobile menu
        setIsMenuOpen(false);
        
        // Only handle smooth scrolling if on homepage
        if (pathname === '/') {
            e.preventDefault();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If not on homepage, let the default link behavior work (navigate to /#section)
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.querySelector('.nav');
            if (nav && !nav.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link href="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
                    Hi, I'm Priya!
                </Link>
                
                {/* Hamburger Menu Button */}
                <button
                    className="nav-hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 'var(--space-2)',
                        zIndex: 1001,
                    }}
                >
                    <div style={{
                        width: '24px',
                        height: '20px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <span style={{
                            display: 'block',
                            width: '100%',
                            height: '3px',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease',
                            transform: isMenuOpen ? 'rotate(45deg) translate(0px, 8.5px)' : 'none',
                        }}></span>
                        <span style={{
                            display: 'block',
                            width: '100%',
                            height: '3px',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease',
                            opacity: isMenuOpen ? 0 : 1,
                        }}></span>
                        <span style={{
                            display: 'block',
                            width: '100%',
                            height: '3px',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease',
                            transform: isMenuOpen ? 'rotate(-45deg) translate(0px, -8.5px)' : 'none',
                        }}></span>
                    </div>
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
                    <li>
                        <Link
                            href="/"
                            className={`nav-link ${isActive('/') && pathname === '/' ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/nerd-wall"
                            className={`nav-link ${isActive('/nerd-wall') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Nerd Wall
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#projects"
                            className="nav-link"
                            onClick={(e) => handleSectionClick(e, 'projects')}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#experience"
                            className="nav-link"
                            onClick={(e) => handleSectionClick(e, 'experience')}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/#contact" 
                            className="nav-link"
                            onClick={(e) => handleSectionClick(e, 'contact')}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            
            <style jsx>{`
                @media (max-width: 768px) {
                    .nav-hamburger {
                        display: block !important;
                    }

                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 70%;
                        max-width: 300px;
                        height: 100vh;
                        background: linear-gradient(135deg, rgba(0, 166, 81, 0.98) 0%, rgba(0, 135, 65, 0.98) 100%);
                        backdrop-filter: blur(20px);
                        flex-direction: column;
                        justify-content: flex-start;
                        padding: 80px var(--space-4) var(--space-6);
                        gap: var(--space-5);
                        transition: right 0.3s ease;
                        border-left: 4px solid #000000;
                        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
                        z-index: 1000;
                    }

                    .nav-menu-open {
                        right: 0;
                    }

                    .nav-menu li {
                        width: 100%;
                    }

                    .nav-link {
                        display: block;
                        width: 100%;
                        text-align: left;
                        padding: var(--space-3) var(--space-4);
                        font-size: var(--text-sm);
                        border-radius: var(--radius-md);
                        background: rgba(0, 0, 0, 0.2);
                        margin-bottom: var(--space-2);
                    }

                    .nav-link:hover,
                    .nav-link.active {
                        background: rgba(255, 215, 0, 0.3);
                    }
                }

                @media (max-width: 480px) {
                    .nav-menu {
                        width: 80%;
                    }
                }
            `}</style>
        </nav>
    );
}
