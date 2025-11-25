'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <nav className="nav">
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    Hi, I'm Priya!
                </Link>
                <ul className="nav-menu">
                    <li>
                        <Link
                            href="/"
                            className={`nav-link ${isActive('/') && pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/experience"
                            className={`nav-link ${isActive('/experience') ? 'active' : ''}`}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
