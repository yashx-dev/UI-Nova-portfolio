import { useEffect, useRef } from 'react';

interface OrbAnimationProps {
    scrollY: number;
}

export const OrbAnimation = ({ scrollY }: OrbAnimationProps) => {
    const orb1Ref = useRef<HTMLDivElement>(null);
    const orb2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (orb1Ref.current) {
            orb1Ref.current.style.transform = `translateX(-50%) translateY(${scrollY * 0.2}px)`;
        }
        if (orb2Ref.current) {
            orb2Ref.current.style.transform = `translateY(${scrollY * -0.1}px)`;
        }
    }, [scrollY]);

    return (
        <>
            <div ref={orb1Ref} className="hero-orb orb1" />
            <div ref={orb2Ref} className="hero-orb orb2" />
            <div className="hero-orb orb3" />
        </>
    );
};