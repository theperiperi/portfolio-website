'use client';

import { useState } from 'react';

export function ContactForm() {
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
                headers: { 'Content-Type': 'application/json' },
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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-container">
                    <div className="contact-header">
                        <h2 className="contact-title">Get In Touch</h2>
                        <p className="text-muted contact-subtitle">
                            Got a project idea? Want to collaborate? Or just wanna say hi?
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form card">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Name <span className="required-star">*</span>
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
                                Email{' '}
                                <span className="form-label-hint">(if you want me to reply to you)</span>
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
                                Message <span className="required-star">*</span>
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
                            <div className="alert alert-error">{errorMessage}</div>
                        )}

                        {status === 'success' && (
                            <div className="alert alert-success">
                                Message sent successfully! I&apos;ll get back to you soon.
                            </div>
                        )}

                        <div className="form-required-hint">
                            <span className="required-star">*</span> required fields
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="submit-button"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    <div className="contact-social">
                        <div className="mario-star contact-social-star-left"></div>
                        <h3 className="contact-social-heading">Or connect with me on</h3>
                        <div className="social-links-grid">
                            <div className="mario-star contact-social-star-right"></div>
                            <a
                                href="https://github.com/theperiperi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link social-link-3d"
                            >
                                <svg className="social-icon" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span className="social-label">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/priyadharshini-sridhar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link social-link-3d"
                            >
                                <svg className="social-icon" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span className="social-label">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:priyasridhar101@gmail.com"
                                className="social-link social-link-3d"
                            >
                                <svg className="social-icon" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span className="social-label">Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
