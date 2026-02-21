'use client';

import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { experiences } from '@/lib/data/experiences';
import { ExperienceCard } from '@/components/ExperienceCard';
import { useState } from 'react';

export default function HomePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main>
            {/* Hero Section */}
            <Hero />

            {/* Featured Projects */}
            <div style={{ position: 'relative' }}>
                <FeaturedProjects />
                {/* Star */}
                <div className="mario-star" style={{
                    top: '180px',
                    right: '15%',
                }}></div>
            </div>

            {/* Experience Preview */}
            <section id="experience" className="section" style={{ position: 'relative' }}>
                {/* Stars */}
                <div className="mario-star" style={{
                    top: '200px',
                    right: '10%',
                }}></div>
                <div className="mario-star" style={{
                    bottom: '180px',
                    right: '18%',
                }}></div>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: 'var(--space-6)' }}>
                        Work Experience
                    </h2>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={exp.slug} experience={exp} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section" style={{ position: 'relative' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                            <h2 className="contact-title" style={{ marginBottom: 'var(--space-6)' }}>
                                Get In Touch
                            </h2>
                            <p className="text-muted" style={{ fontSize: 'var(--text-lg)' }}>
                                Got a project idea? Want to collaborate? Or just wanna say hi?
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form card">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Name <span style={{ color: '#ffffff', textShadow: '2px 2px 0 #000000' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    className={`form-input ${formData.name ? 'has-value' : ''}`}
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email <span style={{ fontWeight: 400, fontSize: 'var(--text-sm)' }}>(if you want me to reply to you)</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={status === 'loading'}
                                    className={`form-input ${formData.email ? 'has-value' : ''}`}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company" className="form-label">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    disabled={status === 'loading'}
                                    className={`form-input ${formData.company ? 'has-value' : ''}`}
                                    placeholder="Your company or organization"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Message <span style={{ color: '#ffffff', textShadow: '2px 2px 0 #000000' }}>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    className={`form-textarea ${formData.message ? 'has-value' : ''}`}
                                    placeholder="Your message..."
                                    rows={6}
                                />
                            </div>

                            {status === 'error' && (
                                <div className="alert alert-error">
                                    {errorMessage}
                                </div>
                            )}

                            {status === 'success' && (
                                <div className="alert alert-success">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            <div style={{ textAlign: 'right', marginBottom: 'var(--space-3)' }}>
                                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                    <span style={{ color: '#ffffff', textShadow: '1px 1px 0 #000000' }}>*</span> required fields
                                </span>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="submit-button"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: 'var(--space-6)', position: 'relative' }}>
                            {/* Star behind text - top left */}
                            <div className="mario-star" style={{
                                position: 'absolute',
                                top: '-10px',
                                left: 'calc(50% - 185px)',
                                zIndex: 0,
                                transform: 'scale(0.7)',
                            }}></div>

                            <h3 style={{
                                marginBottom: 'var(--space-3)',
                                color: '#ffffff',
                                textShadow: '1.5px 1.5px 0 #000000',
                                letterSpacing: '0.7px',
                                fontSize: 'var(--text-base)',
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                Or connect with me on
                            </h3>
                            <div
                                className="social-links-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: 'var(--space-2)',
                                    maxWidth: '315px',
                                    margin: '0 auto',
                                    position: 'relative',
                                }}
                            >
                                {/* Star on top of last button - bottom right */}
                                <div className="mario-star" style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    right: '-10px',
                                    zIndex: 10,
                                    transform: 'scale(0.7)',
                                }}></div>
                                <a
                                    href="https://github.com/theperiperi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link social-link-3d"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 'var(--space-1)',
                                        padding: 'var(--space-2)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '2px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)',
                                        transition: 'all var(--duration-normal) var(--ease-bounce)',
                                        boxShadow: '2px 2px 0 #000000',
                                    }}
                                >
                                    <svg
                                        style={{ width: '22px', height: '22px', fill: 'var(--color-mario-green)', transition: 'transform var(--duration-fast) var(--ease-bounce)' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span style={{ fontSize: '10px', color: '#000000', fontWeight: 600 }}>
                                        GitHub
                                    </span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/priyadharshini-sridhar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link social-link-3d"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 'var(--space-1)',
                                        padding: 'var(--space-2)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '2px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)',
                                        transition: 'all var(--duration-normal) var(--ease-bounce)',
                                        boxShadow: '2px 2px 0 #000000',
                                    }}
                                >
                                    <svg
                                        style={{ width: '22px', height: '22px', fill: 'var(--color-mario-green)', transition: 'transform var(--duration-fast) var(--ease-bounce)' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span style={{ fontSize: '10px', color: '#000000', fontWeight: 600 }}>
                                        LinkedIn
                                    </span>
                                </a>
                                <a
                                    href="mailto:priyasridhar101@gmail.com"
                                    className="social-link social-link-3d"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 'var(--space-1)',
                                        padding: 'var(--space-2)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                        border: '2px solid var(--color-border)',
                                        borderRadius: 'var(--radius-md)',
                                        transition: 'all var(--duration-normal) var(--ease-bounce)',
                                        boxShadow: '2px 2px 0 #000000',
                                    }}
                                >
                                    <svg
                                        style={{ width: '22px', height: '22px', fill: 'var(--color-mario-green)', transition: 'transform var(--duration-fast) var(--ease-bounce)' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <span style={{ fontSize: '10px', color: '#000000', fontWeight: 600 }}>
                                        Email
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .contact-title {
                    color: #ffffff;
                    text-shadow:
                        4px 4px 0 #000000,
                        6px 6px 0 rgba(0, 0, 0, 0.5),
                        8px 8px 0 rgba(0, 0, 0, 0.3);
                    letter-spacing: 2px;
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    cursor: pointer;
                    display: inline-block;
                }

                .contact-title:hover {
                    text-shadow:
                        1px 1px 0 #000000,
                        2px 2px 0 rgba(0, 0, 0, 0.2);
                    transform: translate(3px, 3px) scale(0.98);
                }

                .contact-form {
                    padding: var(--space-8);
                    background: rgba(255, 255, 255, 0.03);
                    border: 4px solid #000000;
                    box-shadow: 8px 8px 0 #000000;
                }

                .form-group {
                    margin-bottom: var(--space-6);
                }

                .form-label {
                    display: block;
                    margin-bottom: var(--space-3);
                    font-size: var(--text-base);
                    font-weight: 700;
                    color: #ffffff;
                    text-shadow: 2px 2px 0 #000000;
                    letter-spacing: 0.5px;
                }

                .form-input,
                .form-textarea {
                    width: 100%;
                    padding: var(--space-4);
                    font-size: var(--text-base);
                    color: var(--color-text);
                    background: rgba(0, 0, 0, 0.3);
                    border: 3px solid var(--color-border);
                    border-radius: var(--radius-md);
                    transition: all var(--duration-normal) var(--ease-bounce);
                    font-family: inherit;
                    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .form-input.has-value,
                .form-textarea.has-value {
                    background: #ffffff;
                    color: #000000;
                    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
                }

                .form-input::placeholder,
                .form-textarea::placeholder {
                    color: rgba(255, 255, 255, 0.4);
                }

                .form-input.has-value::placeholder,
                .form-textarea.has-value::placeholder {
                    color: rgba(0, 0, 0, 0.4);
                }

                .form-input:focus,
                .form-textarea:focus {
                    outline: none;
                    border-color: var(--color-accent);
                    background: #ffffff;
                    color: #000000;
                    box-shadow:
                        inset 2px 2px 4px rgba(0, 0, 0, 0.1),
                        0 0 0 3px rgba(255, 215, 0, 0.2);
                    transform: translateY(-1px);
                }

                .form-input:focus::placeholder,
                .form-textarea:focus::placeholder {
                    color: rgba(0, 0, 0, 0.4);
                }

                .form-input:disabled,
                .form-textarea:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 150px;
                }

                .alert {
                    padding: var(--space-4);
                    border-radius: var(--radius-md);
                    margin-bottom: var(--space-4);
                    font-size: var(--text-sm);
                    font-weight: 600;
                    border: 3px solid;
                    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3);
                }

                .alert-error {
                    background: rgba(239, 68, 68, 0.15);
                    border-color: #ef4444;
                    color: #fca5a5;
                }

                .alert-success {
                    background: rgba(34, 197, 94, 0.15);
                    border-color: #22c55e;
                    color: #86efac;
                }

                .submit-button {
                    width: 100%;
                    padding: var(--space-5);
                    font-size: var(--text-lg);
                    font-weight: 700;
                    color: #ffffff;
                    background: var(--color-mario-green);
                    border: 4px solid #000000;
                    border-radius: var(--radius-md);
                    cursor: pointer;
                    transition: all var(--duration-fast) var(--ease-bounce);
                    text-shadow: 2px 2px 0 #000000;
                    box-shadow: 6px 6px 0 #000000;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .submit-button:hover:not(:disabled) {
                    transform: translate(-2px, -2px);
                    box-shadow: 8px 8px 0 #000000;
                    background: #00b757;
                }

                .submit-button:active:not(:disabled) {
                    transform: translate(3px, 3px);
                    box-shadow: 3px 3px 0 #000000;
                }

                .submit-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }

                .social-link-3d:hover {
                    transform: translate(1px, 1px);
                    box-shadow: 1px 1px 0 #000000;
                }

                .social-link-3d:active {
                    transform: translate(2px, 2px);
                    box-shadow: 0px 0px 0 #000000;
                }

                @media (max-width: 768px) {
                    .contact-form {
                        padding: var(--space-6);
                        box-shadow: 6px 6px 0 #000000;
                    }

                    .submit-button {
                        font-size: var(--text-base);
                        padding: var(--space-4);
                    }
                }
            `}</style>
        </main>
    );
}
