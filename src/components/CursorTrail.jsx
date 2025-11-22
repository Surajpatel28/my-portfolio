import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
    const [trail, setTrail] = useState([]);
    const [isEnabled, setIsEnabled] = useState(true);
    const maxTrailLength = 15;

    useEffect(() => {
        if (!isEnabled) {
            document.body.classList.remove('retro-cursor');
            return;
        }

        document.body.classList.add('retro-cursor');
        let rafId;
        let lastTime = 0;
        const throttleDelay = 16; // ~60fps

        const handleMouseMove = (e) => {
            const currentTime = Date.now();

            if (currentTime - lastTime < throttleDelay) return;
            lastTime = currentTime;

            const newDot = {
                x: e.clientX,
                y: e.clientY,
                id: Date.now() + Math.random(),
            };

            setTrail((prevTrail) => {
                const updatedTrail = [newDot, ...prevTrail];
                return updatedTrail.slice(0, maxTrailLength);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.classList.remove('retro-cursor');
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isEnabled]);

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsEnabled(!isEnabled)}
                className="fixed bottom-4 right-4 z-50 px-3 py-2 bg-primary/20 hover:bg-primary/40 border border-primary text-primary text-xs font-mono transition-colors"
                style={{ cursor: 'pointer' }}
                title={isEnabled ? 'Disable Cursor Effect' : 'Enable Cursor Effect'}
            >
                {isEnabled ? '[X] CURSOR' : '[ ] CURSOR'}
            </button>

            {/* Cursor Trail */}
            {isEnabled && trail.map((dot, index) => {
                const progress = index / maxTrailLength;
                const size = 16 - (progress * 12);
                const opacity = Math.max(0, 1 - progress);

                return (
                    <div
                        key={dot.id}
                        className="cursor-trail"
                        style={{
                            left: `${dot.x - size / 2}px`,
                            top: `${dot.y - size / 2}px`,
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity: opacity,
                            background: `radial-gradient(circle, rgba(163, 230, 53, ${opacity}) 0%, rgba(163, 230, 53, ${opacity * 0.3}) 70%, transparent 100%)`,
                            filter: `blur(${progress * 2}px)`,
                            transform: `scale(${1 - progress * 0.3})`,
                            transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    />
                );
            })}
        </>
    );
};

export default CursorTrail;
