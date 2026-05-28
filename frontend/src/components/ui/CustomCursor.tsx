import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const isVisible = useRef(true);

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
            }
        };

        let animationFrameId: number;
        const animateRing = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;

            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
            }

            animationFrameId = requestAnimationFrame(animateRing);
        };

        const handleMouseDown = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) scale(0.8)`;
            }
            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(1.2)`;
                cursorRingRef.current.style.opacity = '0.8';
            }
        };

        const handleMouseUp = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) scale(1)`;
            }
            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) scale(1)`;
                cursorRingRef.current.style.opacity = '1';
            }
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.matches(
                'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (cursorRef.current && cursorRingRef.current && isInteractive) {
                cursorRef.current.classList.add('cursor--hover');
                cursorRingRef.current.classList.add('cursor-ring--hover');
            }
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.matches(
                'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (cursorRef.current && cursorRingRef.current && isInteractive) {
                cursorRef.current.classList.remove('cursor--hover');
                cursorRingRef.current.classList.remove('cursor-ring--hover');
            }
        };

        const handleMouseLeaveWindow = () => {
            isVisible.current = false;
            if (cursorRef.current) cursorRef.current.style.opacity = '0';
            if (cursorRingRef.current) cursorRingRef.current.style.opacity = '0';
        };

        const handleMouseEnterWindow = () => {
            isVisible.current = true;
            if (cursorRef.current) cursorRef.current.style.opacity = '1';
            if (cursorRingRef.current) cursorRingRef.current.style.opacity = '1';
        };

        // Use capture phase for all events
        window.addEventListener('mousemove', updateMouse, { passive: true, capture: true });
        document.addEventListener('mousedown', handleMouseDown, { capture: true });
        document.addEventListener('mouseup', handleMouseUp, { capture: true });
        document.addEventListener('mouseover', handleMouseEnter, { passive: true, capture: true });
        document.addEventListener('mouseout', handleMouseLeave, { passive: true, capture: true });
        document.addEventListener('mouseleave', handleMouseLeaveWindow);
        document.addEventListener('mouseenter', handleMouseEnterWindow);

        // Hide default cursor
        document.body.classList.add('custom-cursor-active');

        animateRing();

        return () => {
            window.removeEventListener('mousemove', updateMouse, { capture: true });
            document.removeEventListener('mousedown', handleMouseDown, { capture: true });
            document.removeEventListener('mouseup', handleMouseUp, { capture: true });
            document.removeEventListener('mouseover', handleMouseEnter, { capture: true });
            document.removeEventListener('mouseout', handleMouseLeave, { capture: true });
            document.removeEventListener('mouseleave', handleMouseLeaveWindow);
            document.removeEventListener('mouseenter', handleMouseEnterWindow);
            cancelAnimationFrame(animationFrameId);
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor" aria-hidden="true" />
            <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
};