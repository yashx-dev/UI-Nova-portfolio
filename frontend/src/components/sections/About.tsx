import { ScrollReveal } from '../ui/ScrollReveal';
import { GradientText } from '../ui/GradientText';
import { personalInfo, aboutTags } from '../../data/data';

export const About = () => {
    return (
        <div className="section-wrap" id="about">
            <div className="about-grid">
                <ScrollReveal>
                    <div className="section-eyebrow " style={{ marginBottom: '35px' }}>About Me</div>
                    <h2 className="section-title" style={{ marginBottom: '30px' }}>
                        Crafting Motion with <GradientText>Purpose</GradientText>
                    </h2>
                    <p className="about-desc">{personalInfo.description.split('\n\n')[0]}</p>
                    <p className="about-desc" style={{ marginBottom: '28px' }}>
                        Every frame is intentional. Every cut serves the story. Whether it's a high-energy
                        SaaS promo or a slow-burn emotional piece — I bring the same obsessive attention to craft.
                    </p>
                    <div className="about-tags">
                        {aboutTags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay="delay-2">
                    <div className="about-card">
                        <div className="about-avatar">{personalInfo.avatarInitials}</div>
                        <div className="about-name">{personalInfo.name}</div>
                        <div className="about-role">{personalInfo.role}</div>
                        <div className="about-detail">
                            <div className="detail-icon">📍</div>
                            <span>{personalInfo.location}</span>
                        </div>
                        <div className="about-detail">
                            <div className="detail-icon">⚡</div>
                            <span>Quick Turnaround & Revisions</span>
                        </div>
                        <div className="about-detail">
                            <div className="detail-icon">🎬</div>
                            <span>Apple, SaaS, Documentary Style</span>
                        </div>
                        <div className="about-detail">
                            <div className="detail-icon">🤝</div>
                            <span>Open to Long-Term Collaborations</span>
                        </div>
                        <div className="about-glow"></div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};