import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const ringX = useRef(0);
    const ringY = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;

            if (cursorRef.current) {
                cursorRef.current.style.left = mouseX.current + 'px';
                cursorRef.current.style.top = mouseY.current + 'px';
            }
        };

        const animateRing = () => {
            ringX.current += (mouseX.current - ringX.current) * 0.12;
            ringY.current += (mouseY.current - ringY.current) * 0.12;

            if (cursorRingRef.current) {
                cursorRingRef.current.style.left = ringX.current + 'px';
                cursorRingRef.current.style.top = ringY.current + 'px';
            }

            requestAnimationFrame(animateRing);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animateRing();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-ring" ref={cursorRingRef} />
        </>
    );
};