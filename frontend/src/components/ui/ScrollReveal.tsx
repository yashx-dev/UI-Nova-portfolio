import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: 'delay-1' | 'delay-2' | 'delay-3' | 'delay-4' | 'delay-5';
    className?: string;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
    variant?: 'fade-up' | 'fade-scale' | 'slide-left' | 'slide-right';
}

export const ScrollReveal = ({
    children,
    delay,
    className = '',
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    once = true,
    variant = 'fade-up'
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) return;

        // Determine which class to use based on variant
        let revealClass = 'reveal';
        if (variant === 'fade-scale') revealClass = 'reveal-scale';
        if (variant === 'slide-left') revealClass = 'reveal-left';
        if (variant === 'slide-right') revealClass = 'reveal-right';

        // Add the reveal class
        currentRef.classList.add(revealClass);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin, once, variant]);

    return (
        <div ref={ref} className={`${delay || ''} ${className}`}>
            {children}
        </div>
    );
};