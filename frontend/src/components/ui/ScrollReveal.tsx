import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: 'delay-1' | 'delay-2' | 'delay-3' | 'delay-4';
    className?: string;
}

export const ScrollReveal = ({
    children,
    delay,
    className = ''
}: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`reveal ${delay || ''} ${className}`}>
            {children}
        </div>
    );
};