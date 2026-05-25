import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionHeader } from '../ui/SectionHeader';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonial';

export const Testimonials = () => {
  return (
    <div className="section-wrap" id="testimonials" style={{ textAlign: 'center' }}>
      <SectionHeader 
        eyebrow="Kind Words" 
        title="Client Reviews" 
        noLine 
        centered 
        delay="delay-1"
      />
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.id} delay={`delay-${index + 1}` as 'delay-1' | 'delay-2' | 'delay-3'}>
            <TestimonialCard testimonial={testimonial} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};