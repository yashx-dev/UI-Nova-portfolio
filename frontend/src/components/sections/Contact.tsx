import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { GradientText } from '../ui/GradientText';
import { personalInfo } from '../../data/data';

export const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
        }, 1800);
    };

    return (
        <div className="section-wrap" id="contact">
            <div className="contact-grid">
                <ScrollReveal>
                    <div className="section-eyebrow">Get in Touch</div>
                    <h2 className="section-title" style={{ marginBottom: '20px' }}>
                        Let's Create<br />Something <GradientText>Epic</GradientText>
                    </h2>
                    <p className="contact-desc">
                        Have a project in mind? Whether it's a product launch, brand film, or motion reel —
                        I'd love to hear about it. Let's turn your vision into a cinematic reality.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div className="contact-text">
                                <strong>Email</strong>{personalInfo.email}
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">⏱️</div>
                            <div className="contact-text">
                                <strong>Response Time</strong>Usually within 24 hours
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">🌍</div>
                            <div className="contact-text">
                                <strong>Availability</strong>{personalInfo.location}
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <a href="#" className="social-btn" title="Instagram">📸</a>
                        <a href="#" className="social-btn" title="LinkedIn">💼</a>
                        <a href="#" className="social-btn" title="Behance">🎨</a>
                        <a href="#" className="social-btn" title="YouTube">▶</a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay="delay-2">
                    <div className="contact-form-wrap">
                        <div className="form-title">Send a Message</div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="hello@company.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Project Type</label>
                                <select>
                                    <option value="">Select a service...</option>
                                    <option>Video Editing</option>
                                    <option>Motion Design</option>
                                    <option>Apple UI Style Edit</option>
                                    <option>SaaS Animation</option>
                                    <option>Documentary Edit</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Budget Range</label>
                                <select>
                                    <option value="">Select budget...</option>
                                    <option>Under ₹10,000</option>
                                    <option>₹10,000 – ₹30,000</option>
                                    <option>₹30,000 – ₹70,000</option>
                                    <option>₹70,000+</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Tell Me About Your Project</label>
                                <textarea placeholder="Describe your vision, timeline, and goals..."></textarea>
                            </div>
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSending}
                            >
                                {isSending ? 'Sending...' : isSent ? 'Message Sent! ✓' : 'Send Message ✦'}
                            </button>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};