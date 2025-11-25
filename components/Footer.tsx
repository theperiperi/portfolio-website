export function Footer() {
    return (
        <footer className="footer" style={{ 
            background: 'linear-gradient(135deg, #00a651 0%, #008741 100%)',
            borderTop: '4px solid #000000',
            color: '#ffffff',
            textShadow: '2px 2px 0 #000000',
            padding: 'var(--space-8) var(--space-6)',
            marginBottom: '60px',
            position: 'relative',
            zIndex: 1002
        }}>
            <p className="footer-text" style={{ color: '#ffffff', fontSize: 'var(--text-sm)' }}>
                © 2024 Priya Sridhar. Built with passion and Next.js. 🍄⭐
            </p>
        </footer>
    );
}
