import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (cursorRef.current) {
                cursorRef.current.style.left = `${mousePos.current.x}px`;
                cursorRef.current.style.top = `${mousePos.current.y}px`;
            }
        };

        let animationFrameId: number;
        const animateRing = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
            if (cursorRingRef.current) {
                cursorRingRef.current.style.left = `${ringPos.current.x}px`;
                cursorRingRef.current.style.top = `${ringPos.current.y}px`;
            }
            animationFrameId = requestAnimationFrame(animateRing);
        };

        window.addEventListener('mousemove', updateMouse);
        animateRing();

        return () => {
            window.removeEventListener('mousemove', updateMouse);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor" />
            <div ref={cursorRingRef} className="cursor-ring" />
        </>
    );
};