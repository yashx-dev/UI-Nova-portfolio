import type { Testimonial } from '../../data/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div className="stars">
        {'★'.repeat(testimonial.rating)}
      </div>
      <div className="quote-mark">"</div>
      <p className="testimonial-text">{testimonial.content}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{testimonial.avatarInitials}</div>
        <div>
          <div className="author-name">{testimonial.name}</div>
          <div className="author-role">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};